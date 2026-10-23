export const site = {
  name: "Jiung Kim",
  email: "jukim@enabledesign.io",
  tagline: "Photographer based in Korea",
  intro: {
    title: "Quiet frames, lasting light",
    body: "I photograph people and places with a slow, attentive eye — natural light, open space, and the small details that make a moment feel true. Portraits, travel, and editorial work.",
  },
} as const

export type WorkItem = {
  id: string
  title: string
  category: string
  /** Replace this Unsplash URL with your own photograph. */
  src: string
  alt: string
  aspect: "portrait" | "landscape" | "square"
}

export const works: WorkItem[] = [
  {
    id: "hero",
    title: "Coastal morning",
    category: "Landscape",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
    alt: "Mist over a rocky coastline at dawn",
    aspect: "landscape",
  },
  {
    id: "work-1",
    title: "Window light",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait in soft window light",
    aspect: "portrait",
  },
  {
    id: "work-2",
    title: "City hush",
    category: "Street",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
    alt: "Quiet city street in soft light",
    aspect: "landscape",
  },
  {
    id: "work-3",
    title: "Still room",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlit interior with simple furniture",
    aspect: "square",
  },
  {
    id: "work-4",
    title: "Field path",
    category: "Landscape",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    alt: "Fog settling over a green hillside",
    aspect: "landscape",
  },
  {
    id: "work-5",
    title: "Hands at rest",
    category: "Detail",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    alt: "Vintage camera resting on a wooden surface",
    aspect: "square",
  },
  {
    id: "work-6",
    title: "Evening walk",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    alt: "Two people walking together at dusk",
    aspect: "portrait",
  },
]

export type PricingTier = {
  name: string
  price: string
  description: string
  includes: string[]
}

export const pricing: PricingTier[] = [
  {
    name: "Portrait session",
    price: "₩350,000",
    description: "Individuals or couples — about two hours on location.",
    includes: [
      "Location scouting guidance",
      "30 edited images",
      "Online gallery for two weeks",
    ],
  },
  {
    name: "Half-day story",
    price: "₩650,000",
    description: "Families, small events, or a focused brand set.",
    includes: [
      "Up to four hours",
      "60 edited images",
      "Print-ready files",
    ],
  },
  {
    name: "Full-day commission",
    price: "From ₩1,200,000",
    description: "Travel, editorial, or longer documentary days.",
    includes: [
      "Full shooting day",
      "Curated edit of 100+ images",
      "Usage terms discussed up front",
    ],
  },
]
