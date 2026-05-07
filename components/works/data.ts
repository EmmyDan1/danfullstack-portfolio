export type Projects = {
  number: string;
  total: string;
  name: string;
  type: string;
  desc: string;
  quote: string;
  tech: string[];
  demo: string;
  github: string;
  image: string;
};

const projects: Projects[] = [
  {
    number: "01",
    total: "02",
    name: "Logistic Management System",
    type: "Full Stack",
    desc: "A logistic management system built to manage operations, deliveries, and real-time tracking. Designed for operational efficiency at scale.",
    quote:
      "Built to streamline last-mile delivery ops with live route mapping and driver assignment.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind", "OpenRouteService"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
    image: "/images/log.png",
  },
  {
    number: "02",
    total: "02",
    name: "Westside Clothing",
    type: "Full Stack",
    desc: "An e-commerce platform for thrift clothing — product listings, image optimization, admin panel, and WhatsApp checkout integration.",
    quote:
      "A full thrift store experience online — from admin uploads to WhatsApp-powered checkout.",
    tech: ["React", "Vite", "Supabase", "Tailwind", "Framer Motion"],
    demo: "https://westsideclothes.com",
    github: "https://github.com/your-repo",
    image: "/images/west.png",
  },
];

export default projects;
