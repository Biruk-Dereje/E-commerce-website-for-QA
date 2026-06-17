export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  compareAt: number | null;
  image: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew: boolean;
  isBestSeller: boolean;
  isFeatured: boolean;
  description: string;
  specs: Record<string, string>;
  tags: string[];
}

export const products = [
  {
    "id": "p001",
    "title": "Wireless Noise-Cancelling Headphones",
    "brand": "Lumio",
    "category": "electronics",
    "price": 149.99,
    "compareAt": 176.46,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4458,
    "stock": 159,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Wireless Noise-Cancelling Headphones by Lumio. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Lumio",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio",
      "wireless",
      "noise-cancelling",
      "headphones"
    ]
  },
  {
    "id": "p002",
    "title": "4K Smart TV 55\"",
    "brand": "Vertex",
    "category": "electronics",
    "price": 449.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 1366,
    "stock": 71,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "4K Smart TV 55\" by Vertex. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Vertex",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex",
      "4k",
      "smart",
      "tv"
    ]
  },
  {
    "id": "p003",
    "title": "Bluetooth Portable Speaker",
    "brand": "Pulse",
    "category": "electronics",
    "price": 79.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 1801,
    "stock": 15,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Bluetooth Portable Speaker by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse",
      "bluetooth",
      "portable",
      "speaker"
    ]
  },
  {
    "id": "p004",
    "title": "Mirrorless Camera Body",
    "brand": "Aurora",
    "category": "electronics",
    "price": 899.99,
    "compareAt": 1124.99,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 834,
    "stock": 176,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Mirrorless Camera Body by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "aurora",
      "mirrorless",
      "camera",
      "body"
    ]
  },
  {
    "id": "p005",
    "title": "Smartwatch Series 8",
    "brand": "Halcyon",
    "category": "electronics",
    "price": 299.99,
    "compareAt": 370.36,
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 4616,
    "stock": 90,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Smartwatch Series 8 by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "halcyon",
      "smartwatch",
      "series",
      "8"
    ]
  },
  {
    "id": "p006",
    "title": "Mechanical Gaming Keyboard",
    "brand": "Quantum",
    "category": "electronics",
    "price": 119.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 1455,
    "stock": 137,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "description": "Mechanical Gaming Keyboard by Quantum. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Quantum",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "quantum",
      "mechanical",
      "gaming",
      "keyboard"
    ]
  },
  {
    "id": "p007",
    "title": "27\" 4K Ultrawide Monitor",
    "brand": "Vertex",
    "category": "electronics",
    "price": 549.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 1241,
    "stock": 51,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "27\" 4K Ultrawide Monitor by Vertex. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Vertex",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex",
      "27\"",
      "4k",
      "ultrawide"
    ]
  },
  {
    "id": "p008",
    "title": "Wireless Charging Pad",
    "brand": "Pulse",
    "category": "electronics",
    "price": 29.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1591290619762-3f76a8b15db5?w=600&q=80",
    "rating": 4,
    "reviewCount": 3286,
    "stock": 132,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Wireless Charging Pad by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse",
      "wireless",
      "charging",
      "pad"
    ]
  },
  {
    "id": "p009",
    "title": "Laptop Pro 14\"",
    "brand": "Lumio",
    "category": "electronics",
    "price": 1299.99,
    "compareAt": 1733.32,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 3498,
    "stock": 152,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Laptop Pro 14\" by Lumio. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio",
      "laptop",
      "pro",
      "14\""
    ]
  },
  {
    "id": "p010",
    "title": "Action Camera 4K",
    "brand": "Orion",
    "category": "electronics",
    "price": 249.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 4464,
    "stock": 116,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Action Camera 4K by Orion. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Orion",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "orion",
      "action",
      "camera",
      "4k"
    ]
  },
  {
    "id": "p011",
    "title": "Drone with 4K Camera",
    "brand": "Zephyr",
    "category": "electronics",
    "price": 599.99,
    "compareAt": 645.15,
    "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 2322,
    "stock": 109,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Drone with 4K Camera by Zephyr. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Zephyr",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "zephyr",
      "drone",
      "with",
      "4k"
    ]
  },
  {
    "id": "p012",
    "title": "E-Reader Premium",
    "brand": "Atlas",
    "category": "electronics",
    "price": 139.99,
    "compareAt": 168.66,
    "image": "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=600&q=80",
    "rating": 4.3,
    "reviewCount": 1388,
    "stock": 86,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "E-Reader Premium by Atlas. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Atlas",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "atlas",
      "e-reader",
      "premium"
    ]
  },
  {
    "id": "p013",
    "title": "Wireless Earbuds Pro",
    "brand": "Pulse",
    "category": "electronics",
    "price": 199.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    "rating": 4.1,
    "reviewCount": 943,
    "stock": 176,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Wireless Earbuds Pro by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse",
      "wireless",
      "earbuds",
      "pro"
    ]
  },
  {
    "id": "p014",
    "title": "Tablet 11\" 256GB",
    "brand": "Lumio",
    "category": "electronics",
    "price": 499.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 2851,
    "stock": 199,
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Tablet 11\" 256GB by Lumio. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio",
      "tablet",
      "11\"",
      "256gb"
    ]
  },
  {
    "id": "p015",
    "title": "Smart Home Hub",
    "brand": "Halcyon",
    "category": "electronics",
    "price": 99.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 282,
    "stock": 115,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Smart Home Hub by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "halcyon",
      "smart",
      "home",
      "hub"
    ]
  },
  {
    "id": "p016",
    "title": "Men's Classic Denim Jacket",
    "brand": "Northwind",
    "category": "clothing",
    "price": 79.99,
    "compareAt": 96.37,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4408,
    "stock": 145,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Men's Classic Denim Jacket by Northwind. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Northwind",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "northwind",
      "men's",
      "classic",
      "denim"
    ]
  },
  {
    "id": "p017",
    "title": "Women's Knit Sweater",
    "brand": "Halcyon",
    "category": "clothing",
    "price": 54.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 1645,
    "stock": 133,
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Women's Knit Sweater by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "halcyon",
      "women's",
      "knit",
      "sweater"
    ]
  },
  {
    "id": "p018",
    "title": "Unisex Hoodie",
    "brand": "Acme",
    "category": "clothing",
    "price": 44.99,
    "compareAt": 66.16,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    "rating": 4.6,
    "reviewCount": 1781,
    "stock": 166,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Unisex Hoodie by Acme. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Acme",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "acme",
      "unisex",
      "hoodie"
    ]
  },
  {
    "id": "p019",
    "title": "Slim Fit Chinos",
    "brand": "Northwind",
    "category": "clothing",
    "price": 49.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 434,
    "stock": 134,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Slim Fit Chinos by Northwind. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Northwind",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "northwind",
      "slim",
      "fit",
      "chinos"
    ]
  },
  {
    "id": "p020",
    "title": "Running Sneakers",
    "brand": "Pulse",
    "category": "clothing",
    "price": 109.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 4654,
    "stock": 40,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Running Sneakers by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "pulse",
      "running",
      "sneakers"
    ]
  },
  {
    "id": "p021",
    "title": "Leather Belt",
    "brand": "Sable",
    "category": "clothing",
    "price": 34.99,
    "compareAt": 36.83,
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 846,
    "stock": 119,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Leather Belt by Sable. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Sable",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "sable",
      "leather",
      "belt"
    ]
  },
  {
    "id": "p022",
    "title": "Wool Beanie Hat",
    "brand": "Crestline",
    "category": "clothing",
    "price": 19.99,
    "compareAt": 22.72,
    "image": "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 1822,
    "stock": 65,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Wool Beanie Hat by Crestline. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Crestline",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "crestline",
      "wool",
      "beanie",
      "hat"
    ]
  },
  {
    "id": "p023",
    "title": "Cotton T-Shirt 3-Pack",
    "brand": "Acme",
    "category": "clothing",
    "price": 29.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    "rating": 4.7,
    "reviewCount": 1781,
    "stock": 57,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Cotton T-Shirt 3-Pack by Acme. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Acme",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "acme",
      "cotton",
      "t-shirt",
      "3-pack"
    ]
  },
  {
    "id": "p024",
    "title": "Women's Yoga Leggings",
    "brand": "Aurora",
    "category": "clothing",
    "price": 39.99,
    "compareAt": 43.47,
    "image": "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    "rating": 4.1,
    "reviewCount": 3919,
    "stock": 2,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Women's Yoga Leggings by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "aurora",
      "women's",
      "yoga",
      "leggings"
    ]
  },
  {
    "id": "p025",
    "title": "Men's Dress Shirt",
    "brand": "Sable",
    "category": "clothing",
    "price": 59.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    "rating": 4.6,
    "reviewCount": 1363,
    "stock": 183,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Men's Dress Shirt by Sable. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Sable",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "sable",
      "men's",
      "dress",
      "shirt"
    ]
  },
  {
    "id": "p026",
    "title": "Denim Skinny Jeans",
    "brand": "Northwind",
    "category": "clothing",
    "price": 64.99,
    "compareAt": 91.54,
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    "rating": 4.4,
    "reviewCount": 4427,
    "stock": 9,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Denim Skinny Jeans by Northwind. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Northwind",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "northwind",
      "denim",
      "skinny",
      "jeans"
    ]
  },
  {
    "id": "p027",
    "title": "Puffer Winter Jacket",
    "brand": "Halcyon",
    "category": "clothing",
    "price": 149.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 3204,
    "stock": 164,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Puffer Winter Jacket by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "clothing",
      "halcyon",
      "puffer",
      "winter",
      "jacket"
    ]
  },
  {
    "id": "p028",
    "title": "Stainless Steel Cookware Set",
    "brand": "Beacon",
    "category": "home-kitchen",
    "price": 199.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 2426,
    "stock": 44,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Stainless Steel Cookware Set by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "beacon",
      "stainless",
      "steel",
      "cookware"
    ]
  },
  {
    "id": "p029",
    "title": "Espresso Machine",
    "brand": "Aurora",
    "category": "home-kitchen",
    "price": 349.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4186,
    "stock": 141,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Espresso Machine by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "aurora",
      "espresso",
      "machine"
    ]
  },
  {
    "id": "p030",
    "title": "Air Fryer 5.5L",
    "brand": "Vertex",
    "category": "home-kitchen",
    "price": 119.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1648505082298-e8f7064f1c41?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 345,
    "stock": 15,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Air Fryer 5.5L by Vertex. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Vertex",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "vertex",
      "air",
      "fryer",
      "5.5l"
    ]
  },
  {
    "id": "p031",
    "title": "Memory Foam Pillow 2-Pack",
    "brand": "Crestline",
    "category": "home-kitchen",
    "price": 39.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80",
    "rating": 4.9,
    "reviewCount": 909,
    "stock": 83,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "description": "Memory Foam Pillow 2-Pack by Crestline. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Crestline",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "crestline",
      "memory",
      "foam",
      "pillow"
    ]
  },
  {
    "id": "p032",
    "title": "Cotton Bath Towel Set",
    "brand": "Halcyon",
    "category": "home-kitchen",
    "price": 49.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 646,
    "stock": 21,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Cotton Bath Towel Set by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "halcyon",
      "cotton",
      "bath",
      "towel"
    ]
  },
  {
    "id": "p033",
    "title": "Robot Vacuum Cleaner",
    "brand": "Quantum",
    "category": "home-kitchen",
    "price": 279.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=600&q=80",
    "rating": 4.4,
    "reviewCount": 1505,
    "stock": 69,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Robot Vacuum Cleaner by Quantum. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Quantum",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "quantum",
      "robot",
      "vacuum",
      "cleaner"
    ]
  },
  {
    "id": "p034",
    "title": "Ceramic Dinnerware Set 16pc",
    "brand": "Beacon",
    "category": "home-kitchen",
    "price": 89.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 832,
    "stock": 82,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Ceramic Dinnerware Set 16pc by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "beacon",
      "ceramic",
      "dinnerware",
      "set"
    ]
  },
  {
    "id": "p035",
    "title": "Stand Mixer 5qt",
    "brand": "Aurora",
    "category": "home-kitchen",
    "price": 329.99,
    "compareAt": 412.49,
    "image": "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 4228,
    "stock": 58,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Stand Mixer 5qt by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "aurora",
      "stand",
      "mixer",
      "5qt"
    ]
  },
  {
    "id": "p036",
    "title": "LED Desk Lamp",
    "brand": "Lumio",
    "category": "home-kitchen",
    "price": 39.99,
    "compareAt": 60.59,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 2528,
    "stock": 30,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "LED Desk Lamp by Lumio. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Lumio",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "lumio",
      "led",
      "desk",
      "lamp"
    ]
  },
  {
    "id": "p037",
    "title": "Memory Foam Mattress Queen",
    "brand": "Crestline",
    "category": "home-kitchen",
    "price": 549.99,
    "compareAt": 604.38,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 2230,
    "stock": 125,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Memory Foam Mattress Queen by Crestline. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Crestline",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "crestline",
      "memory",
      "foam",
      "mattress"
    ]
  },
  {
    "id": "p038",
    "title": "Glass Food Storage 24pc",
    "brand": "Beacon",
    "category": "home-kitchen",
    "price": 44.99,
    "compareAt": 59.2,
    "image": "https://images.unsplash.com/photo-1620311395842-0bbf9e1f9faf?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 1780,
    "stock": 78,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Glass Food Storage 24pc by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "beacon",
      "glass",
      "food",
      "storage"
    ]
  },
  {
    "id": "p039",
    "title": "Knife Block Set 14pc",
    "brand": "Sable",
    "category": "home-kitchen",
    "price": 159.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 1344,
    "stock": 60,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Knife Block Set 14pc by Sable. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Sable",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "home-kitchen",
      "sable",
      "knife",
      "block",
      "set"
    ]
  },
  {
    "id": "p040",
    "title": "Project Hail Mary - A Novel",
    "brand": "ShopSphere",
    "category": "books",
    "price": 16.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 171,
    "stock": 16,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "description": "Project Hail Mary - A Novel by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "project",
      "hail",
      "mary"
    ]
  },
  {
    "id": "p041",
    "title": "Atomic Habits",
    "brand": "ShopSphere",
    "category": "books",
    "price": 14.99,
    "compareAt": 19.99,
    "image": "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 3073,
    "stock": 192,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Atomic Habits by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "atomic",
      "habits"
    ]
  },
  {
    "id": "p042",
    "title": "The Midnight Library",
    "brand": "ShopSphere",
    "category": "books",
    "price": 13.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 3261,
    "stock": 29,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "The Midnight Library by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "the",
      "midnight",
      "library"
    ]
  },
  {
    "id": "p043",
    "title": "Educated: A Memoir",
    "brand": "ShopSphere",
    "category": "books",
    "price": 15.99,
    "compareAt": 24.23,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    "rating": 4,
    "reviewCount": 4328,
    "stock": 29,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Educated: A Memoir by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "educated:",
      "a",
      "memoir"
    ]
  },
  {
    "id": "p044",
    "title": "Sapiens: A Brief History",
    "brand": "ShopSphere",
    "category": "books",
    "price": 18.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    "rating": 4.9,
    "reviewCount": 2335,
    "stock": 96,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Sapiens: A Brief History by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "sapiens:",
      "a",
      "brief"
    ]
  },
  {
    "id": "p045",
    "title": "Where the Crawdads Sing",
    "brand": "ShopSphere",
    "category": "books",
    "price": 12.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 2466,
    "stock": 55,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Where the Crawdads Sing by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "where",
      "the",
      "crawdads"
    ]
  },
  {
    "id": "p046",
    "title": "The Psychology of Money",
    "brand": "ShopSphere",
    "category": "books",
    "price": 17.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=600&q=80",
    "rating": 4.7,
    "reviewCount": 4565,
    "stock": 81,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "The Psychology of Money by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "the",
      "psychology",
      "of"
    ]
  },
  {
    "id": "p047",
    "title": "Dune (Hardcover)",
    "brand": "ShopSphere",
    "category": "books",
    "price": 22.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=600&q=80",
    "rating": 4.4,
    "reviewCount": 3417,
    "stock": 31,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Dune (Hardcover) by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "dune",
      "(hardcover)"
    ]
  },
  {
    "id": "p048",
    "title": "The Pragmatic Programmer",
    "brand": "ShopSphere",
    "category": "books",
    "price": 39.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80",
    "rating": 4.1,
    "reviewCount": 2862,
    "stock": 12,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "The Pragmatic Programmer by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "the",
      "pragmatic",
      "programmer"
    ]
  },
  {
    "id": "p049",
    "title": "Designing Data-Intensive Apps",
    "brand": "ShopSphere",
    "category": "books",
    "price": 49.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 2861,
    "stock": 2,
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": true,
    "description": "Designing Data-Intensive Apps by ShopSphere. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "ShopSphere",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "books",
      "shopsphere",
      "designing",
      "data-intensive",
      "apps"
    ]
  },
  {
    "id": "p050",
    "title": "Vitamin C Brightening Serum",
    "brand": "Aurora",
    "category": "beauty",
    "price": 24.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4150,
    "stock": 127,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Vitamin C Brightening Serum by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "aurora",
      "vitamin",
      "c",
      "brightening"
    ]
  },
  {
    "id": "p051",
    "title": "Hydrating Daily Moisturizer",
    "brand": "Halcyon",
    "category": "beauty",
    "price": 18.99,
    "compareAt": 26.01,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 138,
    "stock": 15,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Hydrating Daily Moisturizer by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "halcyon",
      "hydrating",
      "daily",
      "moisturizer"
    ]
  },
  {
    "id": "p052",
    "title": "Argan Oil Hair Treatment",
    "brand": "Aurora",
    "category": "beauty",
    "price": 22.99,
    "compareAt": 33.32,
    "image": "https://images.unsplash.com/photo-1522335789203-aaa4b0a36ef0?w=600&q=80",
    "rating": 4,
    "reviewCount": 3043,
    "stock": 161,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Argan Oil Hair Treatment by Aurora. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "aurora",
      "argan",
      "oil",
      "hair"
    ]
  },
  {
    "id": "p053",
    "title": "Eyeshadow Palette 24-shade",
    "brand": "Pulse",
    "category": "beauty",
    "price": 32.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 1837,
    "stock": 30,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Eyeshadow Palette 24-shade by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "pulse",
      "eyeshadow",
      "palette",
      "24-shade"
    ]
  },
  {
    "id": "p054",
    "title": "Electric Toothbrush Pro",
    "brand": "Vertex",
    "category": "beauty",
    "price": 79.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1559591937-abc3a5a608b6?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 4403,
    "stock": 146,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Electric Toothbrush Pro by Vertex. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Vertex",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "vertex",
      "electric",
      "toothbrush",
      "pro"
    ]
  },
  {
    "id": "p055",
    "title": "Beard Trimmer Kit",
    "brand": "Sable",
    "category": "beauty",
    "price": 49.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 1897,
    "stock": 167,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Beard Trimmer Kit by Sable. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Sable",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "beauty",
      "sable",
      "beard",
      "trimmer",
      "kit"
    ]
  },
  {
    "id": "p056",
    "title": "Yoga Mat 6mm Non-Slip",
    "brand": "Pulse",
    "category": "sports",
    "price": 29.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4546,
    "stock": 27,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "description": "Yoga Mat 6mm Non-Slip by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "pulse",
      "yoga",
      "mat",
      "6mm"
    ]
  },
  {
    "id": "p057",
    "title": "Adjustable Dumbbells 25lb",
    "brand": "Vertex",
    "category": "sports",
    "price": 199.99,
    "compareAt": 227.26,
    "image": "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    "rating": 4,
    "reviewCount": 4148,
    "stock": 177,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Adjustable Dumbbells 25lb by Vertex. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Vertex",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "vertex",
      "adjustable",
      "dumbbells",
      "25lb"
    ]
  },
  {
    "id": "p058",
    "title": "Mountain Bike 27.5\"",
    "brand": "Zephyr",
    "category": "sports",
    "price": 549.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 2141,
    "stock": 116,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Mountain Bike 27.5\" by Zephyr. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Zephyr",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "zephyr",
      "mountain",
      "bike",
      "27.5\""
    ]
  },
  {
    "id": "p059",
    "title": "Insulated Water Bottle 32oz",
    "brand": "Atlas",
    "category": "sports",
    "price": 24.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 152,
    "stock": 103,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Insulated Water Bottle 32oz by Atlas. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Atlas",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "atlas",
      "insulated",
      "water",
      "bottle"
    ]
  },
  {
    "id": "p060",
    "title": "Camping Tent 4-Person",
    "brand": "Atlas",
    "category": "sports",
    "price": 169.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 2681,
    "stock": 179,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Camping Tent 4-Person by Atlas. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Atlas",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "atlas",
      "camping",
      "tent",
      "4-person"
    ]
  },
  {
    "id": "p061",
    "title": "Resistance Bands Set",
    "brand": "Pulse",
    "category": "sports",
    "price": 19.99,
    "compareAt": 23.52,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    "rating": 4.9,
    "reviewCount": 4159,
    "stock": 98,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Resistance Bands Set by Pulse. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Pulse",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "sports",
      "pulse",
      "resistance",
      "bands",
      "set"
    ]
  },
  {
    "id": "p062",
    "title": "Building Blocks 500pc",
    "brand": "Acme",
    "category": "toys",
    "price": 39.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1558877385-8c1b8d8ff7e0?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 1159,
    "stock": 135,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Building Blocks 500pc by Acme. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Acme",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "toys",
      "acme",
      "building",
      "blocks",
      "500pc"
    ]
  },
  {
    "id": "p063",
    "title": "RC Drone Mini",
    "brand": "Zephyr",
    "category": "toys",
    "price": 49.99,
    "compareAt": 64.92,
    "image": "https://images.unsplash.com/photo-1518985384148-7ade7587ad17?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 2836,
    "stock": 102,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "RC Drone Mini by Zephyr. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Zephyr",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "toys",
      "zephyr",
      "rc",
      "drone",
      "mini"
    ]
  },
  {
    "id": "p064",
    "title": "Wooden Puzzle Set",
    "brand": "Crestline",
    "category": "toys",
    "price": 24.99,
    "compareAt": 35.2,
    "image": "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 115,
    "stock": 110,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Wooden Puzzle Set by Crestline. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Crestline",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "toys",
      "crestline",
      "wooden",
      "puzzle",
      "set"
    ]
  },
  {
    "id": "p065",
    "title": "Plush Teddy Bear XL",
    "brand": "Halcyon",
    "category": "toys",
    "price": 29.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f99?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 4650,
    "stock": 94,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "description": "Plush Teddy Bear XL by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "toys",
      "halcyon",
      "plush",
      "teddy",
      "bear"
    ]
  },
  {
    "id": "p066",
    "title": "Board Game: Strategy Classic",
    "brand": "Acme",
    "category": "toys",
    "price": 34.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1606503153255-59d8b2e4d4ff?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 341,
    "stock": 16,
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "description": "Board Game: Strategy Classic by Acme. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Acme",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "toys",
      "acme",
      "board",
      "game:",
      "strategy"
    ]
  },
  {
    "id": "p067",
    "title": "Organic Coffee Beans 2lb",
    "brand": "Beacon",
    "category": "grocery",
    "price": 19.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 3313,
    "stock": 16,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Organic Coffee Beans 2lb by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "grocery",
      "beacon",
      "organic",
      "coffee",
      "beans"
    ]
  },
  {
    "id": "p068",
    "title": "Premium Olive Oil 750ml",
    "brand": "Beacon",
    "category": "grocery",
    "price": 16.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 2986,
    "stock": 173,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium Olive Oil 750ml by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "grocery",
      "beacon",
      "premium",
      "olive",
      "oil"
    ]
  },
  {
    "id": "p069",
    "title": "Dark Chocolate Bars 12pk",
    "brand": "Halcyon",
    "category": "grocery",
    "price": 24.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 4062,
    "stock": 102,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Dark Chocolate Bars 12pk by Halcyon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "grocery",
      "halcyon",
      "dark",
      "chocolate",
      "bars"
    ]
  },
  {
    "id": "p070",
    "title": "Mixed Nuts 2lb",
    "brand": "Atlas",
    "category": "grocery",
    "price": 18.99,
    "compareAt": 25.66,
    "image": "https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=600&q=80",
    "rating": 3.6,
    "reviewCount": 3470,
    "stock": 168,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Mixed Nuts 2lb by Atlas. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Atlas",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "grocery",
      "atlas",
      "mixed",
      "nuts",
      "2lb"
    ]
  },
  {
    "id": "p071",
    "title": "Whole Grain Pasta 6-Pack",
    "brand": "Beacon",
    "category": "grocery",
    "price": 12.99,
    "compareAt": 16.87,
    "image": "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 2141,
    "stock": 136,
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Whole Grain Pasta 6-Pack by Beacon. Built with premium materials and rigorous quality testing. Backed by a 1-year limited warranty and 30-day returns.",
    "specs": {
      "Brand": "Beacon",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "grocery",
      "beacon",
      "whole",
      "grain",
      "pasta"
    ]
  },
  {
    "id": "p072",
    "title": "Premium Wireless Noise-Cancelling Headphones (Black)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 172.32,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 1471,
    "stock": 124,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium edition of the popular Wireless Noise-Cancelling Headphones from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  },
  {
    "id": "p073",
    "title": "Pro 4K Smart TV 55\" (White)",
    "brand": "Vertex",
    "category": "electronics",
    "price": 404.67,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 1739,
    "stock": 138,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Pro edition of the popular 4K Smart TV 55\" from Vertex.",
    "specs": {
      "Brand": "Vertex",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex"
    ]
  },
  {
    "id": "p074",
    "title": "Deluxe Bluetooth Portable Speaker (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 88.99,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 1707,
    "stock": 131,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Deluxe edition of the popular Bluetooth Portable Speaker from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p075",
    "title": "Essential Mirrorless Camera Body (Navy)",
    "brand": "Aurora",
    "category": "electronics",
    "price": 834.37,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 1141,
    "stock": 92,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Essential edition of the popular Mirrorless Camera Body from Aurora.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "aurora"
    ]
  },
  {
    "id": "p076",
    "title": "Classic Smartwatch Series 8 (Charcoal)",
    "brand": "Halcyon",
    "category": "electronics",
    "price": 339.69,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    "rating": 4.3,
    "reviewCount": 763,
    "stock": 96,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Classic edition of the popular Smartwatch Series 8 from Halcyon.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "halcyon"
    ]
  },
  {
    "id": "p077",
    "title": "Eco Mechanical Gaming Keyboard (Black)",
    "brand": "Quantum",
    "category": "electronics",
    "price": 105.36,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 1262,
    "stock": 147,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Eco edition of the popular Mechanical Gaming Keyboard from Quantum.",
    "specs": {
      "Brand": "Quantum",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "quantum"
    ]
  },
  {
    "id": "p078",
    "title": "Premium 27\" 4K Ultrawide Monitor (White)",
    "brand": "Vertex",
    "category": "electronics",
    "price": 567.42,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 415,
    "stock": 80,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium edition of the popular 27\" 4K Ultrawide Monitor from Vertex.",
    "specs": {
      "Brand": "Vertex",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex"
    ]
  },
  {
    "id": "p079",
    "title": "Pro Wireless Charging Pad (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 25.76,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1591290619762-3f76a8b15db5?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 1587,
    "stock": 8,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Pro edition of the popular Wireless Charging Pad from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p080",
    "title": "Deluxe Laptop Pro 14\" (Navy)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 1494.57,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 991,
    "stock": 125,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Deluxe edition of the popular Laptop Pro 14\" from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  },
  {
    "id": "p081",
    "title": "Essential Action Camera 4K (Charcoal)",
    "brand": "Orion",
    "category": "electronics",
    "price": 256.72,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    "rating": 4,
    "reviewCount": 406,
    "stock": 79,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Essential edition of the popular Action Camera 4K from Orion.",
    "specs": {
      "Brand": "Orion",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "orion"
    ]
  },
  {
    "id": "p082",
    "title": "Classic Drone with 4K Camera (Black)",
    "brand": "Zephyr",
    "category": "electronics",
    "price": 511.62,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    "rating": 3.7,
    "reviewCount": 543,
    "stock": 96,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Classic edition of the popular Drone with 4K Camera from Zephyr.",
    "specs": {
      "Brand": "Zephyr",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "zephyr"
    ]
  },
  {
    "id": "p083",
    "title": "Eco E-Reader Premium (White)",
    "brand": "Atlas",
    "category": "electronics",
    "price": 155.49,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=600&q=80",
    "rating": 3.8,
    "reviewCount": 1526,
    "stock": 98,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Eco edition of the popular E-Reader Premium from Atlas.",
    "specs": {
      "Brand": "Atlas",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "atlas"
    ]
  },
  {
    "id": "p084",
    "title": "Premium Wireless Earbuds Pro (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 229.11,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    "rating": 4,
    "reviewCount": 1556,
    "stock": 98,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium edition of the popular Wireless Earbuds Pro from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p085",
    "title": "Pro Tablet 11\" 256GB (Navy)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 540.78,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80",
    "rating": 4.7,
    "reviewCount": 176,
    "stock": 18,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Pro edition of the popular Tablet 11\" 256GB from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  },
  {
    "id": "p086",
    "title": "Deluxe Smart Home Hub (Charcoal)",
    "brand": "Halcyon",
    "category": "electronics",
    "price": 101.54,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    "rating": 4.6,
    "reviewCount": 1101,
    "stock": 136,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Deluxe edition of the popular Smart Home Hub from Halcyon.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "halcyon"
    ]
  },
  {
    "id": "p087",
    "title": "Essential Wireless Noise-Cancelling Headphones (Black)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 168.61,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "rating": 4.9,
    "reviewCount": 1124,
    "stock": 111,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Essential edition of the popular Wireless Noise-Cancelling Headphones from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  },
  {
    "id": "p088",
    "title": "Classic 4K Smart TV 55\" (White)",
    "brand": "Vertex",
    "category": "electronics",
    "price": 421.02,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    "rating": 3.9,
    "reviewCount": 1178,
    "stock": 8,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Classic edition of the popular 4K Smart TV 55\" from Vertex.",
    "specs": {
      "Brand": "Vertex",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex"
    ]
  },
  {
    "id": "p089",
    "title": "Eco Bluetooth Portable Speaker (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 88.6,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 1139,
    "stock": 102,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Eco edition of the popular Bluetooth Portable Speaker from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p090",
    "title": "Premium Mirrorless Camera Body (Navy)",
    "brand": "Aurora",
    "category": "electronics",
    "price": 786.16,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    "rating": 4,
    "reviewCount": 1673,
    "stock": 126,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium edition of the popular Mirrorless Camera Body from Aurora.",
    "specs": {
      "Brand": "Aurora",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "aurora"
    ]
  },
  {
    "id": "p091",
    "title": "Pro Smartwatch Series 8 (Charcoal)",
    "brand": "Halcyon",
    "category": "electronics",
    "price": 290.6,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 1210,
    "stock": 79,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Pro edition of the popular Smartwatch Series 8 from Halcyon.",
    "specs": {
      "Brand": "Halcyon",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "halcyon"
    ]
  },
  {
    "id": "p092",
    "title": "Deluxe Mechanical Gaming Keyboard (Black)",
    "brand": "Quantum",
    "category": "electronics",
    "price": 125.19,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    "rating": 4.1,
    "reviewCount": 2036,
    "stock": 66,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Deluxe edition of the popular Mechanical Gaming Keyboard from Quantum.",
    "specs": {
      "Brand": "Quantum",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "quantum"
    ]
  },
  {
    "id": "p093",
    "title": "Essential 27\" 4K Ultrawide Monitor (White)",
    "brand": "Vertex",
    "category": "electronics",
    "price": 518.58,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 1797,
    "stock": 65,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Essential edition of the popular 27\" 4K Ultrawide Monitor from Vertex.",
    "specs": {
      "Brand": "Vertex",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "vertex"
    ]
  },
  {
    "id": "p094",
    "title": "Classic Wireless Charging Pad (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 27.35,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1591290619762-3f76a8b15db5?w=600&q=80",
    "rating": 4.5,
    "reviewCount": 773,
    "stock": 20,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Classic edition of the popular Wireless Charging Pad from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p095",
    "title": "Eco Laptop Pro 14\" (Navy)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 1183.27,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 578,
    "stock": 61,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Eco edition of the popular Laptop Pro 14\" from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  },
  {
    "id": "p096",
    "title": "Premium Action Camera 4K (Charcoal)",
    "brand": "Orion",
    "category": "electronics",
    "price": 242.03,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 539,
    "stock": 30,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Premium edition of the popular Action Camera 4K from Orion.",
    "specs": {
      "Brand": "Orion",
      "Color": "Charcoal",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "orion"
    ]
  },
  {
    "id": "p097",
    "title": "Pro Drone with 4K Camera (Black)",
    "brand": "Zephyr",
    "category": "electronics",
    "price": 557.94,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    "rating": 4.8,
    "reviewCount": 378,
    "stock": 33,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Pro edition of the popular Drone with 4K Camera from Zephyr.",
    "specs": {
      "Brand": "Zephyr",
      "Color": "Black",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "zephyr"
    ]
  },
  {
    "id": "p098",
    "title": "Deluxe E-Reader Premium (White)",
    "brand": "Atlas",
    "category": "electronics",
    "price": 128.73,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=600&q=80",
    "rating": 4.2,
    "reviewCount": 1838,
    "stock": 106,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Deluxe edition of the popular E-Reader Premium from Atlas.",
    "specs": {
      "Brand": "Atlas",
      "Color": "White",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "atlas"
    ]
  },
  {
    "id": "p099",
    "title": "Essential Wireless Earbuds Pro (Silver)",
    "brand": "Pulse",
    "category": "electronics",
    "price": 216.71,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    "rating": 4.6,
    "reviewCount": 1832,
    "stock": 100,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Essential edition of the popular Wireless Earbuds Pro from Pulse.",
    "specs": {
      "Brand": "Pulse",
      "Color": "Silver",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "pulse"
    ]
  },
  {
    "id": "p100",
    "title": "Classic Tablet 11\" 256GB (Navy)",
    "brand": "Lumio",
    "category": "electronics",
    "price": 458.25,
    "compareAt": null,
    "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80",
    "rating": 4.9,
    "reviewCount": 1539,
    "stock": 121,
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "description": "Classic edition of the popular Tablet 11\" 256GB from Lumio.",
    "specs": {
      "Brand": "Lumio",
      "Color": "Navy",
      "Warranty": "1 year",
      "Ships from": "ShopSphere Fulfillment"
    },
    "tags": [
      "electronics",
      "lumio"
    ]
  }
] as Product[];
export const productById = (id: string) => products.find(p => p.id === id);
