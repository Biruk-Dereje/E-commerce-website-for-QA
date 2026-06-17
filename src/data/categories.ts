export interface Category {
  slug: string;
  name: string;
  emoji: string;
  image: string;
}

export const categories: Category[] = [
  { slug: "electronics", name: "Electronics", emoji: "📱", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" },
  { slug: "clothing", name: "Clothing", emoji: "👕", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
  { slug: "home-kitchen", name: "Home & Kitchen", emoji: "🍳", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  { slug: "books", name: "Books", emoji: "📚", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80" },
  { slug: "beauty", name: "Beauty", emoji: "💄", image: "https://images.unsplash.com/photo-1522335789203-aaa4b0a36ef0?w=400&q=80" },
  { slug: "sports", name: "Sports & Outdoors", emoji: "⚽", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80" },
  { slug: "toys", name: "Toys & Games", emoji: "🧸", image: "https://images.unsplash.com/photo-1558877385-8c1b8d8ff7e0?w=400&q=80" },
  { slug: "grocery", name: "Grocery", emoji: "🛒", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
];

export const brands = [
  "ShopSphere", "Acme", "Nimbus", "Lumio", "Northwind", "Halcyon",
  "Vertex", "Aurora", "Pulse", "Quantum", "Zephyr", "Atlas",
  "Orion", "Sable", "Crestline", "Beacon",
];
