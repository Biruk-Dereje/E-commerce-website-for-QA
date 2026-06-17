import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { usd, dateFmt } from "@/lib/format";
import { CheckCircle2, Truck, Package, Home } from "lucide-react";

export const Route = createFileRoute("/orders/$id")({
  head: () => ({ meta: [{ title: "Order details — ShopSphere" }] }),
  component: OrderDetail,
});

type Order = {
  id: string; order_number: string; status: string;
  subtotal: number; shipping: number; tax: number; discount: number; total: number;
  payment_method: string; shipping_address: Record<string, string>;
  email: string; placed_at: string;
};
type Item = { id: string; product_id: string; title: string; image: string | null; unit_price: number; qty: number };

function OrderDetail() {
  const { id } = Route.useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
    if (user) {
      Promise.all([
        supabase.from("orders").select("*").eq("id", id).maybeSingle(),
        supabase.from("order_items").select("*").eq("order_id", id),
      ]).then(([o, it]) => {
        setOrder(o.data as Order | null);
        setItems((it.data as Item[]) ?? []);
      });
    }
  }, [user, loading, navigate, id]);

  if (loading || !order) return <div className="p-10 text-center text-muted-foreground">Loading...</div>;

  const steps = ["placed", "processing", "shipped", "delivered"];
  const stepIdx = Math.max(0, steps.indexOf(order.status));

  return (
    <div className="max-w-[1100px] mx-auto px-3 sm:px-4 py-6 space-y-6">
      <div className="card-tile p-6 text-center bg-gradient-to-br from-accent to-background">
        <CheckCircle2 size={48} className="mx-auto text-success" />
        <h1 className="text-2xl font-bold mt-2">Thank you for your order!</h1>
        <p className="text-sm text-muted-foreground">Order <strong>#{order.order_number}</strong> placed {dateFmt(order.placed_at)}</p>
        <p className="text-sm text-muted-foreground">A confirmation email has been sent to {order.email} (simulated).</p>
      </div>

      <div className="card-tile p-6">
        <h2 className="font-bold mb-4">Tracking</h2>
        <div className="flex justify-between gap-2">
          {[
            { label: "Placed", icon: CheckCircle2 },
            { label: "Processing", icon: Package },
            { label: "Shipped", icon: Truck },
            { label: "Delivered", icon: Home },
          ].map((s, i) => (
            <div key={s.label} className="flex-1 text-center">
              <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center ${i <= stepIdx ? "bg-brand text-brand-foreground" : "bg-secondary text-muted-foreground"}`}>
                <s.icon size={20} />
              </div>
              <div className="text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6">
        <div className="card-tile p-6">
          <h2 className="font-bold mb-3">Items ({items.length})</h2>
          <div className="divide-y divide-border">
            {items.map((it) => (
              <div key={it.id} className="py-3 flex gap-3">
                {it.image && <img src={it.image} alt="" className="w-16 h-16 object-cover rounded" />}
                <div className="flex-1">
                  <Link to="/products/$id" params={{ id: it.product_id }} className="font-semibold hover:underline">{it.title}</Link>
                  <div className="text-xs text-muted-foreground">Qty {it.qty} · {usd(it.unit_price)}</div>
                </div>
                <div className="font-bold">{usd(it.unit_price * it.qty)}</div>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-3">
          <div className="card-tile p-5 text-sm space-y-1.5">
            <h3 className="font-bold mb-2">Summary</h3>
            <Row label="Subtotal" value={usd(order.subtotal)} />
            <Row label="Shipping" value={order.shipping === 0 ? "FREE" : usd(order.shipping)} />
            <Row label="Tax" value={usd(order.tax)} />
            {order.discount > 0 && <Row label="Discount" value={"−" + usd(order.discount)} />}
            <hr />
            <Row label="Total" value={usd(order.total)} bold />
            <div className="text-xs text-muted-foreground pt-2">Paid via {order.payment_method}</div>
          </div>
          <div className="card-tile p-5 text-sm">
            <h3 className="font-bold mb-2">Ship to</h3>
            <div>{order.shipping_address.full_name}</div>
            <div>{order.shipping_address.line1}</div>
            {order.shipping_address.line2 && <div>{order.shipping_address.line2}</div>}
            <div>{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.postal_code}</div>
            <div>{order.shipping_address.country}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return <div className={`flex justify-between ${bold ? "font-bold text-base" : ""}`}><span>{label}</span><span>{value}</span></div>;
}
