import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "Exclusive 50% Off on First Order!",
    desc: "Join us today and enjoy huge savings on your first purchase. Limited time offer!",
    cover: sofaSlide, // Ensure the images are relevant to your products
  },
  {
    id: 2,
    title: "Up to 70% Off on Electronics!",
    desc: "Get the latest gadgets at unbelievable prices. Shop now before they're gone!",
    cover: phone08, // Use images related to phones, tablets, or electronics
  },
  {
    id: 3,
    title: "Seasonal Sale - Up to 60% Off!",
    desc: "Shop our seasonal collection and enjoy massive discounts on fashion and home decor.",
    cover: wireless01, // Include an image related to wireless products or electronics
  },
  {
    id: 4,
    title: "Free Shipping on Orders Above $50!",
    desc: "Order today and get free shipping on all purchases over $50. Don’t miss out!",
    cover: watchSlide, // You can change this to reflect products you sell (e.g., watches, home goods)
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "On orders over $50. Shop now and enjoy fast delivery!",
    bg: "#fdefe6", // You can customize this background color based on your theme
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe & Secure Payment",
    subtitle: "Multiple payment options available with enhanced security.",
    bg: "#ceebe9", // Customize based on your website’s theme
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Shopping",
    subtitle: "Your data is protected with SSL encryption. Shop worry-free!",
    bg: "#e2f2b2", // Background color customization
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "24/7 Customer Support",
    subtitle: "Our support team is available round the clock to assist you.",
    bg: "#d6e5fb", // Customize according to the theme
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Comfortable Velvet Sofa",
    imgUrl: productImg01, // Ensure the image reflects the actual product
    category: "sofa",
    price: 199.99,
    discount: 30,
    shortDesc: "A stylish and cozy velvet sofa perfect for any living room.",
    description:
      "This high-quality velvet sofa is designed for both comfort and style. With premium cushions and a durable frame, it's the perfect addition to your living space.",
    reviews: [
      {
        rating: 4.7,
        text: "Comfortable and beautiful! Highly recommended.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Modern Leather Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 250,
    discount: 20,
    shortDesc: "Sleek leather design with exceptional durability.",
    description:
      "Our modern leather sofa features elegant stitching and a sturdy frame. It's built to last and adds a touch of luxury to your living room.",
    reviews: [
      {
        rating: 4.8,
        text: "Absolutely love the leather finish. It's very comfortable!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Ergonomic Office Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 120,
    discount: 15,
    shortDesc:
      "Stay comfortable during long hours with our ergonomic office chair.",
    description:
      "This ergonomic chair is designed to provide maximum comfort during extended hours of sitting. It features adjustable height, lumbar support, and a sleek modern design.",
    reviews: [
      {
        rating: 4.6,
        text: "Great for long hours at work! Very comfortable.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Gaming Chair with RGB Lighting",
    imgUrl: productImg09,
    category: "chair",
    price: 199,
    discount: 35,
    shortDesc: "Take your gaming experience to the next level with RGB lights.",
    description:
      "This gaming chair is designed for comfort and style. It features adjustable armrests, lumbar support, and customizable RGB lighting for a dynamic gaming setup.",
    reviews: [
      {
        rating: 4.6,
        text: "Perfect chair for gaming and working. Love the RGB lights!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Smartphone Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc: "Advanced smartphone with cutting-edge features.",
    description:
      "The Realme 8 offers a powerful camera, sleek design, and fast performance. It's an all-rounder for both work and play.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent performance and great value for money!",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "OnePlus Nord 2 5G",
    imgUrl: phone04,
    category: "mobile",
    price: 749,
    discount: 5,
    shortDesc: "Powerful 5G smartphone with amazing features.",
    description:
      "OnePlus Nord 2 offers high performance with a smooth 5G experience. Equipped with a stunning display, great camera, and long battery life.",
    reviews: [
      {
        rating: 4.9,
        text: "Fast, smooth, and everything I need in a phone. Highly recommend!",
      },
    ],
    avgRating: 4.8,
  },
];

// first comment

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview Sofa",
    imgUrl: productImg01,
    category: "Sofa",
    price: 193.0,
    shortDesc:
      "Modern, comfortable, and durable sofa perfect for any living room.",
    description:
      "Crafted with high-quality materials, this Stone and Beam Westview sofa provides a sleek modern aesthetic with comfort and durability. Perfect for all types of living spaces.",
    reviews: [
      {
        rating: 4.7,
        text: "Great sofa! Looks amazing in my living room.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern Sofa",
    imgUrl: productImg02,
    category: "Sofa",
    price: 253.0,
    shortDesc: "A stylish, mid-century modern sofa with plush cushions.",
    description:
      "The Rivet Bigelow Modern sofa blends a mid-century modern design with plush cushions for added comfort. A great fit for contemporary homes.",
    reviews: [
      {
        rating: 4.8,
        text: "Sofa is sturdy and comfortable. A great addition to my living room!",
      },
      {
        rating: 4.8,
        text: "Love the modern look and the comfort of this sofa!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "Sofa",
    price: 173.0,
    shortDesc: "Affordable, stylish, and comfy sofa for any modern home.",
    description:
      "This Amazon Brand Modern Sofa offers a chic design at an affordable price. Its durable build and soft cushions provide both style and comfort.",
    reviews: [
      {
        rating: 4.6,
        text: "Good quality for the price, very comfortable.",
      },
      {
        rating: 4.9,
        text: "I love this sofa! It's perfect for my small apartment.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg04,
    category: "Sofa",
    price: 163.0,
    shortDesc: "A cozy and luxurious sofa with plush, soft cushioning.",
    description:
      "The Fluffy Sheep Sofa is designed for maximum comfort. Featuring high-quality, soft fabric, it offers a luxurious feel at an affordable price.",
    reviews: [
      {
        rating: 4.6,
        text: "Super comfy! Exactly what I needed for my living room.",
      },
      {
        rating: 4.9,
        text: "Perfect sofa, very soft and great quality!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "Sofa",
    price: 163.0,
    shortDesc: "Elegant velvet sofa with a modern, chic design.",
    description:
      "This Faux Velvet Sofa features a sleek, modern design with a luxurious velvet finish. It’s perfect for adding elegance and comfort to any room.",
    reviews: [
      {
        rating: 4.6,
        text: "The velvet texture is so soft and the sofa is very sturdy.",
      },
      {
        rating: 4.9,
        text: "Absolutely love this velvet sofa. Great quality and looks stunning.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg06,
    category: "Sofa",
    price: 163.0,
    shortDesc: "Extra soft and cozy, perfect for relaxing.",
    description:
      "The Fluffy Sheep Sofa combines plush softness and comfort with modern design. Ideal for any space where relaxation is key.",
    reviews: [
      {
        rating: 4.6,
        text: "Perfect for lounging! I can spend hours on this sofa.",
      },
      {
        rating: 4.9,
        text: "Very soft and stylish. Great value for the price.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];
