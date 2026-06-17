import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — ShopSphere" }] }),
  component: ResetPassword,
});

function ResetPassword() {
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: pw });
      if (error) throw error;
      toast.success("Password updated");
      navigate({ to: "/account" });
    } catch (err) {
      toast.error((err as Error).message);
    } finally { setBusy(false); }
  }
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-10">
      <form onSubmit={submit} className="card-tile p-8 w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold">Set a new password</h1>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required minLength={6} placeholder="New password" className="w-full border border-input rounded-md px-3 py-2" />
        <button disabled={busy} className="btn-primary w-full">{busy ? "Saving..." : "Update password"}</button>
      </form>
    </div>
  );
}
