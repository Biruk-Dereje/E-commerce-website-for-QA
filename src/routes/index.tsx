import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "ShopSphere — Save money. Live better." }] }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 10);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 10);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 10);
  const deals = products.filter((p) => p.compareAt).slice(0, 10);

  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-4 space-y-8">
      {/* Hero */}
      <section className="rounded-2xl overflow-hidden bg-gradient-to-r from-brand to-blue-700 text-brand-foreground relative">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12 space-y-4">
            <span className="inline-block bg-accent-yellow text-foreground font-bold text-xs px-3 py-1 rounded-full">SUMMER MEGA SALE</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">Up to 50% off everything you love</h1>
            <p className="text-white/90 text-base md:text-lg">Free shipping on orders over $35. Easy returns within 30 days.</p>
            <div className="flex gap-3">
              <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="btn-yellow inline-block">Shop deals</Link>
              <Link to="/products" search={{ q: "", cat: "electronics", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="btn-outline inline-block">Electronics</Link>
            </div>
          </div>
          <div className="hidden md:block h-[320px] relative">
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Truck, t: "Free shipping", d: "On orders over $35" },
          { icon: RefreshCw, t: "Easy returns", d: "30-day window" },
          { icon: Shield, t: "Secure checkout", d: "256-bit SSL" },
          { icon: Headphones, t: "24/7 support", d: "Real humans" },
        ].map(({ icon: I, t, d }) => (
          <div key={t} className="card-tile p-4 flex items-center gap-3">
            <I className="text-brand shrink-0" size={28} />
            <div className="min-w-0"><div className="font-bold text-sm">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Shop by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => (
            <Link key={c.slug} to="/products" search={{ q: "", cat: c.slug, min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="card-tile p-3 text-center hover:bg-secondary group">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary mb-2">
                <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="font-semibold text-xs sm:text-sm">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <ProductRow title="🔥 Today's deals" items={deals} />
      <ProductRow title="⭐ Best sellers" items={bestSellers} />
      <ProductRow title="✨ New arrivals" items={newArrivals} />
      <ProductRow title="Featured for you" items={featured} />

      {/* Promo banner */}
      <section className="rounded-2xl overflow-hidden bg-accent-yellow text-foreground p-6 md:p-10 grid md:grid-cols-2 items-center gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-black">Become a ShopSphere+ member</h3>
          <p className="mt-2 text-foreground/80">Free 2-day delivery, exclusive deals, and member-only events.</p>
        </div>
        <div className="md:text-right">
          <Link to="/auth" className="btn-primary inline-block">Start free trial</Link>
        </div>
      </section>
    </div>
  );
}

function ProductRow({ title, items }: { title: string; items: typeof products }) {
  if (items.length === 0) return null;
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="link-blue text-sm font-semibold">See all →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {items.slice(0, 5).map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
