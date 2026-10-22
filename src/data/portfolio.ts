export const profile = {
  name: "Mohit Kumar",
  title: "Software Engineer III",
  company: "Forrester Research",
  email: "mohitme100@gmail.com",
  location: "India",
  github: "https://github.com/mohitarty",
  linkedin: "https://www.linkedin.com/in/mohitarty",
  resume: "/assets/Mohit-Kumar-Resume.pdf",
};

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  status: string;
  headline: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  challenge: string;
  approach: string;
  capabilities: string[];
  research?: string;
};

export const projects: Project[] = [
  {
    id: "slideframe",
    number: "01",
    name: "Slideframe",
    category: "Browser-native PowerPoint SDK",
    status: "Published on npm",
    headline: "Presentations, freed from the desktop.",
    description:
      "An extensible TypeScript SDK that renders PowerPoint presentations directly in the browser. A framework-independent core, reusable document APIs, and a React integration.",
    tags: ["TypeScript", "React", "OpenXML", "npm SDK"],
    links: [
      {
        label: "Explore the SDK",
        href: "https://www.npmjs.com/package/@takemynotes/slideframe",
      },
      {
        label: "Documentation",
        href: "https://slideframe.takemynotes.app/docs",
      },
    ],
    challenge:
      "Turn a complex, packaged document format into a useful browser experience without tying the parsing and rendering pipeline to one framework.",
    approach:
      "Built ZIP and relationship processing, PPTX / OpenXML parsing, and a core document abstraction. The rendering pipeline translates text, shapes, images, and slide metadata into browser-renderable elements.",
    capabilities: [
      "Reusable document APIs and React viewer integration",
      "Slide navigation and browser-native presentation viewing",
      "Public npm distribution, documentation, and automated checks",
      "Documentation delivery using AWS S3 and CloudFront",
    ],
  },
  {
    id: "takemynotes",
    number: "02",
    name: "TakeMyNotes",
    category: "Local-first digital notebook",
    status: "Live product",
    headline: "A little space to think. Entirely yours.",
    description:
      "A privacy-first digital notebook for handwriting, typed notes, shapes, and multi-page documents. Canvas interaction meets a carefully designed local persistence layer.",
    tags: ["Canvas", "Local-first", "Document systems"],
    links: [{ label: "Open the notebook", href: "https://takemynotes.app" }],
    challenge:
      "Make an expressive canvas feel natural while keeping document state, storage, and export reliable as notebooks grow.",
    approach:
      "Designed a compact, versioned storage format with validation, stable object identities, and change tracking. Built document composition, PDF export, printing, and backup / restore around the same local-first foundation.",
    capabilities: [
      "Handwriting, typed content, shapes, and drawing tools",
      "Multi-page documents, PDF export, and printing",
      "Local persistence with validated serialization and backup / restore",
    ],
    research:
      "Separate experiments explore on-device speech-to-text and transcript formatting with WebGPU, ONNX Runtime Web, and lightweight language models. These are research work, not claims about released notebook features.",
  },
  {
    id: "fastread",
    number: "03",
    name: "Fast Read",
    category: "AI-powered Chrome extension",
    status: "Chrome Web Store",
    headline: "Less scrolling. More understanding.",
    description:
      "A browser extension that turns long webpages into useful summaries with Google’s built-in Summarizer API. A focused reading experience, right where the content lives.",
    tags: ["Chrome APIs", "Summarizer API", "Browser AI"],
    links: [
      {
        label: "Get the extension",
        href: "https://chromewebstore.google.com/detail/fast-read/onmekokaijdjmchpikfkbjaiedihbddb",
      },
      { label: "GitHub", href: "https://github.com/mohitarty/fast-read" },
    ],
    challenge:
      "Turn browser AI into a practical everyday reading tool with a lightweight interface and useful connections back to the source.",
    approach:
      "Built the extension architecture, summarization interface, citation-aware output, multiple formats, and one-click copying. Took the product through publishing and privacy documentation for the Chrome Web Store.",
    capabilities: [
      "Google Summarizer API integration",
      "Multiple summary formats and citation-aware output",
      "One-click copying and a distraction-free interface",
    ],
  },
];

export const goods = {
  name: "001 GOODS",
  href: "https://001goods.com",
  description:
    "An early-stage independent apparel brand exploring interactive product presentation, visual storytelling, and reservation / interest capture. A small venture in taking an idea beyond the interface.",
  tags: ["React", "Vite", "Product & brand", "Early stage"],
};

