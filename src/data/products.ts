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
  size?: string;
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

  /* ── CLASSIC NAME BADGE ─────────────────────────────── */
  {
    id: 'classic-name-badge-small',
    name: 'Classic Name Badge',
    size: 'Small — 25×65 mm',
    category: 'name-badges',
    description: 'Laser-engraved acrylic name badge in Plexiglas or Trolase — compact size.',
    longDescription:
      'The compact 25×65 mm Classic Name Badge is perfect for neat, understated corporate wear. Laser engraved in Plexiglas (lightweight, glossy acrylic) or Trolase (two-layer acrylic in glossy, matte, or brushed finishes). Full-colour branding is not available on this range.',
    image: `${BFA}/2024/12/BFA-web-photo-classic-trolase-and-plexi.png`,
    priceFrom: 42,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
    isBestseller: true,
  },
  {
    id: 'classic-name-badge-standard',
    name: 'Classic Name Badge',
    size: 'Standard — 30×75 mm',
    category: 'name-badges',
    description: 'Laser-engraved acrylic name badge in Plexiglas or Trolase — most popular size.',
    longDescription:
      'The most popular size in the Classic Name Badge range. The 30×75 mm badge offers a great balance of visibility and elegance. Choose Plexiglas for a glossy modern look or Trolase for refined matte and brushed finishes. Each badge is laser engraved and colour-filled to your specification.',
    image: `${BFA}/2024/12/BFA-web-photo-classic-trolase-and-plexi.png`,
    priceFrom: 45,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
    isBestseller: true,
  },
  {
    id: 'classic-name-badge-large',
    name: 'Classic Name Badge',
    size: 'Large — 40×90 mm',
    category: 'name-badges',
    description: 'Laser-engraved acrylic name badge in Plexiglas or Trolase — maximum visibility.',
    longDescription:
      'The 40×90 mm Classic Name Badge is ideal when maximum readability counts — perfect for events, hospitality, and conference wear. Laser engraved in Plexiglas or Trolase with your name, title, and logo. The larger surface area allows for additional branding details without compromising clarity.',
    image: `${BFA}/2024/12/BFA-web-photo-classic-trolase-and-plexi.png`,
    priceFrom: 55,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
  },

  /* ── LUXE METAL NAME BADGE ──────────────────────────── */
  {
    id: 'luxe-metal-name-badge-mini',
    name: 'Luxe Metal Name Badge',
    size: 'Mini — 12×50 mm',
    category: 'name-badges',
    description: 'Premium metal name badge — discreet mini size for executive wear.',
    longDescription:
      'The 12×50 mm Luxe Metal Name Badge is the most discreet option in our premium metal range — sleek, refined, and perfect for executive or formal wear where understatement is key. Crafted in polished or brushed metal and finished to the highest standard.',
    image: `${BFA}/2025/05/Standard-front-LMB010-12x50-metal-silver.png`,
    priceFrom: 82,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Polished', 'Brushed', 'Gold', 'Silver'],
  },
  {
    id: 'luxe-metal-name-badge-slim',
    name: 'Luxe Metal Name Badge',
    size: 'Slim — 16×55 mm',
    category: 'name-badges',
    description: 'Premium metal name badge — slim profile for a sophisticated corporate look.',
    longDescription:
      'The 16×55 mm Luxe Metal Name Badge strikes the perfect balance between discretion and presence. This slim profile is a firm favourite for corporate environments where professionalism speaks quietly. Available in gold, silver, polished, and brushed finishes.',
    image: `${BFA}/2025/05/Standard-front_LMB011-16x55-metal-gold.png`,
    priceFrom: 88,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Polished', 'Brushed', 'Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: 'luxe-metal-name-badge-standard',
    name: 'Luxe Metal Name Badge',
    size: 'Standard — 20×60 mm',
    category: 'name-badges',
    description: 'Premium metal name badge — the most popular size for corporate sophistication.',
    longDescription:
      'The classic 20×60 mm Luxe Metal Name Badge is our best-selling metal badge size. It exudes corporate sophistication and pairs beautifully with any uniform or formal attire. Each badge is expertly finished for a polished appearance that lasts.',
    image: `${BFA}/2025/05/standard-front-LMB012-20x60-meatl-silver.png`,
    priceFrom: 95,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Polished', 'Brushed', 'Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: 'luxe-metal-name-badge-wide',
    name: 'Luxe Metal Name Badge',
    size: 'Wide — 25×65 mm',
    category: 'name-badges',
    description: 'Premium metal name badge — wide format for maximum logo and name visibility.',
    longDescription:
      'The 25×65 mm Luxe Metal Name Badge provides maximum surface area for logos, names, and job titles — ideal for hospitality, retail management, and event professionals who need their branding to shine. Available in gold, silver, polished, and brushed finishes.',
    image: `${BFA}/2025/05/standard-front-LMB013-25x65-gold.png`,
    priceFrom: 105,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Polished', 'Brushed', 'Gold', 'Silver'],
  },

  /* ── PREMIUM RESIN NAME BADGE ───────────────────────── */
  {
    id: 'premium-resin-name-badge-standard',
    name: 'Premium Resin Name Badge',
    size: 'Standard — 30×75 mm',
    category: 'name-badges',
    description: 'Full-colour digital print sealed under crystal-clear resin — standard size.',
    longDescription:
      'The 30×75 mm Premium Resin Name Badge is our most popular full-colour option. A vibrant digital print is sealed under a crystal-clear resin coating for a sleek, polished finish that showcases your brand at its very best. Built to last and stunning at every angle.',
    image: `${BFA}/2024/12/Premium-Resin-Name-Badge-%E2%80%93-PRB.png`,
    priceFrom: 62,
    minQty: 10,
    materials: ['Resin-coated'],
    finishes: ['Full colour', 'Glossy resin'],
    isBestseller: true,
  },
  {
    id: 'premium-resin-name-badge-large',
    name: 'Premium Resin Name Badge',
    size: 'Large — 40×90 mm',
    category: 'name-badges',
    description: 'Full-colour digital print sealed under crystal-clear resin — large format.',
    longDescription:
      'The 40×90 mm Premium Resin Name Badge gives your full-colour artwork the room it deserves. A large, vivid print protected by a thick crystal-clear resin dome creates an impression of absolute quality. Perfect for events, hospitality, and premium brand activations.',
    image: `${BFA}/2024/12/Premium-Resin-Name-Badge-%E2%80%93-PRB.png`,
    priceFrom: 75,
    minQty: 10,
    materials: ['Resin-coated'],
    finishes: ['Full colour', 'Glossy resin'],
  },

  /* ── WOOD NAME BADGE ────────────────────────────────── */
  {
    id: 'wood-name-badge-standard',
    name: 'Wood Name Badge',
    size: 'Standard — 30×75 mm',
    category: 'name-badges',
    description: 'Eco-friendly laser-engraved badge in Bamboo, Maple, or Oak — standard size.',
    longDescription:
      'The 30×75 mm Wood Name Badge brings natural warmth to professional wear. Crafted from sustainably sourced Bamboo, Maple, or Oak, each badge is laser engraved to perfection. A sustainable choice that makes your brand stand out in the most natural way.',
    image: `${BFA}/2025/01/WB004-01.png`,
    priceFrom: 82,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Natural', 'Laser engraved'],
    isNew: true,
  },
  {
    id: 'wood-name-badge-large',
    name: 'Wood Name Badge',
    size: 'Large — 40×90 mm',
    category: 'name-badges',
    description: 'Eco-friendly laser-engraved badge in Bamboo, Maple, or Oak — large size.',
    longDescription:
      'The 40×90 mm Wood Name Badge offers maximum engraving space for detailed logos and multi-line text. Available in Bamboo, Maple, and Oak — each with a unique natural grain. Sustainably sourced and finished to a high standard, these large badges make a lasting, eco-conscious impression.',
    image: `${BFA}/2025/01/WB005-01.png`,
    priceFrom: 95,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Natural', 'Laser engraved'],
    isNew: true,
  },

  /* ── PHOTO ID ───────────────────────────────────────── */
  {
    id: 'photo-id-standard',
    name: 'Photo ID Name Badge',
    size: 'Standard — 25×75 mm',
    category: 'name-badges',
    description: 'Custom photo ID badge — standard portrait size for businesses and organisations.',
    longDescription:
      'Our 25×75 mm Photo ID Name Badge is the go-to for businesses, events, hospitals, and schools. Full-colour print with photo, name, title, and logo on durable PVC. Available with a pin, clip, or lanyard slot. We make ID management simple and professional.',
    image: `${BFA}/2025/10/PID002-white-sample-01-01.png`,
    priceFrom: 52,
    minQty: 10,
    materials: ['PVC', 'Laminated'],
    finishes: ['Full colour'],
  },
  {
    id: 'photo-id-credit-card',
    name: 'Photo ID Name Badge',
    size: 'Card Size — 86×54 mm',
    category: 'name-badges',
    description: 'Custom photo ID in standard credit-card format — wallet-friendly and professional.',
    longDescription:
      'The 86×54 mm Photo ID badge matches standard credit-card size — perfect for ID card holders, lanyards, and wallet use. Printed in full colour on durable PVC with your photo, name, title, and logo. A professional, secure identity solution for any organisation.',
    image: `${BFA}/2025/10/PID002-gold-01.png`,
    priceFrom: 58,
    minQty: 10,
    materials: ['PVC', 'Laminated'],
    finishes: ['Full colour'],
    isBestseller: true,
  },

  /* ── CLASSIC INSTA BADGE (REUSABLE) ─────────────────── */
  {
    id: 'classic-insta-badge-small',
    name: 'Classic Insta Badge',
    size: 'Small — 25×65 mm',
    category: 'reusable-badges',
    description: 'Reusable window-insert badge — compact size for smaller name card inserts.',
    longDescription:
      'The small 25×65 mm Classic Insta Badge is our most compact reusable option — ideal where a discreet badge is preferred. Slide in a new name card whenever staff change. No reprinting, no waste, no fuss. An affordable and flexible badging solution.',
    image: `${BFA}/2025/01/standard-front-RB0008-25x65-chalk.png`,
    priceFrom: 32,
    minQty: 10,
    materials: ['Acrylic', 'Metal pin'],
    finishes: ['Insert card'],
  },
  {
    id: 'classic-insta-badge-standard',
    name: 'Classic Insta Badge',
    size: 'Standard — 30×75 mm',
    category: 'reusable-badges',
    description: 'Reusable window-insert badge — most popular size for dynamic teams.',
    longDescription:
      'The 30×75 mm Classic Insta Badge is our best-selling reusable badge — a game-changer for companies with dynamic workforces, events, or conferences. Simply slide in a new name card whenever staff change — no reprinting, no waste, no fuss. A smart, cost-effective solution.',
    image: `${BFA}/2025/01/Standard-front-RB0001-30x65-gold.png`,
    priceFrom: 35,
    minQty: 10,
    materials: ['Acrylic', 'Metal pin'],
    finishes: ['Insert card'],
    isBestseller: true,
  },
  {
    id: 'classic-insta-badge-large',
    name: 'Classic Insta Badge',
    size: 'Large — 35×75 mm',
    category: 'reusable-badges',
    description: 'Reusable window-insert badge — large size for maximum name visibility.',
    longDescription:
      'The 35×75 mm Classic Insta Badge is our largest reusable option — perfect for events and conferences where name readability from a distance matters. The wide format fits more text and larger print, while still accepting standard insert cards. Reuse indefinitely.',
    image: `${BFA}/2025/01/standard-front-RB0005-35x75-white.png`,
    priceFrom: 40,
    minQty: 10,
    materials: ['Acrylic', 'Metal pin'],
    finishes: ['Insert card'],
  },

  /* ── CLASSIC CHALKBOARD BADGE ───────────────────────── */
  {
    id: 'chalkboard-badge-small',
    name: 'Classic Chalkboard Badge',
    size: 'Small — 25×65 mm',
    category: 'reusable-badges',
    description: 'Write-on, wipe-off chalkboard name badge — compact size.',
    longDescription:
      'The compact 25×65 mm Chalkboard Badge offers a write-on, wipe-off surface perfect for quick events, classes, and informal networking. Write names with chalk or chalk markers, then wipe clean and reuse. Eco-friendly, cost-effective, and fun.',
    image: `${BFA}/2025/01/standard-front-RB0008-25x65-chalk.png`,
    priceFrom: 36,
    minQty: 10,
    materials: ['Acrylic'],
    finishes: ['Chalkboard surface'],
    isNew: true,
  },
  {
    id: 'chalkboard-badge-standard',
    name: 'Classic Chalkboard Badge',
    size: 'Standard — 30×75 mm',
    category: 'reusable-badges',
    description: 'Write-on, wipe-off chalkboard name badge — standard size, maximum versatility.',
    longDescription:
      'The 30×75 mm Chalkboard Badge is the most versatile reusable option we offer. Its generous write-on, wipe-off surface handles names, job titles, even short messages. Perfect for events, conferences, schools, and businesses that need a quick name solution without the cost of reprinting.',
    image: `${BFA}/2025/01/standard-front-RB0009-25x75-chalk.png`,
    priceFrom: 40,
    minQty: 10,
    materials: ['Acrylic'],
    finishes: ['Chalkboard surface'],
    isNew: true,
  },

  /* ── BUTTON BADGES ──────────────────────────────────── */
  {
    id: 'button-badge-25mm',
    name: 'Button Badge',
    size: '25 mm Round',
    category: 'button-badges',
    description: 'Compact 25 mm pin-back button badge — great for subtle branding.',
    longDescription:
      'Our 25 mm Button Badge is the smallest and most affordable in the range — ideal for subtle branding, lapel pins, or high-volume giveaways. Printed in full colour with a pin-back fastening. Perfect for brand activations, school events, and campaigns.',
    image: `${BFA}/2025/01/button-badge-mockup-01-01-01.png`,
    priceFrom: 6.50,
    minQty: 100,
    materials: ['Metal', 'Printed insert'],
    finishes: ['Full colour', 'Gloss'],
  },
  {
    id: 'button-badge-38mm',
    name: 'Button Badge',
    size: '38 mm Round',
    category: 'button-badges',
    description: 'Most popular 38 mm pin-back button badge — the ideal all-rounder.',
    longDescription:
      'The 38 mm Button Badge is the most popular size in our range — large enough to read easily, small enough to wear comfortably. Perfect for events, promotions, campaigns, or personal expression. Printed in full colour with a durable pin-back fastening.',
    image: `${BFA}/2024/12/Budget-Badge-%E2%80%93-BUT.png`,
    priceFrom: 8.50,
    minQty: 100,
    materials: ['Metal', 'Printed insert'],
    finishes: ['Full colour', 'Gloss'],
    isBestseller: true,
  },
  {
    id: 'button-badge-44mm',
    name: 'Button Badge',
    size: '44 mm Round',
    category: 'button-badges',
    description: 'Bold 44 mm pin-back button badge — great for events and political campaigns.',
    longDescription:
      'The 44 mm Button Badge commands attention. The larger print surface gives your artwork room to breathe — ideal for political campaigns, school spirit, charity events, and brand activations where visibility is key. Full colour, pin-back, durable.',
    image: `${BFA}/2025/04/Button-badges.png`,
    priceFrom: 10,
    minQty: 100,
    materials: ['Metal', 'Printed insert'],
    finishes: ['Full colour', 'Gloss'],
    isBestseller: true,
  },
  {
    id: 'button-badge-58mm',
    name: 'Button Badge',
    size: '58 mm Round',
    category: 'button-badges',
    description: 'Large 58 mm pin-back button badge — maximum impact for bold messages.',
    longDescription:
      'The 58 mm Button Badge is our largest and most impactful round badge. When you need your message seen from across the room, this is the one. Vivid full-colour print with a reliable pin-back fastening. Ideal for rallies, large events, and bold promotional campaigns.',
    image: `${BFA}/2024/12/Budget-Badge-%E2%80%93-BUT.png`,
    priceFrom: 12,
    minQty: 100,
    materials: ['Metal', 'Printed insert'],
    finishes: ['Full colour', 'Gloss'],
  },

  /* ── CLASSIC LAPEL ──────────────────────────────────── */
  {
    id: 'classic-lapel-20mm',
    name: 'Classic Lapel',
    size: '20 mm Round',
    category: 'lapels',
    description: 'Professional acrylic lapel badge in Plexiglas or Trolase — compact 20 mm.',
    longDescription:
      'The 20 mm Classic Lapel is our most discreet lapel badge — perfect for school uniforms, corporate staff wear, and anywhere a subtle badge is preferred. Laser engraved in Plexiglas or Trolase with your school crest, company logo, or award design.',
    image: `${BFA}/2024/12/Classic-lapel-Paint-%E2%80%93-CLP.png`,
    priceFrom: 25,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
  },
  {
    id: 'classic-lapel-25mm',
    name: 'Classic Lapel',
    size: '25 mm Round',
    category: 'lapels',
    description: 'Professional acrylic lapel badge in Plexiglas or Trolase — popular 25 mm.',
    longDescription:
      'The 25 mm Classic Lapel is our most popular lapel size — an excellent balance of presence and elegance. Available in Plexiglas (glossy, laser engraved) or Trolase (two-layer acrylic in glossy, matte, or brushed finishes). Perfect for corporate identification, school uniforms, and events.',
    image: `${BFA}/2024/12/Classic-lapel-Paint-%E2%80%93-CLP.png`,
    priceFrom: 28,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
    isBestseller: true,
  },
  {
    id: 'classic-lapel-35mm',
    name: 'Classic Lapel',
    size: '35 mm Round',
    category: 'lapels',
    description: 'Professional acrylic lapel badge in Plexiglas or Trolase — large 35 mm.',
    longDescription:
      'The 35 mm Classic Lapel is our largest standard lapel badge, ideal where maximum logo detail and readability matter — school prefects, senior staff, event organisers. Laser engraved in Plexiglas or Trolase and colour-filled for stunning clarity.',
    image: `${BFA}/2024/12/CLASSIC-LAPEL-TROLASE.jpg`,
    priceFrom: 35,
    minQty: 10,
    materials: ['Plexiglas', 'Trolase'],
    finishes: ['Glossy', 'Matte', 'Brushed'],
  },

  /* ── LUXE METAL LAPEL ───────────────────────────────── */
  {
    id: 'luxe-metal-lapel-standard',
    name: 'Luxe Metal Lapel',
    size: 'Standard — 25 mm',
    category: 'lapels',
    description: 'Polished metal lapel with premium resin coating — standard 25 mm size.',
    longDescription:
      'The 25 mm Luxe Metal Lapel combines polished metal detailing with a flawless resin coating. The perfect prestige lapel badge for executive wear, luxury brands, and high-end corporate gifting. Understated yet unmistakably premium.',
    image: `${BFA}/2024/12/Luxe-Metal-Lapel.png`,
    priceFrom: 72,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Resin coated', 'Gold', 'Silver', 'Rose Gold'],
    isBestseller: true,
  },
  {
    id: 'luxe-metal-lapel-large',
    name: 'Luxe Metal Lapel',
    size: 'Large — 35 mm',
    category: 'lapels',
    description: 'Polished metal lapel with premium resin coating — statement-making 35 mm size.',
    longDescription:
      'The 35 mm Luxe Metal Lapel makes a statement. The larger surface area allows for more detailed artwork and a bolder presence on any lapel or blazer. Finished with a flawless resin coating in gold, silver, or rose gold — ideal for awards nights and VIP recognition.',
    image: `${BFA}/2024/12/Luxe-Metal-Lapel.png`,
    priceFrom: 85,
    minQty: 10,
    materials: ['Metal'],
    finishes: ['Resin coated', 'Gold', 'Silver', 'Rose Gold'],
  },

  /* ── PREMIUM RESIN LAPEL ────────────────────────────── */
  {
    id: 'premium-resin-lapel-25mm',
    name: 'Premium Resin Lapel',
    size: '25 mm Round',
    category: 'lapels',
    description: 'Crystal-clear domed resin lapel that makes colours pop — 25 mm.',
    longDescription:
      'The 25 mm Premium Resin Lapel is a refined, vibrant badge with a crystal-clear resin dome that creates a three-dimensional depth effect. Full-colour artwork sealed under the dome looks stunning on any uniform. Ideal for brands that want a real impression in a compact format.',
    image: `${BFA}/2024/12/Premium-Resin-Lapel-%E2%80%93-PRL.png`,
    priceFrom: 50,
    minQty: 10,
    materials: ['Resin'],
    finishes: ['Full colour', 'Domed resin'],
  },
  {
    id: 'premium-resin-lapel-35mm',
    name: 'Premium Resin Lapel',
    size: '35 mm Round',
    category: 'lapels',
    description: 'Crystal-clear domed resin lapel that makes colours pop — bold 35 mm.',
    longDescription:
      'The 35 mm Premium Resin Lapel gives your artwork maximum room to shine. The thick crystal-clear dome creates striking depth and dimension, making colours vivid and designs pop. The premium choice for full-colour lapel badges that demand attention.',
    image: `${BFA}/2024/12/Premium-Resin-Lapel-%E2%80%93-PRL.png`,
    priceFrom: 62,
    minQty: 10,
    materials: ['Resin'],
    finishes: ['Full colour', 'Domed resin'],
    isBestseller: true,
  },

  /* ── WOOD LAPEL ─────────────────────────────────────── */
  {
    id: 'wood-lapel-35mm',
    name: 'Wood Lapel',
    size: '35 mm Round',
    category: 'lapels',
    description: 'Eco-friendly laser-engraved lapel in Bamboo, Maple, or Oak — 35 mm.',
    longDescription:
      'The 35 mm Wood Lapel adds natural elegance to any uniform. Crafted from eco-friendly Bamboo, Maple, or Oak, each lapel is precisely laser engraved with your logo or design. A sustainable choice that makes your brand stand out in the most natural way.',
    image: `${BFA}/2024/12/Wood-Lapel-%E2%80%93-WL.png`,
    priceFrom: 65,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Laser engraved', 'Natural'],
    isNew: true,
  },
  {
    id: 'wood-lapel-40mm',
    name: 'Wood Lapel',
    size: '40 mm Round',
    category: 'lapels',
    description: 'Eco-friendly laser-engraved lapel in Bamboo, Maple, or Oak — large 40 mm.',
    longDescription:
      'The 40 mm Wood Lapel is our largest eco lapel — giving your artwork and logo maximum engraving space on a rich natural canvas. Available in Bamboo, Maple, or Oak. Each piece is unique in grain and warmth. A luxurious, sustainable statement badge.',
    image: `${BFA}/2025/01/standard-front-WL0005-40-wood.png`,
    priceFrom: 78,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Laser engraved', 'Natural'],
    isNew: true,
  },

  /* ── BESPOKE METAL LAPEL ────────────────────────────── */
  {
    id: 'bespoke-metal-lapel',
    name: 'Bespoke Metal Lapel',
    size: 'Custom shape & size',
    category: 'lapels',
    description: 'Prestige die-cast lapels for service awards, recognition, and incentive schemes.',
    longDescription:
      'Our Bespoke Metal Lapels are perfect for service awards, recognition events, and incentive schemes. Die-cast to your exact shape and size in any custom design. Available in gold, silver, or antique finishes. Add an individual presentation box or backing card case for that extra-special finish. When recognition truly matters, this is the badge that delivers.',
    image: `${BFA}/2025/01/Bespoke-Metal-lapel-%E2%80%93-BML.png`,
    priceFrom: 120,
    minQty: 5,
    materials: ['Metal'],
    finishes: ['Die-cast', 'Gold', 'Silver', 'Antique'],
  },

  /* ── CONFERENCE TAGS ────────────────────────────────── */
  {
    id: 'conference-tags',
    name: 'Conference Tags',
    size: 'Standard with lanyard',
    category: 'tags',
    description: 'Professional full-colour ID tags with lanyards for events and conferences.',
    longDescription:
      'We make conference tags and photo IDs simple for everyone — from hospitals and schools to delivery services and universities. Our conference tags are produced quickly, printed in full colour, and come with your choice of lanyard or clip fastening. Need card holders? We\'ve got you covered.',
    image: `${BFA}/2025/02/conference-tag.jpg`,
    priceFrom: 25,
    minQty: 20,
    materials: ['PVC', 'Laminated card'],
    finishes: ['Full colour', 'With lanyard'],
    isBestseller: true,
  },

  /* ── CORPORATE GIFTS / KEYRINGS ─────────────────────── */
  {
    id: 'keyring-standard',
    name: 'Classic Keyring',
    size: 'Trolase Acrylic',
    category: 'corporate-gifts',
    description: 'Laser-engraved Trolase acrylic keyring — affordable and fully branded.',
    longDescription:
      'Our Classic Keyrings are crafted from premium Trolase acrylic, laser engraved with your logo, name, or design for a clean, professional finish. Lightweight, durable, and affordable — perfect for large-quantity corporate gifting, events, and promotions.',
    image: `${BFA}/2025/02/Standard-Front-COR002-Trolase.png`,
    priceFrom: 45,
    minQty: 10,
    materials: ['Trolase', 'Plexiglas'],
    finishes: ['Laser engraved', 'Glossy', 'Matte'],
    isBestseller: true,
  },
  {
    id: 'keyring-wood',
    name: 'Wood Keyring',
    size: 'Bamboo / Maple / Oak',
    category: 'corporate-gifts',
    description: 'Eco-friendly laser-engraved wood keyrings — natural and distinctive.',
    longDescription:
      'Our Wood Keyrings bring natural warmth to corporate gifting. Crafted from sustainably sourced Bamboo, Maple, or Oak, each keyring is precision laser engraved with your logo or design. Lightweight, unique, and eco-conscious — perfect for green brands and anyone who wants a standout gift.',
    image: `${BFA}/2025/02/Wood-Keyring-%E2%80%93-COR.png`,
    priceFrom: 65,
    minQty: 10,
    materials: ['Bamboo', 'Maple', 'Oak'],
    finishes: ['Laser engraved', 'Natural'],
    isNew: true,
  },
  {
    id: 'keyring-premium-resin',
    name: 'Premium Resin Keyring',
    size: 'Domed resin finish',
    category: 'corporate-gifts',
    description: 'Full-colour digital print sealed under crystal-clear resin — a premium gift.',
    longDescription:
      'Our Premium Resin Keyrings feature a vibrant full-colour digital print sealed beneath a crystal-clear resin dome, giving each keyring a polished, three-dimensional finish that stands out. Ideal for luxury brand promotions, high-end corporate gifting, and VIP events.',
    image: `${BFA}/2025/02/Premium-Resin-Keyring-%E2%80%93-COR.png`,
    priceFrom: 75,
    minQty: 10,
    materials: ['Resin-coated'],
    finishes: ['Full colour', 'Domed resin', 'Glossy'],
    isNew: true,
  },
  {
    id: 'keyring-bespoke',
    name: 'Bespoke Metal Keyring',
    size: 'Die-cast custom shape',
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

  /* ── STICKERS ───────────────────────────────────────── */
  {
    id: 'domed-stickers-25mm',
    name: 'Domed Stickers',
    size: '25 mm Round',
    category: 'stickers',
    description: 'Full-colour print under a crystal-clear resin dome — compact 25 mm.',
    longDescription:
      'Our 25 mm Domed Stickers combine vibrant full-colour printing with a thick, crystal-clear resin dome for a striking three-dimensional finish. Perfect for product branding, vehicle badges, and promotional giveaways. Durable and weatherproof.',
    image: `${BFA}/2025/04/Bespoke.png`,
    priceFrom: 10,
    minQty: 50,
    materials: ['Resin-domed'],
    finishes: ['Full colour', 'Domed resin', 'Weatherproof'],
    isNew: true,
  },
  {
    id: 'domed-stickers-50mm',
    name: 'Domed Stickers',
    size: '50 mm Round',
    category: 'stickers',
    description: 'Full-colour print under a crystal-clear resin dome — bold 50 mm.',
    longDescription:
      'The 50 mm Domed Sticker is our most popular size — large enough to showcase detailed artwork while maintaining a sleek, professional finish. The crystal-clear resin dome creates a striking, three-dimensional effect that elevates any surface it\'s applied to. UV-resistant and built for outdoor use.',
    image: `${BFA}/2025/04/Bespoke.png`,
    priceFrom: 14,
    minQty: 50,
    materials: ['Resin-domed'],
    finishes: ['Full colour', 'Domed resin', 'Weatherproof'],
    isNew: true,
  },
  {
    id: 'vinyl-stickers',
    name: 'Vinyl & Self-Adhesive Stickers',
    size: 'Custom cut-to-shape',
    category: 'stickers',
    description: 'Durable vinyl stickers and self-adhesive labels for any application.',
    longDescription:
      'From product labels to vehicle graphics, our vinyl stickers and self-adhesive labels deliver bold, long-lasting results. Printed in full colour on premium vinyl stock — UV-resistant, waterproof, and designed to perform in any environment. Available in cut-to-shape, kiss-cut, or sheet format.',
    image: `${BFA}/2025/04/Button-badges.png`,
    priceFrom: 8,
    minQty: 100,
    materials: ['Vinyl'],
    finishes: ['Full colour', 'Gloss', 'Matte', 'UV-resistant'],
  },

  /* ── SIGNS ──────────────────────────────────────────── */
  {
    id: 'custom-signs',
    name: 'Custom Signs & Signage',
    size: 'Custom size & material',
    category: 'signs',
    description: 'Branded door signs, bathroom signs, room keys & custom office signage.',
    longDescription:
      'Make every door, room, and corridor speak your brand with our custom signage range. From hotel do-not-disturb signs and bathroom door plates to branded office room signs and no-smoking notices, we produce signage in acrylic, metal, and wood — fully customised with your design, colours, and logo.',
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
    size: 'Freestanding with base',
    category: 'signs',
    description: 'Professional freestanding desk nameplates for offices, schools, and reception desks.',
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
  { id: 'name-badges', label: 'Name Badges', description: 'Classic, metal, resin & wood — multiple sizes' },
  { id: 'reusable-badges', label: 'Reusable Badges', description: 'Write-on/wipe-off & insert-card badges' },
  { id: 'button-badges', label: 'Button Badges', description: '25 mm, 38 mm, 44 mm & 58 mm pin-back badges' },
  { id: 'lapels', label: 'Lapels', description: 'Classic, metal, resin, wood & bespoke lapels' },
  { id: 'tags', label: 'Conference Tags', description: 'Full-colour ID tags with lanyards for events' },
  { id: 'corporate-gifts', label: 'Keyrings & Corporate Gifts', description: 'Classic, resin, wood & bespoke metal keyrings' },
  { id: 'stickers', label: 'Stickers & Labels', description: 'Domed stickers, vinyl & self-adhesive labels' },
  { id: 'signs', label: 'Signs & Nameplates', description: 'Custom signage, door signs & desk nameplates' },
];
