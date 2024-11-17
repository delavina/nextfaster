export const categories = [
  "Abrasives & Polishing",
  "Building & Grounds",
  "Electrical & Lighting",
  "Fabricating",
  "Fastening & Joining",
  "Filtering",
  "Flow & Level Control",
  "Furniture & Storage",
  "Hand Tools",
  "Hardware",
  "Heating & Cooling",
  "Lubricating",
  "Material Handling",
  "Measuring & Inspecting",
  "Office Supplies & Signs",
  "Pipe, Tubing, Hose & Fittings",
  "Plumbing & Janitorial",
  "Power Transmission",
  "Pressure & Temperature Control",
  "Pulling & Lifting",
  "Raw Materials",
  "Safety Supplies",
  "Sealing & Cutting",
  "Sealing",
  "Shipping",
  "Suspending",
];

export const productCategories = [
  {
    name: "Fastening & Joining",
    subcategories: [
      { name: "Screws & Bolts", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Threaded Rods & Studs",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Eyebolts", icon: "/placeholder.svg?height=50&width=50" },
      { name: "U-Bolts", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Nuts", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Washers", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Shims", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Helical & Threaded Inserts",
        icon: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Spacers & Standoffs",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Pins", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Anchors", icon: "/placeholder.svg?height=50&width=50" },
    ],
  },
  {
    name: "Pipe, Tubing, Hose & Fittings",
    subcategories: [
      {
        name: "Pipe Fittings & Pipe",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Pipe Hangers", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Pipe Joints", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Pipe & Tube Repair Tools",
        icon: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Pipe Flange Spreaders",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Tubing", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Tube Fittings", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Tube Cutters", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Tube Flaring Tools",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Tube Benders", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Manifolds", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Hose", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Hose Fittings", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Hose Nozzles", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Hose & Tube Clamps",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Hose Reels", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Tank Fittings", icon: "/placeholder.svg?height=50&width=50" },
    ],
  },
  {
    name: "Power Transmission",
    subcategories: [
      { name: "Bearings", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Bushings", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Bearing & Gear Pullers",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Bearing Heaters", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Motors", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Speed Reducers", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Clutches", icon: "/placeholder.svg?height=50&width=50" },
      {
        name: "Brake & Clutch Lining",
        icon: "/placeholder.svg?height=50&width=50",
      },
      { name: "Shafts", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Shaft Couplings", icon: "/placeholder.svg?height=50&width=50" },
      { name: "Shaft Collars", icon: "/placeholder.svg?height=50&width=50" },
      { name: "U-Joints", icon: "/placeholder.svg?height=50&width=50" },
    ],
  },
];

type Product = {
  name: string;
  description: string;
  img: string;
  highlights: string[];
};
