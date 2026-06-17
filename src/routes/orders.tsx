import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { usd, dateFmt } from "@/lib/format";
import { Package } from "lucide-react";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [{ title: "My orders — ShopSphere" }] }),
  component: OrdersPage,
});

type Order = { id: string; order_number: string; status: string; total: number; placed_at: string };

function OrdersPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
    if (user) {
      supabase.from("orders").select("id, order_number, status, total, placed_at").order("placed_at", { ascending: false }).then(({ data }) => {
        setOrders((data as Order[]) ?? []);
        setLoaded(true);
      });
    }
  }, [user, loading, navigate]);

  if (loading || !user) return <div className="p-10 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My orders</h1>
      {!loaded ? (
        <div className="text-muted-foreground">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="card-tile p-10 text-center">
          <Package size={48} className="mx-auto text-muted-foreground" />
          <p className="mt-3 text-muted-foreground">You haven't placed any orders yet.</p>
          <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="btn-primary inline-block mt-4">Start shopping</Link>
        </div>
      ) : (
        <div className="card-tile divide-y divide-border">
          {orders.map((o) => (
            <Link key={o.id} to="/orders/$id" params={{ id: o.id }} className="p-4 flex flex-wrap justify-between gap-3 hover:bg-secondary">
              <div>
                <div className="font-bold">Order #{o.order_number}</div>
                <div className="text-xs text-muted-foreground">Placed {dateFmt(o.placed_at)}</div>
              </div>
              <div className="text-sm capitalize"><span className="bg-accent text-brand px-2 py-0.5 rounded-full">{o.status}</span></div>
              <div className="font-bold">{usd(o.total)}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
