
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
  features: string[];
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max 270 React",
    brand: "Nike",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20270%20React%20premium%20sneakers%20in%20white%20and%20black%20colorway%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20high%20quality%20athletic%20footwear%2C%20modern%20design%2C%20full%20shoe%20display%2C%20premium%20sneakers&width=400&height=400&seq=nike1&orientation=squarish",
    rating: 4.8,
    reviews: 1247,
    category: "running",
    description: "Experience ultimate comfort and style with Nike's innovative Air Max 270 React technology.",
    colors: ["White/Black", "Blue/Gray", "Red/Black"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isSale: true,
    features: ["Air Max cushioning", "React foam", "Breathable mesh", "Durable rubber sole"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20270%20React%20white%20and%20black%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20athletic%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=nike1_side&orientation=squarish",
      "https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20270%20React%20white%20and%20black%20sneakers%20top%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20athletic%20footwear%2C%20detailed%20top%20angle&width=600&height=600&seq=nike1_top&orientation=squarish"
    ]
  },
  {
    id: 2,
    name: "Ultra Boost 22",
    brand: "Adidas",
    price: 179.99,
    originalPrice: 219.99,
    image: "https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%2022%20premium%20running%20shoes%20in%20black%20and%20white%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20high%20quality%20athletic%20footwear%2C%20modern%20design%2C%20full%20shoe%20display%2C%20premium%20sneakers&width=400&height=400&seq=adidas1&orientation=squarish",
    rating: 4.9,
    reviews: 2156,
    category: "running",
    description: "Revolutionary energy return technology meets premium comfort in these high-performance running shoes.",
    colors: ["Black/White", "Gray/Blue", "Navy/Red"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: true,
    features: ["Boost cushioning", "Primeknit upper", "Continental rubber", "Torsion System"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%2022%20black%20and%20white%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20athletic%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=adidas1_side&orientation=squarish"
    ]
  },
  {
    id: 3,
    name: "Air Jordan 1 Retro High",
    brand: "Jordan",
    price: 239.99,
    image: "https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20premium%20basketball%20shoes%20in%20black%20and%20red%20Chicago%20colorway%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20iconic%20basketball%20sneakers%2C%20full%20shoe%20display%2C%20premium%20footwear&width=400&height=400&seq=jordan1&orientation=squarish",
    rating: 4.7,
    reviews: 956,
    category: "basketball",
    description: "Legendary basketball heritage meets premium craftsmanship in these iconic Jordan 1 shoes.",
    colors: ["Black/Red", "White/Blue", "Gray/Black"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    isNew: true,
    isSale: false,
    features: ["Premium leather", "Air cushioning", "Rubber outsole", "Classic high-top design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Air%20Jordan%201%20Retro%20High%20black%20and%20red%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20iconic%20basketball%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=jordan1_side&orientation=squarish"
    ]
  },
  {
    id: 4,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 79.99,
    image: "https://readdy.ai/api/search-image?query=Converse%20Chuck%20Taylor%20All%20Star%20high%20top%20sneakers%20in%20classic%20red%20canvas%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20iconic%20casual%20footwear%2C%20full%20shoe%20display%2C%20timeless%20design&width=400&height=400&seq=converse1&orientation=squarish",
    rating: 4.3,
    reviews: 1834,
    category: "lifestyle",
    description: "The iconic high-top sneaker that defined generations. Classic style with modern comfort.",
    colors: ["Red", "Black", "White", "Navy"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Canvas upper", "Rubber toe cap", "Vulcanized sole", "Classic design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Converse%20Chuck%20Taylor%20All%20Star%20red%20high%20top%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20classic%20casual%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=converse1_side&orientation=squarish"
    ]
  },
  {
    id: 5,
    name: "Suede Classic",
    brand: "Puma",
    price: 129.99,
    image: "https://readdy.ai/api/search-image?query=Puma%20Suede%20Classic%20sneakers%20in%20navy%20blue%20suede%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20premium%20casual%20footwear%2C%20full%20shoe%20display%2C%20classic%20design&width=400&height=400&seq=puma1&orientation=squarish",
    rating: 4.4,
    reviews: 567,
    category: "lifestyle",
    description: "Effortless style meets premium comfort in these classic suede sneakers.",
    colors: ["Navy", "Brown", "Gray", "Black"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Suede upper", "Rubber outsole", "Comfortable insole", "Classic silhouette"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Puma%20Suede%20Classic%20navy%20blue%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20casual%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=puma1_side&orientation=squarish"
    ]
  },
  {
    id: 6,
    name: "Old Skool",
    brand: "Vans",
    price: 99.99,
    image: "https://readdy.ai/api/search-image?query=Vans%20Old%20Skool%20skateboard%20sneakers%20in%20black%20and%20white%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20classic%20skate%20footwear%2C%20full%20shoe%20display%2C%20iconic%20design&width=400&height=400&seq=vans1&orientation=squarish",
    rating: 4.6,
    reviews: 1423,
    category: "skateboarding",
    description: "The classic skate shoe that started it all. Durable construction for skateboarding.",
    colors: ["Black/White", "Navy/White", "Red/White"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Canvas/suede upper", "Waffle outsole", "Padded collar", "Signature side stripe"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Vans%20Old%20Skool%20black%20and%20white%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20classic%20skate%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=vans1_side&orientation=squarish"
    ]
  },
  // Adding more products for better brand/category filtering
  {
    id: 7,
    name: "Air Force 1 '07",
    brand: "Nike",
    price: 119.99,
    image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Force%201%2007%20classic%20white%20sneakers%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20iconic%20lifestyle%20footwear%2C%20full%20shoe%20display%2C%20premium%20sneakers&width=400&height=400&seq=nike2&orientation=squarish",
    rating: 4.6,
    reviews: 3245,
    category: "lifestyle",
    description: "The classic basketball shoe that became a lifestyle icon. Premium leather construction.",
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Premium leather", "Air cushioning", "Rubber outsole", "Classic design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Nike%20Air%20Force%201%2007%20white%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20lifestyle%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=nike2_side&orientation=squarish"
    ]
  },
  {
    id: 8,
    name: "Stan Smith",
    brand: "Adidas",
    price: 89.99,
    image: "https://readdy.ai/api/search-image?query=Adidas%20Stan%20Smith%20classic%20white%20green%20sneakers%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20iconic%20lifestyle%20footwear%2C%20full%20shoe%20display%2C%20premium%20sneakers&width=400&height=400&seq=adidas2&orientation=squarish",
    rating: 4.5,
    reviews: 2876,
    category: "lifestyle",
    description: "The world's most popular tennis shoe. Clean, classic design meets modern comfort.",
    colors: ["White/Green", "White/Navy", "All White"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Leather upper", "Rubber outsole", "Comfortable insole", "Iconic design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Adidas%20Stan%20Smith%20white%20green%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20lifestyle%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=adidas2_side&orientation=squarish"
    ]
  },
  {
    id: 9,
    name: "Jordan 4 Retro",
    brand: "Jordan",
    price: 289.99,
    image: "https://readdy.ai/api/search-image?query=Air%20Jordan%204%20Retro%20basketball%20shoes%20in%20white%20cement%20colorway%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20iconic%20basketball%20sneakers%2C%20full%20shoe%20display%2C%20premium%20footwear&width=400&height=400&seq=jordan2&orientation=squarish",
    rating: 4.8,
    reviews: 1834,
    category: "basketball",
    description: "Legendary basketball performance with premium materials and iconic design.",
    colors: ["White/Cement", "Black/Red", "Cool Gray"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    isNew: true,
    isSale: false,
    features: ["Premium leather", "Air cushioning", "Rubber outsole", "Classic high-top design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Air%20Jordan%204%20Retro%20white%20cement%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20basketball%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=jordan2_side&orientation=squarish"
    ]
  },
  {
    id: 10,
    name: "Chuck 70 High Top",
    brand: "Converse",
    price: 99.99,
    image: "https://readdy.ai/api/search-image?query=Converse%20Chuck%2070%20High%20Top%20premium%20sneakers%20in%20black%20canvas%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20classic%20casual%20footwear%2C%20full%20shoe%20display%2C%20premium%20design&width=400&height=400&seq=converse2&orientation=squarish",
    rating: 4.4,
    reviews: 1245,
    category: "lifestyle",
    description: "Enhanced version of the classic Chuck Taylor with premium materials and improved comfort.",
    colors: ["Black", "White", "Navy", "Red"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Premium canvas", "Rubber toe cap", "Enhanced comfort", "Classic design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Converse%20Chuck%2070%20High%20Top%20black%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20casual%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=converse2_side&orientation=squarish"
    ]
  },
  {
    id: 11,
    name: "RS-X3 Puzzle",
    brand: "Puma",
    price: 139.99,
    image: "https://readdy.ai/api/search-image?query=Puma%20RS-X3%20Puzzle%20chunky%20sneakers%20in%20colorful%20design%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20modern%20athletic%20footwear%2C%20full%20shoe%20display%2C%20premium%20sneakers&width=400&height=400&seq=puma2&orientation=squarish",
    rating: 4.3,
    reviews: 876,
    category: "lifestyle",
    description: "Bold, chunky design meets modern comfort in these statement lifestyle sneakers.",
    colors: ["Multi-color", "Black/White", "Gray/Blue"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    isSale: false,
    features: ["Mesh upper", "RS foam", "Rubber outsole", "Bold design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Puma%20RS-X3%20Puzzle%20colorful%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20lifestyle%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=puma2_side&orientation=squarish"
    ]
  },
  {
    id: 12,
    name: "Sk8-Hi",
    brand: "Vans",
    price: 109.99,
    image: "https://readdy.ai/api/search-image?query=Vans%20Sk8-Hi%20high%20top%20skateboard%20sneakers%20in%20black%20and%20white%2C%20complete%20shoe%20visible%2C%20clean%20white%20studio%20background%2C%20professional%20product%20photography%2C%20classic%20skate%20footwear%2C%20full%20shoe%20display%2C%20iconic%20design&width=400&height=400&seq=vans2&orientation=squarish",
    rating: 4.5,
    reviews: 1567,
    category: "skateboarding",
    description: "The original high-top skate shoe with legendary durability and style.",
    colors: ["Black/White", "Navy/White", "Red/White"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    features: ["Canvas/suede upper", "Waffle outsole", "Padded collar", "High-top design"],
    gallery: [
      "https://readdy.ai/api/search-image?query=Vans%20Sk8-Hi%20black%20and%20white%20sneakers%20side%20view%2C%20complete%20shoe%20visible%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20skate%20footwear%2C%20detailed%20side%20profile&width=600&height=600&seq=vans2_side&orientation=squarish"
    ]
  }
];

export const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://readdy.ai/api/search-image?query=Nike%20brand%20logo%20swoosh%20symbol%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20athletic%20brand%20identity%2C%20premium%20sports%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=nike_logo&orientation=landscape",
    description: "Just Do It",
    productsCount: 3,
    featured: true
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://readdy.ai/api/search-image?query=Adidas%20brand%20logo%20three%20stripes%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20athletic%20brand%20identity%2C%20premium%20sports%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=adidas_logo&orientation=landscape",
    description: "Impossible is Nothing",
    productsCount: 2,
    featured: true
  },
  {
    id: 3,
    name: "Jordan",
    logo: "https://readdy.ai/api/search-image?query=Jordan%20brand%20logo%20jumpman%20silhouette%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20basketball%20brand%20identity%2C%20premium%20athletic%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=jordan_logo&orientation=landscape",
    description: "Become Legendary",
    productsCount: 2,
    featured: true
  },
  {
    id: 4,
    name: "Converse",
    logo: "https://readdy.ai/api/search-image?query=Converse%20brand%20logo%20star%20symbol%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20casual%20brand%20identity%2C%20classic%20footwear%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=converse_logo&orientation=landscape",
    description: "All Star",
    productsCount: 2,
    featured: true
  },
  {
    id: 5,
    name: "Puma",
    logo: "https://readdy.ai/api/search-image?query=Puma%20brand%20logo%20cat%20puma%20symbol%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20athletic%20brand%20identity%2C%20premium%20sports%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=puma_logo&orientation=landscape",
    description: "Forever Faster",
    productsCount: 2,
    featured: true
  },
  {
    id: 6,
    name: "Vans",
    logo: "https://readdy.ai/api/search-image?query=Vans%20brand%20logo%20text%20on%20clean%20white%20background%2C%20professional%20brand%20photography%2C%20iconic%20skateboard%20brand%20identity%2C%20street%20culture%20brand%2C%20minimalist%20design%2C%20high%20quality%20brand%20representation&width=200&height=100&seq=vans_logo&orientation=landscape",
    description: "Off The Wall",
    productsCount: 2,
    featured: true
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Fahad Nasir",
    role: "CEO & Founder",
    avatar: "FN",
    color: "bg-blue-600",
    description: "Visionary leader with 10+ years in retail and e-commerce"
  },
  {
    id: 2,
    name: "Iman Haseeb",
    role: "Head of Design",
    avatar: "IH",
    color: "bg-purple-600",
    description: "Creative genius behind our brand identity and user experience"
  },
  {
    id: 3,
    name: "Ahmed Awan",
    role: "Operations Director",
    avatar: "AA",
    color: "bg-green-600",
    description: "Operations expert ensuring smooth business processes"
  },
  {
    id: 4,
    name: "Izhar Ali",
    role: "Sales Head",
    avatar: "IA",
    color: "bg-red-600",
    description: "Sales strategist driving our market expansion"
  }
];

export function getProductsByBrand(brandName: string): Product[] {
  return products.filter(product => 
    product.brand.toLowerCase() === brandName.toLowerCase()
  );
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}
