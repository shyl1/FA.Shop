import { Heart , ShoppingCart ,Avatar} from "@assets/icons/svg/index";
import {banner1, banner2,banner3,  banner4 , banner5, banner6, MenShirt1, MenShirt2, MenShirt3, Testimonials1, WomenDress } from "@assets/images";
import { fetchAccessoriesProducts } from "@store/AccessoriesCategory/accessoriescategoryslice";
import { fetchKidesProducts } from "@store/KidsCategory/kidscategoryslice";
import { fetchMenProducts } from "@store/MenCategory/mencategoryslice";
import { fetchShoeProducts } from "@store/ShoesCategory/shoecategoryslice";
import { fetchSportswearProducts } from "@store/SportswearCategory/sportswearcategoryslice";
import { fetchWomenProducts } from "@store/WomenCategory/womencategoryslice";
import React from "react";


//Define the type for Categories
type Category = {
  path: string;
  label: string;
};

export const categories : Category[] = [
  {
    path: "/category/women",
    label: "Women"
  },
  {
    path: "/category/men",
    label: "Men"
  },
  {
    path: "/category/kids",
    label: "Kids"
  },
  {
    path: "/category/shoes",
    label: "Shoes"
  },
  {
    path: "/category/accessories",
    label: "Accessories"
  },
  {
    path: "/category/sportswear",
    label: "Sportswear"
  },
];


// categories thunk map
export const categoiresThunks = {
  women : fetchWomenProducts , 
  men : fetchMenProducts , 
  kids : fetchKidesProducts,
  shoes: fetchShoeProducts,
  accessories: fetchAccessoriesProducts , 
  sportswear: fetchSportswearProducts,
}

// //filters for each category 
// type CategoryFilter = {
//   label: string;
//   options: string[];
// };

// export const categoryFilters : CategoryFilter[] = [
//   {
//     label: "Size",
//     options: ["S", "M", "L", "XL"],
//   },
//   {
//     label: "Color",
//     options: ["Red", "Blue", "Green", "Black"],
//   },
//   {
//     label: "Brand",
//     options: ["Nike", "Adidas", "Puma"],
//   },
// ];

//type for coupons
type couponListType = {
  [code: string]: couponType;
}

type couponType = {
  type :"fixed" | "percent";
  value : number;
}

//coupon 
export const couponList :couponListType = {
  Save10: {
    type: "fixed",
    value : 10
  },
  OFF25: { 
    type: "percent",
    value: 0.25 
  },
  FREESHIP: { 
    type: "fixed",
    value: 20 
  },
}



// Define the type for headerIcons
type HeaderIcon = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string; // Optional label
  badge?: boolean; // Optional badge
  quantity?: number; // Optional quantity
  path?: string; // Optional path for now
};

/* header icons */
export const headerIcons : HeaderIcon[] = [
  {
    Icon :Heart,
    label :"Favorites",
    badge:true,
    path:"/wishlist",
  },
  {
    Icon :ShoppingCart,
    label :"Cart",
    quantity:2,
    path:"/shopping-cart",
  },
  {
    Icon :Avatar,
  },
];

/* images for slider1  */
type autoSliderImages = {
  Id:number;
  ImageUrl: string ;
};

export const autoSlider : autoSliderImages[] = [
  {
    Id:1,
    ImageUrl : banner1,
  },
  {
    Id:2,
    ImageUrl: banner2,
  },
  {
    Id:3,
    ImageUrl: banner3,
  },
  {
    Id:4,
    ImageUrl: banner4,
  },
  {
    Id:5,
    ImageUrl: banner5,
  },
  {
    Id:6,
    ImageUrl: banner6,
  },
];


/* silder for new arrivals */
export const NewArrival = [
  {
    id:1,
    imgurl:MenShirt1,
  },
  {
    id:2,
    imgurl:MenShirt2,
  },
  {
    id:3,
    imgurl:MenShirt3,
  },
  {
    id:4,
    imgurl:WomenDress,
  },
];


export const testimonial = [
  {
    imgurl :Testimonials1 ,
    name : "hanem hanem",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  } ,
  {
    imgurl :Testimonials1 ,
    name : "viel hanem",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  }, 
  {
    imgurl :Testimonials1 ,
    name : "jhon hanem",
    comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  }
];



/*a constant number representing the delay time in milliseconds before switching to the next slide. */
export const delay : number = 2500;

type HrefTpe = {
  href?: string;
  label?: string;
  email?: string;
  phone?: string;
  address?: string;
}

type footerLinkType = {
  id: number;
  links: HrefTpe[];
}

export const footerLinks : footerLinkType[] = [
  {
    id:1 , 
    links:[
    {href: "#" , label: "Shop"},
    {href: "#" , label: "Gift Cards"},
    {href: "#" , label: "Payment Methods"},
    ],
  },
  {
    id:2 , 
    links:[
    {href: "#" , label: "About Us"},
    {href: "#" , label: "Contact Us"},
    {href: "#" , label: "Privacy Policy"},
    {href: "#" , label: "Terms & Conditions"},
    {href: "#" , label: "FAQs"},
    {href: "#" , label: "Return Policy"},
    ],
  },
  {
    id: 3,
    links:[
      {email:"FA.Shop@gmail.com"},
      {phone:"+1234567890"},
      {address:"123, Main Street, New York, USA"},
    ],
  },
]