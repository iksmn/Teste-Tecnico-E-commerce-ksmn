export type ProductType = {
    id: number;
    title: string;
    slug: string;
    price: number | null;
    description: string | null;
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placehold.co/600x400",
      "slug": "others"
    },
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ]
}