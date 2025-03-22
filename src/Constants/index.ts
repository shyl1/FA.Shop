import { Heart , ShoppingCart ,Avatar } from "@assets/icons/svg/index";
import {banner1, banner2,banner3,  banner4 , banner5, banner6, MenShirt1, MenShirt2, MenShirt3, WomenDress } from "@assets/images";


//Define the type for Categories
type Category = {
  path: string;
  label: string;
};

export const categories : Category[] = [
  {
    path: "/women",
    label: "Women"
  },
  {
    path: "/men",
    label: "Men"
  },
  {
    path: "/kids",
    label: "Kids"
  },
  {
    path: "/shoes",
    label: "Shoes"
  },
  {
    path: "/accessories",
    label: "Accessories"
  },
  {
    path: "/sportswear",
    label: "Sportswear"
  },
];




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




/*a constant number representing the delay time in milliseconds before switching to the next slide. */
export const delay : number = 2500;


export const footerLinks = [
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