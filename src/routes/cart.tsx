import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart";
import { usd } from "@/lib/format";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your cart — ShopSphere" }] }),
  component: CartPage,
});

function CartPage() {
  const cart = useCart();
  const subtotal = cart.subtotal();
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.items.length === 0 && cart.saved.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-muted-foreground" />
        <h1 className="text-2xl font-bold mt-4">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2">Browse our catalog to find something you love.</p>
        <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="btn-primary inline-block mt-6">Start shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-6 grid lg:grid-cols-[1fr_360px] gap-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Shopping cart ({cart.items.length})</h1>
        <div className="card-tile divide-y divide-border">
          {cart.items.map((l) => (
            <div key={l.id} className="p-4 flex gap-4">
              <Link to="/products/$id" params={{ id: l.id }} className="w-24 h-24 rounded bg-secondary overflow-hidden shrink-0">
                <img src={l.image} alt={l.title} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to="/products/$id" params={{ id: l.id }} className="font-semibold hover:underline line-clamp-2">{l.title}</Link>
                <div className="text-success text-sm mt-1">In stock</div>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                  <label className="flex items-center gap-1">
                    Qty:
                    <select value={l.qty} onChange={(e) => cart.setQty(l.id, Number(e.target.value))} className="border border-input rounded px-2 py-1">
                      {Array.from({ length: Math.min(l.stock || 10, 10) }, (_, i) => i + 1).map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </label>
                  <button onClick={() => cart.saveForLater(l.id)} className="link-blue">Save for later</button>
                  <button onClick={() => cart.remove(l.id)} className="link-blue flex items-center gap-1"><Trash2 size={14} /> Remove</button>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">{usd(l.price * l.qty)}</div>
                {l.qty > 1 && <div className="text-xs text-muted-foreground">{usd(l.price)} each</div>}
              </div>
            </div>
          ))}
        </div>

        {cart.saved.length > 0 && (
          <>
            <h2 className="text-lg font-bold">Saved for later ({cart.saved.length})</h2>
            <div className="card-tile divide-y divide-border">
              {cart.saved.map((l) => (
                <div key={l.id} className="p-4 flex gap-4">
                  <div className="w-20 h-20 rounded bg-secondary overflow-hidden shrink-0"><img src={l.image} alt="" className="w-full h-full object-cover" /></div>
                  <div className="flex-1">
                    <div className="font-semibold line-clamp-2">{l.title}</div>
                    <div className="font-bold mt-1">{usd(l.price)}</div>
                    <button onClick={() => cart.moveToCart(l.id)} className="link-blue text-sm mt-1">Move to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <aside className="card-tile p-5 h-fit lg:sticky lg:top-32 space-y-3 text-sm">
        <h2 className="text-lg font-bold">Order summary</h2>
        <Row label={`Subtotal (${cart.count()} items)`} value={usd(subtotal)} />
        <Row label="Shipping" value={shipping === 0 ? "FREE" : usd(shipping)} />
        <Row label="Estimated tax" value={usd(tax)} />
        <hr />
        <Row label="Order total" value={usd(total)} bold />
        <Link to="/checkout" className="btn-yellow w-full inline-block text-center mt-2">Proceed to checkout</Link>
        {subtotal > 0 && subtotal < 35 && <div className="text-xs text-muted-foreground">Add {usd(35 - subtotal)} more for free shipping</div>}
      </aside>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return <div className={`flex justify-between ${bold ? "font-bold text-base" : ""}`}><span>{label}</span><span>{value}</span></div>;
}
