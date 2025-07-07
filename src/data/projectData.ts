import wallPanels1 from "@/assets/wall-panels-1.jpg";
import wallPanels2 from "@/assets/wall-panels-2.jpg";
import wallPanels3 from "@/assets/wall-panels-3.jpg";
import vanities1 from "@/assets/vanities-1.jpg";
import vanities2 from "@/assets/vanities-2.jpg";
import vanities3 from "@/assets/vanities-3.jpg";
import tables1 from "@/assets/tables-1.jpg";
import tables2 from "@/assets/tables-2.jpg";
import tables3 from "@/assets/tables-3.jpg";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  images: string[];
  detailedDescription: string;
}

export const projectsData: Record<string, ProjectData> = {
  "wall-panels": {
    id: "wall-panels",
    title: "Wall Panels",
    description: "Custom concrete wall panel installations",
    images: [wallPanels1, wallPanels2, wallPanels3],
    detailedDescription: "Our custom concrete wall panels provide a modern, sophisticated look for any interior or exterior space. Each panel is crafted with precision and attention to detail, offering both aesthetic appeal and durability."
  },
  "vanities": {
    id: "vanities",
    title: "Vanities",
    description: "Bespoke concrete bathroom vanities",
    images: [vanities1, vanities2, vanities3],
    detailedDescription: "Transform your bathroom with our custom concrete vanities. Each piece is designed to perfectly fit your space while providing a unique, luxurious feel that combines functionality with stunning visual appeal."
  },
  "tables": {
    id: "tables",
    title: "Tables",
    description: "Custom concrete table designs",
    images: [tables1, tables2, tables3],
    detailedDescription: "Our custom concrete tables are perfect for dining rooms, conference rooms, or outdoor spaces. Each table is handcrafted to your specifications, creating a one-of-a-kind centerpiece that will last for generations."
  }
};