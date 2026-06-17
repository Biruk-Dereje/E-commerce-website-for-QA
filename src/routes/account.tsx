import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Package, MapPin, LogOut, Heart, User } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My account — ShopSphere" }] }),
  component: AccountPage,
});

function AccountPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
    if (user) {
      supabase.from("profiles").select("full_name, phone").eq("id", user.id).maybeSingle().then(({ data }) => {
        setName(data?.full_name ?? "");
        setPhone(data?.phone ?? "");
      });
    }
  }, [user, loading, navigate]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").update({ full_name: name, phone, updated_at: new Date().toISOString() }).eq("id", user.id);
    setSaving(false);
    if (error) toast.error(error.message); else toast.success("Profile updated");
  }

  async function logout() { await supabase.auth.signOut(); navigate({ to: "/" }); }

  if (loading || !user) return <div className="p-10 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:px-4 py-6 grid md:grid-cols-[240px_1fr] gap-6">
      <aside className="card-tile p-3 h-fit space-y-1 text-sm">
        <div className="px-3 py-2 font-bold border-b border-border mb-2">Hello, {name || user.email}</div>
        <NavBtn icon={User} label="Profile" />
        <Link to="/orders" className="flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-md"><Package size={16} /> My orders</Link>
        <Link to="/wishlist" className="flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-md"><Heart size={16} /> Wishlist</Link>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-md cursor-not-allowed text-muted-foreground"><MapPin size={16} /> Addresses</div>
        <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-md text-destructive"><LogOut size={16} /> Sign out</button>
      </aside>
      <section className="card-tile p-6">
        <h1 className="text-2xl font-bold mb-4">My profile</h1>
        <form onSubmit={save} className="space-y-4 max-w-md">
          <label className="block">
            <span className="text-xs font-semibold">Email</span>
            <input value={user.email ?? ""} disabled className="mt-1 w-full border border-input rounded-md px-3 py-2 bg-secondary" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold">Full name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border border-input rounded-md px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold">Phone</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full border border-input rounded-md px-3 py-2" />
          </label>
          <button disabled={saving} className="btn-primary">{saving ? "Saving..." : "Save changes"}</button>
        </form>
      </section>
    </div>
  );
}

function NavBtn({ icon: I, label }: { icon: typeof User; label: string }) {
  return <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-md font-semibold"><I size={16} /> {label}</div>;
}
