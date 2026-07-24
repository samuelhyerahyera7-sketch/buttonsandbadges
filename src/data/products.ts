export type Category =
  | 'name-badges'
  | 'reusable-badges'
  | 'button-badges'
  | 'lapels'
  | 'tags'
  | 'corporate-gifts'
  | 'stickers';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription: string;
  image: string;
  priceFrom: number;
  minQty: number;
  materials?: string[];
  finishes?: string[];
  isBestseller?: boolean;
  isNew?: boolean;
}

const BFA = 'https://badgesforafrica.co.za/wp-content/uploads';

export const products: Product[] = [
  {
    id: 'classic-name-badge',
    name: 'Classic Name Badge',
    category: 'name-badges',
    description: 'Laser-engraved acrylic name badges in Plexiglas or Trolase.',
    longDescription:
      'Make it personal with your name in your chosen font, beautifully laser engraved and finished with paint. The perfect fusion of traditional craftsmanship and modern finishing delivers unparalleled quality. Available in two classic materials: Plexiglas — lightweight, glossy acrylic laser engraved and colour-filled for stunning results; and Trolase — premium two-layer acrylic in glossy, matte, or brushed finishes creating eye-catching contrast. Note: full-colour branding is not available on this range.',
    image: `${BFA}/2024/12/BFA-web-photo-classic-trolase-and-plexi.png`,
    priceFrom: 45,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
    isBestseller: true,
  },
  {
    id: 'luxe-metal-name-badge',
    name: 'Luxe Metal Name Badge',
    category: 'name-badges',
    description: 'Premium metal name badges for a sophisticated corporate look.',
    longDescription:
      'Metal name badges are a classic choice in the corporate world, exuding a sense of sophistication and professionalism. Elevate your brand with our premium metal badge, perfectly aligning with your brand\'s identity and style. Each badge is expertly finished for a polished appearance that lasts.',
    image: `${BFA}/2024/12/Luxe-Metal-Name-Badge-–-LMB.png`,
    priceFrom: 95,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Polished', 'Brushed', 'Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: 'premium-resin-name-badge',
    name: 'Premium Resin Name Badge',
    category: 'name-badges',
    description: 'Full-colour digital print sealed under crystal-clear resin.',
    longDescription:
      'Our premium badge range features a full-colour digital print with a resin seal. Each badge has a vivid, full-colour digital print sealed under a crystal-clear resin coating, giving it a sleek, polished look. This premium construction provides long-lasting durability and a professional appearance that showcases your brand at its very best.',
    image: `${BFA}/2024/12/Premium-Resin-Name-Badge-–-PRB.png`,
    priceFrom: 65,
    minQty: 10,
    materials: ['Resin-coated'],
    finishes: ['Full colour', 'Glossy resin'],
    isBestseller: true,
  },
  {
    id: 'wood-name-badge',
    name: 'Wood Name Badge',
    category: 'name-badges',
    description: 'Eco-friendly badges crafted from Bamboo, Maple, or Oak.',
    longDescription:
      'Bring a touch of nature to your name badge with our eco-conscious range of materials. Each badge is crafted from sustainably sourced wood, laser engraved to perfection. Available in Bamboo, Maple, and Oak — each offering a unique grain and warmth that makes your brand stand out in the most natural way.',
    image: `${BFA}/2024/12/Wood-Name-Badge-WB.png`,
    priceFrom: 85,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Natural', 'Laser engraved'],
    isNew: true,
  },
  {
    id: 'photo-id-name-badge',
    name: 'Photo ID Name Badge',
    category: 'name-badges',
    description: 'Custom photo ID badges for businesses, events, and organisations.',
    longDescription:
      'Wear your identity with pride. Our custom-made, durable, and secure photo ID name badges are perfect for businesses, events, and organisations. We make photo IDs simple for everyone — from hospitals and schools to delivery services and universities. Need lanyards or card holders? We\'ve got you covered. Our team takes the hassle out of ID management, making professional protection easy.',
    image: `${BFA}/2024/12/Photo-ID-–-PID.png`,
    priceFrom: 55,
    minQty: 10,
    materials: ['PVC', 'Laminated'],
    finishes: ['Full colour'],
  },
  {
    id: 'classic-insta-badge',
    name: 'Classic Insta Badge',
    category: 'reusable-badges',
    description: 'Affordable reusable window-insert badges for dynamic teams.',
    longDescription:
      'Need a badging solution that keeps up with your business? Our reusable name badges are a game-changer. They\'re affordable and ideal for companies with dynamic workforces, events, or conferences. Simply slide in a new name card whenever staff change — no reprinting, no waste, no fuss. A smart, cost-effective solution for organisations that value flexibility.',
    image: `${BFA}/2024/12/Classic-Insta-Badge-–-RB.png`,
    priceFrom: 35,
    minQty: 10,
    materials: ['Acrylic', 'Metal pin'],
    finishes: ['Insert card'],
    isBestseller: true,
  },
  {
    id: 'classic-chalkboard-name-badge',
    name: 'Classic Chalkboard Badge',
    category: 'reusable-badges',
    description: 'Write-on, wipe-off reusable chalkboard-style name badges.',
    longDescription:
      'Our reusable chalkboard badges offer the flexibility of a write-on, wipe-off surface — perfect for events, conferences, schools, and businesses that need a quick name solution without the cost of reprinting. Simply write the name with chalk or chalk markers, then wipe clean and reuse. Eco-friendly, cost-effective, and fun.',
    image: `${BFA}/2024/12/Classic-Insta-Badge-Chalkboard-–-RB-1.png`,
    priceFrom: 40,
    minQty: 10,
    materials: ['Acrylic'],
    finishes: ['Chalkboard surface'],
    isNew: true,
  },
  {
    id: 'button-badge',
    name: 'Button Badge',
    category: 'button-badges',
    description: 'Eye-catching pin-back button badges for events and promotions.',
    longDescription:
      'Transform your message into an eye-catching statement with our button badges. Perfect for events, promotions, campaigns, or personal expression, our durable button badges combine style with lasting impact. Printed in full colour with a pin-back fastening — ideal for brand activations, school spirit, political campaigns, or just spreading a message you believe in. Minimum order of 100 units.',
    image: `${BFA}/2024/12/Budget-Badge-–-BUT.png`,
    priceFrom: 8.5,
    minQty: 100,
    materials: ['Metal', 'Printed insert'],
    finishes: ['Full colour', 'Gloss'],
    isBestseller: true,
  },
  {
    id: 'classic-lapel',
    name: 'Classic Lapel',
    category: 'lapels',
    description: 'Professional acrylic lapel badges in Plexiglass or Trolase.',
    longDescription:
      'Whether you\'re looking for corporate identification, school uniforms, or event badges, our classic lapel designs deliver a professional appearance that lasts. Choose from two premium materials: Plexiglass — lightweight, glossy acrylic that\'s laser engraved and colour-filled for stunning results; and Trolase — premium two-layer acrylic available in glossy, matte, or brushed finishes, creating eye-catching contrast.',
    image: `${BFA}/2024/12/Classic-lapel-Paint-–-CLP.png`,
    priceFrom: 28,
    minQty: 10,
    materials: ['Plexiglass', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
    isBestseller: true,
  },
  {
    id: 'luxe-metal-lapel',
    name: 'Luxe Metal Lapel',
    category: 'lapels',
    description: 'Polished metal lapels with premium resin coating for executive wear.',
    longDescription:
      'Elevate your brand with our Luxe Metal Lapel badges, expertly finished with premium resin. These badges combine polished metal detailing with a flawless resin coating to create truly outstanding pieces. Ideal for executive gifts, prestigious awards, luxury brands, and high-end corporate wear. A statement piece that speaks volumes about your attention to detail.',
    image: `${BFA}/2024/12/Luxe-Metal-Lapel.png`,
    priceFrom: 75,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Resin coated', 'Gold', 'Silver', 'Rose Gold'],
    isBestseller: true,
  },
  {
    id: 'premium-resin-lapel',
    name: 'Premium Resin Lapel',
    category: 'lapels',
    description: 'Crystal-clear resin lapels that add depth and sophistication.',
    longDescription:
      'Transform your design into a stunning masterpiece with our Premium Resin Lapel badges. Each badge is meticulously crafted using crystal-clear resin that adds depth and sophistication to your design. The resin creates a dome effect that makes colours pop and gives the badge a three-dimensional quality unlike any other. Perfect for brands that want to make a real impression.',
    image: `${BFA}/2024/12/Premium-Resin-Lapel-–-PRL.png`,
    priceFrom: 55,
    minQty: 10,
    materials: ['Resin'],
    finishes: ['Full colour', 'Domed resin'],
  },
  {
    id: 'wood-lapel',
    name: 'Wood Lapel',
    category: 'lapels',
    description: 'Natural elegance — eco-friendly lapels in Bamboo, Maple, or Oak.',
    longDescription:
      'Add a touch of natural elegance to your brand with our luxurious wood lapel collection. Crafted from eco-friendly Bamboo, Maple, and Oak, each lapel is precisely laser engraved to bring your logo or design to life with beautiful clarity. A sustainable choice that doesn\'t compromise on style — perfect for eco-conscious brands and nature-inspired organisations.',
    image: `${BFA}/2024/12/Wood-Lapel-–-WL.png`,
    priceFrom: 70,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Laser engraved', 'Natural'],
    isNew: true,
  },
  {
    id: 'bespoke-metal-lapel',
    name: 'Bespoke Metal Lapel',
    category: 'lapels',
    description: 'Prestige lapels for service awards, recognition, and incentive schemes.',
    longDescription:
      'Our Bespoke Metal Lapels are perfect for service awards, recognition events, and incentive schemes. Crafted to the highest standards, each badge can be customised with your exact design, company logo, or award inscription. Add an individual presentation box or a backing card case for that extra-special finish. When recognition truly matters, this is the badge that delivers.',
    image: `${BFA}/2025/01/Bespoke-Metal-lapel-–-BML.png`,
    priceFrom: 120,
    minQty: 5,
    materials: ['Metal'],
    finishes: ['Die-cast', 'Gold', 'Silver', 'Antique'],
  },
  {
    id: 'conference-tags',
    name: 'Conference Tags',
    category: 'tags',
    description: 'Professional ID tags with lanyards for events and conferences.',
    longDescription:
      'We make conference tags and photo IDs simple for everyone — from hospitals and schools to delivery services and universities. Our conference tags are produced quickly, printed in full colour, and come with your choice of lanyard or clip fastening. Need card holders? We\'ve got you covered. Our team takes the hassle out of ID management, making professional identity easy and even enjoyable.',
    image: `${BFA}/2025/02/conference-tag.jpg`,
    priceFrom: 25,
    minQty: 20,
    materials: ['PVC', 'Laminated card'],
    finishes: ['Full colour', 'With lanyard'],
    isBestseller: true,
  },
  {
    id: 'keyring',
    name: 'Corporate Keyring',
    category: 'corporate-gifts',
    description: 'Premium personalised keyrings — corporate gifts that travel everywhere.',
    longDescription:
      'Discover our premium collection of personalised corporate keyrings that go beyond the ordinary. From sleek designs that command attention to stylish keyrings that travel everywhere, our custom accessories are the ultimate way to make your brand memorable. Available in a range of materials including Trolase acrylic, metal, and wood. Corporate gifts that don\'t just impress — they inspire.',
    image: `${BFA}/2025/02/Standard-Front-COR002-Trolase.png`,
    priceFrom: 65,
    minQty: 10,
    materials: ['Trolase', 'Metal', 'Wood'],
    finishes: ['Laser engraved', 'Full colour'],
  },
];

export const categories: { id: Category; label: string; description: string }[] = [
  { id: 'name-badges', label: 'Name Badges', description: 'Classic, metal, resin & wood name badges' },
  { id: 'reusable-badges', label: 'Reusable Badges', description: 'Write-on, wipe-off & insert-card badges' },
  { id: 'button-badges', label: 'Button Badges', description: 'Pin-back badges for events & campaigns' },
  { id: 'lapels', label: 'Lapels', description: 'Classic, metal, resin, wood & bespoke lapels' },
  { id: 'tags', label: 'Conference Tags', description: 'ID tags with lanyards for events' },
  { id: 'corporate-gifts', label: 'Corporate Gifts', description: 'Keyrings, desk plates & branded accessories' },
];
