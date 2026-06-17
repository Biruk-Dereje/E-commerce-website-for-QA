import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";

export interface CartLine { id: string; title: string; price: number; image: string; qty: number; stock: number }

interface CartState {
  items: CartLine[];
  saved: CartLine[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  saveForLater: (id: string) => void;
  moveToCart: (id: string) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      saved: [],
      add: (p, qty = 1) => {
        const items = [...get().items];
        const i = items.findIndex((x) => x.id === p.id);
        if (i >= 0) items[i] = { ...items[i], qty: Math.min(items[i].qty + qty, p.stock || 99) };
        else items.push({ id: p.id, title: p.title, price: p.price, image: p.image, qty, stock: p.stock });
        set({ items });
      },
      remove: (id) => set({ items: get().items.filter((x) => x.id !== id) }),
      setQty: (id, qty) =>
        set({
          items: get().items
            .map((x) => (x.id === id ? { ...x, qty: Math.max(1, Math.min(qty, x.stock || 99)) } : x))
            .filter((x) => x.qty > 0),
        }),
      saveForLater: (id) => {
        const it = get().items.find((x) => x.id === id);
        if (!it) return;
        set({ items: get().items.filter((x) => x.id !== id), saved: [...get().saved, it] });
      },
      moveToCart: (id) => {
        const it = get().saved.find((x) => x.id === id);
        if (!it) return;
        set({ saved: get().saved.filter((x) => x.id !== id), items: [...get().items, it] });
      },
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((s, l) => s + l.qty, 0),
      subtotal: () => get().items.reduce((s, l) => s + l.qty * l.price, 0),
    }),
    { name: "shopsphere-cart" }
  )
);
