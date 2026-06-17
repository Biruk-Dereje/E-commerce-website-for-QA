import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useWishlist } from "@/store/wishlist";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "My wishlist — ShopSphere" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const items = products.filter((p) => ids.includes(p.id));
  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My wishlist</h1>
      {items.length === 0 ? (
        <div className="card-tile p-10 text-center">
          <Heart size={48} className="mx-auto text-muted-foreground" />
          <p className="mt-3 text-muted-foreground">No items saved yet.</p>
          <Link to="/products" search={{ q: "", cat: "", min: undefined, max: undefined, sort: "featured", page: 1, rating: 0, brand: "" } as never} className="btn-primary inline-block mt-4">Browse products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
