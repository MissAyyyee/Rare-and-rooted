export interface CareGuide {
  id: string;
  slug: string;
  title: string;
  category: 'Basics' | 'Technique' | 'Propagation' | 'Collectors';
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

export const careGuides: CareGuide[] = [
  {
    id: '1',
    slug: 'beginner-care-guides',
    title: 'Beginner Care Guides',
    category: 'Basics',
    excerpt: 'Master the essentials of plant parenthood with our comprehensive beginner guides.',
    readTime: '5 min read',
    image: '/care-beginner-guide.png',
    content: `
      <h2>Welcome to Plant Parenthood</h2>
      <p>Starting your journey with houseplants can be both exciting and a bit overwhelming. The key to success is understanding that every plant has its own personality and needs. In this guide, we'll cover the three pillars of plant care: light, water, and environment.</p>
      
      <h3>1. Understanding Light</h3>
      <p>Light is food for plants. Most indoor plants prefer "bright, indirect light." This means a spot where the sun doesn't hit the leaves directly but the room is well-lit. North-facing windows offer low light, while South-facing windows offer the most intense light.</p>
      
      <h3>2. The Art of Watering</h3>
      <p>Overwatering is the most common cause of plant death. Before watering, always check the soil. Stick your finger about an inch deep; if it feels dry, it's time to water. Ensure your pots have drainage holes to let excess water escape.</p>
      
      <h3>3. Humidity and Temperature</h3>
      <p>Most tropical plants love humidity. Grouping plants together or using a humidifier can help. Keep your plants away from cold drafts or direct heat from radiators.</p>
    `
  },
  {
    id: '2',
    slug: 'repotting-tips',
    title: 'Repotting Tips',
    category: 'Technique',
    excerpt: 'Learn when and how to give your plants the space they need to grow.',
    readTime: '7 min read',
    image: '/care-repotting.png',
    content: `
      <h2>The Why and When of Repotting</h2>
      <p>Repotting isn't just about moving a plant to a bigger pot; it's about refreshing the nutrients in the soil and giving roots room to breathe.</p>
      
      <h3>Signs Your Plant Needs Repotting</h3>
      <ul>
        <li>Roots growing out of the drainage holes.</li>
        <li>Water sitting on top of the soil and not soaking in.</li>
        <li>The plant looking too big for its container.</li>
        <li>Growth has slowed down significantly during the growing season.</li>
      </ul>
      
      <h3>Step-by-Step Guide</h3>
      <ol>
        <li>Choose a pot that is 1-2 inches wider in diameter than the current one.</li>
        <li>Gently remove the plant from its old home.</li>
        <li>Loosen the root ball and trim any dead or mushy roots.</li>
        <li>Add a layer of fresh substrate to the new pot.</li>
        <li>Place the plant and fill in the gaps with more soil.</li>
        <li>Water thoroughly to settle the soil.</li>
      </ol>
    `
  },
  {
    id: '3',
    slug: 'propagation-tutorials',
    title: 'Propagation Tutorials',
    category: 'Propagation',
    excerpt: 'Expand your collection for free by learning the secrets of propagation.',
    readTime: '6 min read',
    image: '/care-propagation.png',
    content: `
      <h2>Magic of Multiplication</h2>
      <p>Propagation is the process of creating new plants from your existing ones. It's rewarding, sustainable, and a great way to share the love with friends.</p>
      
      <h3>Water Propagation</h3>
      <p>This is the easiest method for beginners. Simply take a cutting with at least one node (the bump where leaves grow) and place it in a jar of clean water. Change the water weekly and watch for roots to appear!</p>
      
      <h3>Soil Propagation</h3>
      <p>Some plants, like succulents, prefer to be propagated directly in soil. Let the cutting "callous" for a day or two before placing it on top of well-draining substrate.</p>
      
      <h3>The "Prop Station"</h3>
      <p>Using a dedicated propagation kit like ours can help maintain the right humidity and light levels for your vulnerable cuttings.</p>
    `
  },
  {
    id: '4',
    slug: 'rare-plant-spotlight',
    title: 'Rare Plant Spotlight',
    category: 'Collectors',
    excerpt: 'Deep dives into the care and history of the worlds most coveted specimens.',
    readTime: '10 min read',
    image: '/care-rare-spotlight.png',
    content: `
      <h2>Spotlight: Monstera Albo</h2>
      <p>The Variegated Monstera Deliciosa 'Albo Borsigiana' is the crown jewel of many collections. Its striking white sectoral variegation makes every leaf a unique work of art.</p>
      
      <h3>Light Requirements</h3>
      <p>Because the white parts of the leaves lack chlorophyll, they cannot photosynthesize. This means 'Albo' needs significantly more light than a standard Monstera to maintain its variegation and health.</p>
      
      <h3>Stability and Reverting</h3>
      <p>Variegation in Albos is a mutation. To keep the plant from "reverting" to all-green, ensure it gets plenty of bright light. If a plant starts producing all-white leaves, it may need to be pruned back to a leaf with more balanced variegation, as all-white leaves will eventually die off.</p>
      
      <h3>Expert Tip</h3>
      <p>Use a chunky, well-aerated mix to prevent root rot, as these collector plants can be more sensitive than their common counterparts.</p>
    `
  }
];
