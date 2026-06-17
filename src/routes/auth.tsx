import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  validateSearch: (s: Record<string, unknown>) => ({ next: String(s.next ?? "/") }),
  head: () => ({ meta: [{ title: "Sign in — ShopSphere" }] }),
  component: AuthPage,
});

type Mode = "signin" | "signup" | "forgot";

function AuthPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { next } = Route.useSearch();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => { if (user) navigate({ to: next || "/" }); }, [user, navigate, next]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
      } else if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name }, emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Account created!");
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast.success("Password reset email sent (simulated)");
      }
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (r.error) toast.error(r.error.message);
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="card-tile p-8 w-full max-w-md space-y-5">
        <div className="text-center">
          <span className="bg-accent-yellow text-foreground font-black text-2xl px-3 py-1 rounded-md">S</span>
          <h1 className="text-2xl font-bold mt-3">
            {mode === "signin" && "Sign in to ShopSphere"}
            {mode === "signup" && "Create your account"}
            {mode === "forgot" && "Reset your password"}
          </h1>
        </div>

        {mode !== "forgot" && (
          <>
            <button onClick={google} className="btn-outline w-full flex items-center justify-center gap-2">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="w-4 h-4" />
              Continue with Google
            </button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <hr className="flex-1" /> or <hr className="flex-1" />
            </div>
          </>
        )}

        <form onSubmit={submit} className="space-y-3">
          {mode === "signup" && (
            <label className="block">
              <span className="text-xs font-semibold">Full name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full border border-input rounded-md px-3 py-2" />
            </label>
          )}
          <label className="block">
            <span className="text-xs font-semibold">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full border border-input rounded-md px-3 py-2" />
          </label>
          {mode !== "forgot" && (
            <label className="block">
              <span className="text-xs font-semibold">Password</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="mt-1 w-full border border-input rounded-md px-3 py-2" />
            </label>
          )}
          <button disabled={busy} className="btn-primary w-full">
            {busy ? "Please wait..." : mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}
          </button>
        </form>

        <div className="text-sm text-center space-y-1">
          {mode === "signin" && (
            <>
              <div><button onClick={() => setMode("forgot")} className="link-blue">Forgot password?</button></div>
              <div>New here? <button onClick={() => setMode("signup")} className="link-blue font-semibold">Create an account</button></div>
            </>
          )}
          {mode === "signup" && (
            <div>Already have an account? <button onClick={() => setMode("signin")} className="link-blue font-semibold">Sign in</button></div>
          )}
          {mode === "forgot" && (
            <div><button onClick={() => setMode("signin")} className="link-blue">Back to sign in</button></div>
          )}
        </div>
      </div>
    </div>
  );
}
