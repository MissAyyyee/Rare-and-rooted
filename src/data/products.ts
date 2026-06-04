export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  category: 'Rooted Basics' | 'Collector\'s Corner' | 'Coveted Cuts' | 'Sister Picks' | 'Accessories' | 'Merchandise';
  description: string;
  careLevel: 'Easy' | 'Intermediate' | 'Advanced' | 'N/A';
  light?: string;
  water?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'golden-pothos',
    name: 'Golden Pothos',
    scientificName: 'Epipremnum aureum',
    price: 25,
    category: 'Rooted Basics',
    description: 'The ultimate beginner plant. Known for its trailing vines and heart-shaped leaves with yellow variegation.',
    careLevel: 'Easy',
    light: 'Low to bright indirect light',
    water: 'Allow soil to dry out between waterings',
    image: '/products/rooted-basics/golden-pothos.png'
  },
  {
    id: 'heartleaf-philodendron',
    name: 'Heartleaf Philodendron',
    scientificName: 'Philodendron hederaceum',
    price: 22,
    category: 'Rooted Basics',
    description: 'A classic indoor plant with beautiful deep green, heart-shaped leaves. Fast-growing and very adaptable.',
    careLevel: 'Easy',
    light: 'Low to bright indirect light',
    water: 'Water when the top inch of soil is dry',
    image: '/products/rooted-basics/heartleaf-philodendron.png'
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    price: 35,
    category: 'Rooted Basics',
    description: 'Striking upright leaves and incredibly hardy. Perfect for low-light corners and busy plant parents.',
    careLevel: 'Easy',
    light: 'Any light level, from low to direct sun',
    water: 'Allow soil to dry completely; water every 2-4 weeks',
    image: '/products/rooted-basics/snake-plant.png'
  },
  {
    id: 'monstera-albo',
    name: 'Monstera Albo',
    scientificName: 'Monstera deliciosa \'Albo Borsigiana\'',
    price: 450,
    category: 'Collector\'s Corner',
    description: 'Highly sought-after for its stunning white variegation. Each leaf is a unique work of art.',
    careLevel: 'Advanced',
    light: 'Bright indirect light (vital for variegation)',
    water: 'Water when top 2 inches are dry; avoid overwatering',
    image: '/products/collectors-corner/monstera-albo.png'
  },
  {
    id: 'anthurium-warocqueanum',
    name: 'Queen Anthurium',
    scientificName: 'Anthurium warocqueanum',
    price: 280,
    category: 'Collector\'s Corner',
    description: 'Known for its long, velvety, dark green leaves. A true showstopper for any serious collector.',
    careLevel: 'Advanced',
    light: 'Bright indirect light, high humidity',
    water: 'Keep soil consistently moist but not soggy',
    image: '/products/collectors-corner/anthurium-warocqueanum.png'
  },
  {
    id: 'philodendron-pink-princess',
    name: 'Pink Princess Philodendron',
    scientificName: 'Philodendron erubescens \'Pink Princess\'',
    price: 120,
    category: 'Collector\'s Corner',
    description: 'Famous for its deep green leaves splashed with bubblegum pink variegation.',
    careLevel: 'Intermediate',
    light: 'Bright indirect light',
    water: 'Water when top 50-75% of soil is dry',
    image: '/products/collectors-corner/philodendron-pink-princess.png'
  },
  {
    id: 'monstera-adansonii-cutting',
    name: 'Monstera Adansonii Cutting',
    scientificName: 'Monstera adansonii',
    price: 15,
    category: 'Coveted Cuts',
    description: 'A fresh cutting of the Swiss Cheese plant. Perfect for those who love to propagate.',
    careLevel: 'Intermediate',
    light: 'Bright indirect light',
    water: 'Keep in water until roots are 2-3 inches long',
    image: '/products/coveted-cuts/monstera-adansonii-cutting.png'
  },
  {
    id: 'syngonium-albo-cutting',
    name: 'Syngonium Albo Cutting',
    scientificName: 'Syngonium podophyllum \'Albo Variegatum\'',
    price: 45,
    category: 'Coveted Cuts',
    description: 'A cutting from a variegated Syngonium. Fast-growing and easy to root.',
    careLevel: 'Intermediate',
    light: 'Bright indirect light',
    water: 'Keep in water or moist moss to root',
    image: '/products/coveted-cuts/syngonium-albo-cutting.png'
  },
  {
    id: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    scientificName: 'Goeppertia orbifolia',
    price: 42,
    category: 'Sister Picks',
    description: 'A personal favorite for its oversized, silvery-green leaves with distinct striping. A true statement piece.',
    careLevel: 'Intermediate',
    light: 'Bright indirect light',
    water: 'Keep soil consistently moist; high humidity',
    image: '/collection-sister-picks.png' // Using the collection image as a placeholder for now
  },
  {
    id: 'hoya-carnosa-compacta',
    name: 'Hindu Rope Hoya',
    scientificName: 'Hoya carnosa compacta',
    price: 38,
    category: 'Sister Picks',
    description: 'A unique variety with curly, rope-like leaves. It produces stunning waxy, star-shaped flowers with a sweet fragrance.',
    careLevel: 'Easy',
    light: 'Bright indirect light',
    water: 'Allow to dry out completely between waterings',
    image: '/care-propagation.png' // Placeholder
  },
  {
    id: 'rare-rooted-mix',
    name: 'Rare & Rooted Mix',
    category: 'Accessories',
    price: 28,
    description: 'Our custom-blended chunky substrate, optimized for aroids and tropical plants. Provides excellent drainage and aeration.',
    careLevel: 'N/A',
    image: '/merchandise/rare-rooted-mix-pouch.png'
  },
  {
    id: 'the-prop-station',
    name: 'The Prop Station',
    category: 'Accessories',
    price: 45,
    description: 'A complete propagation kit including glass tubes, gold-colored plant snips, and a minimalist wooden stand.',
    careLevel: 'N/A',
    image: '/merchandise/the-prop-station-kit.png'
  },
  {
    id: 'rare-rooted-tote',
    name: 'Rare & Rooted Canvas Tote',
    category: 'Merchandise',
    price: 32,
    description: 'A high-quality canvas tote featuring our signature botanical cloche logo. Perfect for your next plant haul.',
    careLevel: 'N/A',
    image: '/merchandise/branded-tote-bag.png'
  },
  {
    id: 'cloche-sweatshirt',
    name: 'Boutique Cloche Sweatshirt',
    category: 'Merchandise',
    price: 65,
    description: 'Premium terracotta-colored sweatshirt with a minimalist cloche illustration embroidered on the chest.',
    careLevel: 'N/A',
    image: '/merchandise/plant-parent-apparel.png'
  }
];
