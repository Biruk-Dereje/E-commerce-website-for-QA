import { Link } from "@tanstack/react-router";
import { Star, Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { usd } from "@/lib/format";
import { toast } from "sonner";

export function ProductCard({ p }: { p: Product }) {
  const add = useCart((s) => s.add);
  const wish = useWishlist();
  const fav = wish.has(p.id);
  return (
    <div className="card-tile p-3 flex flex-col group relative">
      <button
        onClick={() => wish.toggle(p.id)}
        aria-label={fav ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur p-1.5 rounded-full border border-border hover:scale-110 transition"
      >
        <Heart size={16} className={fav ? "fill-red-500 stroke-red-500" : "stroke-foreground"} />
      </button>
      <Link to="/products/$id" params={{ id: p.id }} className="block">
        <div className="aspect-square bg-secondary rounded-md overflow-hidden mb-3">
          <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="text-xs text-muted-foreground">{p.brand}</div>
        <h3 className="text-sm font-semibold line-clamp-2 min-h-[2.5rem]">{p.title}</h3>
        <div className="flex items-center gap-1 mt-1 text-xs">
          <Star size={12} className="fill-rating stroke-rating" />
          <span className="font-semibold">{p.rating}</span>
          <span className="text-muted-foreground">({p.reviewCount.toLocaleString()})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-price">{usd(p.price)}</span>
          {p.compareAt && <span className="text-xs text-muted-foreground line-through">{usd(p.compareAt)}</span>}
        </div>
        {p.stock < 10 && p.stock > 0 && <div className="text-xs text-destructive mt-1">Only {p.stock} left</div>}
        {p.stock === 0 && <div className="text-xs text-destructive mt-1">Out of stock</div>}
      </Link>
      <button
        disabled={p.stock === 0}
        onClick={() => { add(p); toast.success(`${p.title} added to cart`); }}
        className="btn-yellow mt-3 w-full text-sm"
      >
        Add to cart
      </button>
    </div>
  );
}
