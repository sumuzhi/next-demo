export interface Product {
  imgSrc: string;
  imgAlt: string;
  price: string;
  color: string;
  id: number;
}

export const products: Product[] = [
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imgAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    id: 1,
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imgAlt: "Front of men's Basic Tee in white.",
    price: "$36",
    color: "Aspen White",
    id: 2,
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imgAlt: "Front of men's Basic Tee in dark gray.",
    price: "$37",
    color: "Charcoal",
    id: 3,
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imgAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$38",
    color: "Iso Dots",
    id: 4,
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imgAlt: "Front of men's Artwork Tee in dark gray.",
    price: "$39",
    color: "Charcoal",
    id: 5,
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imgAlt: "Front of men's Artwork Tee in light gray.",
    id: 6,
    price: "$40",
    color: "Light Gray",
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imgAlt: "Front of men's Artwork Tee in light gray.",
    id: 7,
    price: "$41",
    color: "Light Gray",
  },
  {
    imgSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imgAlt: "Front of men's Artwork Tee in light gray.",
    price: "$42",
    color: "Light Gray",
    id: 8,
  },
];
