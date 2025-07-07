
import { Product } from "@/types/Product";

export const products: Product[] = [
  // Countertops
  {
    id: 1,
    title: "Charcoal Kitchen Counter",
    category: "Countertops",
    subcategory: "Kitchen",
    description:
      "Stunning charcoal-finished concrete kitchen countertop with subtle texture variations that create depth and sophistication.",
    dimensions: '120" W x 26" D x 2.5" H',
    material: "High-performance concrete blend with charcoal pigmentation",
    color: "#2d2d2d",
  },
  {
    id: 2,
    title: "Copper Patina Bar Top",
    category: "Countertops",
    subcategory: "Bar Tops",
    description:
      "Elegant concrete bar top with copper patina finish that develops character over time, featuring integrated drainboard.",
    dimensions: '96" W x 20" D x 2" H',
    material: "Concrete with copper powder and reactive patina solution",
    color: "#b87333",
  },
  {
    id: 3,
    title: "Weathered Patio Counter",
    category: "Countertops",
    subcategory: "Patio",
    description:
      "Weather-resistant concrete patio countertop with natural stone aggregate and sealed finish.",
    dimensions: '84" W x 30" D x 3" H',
    material: "Weather-resistant concrete with hydrophobic coating",
    color: "#967969",
  },
  {
    id: 4,
    title: "Commercial Service Counter",
    category: "Countertops",
    subcategory: "Service",
    description:
      "Heavy-duty concrete service counter designed for high-traffic commercial environments.",
    dimensions: '144" W x 36" D x 4" H',
    material: "Reinforced concrete with steel mesh and industrial sealant",
    color: "#4169E1",
  },
  
  // Bathroom
  {
    id: 5,
    title: "Smoky Orange Vanity",
    category: "Bathroom",
    subcategory: "Vanities",
    description:
      "Contemporary concrete vanity top featuring warm smoky orange tones with integrated sink basin and seamless edges.",
    dimensions: '60" W x 22" D x 3" H',
    material: "GFRC (Glass Fiber Reinforced Concrete) with mineral pigments",
    color: "#F28C28",
  },
  {
    id: 6,
    title: "Integrated Concrete Sink",
    category: "Bathroom",
    subcategory: "Sinks",
    description:
      "Seamless concrete sink with smooth interior finish and modern geometric form.",
    dimensions: '24" W x 18" D x 6" H',
    material: "Fine aggregate concrete with diamond polished interior",
    color: "#a8c3bc",
  },
  {
    id: 7,
    title: "ADA Compliant Vanity",
    category: "Bathroom",
    subcategory: "ADA Compliant",
    description:
      "Accessible concrete vanity designed to meet ADA requirements with knee clearance and comfortable height.",
    dimensions: '48" W x 19" D x 32" H',
    material: "Lightweight concrete composite with safety edges",
    color: "#50C878",
  },

  // Fireplaces
  {
    id: 8,
    title: "Modern Fireplace Surround",
    category: "Fireplaces",
    subcategory: "Surrounds",
    description:
      "Sleek concrete fireplace surround with clean lines and contemporary styling.",
    dimensions: '72" W x 48" H x 12" D',
    material: "High-temperature concrete with fiber reinforcement",
    color: "#2d2d2d",
  },
  {
    id: 9,
    title: "Rustic Stone Mantel",
    category: "Fireplaces",
    subcategory: "Mantels",
    description:
      "Hand-crafted concrete mantel with rustic stone texture and natural color variations.",
    dimensions: '84" W x 8" H x 10" D',
    material: "Stamped concrete with natural stone aggregate",
    color: "#967969",
  },
  {
    id: 10,
    title: "Extended Fireplace Hearth",
    category: "Fireplaces",
    subcategory: "Hearths",
    description:
      "Large concrete hearth with smooth finish and integrated safety features.",
    dimensions: '96" W x 24" D x 4" H',
    material: "Fire-resistant concrete with safety sealant",
    color: "#a8a8a8",
  },

  // Landscaping
  {
    id: 11,
    title: "Pool Deck Capstone",
    category: "Landscaping",
    subcategory: "Capstones",
    description:
      "Elegant concrete capstone for pool decks and retaining walls with slip-resistant finish.",
    dimensions: '48" W x 12" D x 3" H',
    material: "Weather-resistant concrete with slip-resistant texture",
    color: "#a8c3bc",
  },
  {
    id: 12,
    title: "Zen Garden Planter",
    category: "Landscaping",
    subcategory: "Planters",
    description:
      "Large-scale concrete planter with integrated water feature and modern architectural styling.",
    dimensions: '72" W x 18" D x 24" H',
    material: "Weather-resistant concrete with hydrophobic coating",
    color: "#50C878",
  },
  {
    id: 13,
    title: "Garden Bench",
    category: "Landscaping",
    subcategory: "Benches",
    description:
      "Comfortable concrete bench with ergonomic design and weather-resistant finish.",
    dimensions: '60" W x 18" D x 18" H',
    material: "Reinforced concrete with smooth finish",
    color: "#967969",
  },

  // Fire Features
  {
    id: 14,
    title: "Modern Fire Bowl",
    category: "Fire Features",
    subcategory: "Fire Bowls",
    description:
      "Contemporary concrete fire bowl with clean lines and weather-resistant finish, perfect for outdoor entertaining.",
    dimensions: '48" Diameter x 16" H',
    material: "High-temperature concrete with fiber reinforcement",
    color: "#D2042D",
  },
  {
    id: 15,
    title: "Fire Table",
    category: "Fire Features",
    subcategory: "Tables",
    description:
      "Multi-functional concrete fire table with integrated seating area and safety features.",
    dimensions: '60" W x 30" D x 24" H',
    material: "Fire-resistant concrete with steel reinforcement",
    color: "#2d2d2d",
  },
  {
    id: 16,
    title: "Decorative Fire Pot",
    category: "Fire Features",
    subcategory: "Pots",
    description:
      "Artistic concrete fire pot with unique sculptural form and efficient burning design.",
    dimensions: '24" Diameter x 20" H',
    material: "High-temperature concrete with artistic finish",
    color: "#b87333",
  },

  // Shower Systems
  {
    id: 17,
    title: "Custom Shower Floor Pan",
    category: "Shower Systems",
    subcategory: "Floor Pans",
    description:
      "Seamless concrete shower floor pan with integrated drainage and slip-resistant surface.",
    dimensions: '48" W x 36" D x 2" H',
    material: "Waterproof concrete with antimicrobial coating",
    color: "#a8a8a8",
  },
  {
    id: 18,
    title: "Textured Wall Tiles",
    category: "Shower Systems",
    subcategory: "Wall Tiles",
    description:
      "Large format concrete wall tiles with subtle texture and water-resistant finish.",
    dimensions: '24" W x 48" H x 0.5" D per tile',
    material: "Lightweight concrete with waterproof sealant",
    color: "#a8c3bc",
  },

  // Furniture
  {
    id: 19,
    title: "Minimalist Coffee Table",
    category: "Furniture",
    subcategory: "Tables",
    description:
      "Sleek concrete coffee table with subtle geometric form and smooth polished surface.",
    dimensions: '54" W x 24" D x 16" H',
    material: "Fine aggregate concrete with diamond polished finish",
    color: "#a8a8a8",
  },
  {
    id: 20,
    title: "Dining Table",
    category: "Furniture",
    subcategory: "Dining",
    description:
      "Large concrete dining table with integrated steel base and sophisticated finish.",
    dimensions: '96" W x 42" D x 30" H',
    material: "Reinforced concrete with steel framework",
    color: "#2d2d2d",
  },
  {
    id: 21,
    title: "Conference Table",
    category: "Furniture",
    subcategory: "Conference",
    description:
      "Professional concrete conference table with integrated cable management and modern styling.",
    dimensions: '144" W x 48" D x 30" H',
    material: "Commercial-grade concrete with integrated technology",
    color: "#4169E1",
  },
  {
    id: 22,
    title: "Patio Dining Set",
    category: "Furniture",
    subcategory: "Patio",
    description:
      "Weather-resistant concrete patio table with matching benches and integrated umbrella mount.",
    dimensions: '72" W x 40" D x 30" H',
    material: "Weather-resistant concrete with UV protection",
    color: "#50C878",
  },

  // Range Hoods
  {
    id: 23,
    title: "Custom Range Hood",
    category: "Range Hoods",
    subcategory: "",
    description:
      "Bespoke concrete range hood with integrated ventilation and modern architectural design.",
    dimensions: '48" W x 24" D x 36" H',
    material: "Heat-resistant concrete with integrated ventilation system",
    color: "#F28C28",
  },

  // Stair Treads  
  {
    id: 24,
    title: "Modern Stair Treads",
    category: "Stair Treads",
    subcategory: "",
    description:
      "Contemporary concrete stair treads with anti-slip surface and clean architectural lines.",
    dimensions: '48" W x 12" D x 2" H per tread',
    material: "High-strength concrete with anti-slip texture",
    color: "#967969",
  },
];
