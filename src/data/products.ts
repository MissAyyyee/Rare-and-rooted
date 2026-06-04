export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  category: 'Rooted Basics' | 'Collector\'s Corner' | 'Coveted Cuts' | 'Sister Picks';
  description: string;
  careLevel: 'Easy' | 'Intermediate' | 'Advanced';
  light: string;
  water: string;
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
  }
];
