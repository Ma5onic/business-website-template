import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star,
  discount
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "CTA",
    title: "Contact Us",
  },
/*   {
    id: "clients",
    title: "Clients",
  }, */
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "UV Protection",
    content:
      "Block up to 99% of harmful UV rays, protecting your interiors and reducing fading on furnishings.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Heat Reduction",
    content:
      "Lower the amount of heat transmitted through your windows—cutting down on cooling costs while keeping your indoor spaces comfortable.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Privacy Enhancement",
    content:
      "Enjoy 100% privacy with our reflective films designed for secure, private areas without sacrificing natural light.",
  },
  {
    id: "feature-4",
    icon: discount, // TODO: Replace with a dedicated glare icon when available
    title: "Glare Reduction",
    content:
      "Reduce glare effectively while preserving your view, ensuring a comfortable and visually appealing environment.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "UV protection",
    value: "99%",
  },
  {
    id: "stats-2",
    title: "Heat Reduction",
    value: "84%",
  },
  {
    id: "stats-3",
    title: "Glare Reduction",
    value: "92%",
  },
  {
    id: "stats-4",
    title: "Privacy Enhancement",
    value: "100%",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.markdesigns.onrender.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.markdesigns.onrender.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.markdesigns.onrender.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.markdesigns.onrender.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.markdesigns.onrender.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.markdesigns.onrender.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.markdesigns.onrender.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.markdesigns.onrender.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.markdesigns.onrender.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.markdesigns.onrender.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.markdesigns.onrender.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.markdesigns.onrender.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];