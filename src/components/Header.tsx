import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ShoppingCart, Search, Heart, User, MapPin, Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function Header() {
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const cartCount = useCart((s) => s.items.reduce((n, l) => n + l.qty, 0));
  const wishCount = useWishlist((s) => s.ids.length);
  const { user } = useAuth();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [showSug, setShowSug] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => { setQ(""); setOpen(false); setShowSug(false); }, [path]);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowSug(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const suggestions = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products
      .filter((p) => p.title.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term))
      .slice(0, 7);
  }, [q]);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate({ to: "/products", search: { q, cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never });
    setShowSug(false);
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <header className="sticky top-0 z-40 bg-brand text-brand-foreground shadow-sm">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-2.5 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className="bg-accent-yellow text-foreground font-black text-xl px-2 py-0.5 rounded-md">S</span>
          <span className="text-lg font-bold hidden sm:inline">ShopSphere</span>
        </Link>
        <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="hidden lg:flex items-center gap-1 text-xs hover:bg-white/10 px-2 py-1.5 rounded-full">
          <MapPin size={16} />
          <span><span className="opacity-80">Deliver to</span> <span className="font-bold">90210</span></span>
        </Link>
        <form onSubmit={onSearch} ref={ref} className="flex-1 relative">
          <div className="flex h-10 rounded-full overflow-hidden bg-white border border-accent-yellow/60">
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setShowSug(true); }}
              onFocus={() => setShowSug(true)}
              className="flex-1 px-4 text-foreground outline-none text-sm"
              placeholder="Search everything at ShopSphere..."
              aria-label="Search"
            />
            <button className="bg-accent-yellow text-foreground px-4 hover:brightness-95" aria-label="Search">
              <Search size={20} />
            </button>
          </div>
          {showSug && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 top-11 bg-white text-foreground shadow-xl rounded-lg overflow-hidden border border-border z-50">
              {suggestions.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products/$id"
                    params={{ id: p.id }}
                    onClick={() => setShowSug(false)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-secondary"
                  >
                    <img src={p.image} alt="" className="w-10 h-10 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{p.title}</div>
                      <div className="text-xs text-muted-foreground">{p.brand}</div>
                    </div>
                    <Search size={14} className="text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>
        <Link to="/wishlist" className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-2 py-1.5 rounded-full text-sm">
          <Heart size={20} />
          <span className="hidden md:inline">Wishlist</span>
          {wishCount > 0 && <span className="bg-accent-yellow text-foreground text-xs font-bold px-1.5 rounded-full">{wishCount}</span>}
        </Link>
        {user ? (
          <Link to="/account" className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-2 py-1.5 rounded-full text-sm">
            <User size={20} />
            <span className="hidden md:inline">Account</span>
          </Link>
        ) : (
          <Link to="/auth" className="hidden sm:flex items-center gap-1 hover:bg-white/10 px-2 py-1.5 rounded-full text-sm">
            <User size={20} />
            <span className="hidden md:inline">Sign in</span>
          </Link>
        )}
        <Link to="/cart" className="flex items-center gap-1 hover:bg-white/10 px-2 py-1.5 rounded-full text-sm relative">
          <ShoppingCart size={22} />
          <span className="hidden md:inline">Cart</span>
          {cartCount > 0 && <span className="bg-accent-yellow text-foreground text-xs font-bold px-1.5 rounded-full">{cartCount}</span>}
        </Link>
        <button className="sm:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav className="bg-brand/95 border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-4 flex items-center gap-1 overflow-x-auto text-sm py-1.5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/products"
              search={{ q: "", cat: c.slug, min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never}
              className="px-3 py-1 hover:bg-white/10 rounded-full whitespace-nowrap"
            >
              {c.name}
            </Link>
          ))}
          <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "newest", page: 1, rating: 0, brand: "" } as never} className="px-3 py-1 hover:bg-white/10 rounded-full whitespace-nowrap font-bold text-accent-yellow">
            New Arrivals
          </Link>
        </div>
      </nav>
      {open && (
        <div className="sm:hidden bg-brand/95 border-t border-white/10 px-3 py-2 flex flex-col gap-2 text-sm">
          {user ? (
            <>
              <Link to="/account">Account</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/wishlist">Wishlist ({wishCount})</Link>
              <button className="text-left" onClick={logout}>Sign out</button>
            </>
          ) : (
            <Link to="/auth">Sign in</Link>
          )}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-brand text-brand-foreground">
      <div className="max-w-[1500px] mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold mb-3">Shop</div>
          <ul className="space-y-1.5 opacity-90">
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}><Link to="/products" search={{ q: "", cat: c.slug, min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Help</div>
          <ul className="space-y-1.5 opacity-90"><li>Help Center</li><li>Returns</li><li>Shipping</li><li>Track order</li></ul>
        </div>
        <div>
          <div className="font-bold mb-3">Account</div>
          <ul className="space-y-1.5 opacity-90">
            <li><Link to="/auth">Sign in</Link></li>
            <li><Link to="/account">My account</Link></li>
            <li><Link to="/orders">My orders</Link></li>
            <li><Link to="/wishlist">My wishlist</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">About</div>
          <ul className="space-y-1.5 opacity-90"><li>About ShopSphere</li><li>Careers</li><li>Press</li><li>Sustainability</li></ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center opacity-80 text-xs">
        © {new Date().getFullYear()} ShopSphere — A demo commercial e-commerce platform.
      </div>
    </footer>
  );
}
