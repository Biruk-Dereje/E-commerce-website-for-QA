import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useCart } from "@/store/cart";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { usd } from "@/lib/format";
import { toast } from "sonner";
import { CreditCard, Wallet, Building2, Lock } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — ShopSphere" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const cart = useCart();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [pay, setPay] = useState<"card" | "paypal" | "bank">("card");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal: "",
    cardNumber: "",
    cardName: "",
    exp: "",
    cvc: "",
  });

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", search: { next: "/checkout" } as never });
    if (user?.email) setForm((f) => ({ ...f, email: f.email || user.email! }));
  }, [user, loading, navigate]);

  const subtotal = cart.subtotal();
  const shipping = subtotal > 35 ? 0 : 5.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    if (cart.items.length === 0) { toast.error("Your cart is empty"); return; }
    if (pay === "card" && !/^\d{12,19}$/.test(form.cardNumber.replace(/\s/g, ""))) {
      toast.error("Enter a valid card number"); return;
    }
    setSubmitting(true);
    try {
      const orderNumber = "SS-" + Date.now().toString(36).toUpperCase();
      const shippingAddress = {
        full_name: form.fullName, line1: form.line1, line2: form.line2,
        city: form.city, state: form.state, postal_code: form.postal, country: "US", phone: form.phone,
      };
      const { data: order, error } = await supabase.from("orders").insert({
        user_id: user.id,
        order_number: orderNumber,
        status: "placed",
        subtotal, shipping, tax, discount: 0, total,
        payment_method: pay,
        shipping_address: shippingAddress,
        email: form.email,
      }).select().single();
      if (error) throw error;

      const { error: itemsErr } = await supabase.from("order_items").insert(
        cart.items.map((l) => ({
          order_id: order.id, product_id: l.id, title: l.title,
          image: l.image, unit_price: l.price, qty: l.qty,
        }))
      );
      if (itemsErr) throw itemsErr;

      cart.clear();
      toast.success("Order placed! 🎉");
      navigate({ to: "/orders/$id", params: { id: order.id } });
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order: " + (err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading || !user) return <div className="p-10 text-center text-muted-foreground">Loading...</div>;

  return (
    <form onSubmit={placeOrder} className="max-w-[1500px] mx-auto px-3 sm:px-4 py-6 grid lg:grid-cols-[1fr_400px] gap-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Checkout</h1>

        <section className="card-tile p-5 space-y-3">
          <h2 className="font-bold text-lg">1. Shipping address</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Input label="Full name" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} required />
            <Input label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            <Input className="sm:col-span-2" label="Address line 1" value={form.line1} onChange={(v) => setForm({ ...form, line1: v })} required />
            <Input className="sm:col-span-2" label="Address line 2 (optional)" value={form.line2} onChange={(v) => setForm({ ...form, line2: v })} />
            <Input label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} required />
            <Input label="State" value={form.state} onChange={(v) => setForm({ ...form, state: v })} required />
            <Input label="Postal code" value={form.postal} onChange={(v) => setForm({ ...form, postal: v })} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
        </section>

        <section className="card-tile p-5 space-y-3">
          <h2 className="font-bold text-lg">2. Payment method</h2>
          <div className="grid sm:grid-cols-3 gap-2">
            <PayBtn icon={CreditCard} label="Credit card" active={pay === "card"} onClick={() => setPay("card")} />
            <PayBtn icon={Wallet} label="PayPal" active={pay === "paypal"} onClick={() => setPay("paypal")} />
            <PayBtn icon={Building2} label="Bank transfer" active={pay === "bank"} onClick={() => setPay("bank")} />
          </div>
          {pay === "card" && (
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <Input className="sm:col-span-2" label="Card number" placeholder="4242 4242 4242 4242" value={form.cardNumber} onChange={(v) => setForm({ ...form, cardNumber: v })} required />
              <Input label="Name on card" value={form.cardName} onChange={(v) => setForm({ ...form, cardName: v })} required />
              <div className="grid grid-cols-2 gap-3">
                <Input label="Exp (MM/YY)" placeholder="12/28" value={form.exp} onChange={(v) => setForm({ ...form, exp: v })} required />
                <Input label="CVC" placeholder="123" value={form.cvc} onChange={(v) => setForm({ ...form, cvc: v })} required />
              </div>
            </div>
          )}
          {pay === "paypal" && <p className="text-sm text-muted-foreground">You'll be redirected to PayPal (simulated).</p>}
          {pay === "bank" && <p className="text-sm text-muted-foreground">Bank transfer instructions will be emailed (simulated).</p>}
        </section>
      </div>

      <aside className="card-tile p-5 h-fit lg:sticky lg:top-32 space-y-3 text-sm">
        <h2 className="text-lg font-bold">Order summary</h2>
        <div className="max-h-60 overflow-y-auto divide-y divide-border">
          {cart.items.map((l) => (
            <div key={l.id} className="py-2 flex gap-3">
              <img src={l.image} alt="" className="w-12 h-12 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <div className="text-xs truncate">{l.title}</div>
                <div className="text-xs text-muted-foreground">Qty {l.qty}</div>
              </div>
              <div className="text-xs font-semibold">{usd(l.price * l.qty)}</div>
            </div>
          ))}
        </div>
        <hr />
        <Row label="Subtotal" value={usd(subtotal)} />
        <Row label="Shipping" value={shipping === 0 ? "FREE" : usd(shipping)} />
        <Row label="Tax (8%)" value={usd(tax)} />
        <hr />
        <Row label="Total" value={usd(total)} bold />
        <button disabled={submitting} className="btn-yellow w-full mt-2 flex items-center justify-center gap-1">
          <Lock size={14} /> {submitting ? "Placing order..." : `Place order · ${usd(total)}`}
        </button>
        <p className="text-xs text-muted-foreground text-center">
          By placing your order, you agree to our <Link to="/" className="link-blue">terms</Link>.
        </p>
      </aside>
    </form>
  );
}

function Input({ label, value, onChange, type = "text", required, placeholder, className }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs font-semibold">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder} className="mt-1 w-full border border-input rounded-md px-3 py-2 text-sm" />
    </label>
  );
}

function PayBtn({ icon: I, label, active, onClick }: { icon: typeof CreditCard; label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`border rounded-lg p-3 flex flex-col items-center gap-1 text-sm ${active ? "border-brand bg-accent" : "border-border"}`}>
      <I size={20} className={active ? "text-brand" : ""} />
      {label}
    </button>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return <div className={`flex justify-between ${bold ? "font-bold text-base" : ""}`}><span>{label}</span><span>{value}</span></div>;
}
