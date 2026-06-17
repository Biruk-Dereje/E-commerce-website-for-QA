import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Heart, Truck, Shield, RefreshCw, Check } from "lucide-react";
import { productById, products } from "@/data/products";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { ProductCard } from "@/components/ProductCard";
import { usd } from "@/lib/format";
import { toast } from "sonner";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const p = productById(params.id);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.title} — ShopSphere` },
      { name: "description", content: loaderData?.product.description },
      { property: "og:title", content: loaderData?.product.title },
      { property: "og:image", content: loaderData?.product.image },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => <div className="p-10 text-center">Product not found.</div>,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const add = useCart((s) => s.add);
  const wish = useWishlist();
  const fav = wish.has(p.id);
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 5);

  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-4">
      <div className="text-xs text-muted-foreground mb-3">
        <Link to="/" className="link-blue">Home</Link> / <Link to="/products" search={{ q: "", cat: p.category, min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="link-blue">{p.category}</Link> / {p.title}
      </div>
      <div className="grid lg:grid-cols-[1fr_1fr_320px] gap-6">
        <div className="card-tile p-4">
          <div
            className="aspect-square rounded-lg overflow-hidden bg-secondary cursor-zoom-in"
            onClick={() => setZoom(!zoom)}
            onMouseLeave={() => setZoom(false)}
          >
            <img src={p.image} alt={p.title} className={`w-full h-full object-cover transition-transform duration-300 ${zoom ? "scale-150" : ""}`} />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {[p.image, p.image, p.image, p.image].map((src, i) => (
              <div key={i} className="aspect-square rounded border border-border overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm link-blue">{p.brand}</div>
          <h1 className="text-2xl md:text-3xl font-bold">{p.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className={i <= Math.round(p.rating) ? "fill-rating stroke-rating" : "stroke-border"} />
              ))}
            </div>
            <span className="font-semibold">{p.rating}</span>
            <a href="#reviews" className="link-blue">({p.reviewCount.toLocaleString()} reviews)</a>
          </div>
          <hr />
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-price">{usd(p.price)}</span>
              {p.compareAt && <span className="text-base text-muted-foreground line-through">{usd(p.compareAt)}</span>}
              {p.compareAt && <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded">Save {Math.round((1 - p.price / p.compareAt) * 100)}%</span>}
            </div>
            <div className="text-xs text-muted-foreground">Price includes applicable taxes</div>
          </div>
          <hr />
          <div>
            <h3 className="font-bold mb-1">About this item</h3>
            <p className="text-sm leading-relaxed">{p.description}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Specifications</h3>
            <table className="text-sm w-full">
              <tbody>
                {Object.entries(p.specs).map(([k, v]) => (
                  <tr key={k} className="border-b border-border last:border-0">
                    <td className="py-1.5 pr-3 text-muted-foreground w-1/3">{k}</td>
                    <td className="py-1.5 font-medium">{String(v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="card-tile p-4 space-y-3 h-fit lg:sticky lg:top-32">
          <div className="text-2xl font-bold text-price">{usd(p.price)}</div>
          {p.stock > 0 ? (
            <div className="text-success font-bold flex items-center gap-1"><Check size={16} /> In stock</div>
          ) : (
            <div className="text-destructive font-bold">Out of stock</div>
          )}
          <div className="text-sm text-muted-foreground flex items-start gap-2"><Truck size={16} className="mt-0.5" /> Free delivery by <strong className="text-foreground ml-1">{new Date(Date.now() + 3 * 86400000).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</strong></div>
          <label className="flex items-center gap-2 text-sm">
            Qty:
            <select value={qty} onChange={(e) => setQty(Number(e.target.value))} className="border border-input rounded px-2 py-1">
              {Array.from({ length: Math.min(p.stock, 10) }, (_, i) => i + 1).map((n) => <option key={n}>{n}</option>)}
            </select>
          </label>
          <button disabled={p.stock === 0} onClick={() => { add(p, qty); toast.success("Added to cart"); }} className="btn-yellow w-full">Add to cart</button>
          <button disabled={p.stock === 0} onClick={() => { add(p, qty); window.location.href = "/checkout"; }} className="btn-primary w-full">Buy now</button>
          <button onClick={() => wish.toggle(p.id)} className="btn-outline w-full flex items-center justify-center gap-2">
            <Heart size={16} className={fav ? "fill-red-500 stroke-red-500" : ""} /> {fav ? "In wishlist" : "Add to wishlist"}
          </button>
          <hr />
          <div className="text-xs text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2"><Shield size={14} /> Secure transaction</div>
            <div className="flex items-center gap-2"><RefreshCw size={14} /> 30-day returns</div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Customers also viewed</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}