export const enterpriseThemes = [
  {
    number: "01",
    title: "AI interfaces",
    description:
      "Production generative AI experiences that make complex information understandable: streaming conversations, source citations, and contextual interactions.",
    tags: "React · TypeScript · Streaming UI",
  },
  {
    number: "02",
    title: "Enterprise integrations",
    description:
      "Experiences across web, Microsoft Teams, and Slack. Working through SSO, token exchange, embedded applications, and the constraints of each platform.",
    tags: "OAuth / OIDC · Auth0 · Platform APIs",
  },
  {
    number: "03",
    title: "Frontend architecture",
    description:
      "Shared components, reliable state flows, and clear API contracts. Technical decisions that help teams ship consistent experiences and keep production maintainable.",
    tags: "Reusable systems · Performance · Quality",
  },
];

export const experience = [
  {
    company: "Forrester Research",
    role: "Software Engineer III",
    date: "Oct 2022 — Present",
    current: true,
    description:
      "Own frontend architecture and delivery for production generative AI experiences. Guide technical decisions, build shared patterns, and collaborate across product, design, backend, platform, QA, and security.",
    tags: ["React & TypeScript", "Enterprise AI", "Identity & integrations"],
  },
  {
    company: "Copper Mobile",
    role: "Senior Software Developer",
    date: "Aug 2021 — Oct 2022",
    current: false,
    description:
      "Led customer-facing Angular and JavaScript applications. Worked with stakeholders to turn complex requirements into scalable solutions, define technical approaches, and identify delivery risks.",
    tags: ["Angular", "JavaScript", "Solution design"],
  },
  {
    company: "Jamboree Education",
    role: "Software Developer",
    date: "Aug 2020 — Jul 2021",
    current: false,
    description:
      "Modernized legacy frontend code and development practices. Improved maintainability and helped define realistic scope and milestones for product enhancements.",
    tags: ["Frontend modernization", "Product delivery"],
  },
  {
    company: "Blemacion Technologies",
    role: "Web Developer",
    date: "Jan 2019 — Jul 2020",
    current: false,
    description:
      "Built responsive, interactive web features with JavaScript and AJAX, focusing on usability, browser compatibility, and client-side performance.",
    tags: ["JavaScript & AJAX", "Responsive UI"],
  },
];

export const expertise = [
  {
    number: "01",
    title: "Frontend engineering",
    core: true,
    description:
      "My primary craft. Robust interfaces, clear state, and components built to last.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Angular",
      "HTML5 / CSS3",
      "Redux",
      "NgRx",
      "RxJS",
      "React Query",
      "Responsive UI",
      "Design systems",
    ],
    supporting: "Supporting framework experience: Vue & Nuxt.",
  },
  {
    number: "02",
    title: "AI & browser engineering",
    core: true,
    description:
      "Practical AI experiences and the browser as a powerful application platform.",
    skills: [
      "Generative AI interfaces",
      "Streaming responses",
      "Browser APIs",
      "Chrome Extensions",
      "Canvas / SVG",
      "OpenXML / PPTX",
    ],
    supporting:
      "Research & experiments: WebGPU, ONNX Runtime Web, and on-device inference.",
  },
  {
    number: "03",
    title: "Enterprise platforms",
    core: false,
    description:
      "Connecting experiences across identities, applications, and platform boundaries.",
    skills: [
      "Microsoft Teams",
      "Slack integrations",
      "OAuth / OIDC",
      "Auth0",
      "SSO",
      "JWT / token exchange",
      "Embedded web apps",
    ],
  },
  {
    number: "04",
    title: "Backend & APIs",
    core: false,
    description:
      "The services, contracts, and real-time connections behind the interface.",
    skills: [
      "Node.js",
      "Express",
      "Fastify",
      "REST APIs",
      "WebSockets",
      "API integration",
    ],
  },
  {
    number: "05",
    title: "Engineering & delivery",
    core: false,
    description:
      "Ownership from the first technical decision through production and maintenance.",
    skills: [
      "Frontend architecture",
      "Performance",
      "Automated testing",
      "Playwright",
      "Git / GitHub",
      "GitHub Actions",
      "Vite / Webpack",
      "npm publishing",
      "AWS S3 / CloudFront",
    ],
  },
];
