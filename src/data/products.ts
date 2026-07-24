export type Category =
  | 'name-badges'
  | 'reusable-badges'
  | 'button-badges'
  | 'lapels'
  | 'tags'
  | 'corporate-gifts'
  | 'stickers'
  | 'signs';

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
    id: 'keyring-standard',
    name: 'Classic Keyring',
    category: 'corporate-gifts',
    description: 'Laser-engraved Trolase acrylic keyrings — affordable and fully branded.',
    longDescription:
      'Our Classic Keyrings are crafted from premium Trolase acrylic, laser engraved with your logo, name, or design for a clean, professional finish. Lightweight, durable, and affordable — perfect for large-quantity corporate gifting, events, and promotions. A practical branded accessory your clients and staff will actually use every day.',
    image: `${BFA}/2025/02/Standard-Front-COR002-Trolase.png`,
    priceFrom: 45,
    minQty: 10,
    materials: ['Trolase', 'Plexiglas'],
    finishes: ['Laser engraved', 'Glossy', 'Matte'],
    isBestseller: true,
  },
  {
    id: 'keyring-premium-resin',
    name: 'Premium Resin Keyring',
    category: 'corporate-gifts',
    description: 'Full-colour digital print sealed under crystal-clear resin — a premium gift.',
    longDescription:
      'Our Premium Resin Keyrings feature a vibrant full-colour digital print sealed beneath a crystal-clear resin dome, giving each keyring a polished, three-dimensional finish that stands out. Ideal for luxury brand promotions, high-end corporate gifting, and VIP events. These keyrings make an impression that lasts long after the occasion.',
    image: `${BFA}/2025/02/Premium-Resin-Keyring-–-COR.png`,
    priceFrom: 75,
    minQty: 10,
    materials: ['Resin-coated'],
    finishes: ['Full colour', 'Domed resin', 'Glossy'],
    isNew: true,
  },
  {
    id: 'keyring-bespoke',
    name: 'Bespoke Metal Keyring',
    category: 'corporate-gifts',
    description: 'Die-cast metal keyrings for service awards, recognition, and prestige gifting.',
    longDescription:
      'Our Bespoke Metal Keyrings are crafted for those moments when only the finest will do. Die-cast in your chosen shape and finished in gold, silver, antique, or custom plating, these keyrings are the ultimate recognition gift — perfect for long-service awards, VIP clients, and premium brand launches. Add a presentation box for that extra-special touch.',
    image: `${BFA}/2025/02/Bespoke-Keyring-%E2%80%93-COR.png`,
    priceFrom: 120,
    minQty: 5,
    materials: ['Die-cast metal'],
    finishes: ['Gold', 'Silver', 'Antique', 'Custom plating'],
  },
  {
    id: 'keyring-wood',
    name: 'Wood Keyring',
    category: 'corporate-gifts',
    description: 'Eco-friendly laser-engraved wood keyrings in Bamboo, Maple, or Oak.',
    longDescription:
      'Our Wood Keyrings bring natural warmth to corporate gifting. Crafted from sustainably sourced Bamboo, Maple, or Oak, each keyring is precision laser engraved with your logo or design. Lightweight, unique, and eco-conscious — perfect for green brands, nature-inspired organisations, and anyone who wants a standout gift that tells a story.',
    image: `${BFA}/2025/02/Wood-Keyring-%E2%80%93-COR.png`,
    priceFrom: 65,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Laser engraved', 'Natural'],
    isNew: true,
  },
  {
    id: 'domed-stickers',
    name: 'Domed Stickers',
    category: 'stickers',
    description: 'Full-colour digital print sealed under a crystal-clear resin dome.',
    longDescription:
      'Our Domed Stickers combine vibrant full-colour digital printing with a thick, crystal-clear resin dome — creating a striking, three-dimensional finish that commands attention. Perfect for product branding, vehicle badges, equipment labels, or promotional giveaways. Durable, weatherproof, and built to last, these stickers elevate any surface they\'re applied to.',
    image: `${BFA}/2025/04/Bespoke.png`,
    priceFrom: 12,
    minQty: 50,
    materials: ['Resin-domed'],
    finishes: ['Full colour', 'Domed resin', 'Weatherproof'],
    isNew: true,
  },
  {
    id: 'vinyl-stickers',
    name: 'Vinyl & Self-Adhesive Stickers',
    category: 'stickers',
    description: 'Durable vinyl stickers and self-adhesive labels for any application.',
    longDescription:
      'From product labels to vehicle graphics, our vinyl stickers and self-adhesive labels deliver bold, long-lasting results. Printed in full colour on premium vinyl stock, they\'re UV-resistant, waterproof, and designed to perform in any environment. Available in cut-to-shape, kiss-cut, or sheet format. Ideal for retail branding, packaging, events, and promotional campaigns.',
    image: `${BFA}/2025/04/Button-badges.png`,
    priceFrom: 8,
    minQty: 100,
    materials: ['Vinyl'],
    finishes: ['Full colour', 'Gloss', 'Matte', 'UV-resistant'],
  },
  {
    id: 'custom-signs',
    name: 'Custom Signs & Signage',
    category: 'signs',
    description: 'Branded door signs, bathroom signs, room keys & custom office signage.',
    longDescription:
      'Make every door, room, and corridor speak your brand with our custom signage range. From hotel do-not-disturb signs and bathroom door plates to branded office room signs and no-smoking notices, we produce signage that is both functional and beautifully finished. Available in acrylic, metal, and wood — fully customised with your design, colours, and logo.',
    image: `${BFA}/2025/04/Signage.png`,
    priceFrom: 85,
    minQty: 5,
    materials: ['Acrylic', 'Metal', 'Wood'],
    finishes: ['Laser engraved', 'Full colour', 'Brushed metal'],
    isNew: true,
  },
  {
    id: 'desk-nameplate',
    name: 'Desk Nameplate',
    category: 'signs',
    description: 'Professional desk nameplates for offices, schools, and reception desks.',
    longDescription:
      'Present a polished, professional image with our custom desk nameplates. Available in classic acrylic (Trolase or Plexiglas), brushed metal, and natural wood options, each nameplate is precision laser engraved with your name, title, and company logo. Freestanding with a sturdy base — ideal for executives, receptionists, teachers, and conference tables.',
    image: `${BFA}/2025/04/Name-Badges.png`,
    priceFrom: 95,
    minQty: 1,
    materials: ['Acrylic', 'Metal', 'Wood'],
    finishes: ['Laser engraved', 'Glossy', 'Brushed', 'Natural'],
  },
];

export const categories: { id: Category; label: string; description: string }[] = [
  { id: 'name-badges', label: 'Name Badges', description: 'Classic, metal, resin & wood name badges' },
  { id: 'reusable-badges', label: 'Reusable Badges', description: 'Write-on, wipe-off & insert-card badges' },
  { id: 'button-badges', label: 'Button Badges', description: 'Pin-back badges for events & campaigns' },
  { id: 'lapels', label: 'Lapels', description: 'Classic, metal, resin, wood & bespoke lapels' },
  { id: 'tags', label: 'Conference Tags', description: 'ID tags with lanyards for events' },
  { id: 'corporate-gifts', label: 'Keyrings & Corporate Gifts', description: 'Classic, resin, wood & bespoke metal keyrings' },
  { id: 'stickers', label: 'Stickers & Labels', description: 'Domed stickers, vinyl & self-adhesive labels' },
  { id: 'signs', label: 'Signs & Nameplates', description: 'Custom signage, door signs & desk nameplates' },
];
