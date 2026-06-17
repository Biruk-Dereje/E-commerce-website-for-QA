import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories, brands } from "@/data/categories";

type Search = {
  q: string;
  cat: string;
  brand: string;
  min: number | undefined;
  max: number | undefined;
  sort: string;
  page: number;
  rating: number;
};

export const Route = createFileRoute("/products")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: String(s.q ?? ""),
    cat: String(s.cat ?? ""),
    brand: String(s.brand ?? ""),
    min: s.min !== undefined && s.min !== "" ? Number(s.min) : undefined,
    max: s.max !== undefined && s.max !== "" ? Number(s.max) : undefined,
    sort: String(s.sort ?? "featured"),
    page: Number(s.page ?? 1),
    rating: Number(s.rating ?? 0),
  }),
  head: () => ({ meta: [{ title: "Shop products — ShopSphere" }] }),
  component: ProductsPage,
});

const PAGE_SIZE = 24;

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();

  function update(patch: Partial<Search>) {
    navigate({ to: "/products", search: { ...search, page: 1, ...patch } });
  }

  const filtered = useMemo(() => {
    const term = search.q.trim().toLowerCase();
    let list = products.filter((p) => {
      if (search.cat && p.category !== search.cat) return false;
      if (search.brand && p.brand !== search.brand) return false;
      if (search.min !== undefined && p.price < search.min) return false;
      if (search.max !== undefined && p.price > search.max) return false;
      if (search.rating && p.rating < search.rating) return false;
      if (term && !(p.title.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || p.tags.some((t) => t.includes(term)))) return false;
      return true;
    });
    switch (search.sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "newest": list.sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
      default: list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(search.page, totalPages);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const activeCat = categories.find((c) => c.slug === search.cat);

  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-4 py-4">
      <div className="text-xs text-muted-foreground mb-3">
        Home / {activeCat ? activeCat.name : "All products"}
        {search.q && <> / Search: "<span className="text-foreground">{search.q}</span>"</>}
      </div>
      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        <aside className="space-y-6 text-sm">
          <FilterGroup label="Category">
            <button onClick={() => update({ cat: "" })} className={`block py-1 ${!search.cat ? "font-bold text-brand" : ""}`}>All categories</button>
            {categories.map((c) => (
              <button key={c.slug} onClick={() => update({ cat: c.slug })} className={`block py-1 ${search.cat === c.slug ? "font-bold text-brand" : ""}`}>{c.name}</button>
            ))}
          </FilterGroup>
          <FilterGroup label="Brand">
            <select value={search.brand} onChange={(e) => update({ brand: e.target.value })} className="w-full border border-input rounded-md px-2 py-1.5">
              <option value="">All brands</option>
              {brands.map((b) => <option key={b}>{b}</option>)}
            </select>
          </FilterGroup>
          <FilterGroup label="Price">
            <div className="flex gap-2 items-center">
              <input type="number" placeholder="Min" value={search.min ?? ""} onChange={(e) => update({ min: e.target.value ? Number(e.target.value) : undefined })} className="w-full border border-input rounded-md px-2 py-1.5" />
              <span>–</span>
              <input type="number" placeholder="Max" value={search.max ?? ""} onChange={(e) => update({ max: e.target.value ? Number(e.target.value) : undefined })} className="w-full border border-input rounded-md px-2 py-1.5" />
            </div>
          </FilterGroup>
          <FilterGroup label="Rating">
            {[4, 3, 2, 1].map((r) => (
              <button key={r} onClick={() => update({ rating: search.rating === r ? 0 : r })} className={`block py-1 ${search.rating === r ? "font-bold text-brand" : ""}`}>
                {"★".repeat(r)}{"☆".repeat(5 - r)} & up
              </button>
            ))}
          </FilterGroup>
        </aside>
        <div>
          <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
            <div className="text-sm text-muted-foreground">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>
            <label className="text-sm flex items-center gap-2">
              Sort by
              <select value={search.sort} onChange={(e) => update({ sort: e.target.value })} className="border border-input rounded-md px-2 py-1.5">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer rating</option>
              </select>
            </label>
          </div>
          {pageItems.length === 0 ? (
            <div className="card-tile p-10 text-center">
              <p className="text-muted-foreground">No products match your filters.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {pageItems.map((p) => <ProductCard key={p.id} p={p} />)}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                  <button disabled={page === 1} onClick={() => navigate({ to: "/products", search: { ...search, page: page - 1 } })} className="btn-outline disabled:opacity-40">Previous</button>
                  <span className="text-sm">Page {page} of {totalPages}</span>
                  <button disabled={page === totalPages} onClick={() => navigate({ to: "/products", search: { ...search, page: page + 1 } })} className="btn-outline disabled:opacity-40">Next</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="card-tile p-4">
      <div className="font-bold mb-2">{label}</div>
      <div>{children}</div>
    </div>
  );
}
