import type { Locale } from "@/lib/i18n-context";

export type NavItem = { label: string; href: string };

export const SITE_BRAND_SECOND_LINE = "Frontend Developer UX/UI";

export type HeroMetric = { k: string; v: string[]; c: string };
export type HeroTitleWord = { text: string; color: string; shadow: string };

export type SiteContent = {
  navItems: NavItem[];
  ui: {
    menu: string;
    openSidebarAria: string;
    closeSidebarAria: string;
    closeDrawerAria: string;
    hideSidebarAria: string;
    aboutKicker: string;
    projectsKicker: string;
    projectsTitle: string;
    projectsLead: string;
    technologiesKicker: string;
    technologiesTitle: string;
    technologiesLead: string;
    experienceKicker: string;
    experienceTitle: string;
    currentLabel: string;
    contactKicker: string;
    contactTitle: string;
    contactLead: string;
    languagesTitle: string;
    contactHints: {
      email: string;
      tel: string;
      github: string;
      discord: string;
    };
    liveDemo: string;
    hero: {
      ready: string;
      ctaWork: string;
      ctaTalk: string;
      profileKicker: string;
      profileTitle: string;
      profileSubtitle: string;
      titleWords: HeroTitleWord[];
      metrics: HeroMetric[];
    };
  };
  site: {
    name: string;
    role: string;
    heroBody: string[];
    email: string;
    phone: string;
    phoneTel: string;
    social: { github: string };
    discord: { url: string; handle: string };
    languages: { label: string; level: string }[];
  };
  aboutContent: {
    headline: string;
    lead: string;
    paragraphs: string[];
    interestsTitle: string;
    interests: string[];
  };
  experienceTimeline: {
    period: string;
    role: string;
    org: string;
    current: boolean;
    bullets: string[];
  }[];
  projectsContent: {
    title: string;
    subtitle: string;
    desc: string;
    highlights: string[];
    tags: string[];
    image?: string;
    demoUrl?: string;
  }[];
  technologiesList: string[];
};

const contentEs: SiteContent = {
  navItems: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Contacto", href: "#contacto" },
  ],

  ui: {
    menu: "menú",
    openSidebarAria: "Abrir menú lateral",
    closeSidebarAria: "Cerrar menú lateral",
    closeDrawerAria: "Cerrar menú",
    hideSidebarAria: "Ocultar menú lateral",
    aboutKicker: "Sobre mí",
    projectsKicker: "Proyectos",
    projectsTitle: "Productos y demos",
    projectsLead:
      "Selección de trabajo con foco en frontend, UX/UI, implementación y lógica de negocio.",
    technologiesKicker: "Tecnologías",
    technologiesTitle: "Herramientas y stack",
    technologiesLead:
      "Herramientas que uso para diseñar, construir y mejorar interfaces web: del prototipo al despliegue.",
    experienceKicker: "Experiencia",
    experienceTitle: "Trayectoria profesional",
    currentLabel: "Actualidad",
    contactKicker: "Contacto",
    contactTitle: "¿Hablamos?",
    contactLead:
      "Escríbeme o llámame para colaboraciones, propuestas o conversaciones técnicas. Siempre respondo en milisegundos.",
    languagesTitle: "Idiomas",
    contactHints: {
      email: "Abrir cliente de correo →",
      tel: "Llamar →",
      github: "Ver repositorios →",
      discord:
        "Abre Discord: inicia sesión y usa Amigos → Añadir amigo, o envía un mensaje directo con este usuario.",
    },
    liveDemo: "Ver demo en vivo →",
    hero: {
      ready: "— listo",
      ctaWork: "[ Ver trabajo ]",
      ctaTalk: "{ hablemos }",
      profileKicker: "Perfil",
      profileTitle: "Frontend Developer UX/UI",
      profileSubtitle: "— de la idea a una interfaz usable",
      titleWords: [
        {
          text: "Interfaces",
          color: "var(--color-vintage-green)",
          shadow: "0 0 28px rgb(82 242 92 / 0.45)",
        },
        {
          text: "web",
          color: "var(--color-vintage-cyan)",
          shadow: "0 0 24px rgb(60 252 236 / 0.4)",
        },
        {
          text: "con",
          color: "var(--color-vintage-magenta)",
          shadow: "0 0 26px rgb(232 120 255 / 0.4)",
        },
        {
          text: "UX/UI",
          color: "var(--color-vintage-amber)",
          shadow: "0 0 24px rgb(255 192 56 / 0.4)",
        },
        {
          text: "y",
          color: "var(--color-vintage-coral)",
          shadow: "0 0 22px rgb(255 138 108 / 0.38)",
        },
        {
          text: "código.",
          color: "var(--color-vintage-green)",
          shadow: "0 0 26px rgb(82 242 92 / 0.4)",
        },
      ],
      metrics: [
        {
          k: "Rol",
          v: ["Frontend Developer", "UX/UI"],
          c: "var(--color-vintage-green)",
        },
        {
          k: "Stack",
          v: ["Figma · React · TypeScript", "Node · SQL"],
          c: "var(--color-vintage-cyan)",
        },
        {
          k: "Enfoque",
          v: ["Landings y sistemas", "UX en producto", "Interfaces responsive"],
          c: "var(--color-vintage-amber)",
        },
      ],
    },
  },

  site: {
    name: `Raul Ortiz ${SITE_BRAND_SECOND_LINE}`,
    role: "Frontend Developer · UX/UI · React · TypeScript",
    heroBody: [
      "Construyo interfaces web claras, responsivas y orientadas a conversión, combinando diseño UX/UI, React, TypeScript y criterio de producto.",
      "Conecto diseño, desarrollo y necesidades de negocio para convertir ideas en landings, sistemas y flujos digitales usables.",
    ],
    email: "xrad0x@outlook.com",
    phone: "+593 961 680 029",
    phoneTel: "+593961680029",
    social: {
      github: "https://github.com/xxrad0xx?tab=repositories",
    },
    discord: {
      url: "https://discord.com/channels/@me",
      handle: "x_Rad0x#8300",
    },
    languages: [
      { label: "Español", level: "Nativo" },
      { label: "Inglés", level: "B+ (en progreso a nivel avanzado)" },
    ],
  },

  aboutContent: {
    headline: "Frontend, UX/UI y producto digital con mano en el código.",
    lead: `Combino diseño UX/UI y desarrollo frontend: entiendo el problema, estructuro la experiencia y construyo interfaces claras para usuarios reales.`,
    paragraphs: [
      `He trabajado en proyectos freelance, landings comerciales, sistemas de pedidos y productos SaaS, cuidando la experiencia desde Figma hasta la implementación y el despliegue.`,
      `Me interesa que las interfaces se entiendan rápido, se vean profesionales y ayuden al negocio: menos fricción para el usuario, mejores flujos y productos más fáciles de mantener.`,
    ],
    interestsTitle: "Intereses / exploración",
    interests: [
      "Diseño 3D y creación de figuras (Blender, impresión en resina)",
      "Desarrollo de proyectos personales orientados a producto",
      "Exploración de interfaces y experiencias digitales",
    ],
  },

  experienceTimeline: [
    {
      period: "2025 — 2026 · 1 año",
      role: "Frontend Developer UX/UI",
      org: "IQ LATAM SAS",
      current: false,
      bullets: [
        "Diseño e implementación de interfaces web enfocadas en usabilidad y consistencia visual",
        "Desarrollo frontend con componentes reutilizables, integración con APIs y adaptación responsive",
        "Validación de prototipos y mejora de pantallas a partir de feedback",
        "Apoyo en QA funcional, documentación de cambios y seguimiento de entregables",
      ],
    },
    {
      period: "2023 — Actualidad · 3 años",
      role: "Freelance · Frontend Developer UX/UI",
      org: "Proyectos independientes",
      current: true,
      bullets: [
        "Diseño UX/UI (Figma), prototipado y handoff para productos digitales",
        "Implementación de aplicaciones web con React, TypeScript, Tailwind CSS, APIs y despliegues",
        "Debugging, mejora continua basada en feedback y validación de requerimientos",
        "Colaboración con clientes/stakeholders con foco en claridad y resultados",
      ],
    },
    {
      period: "2024 — Mayo 2026",
      role: "Analista en Sistemas / Soporte de Aplicaciones",
      org: "Unidad Educativa Atenas",
      current: false,
      bullets: [
        "Soporte a usuarios y gestión de sistemas institucionales (Tier 1)",
        "Triage, resolución y escalamiento de incidencias; seguimiento hasta cierre",
        "Levantamiento de requerimientos y mejora de flujos digitales",
        "Apoyo en pruebas funcionales (UAT) y validación de entregables",
      ],
    },
    {
      period: "2016",
      role: "Asistente de negocio / mantenimiento",
      org: "Molle Publicidad",
      current: false,
      bullets: [
        "Apoyo en operaciones del negocio",
        "Trabajo en entorno real con enfoque práctico",
        "Experiencia temprana en procesos organizacionales",
      ],
    },
  ],

  projectsContent: [
    {
      title: "Golden Burger",
      subtitle: "Landing + sistema de pedidos",
      desc: "Experiencia digital completa para restaurante: landing comercial responsive, presentación de producto, navegación clara, flujo de pedidos, estados de órdenes y lógica operativa.",
      highlights: [
        "Diseño frontend UX/UI con jerarquía visual, componentes reutilizables y experiencia responsive",
        "Flujo de pedidos con estados de orden, validaciones, manejo de datos y foco en usuarios no técnicos",
        "Landing enfocada en conversión, claridad de producto y operación para restaurante",
      ],
      tags: ["Frontend", "UX/UI", "Landing", "Pedidos", "Responsive"],
      image: "/image/golden-burger.png",
      demoUrl: "https://golden-web-omega.vercel.app/",
    },
    {
      title: "Programers Loft Studio",
      subtitle: "Landing de servicios web",
      desc: "Landing enfocada en comunicar servicios de diseño y desarrollo de sitios web para clientes que necesitan presencia digital.",
      highlights: [
        "Estructura de propuesta comercial, presentación de servicios y llamado a contacto",
        "Narrativa visual para comunicar valor de forma rápida y profesional",
        "Enfoque freelance orientado a captación de clientes y conversión",
      ],
      tags: ["Landing", "Servicios web", "UX Writing", "Conversión"],
      image: "/image/programers-loft-studio.png",
      demoUrl: "https://programersloftstudio.vercel.app/",
    },
    {
      title: "Ruta593",
      subtitle: "SaaS de gestión de transporte",
      desc: "Sistema SaaS para gestión de venta de boletos de transporte interprovincial.",
      highlights: [
        "Diseño de flujos de usuario para compra de tickets",
        "Estructuración de sistema completo (roles, rutas, asientos, ventas)",
        "Enfoque en experiencia del usuario, trazabilidad y lógica de negocio",
        "Desarrollo de interfaz y arquitectura del sistema",
      ],
      tags: ["Producto", "Datos", "Roles", "SaaS"],
      image: "/image/ruta593.png",
    },
    {
      title: "Sistema médico inteligente",
      subtitle: "En desarrollo",
      desc: "Sistema de gestión médica con enfoque moderno y funcionalidades avanzadas.",
      highlights: [
        "Rediseño de experiencia de usuario en sistemas médicos tradicionales",
        "Enfoque en eficiencia, claridad, control de datos y escalabilidad",
        "Integración de nuevas funcionalidades centradas en el usuario",
      ],
      tags: ["Salud", "Flujos", "Datos", "WIP"],
      image: "/image/gestimed.png",
    },
  ],

  technologiesList: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Angular",
    "Figma",
    "UX/UI Design",
    "Prototipado",
    "Design Systems",
    "Responsive Design",
    "REST APIs",
    "Node.js",
    "SQL (básico/intermedio)",
    "MongoDB",
    "UAT / testing funcional",
    "Git/GitHub",
    "Jira",
    "Framer Motion",
  ],
};

const contentEn: SiteContent = {
  ...contentEs,
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#sobre-mi" },
    { label: "Technologies", href: "#tecnologias" },
    { label: "Projects", href: "#proyectos" },
    { label: "Journey", href: "#trayectoria" },
    { label: "Contact", href: "#contacto" },
  ],
  ui: {
    ...contentEs.ui,
    menu: "menu",
    openSidebarAria: "Open side menu",
    closeSidebarAria: "Close side menu",
    closeDrawerAria: "Close menu",
    hideSidebarAria: "Hide side menu",
    aboutKicker: "About",
    projectsKicker: "Projects",
    projectsTitle: "Products and demos",
    projectsLead:
      "A curated selection focused on frontend, UX/UI, implementation, and business logic.",
    technologiesKicker: "Technologies",
    technologiesTitle: "Tools and stack",
    technologiesLead:
      "Tools I use to design, build, and improve web interfaces: from prototype to deployment.",
    experienceKicker: "Experience",
    experienceTitle: "Professional journey",
    currentLabel: "Current",
    contactKicker: "Contact",
    contactTitle: "Let’s talk",
    contactLead:
      "Message or call me for collaborations, proposals, or technical chats. I usually reply fast.",
    languagesTitle: "Languages",
    contactHints: {
      email: "Open email client →",
      tel: "Call →",
      github: "View repositories →",
      discord:
        "Opens Discord: sign in, then use Friends → Add Friend, or DM me with this handle.",
    },
    liveDemo: "View live demo →",
    hero: {
      ready: "— ready",
      ctaWork: "[ View work ]",
      ctaTalk: "{ let's talk }",
      profileKicker: "Profile",
      profileTitle: "Frontend Developer UX/UI",
      profileSubtitle: "— from idea to usable interface",
      titleWords: [
        {
          text: "Web",
          color: "var(--color-vintage-green)",
          shadow: "0 0 28px rgb(82 242 92 / 0.45)",
        },
        {
          text: "interfaces",
          color: "var(--color-vintage-cyan)",
          shadow: "0 0 24px rgb(60 252 236 / 0.4)",
        },
        {
          text: "with",
          color: "var(--color-vintage-magenta)",
          shadow: "0 0 26px rgb(232 120 255 / 0.4)",
        },
        {
          text: "UX/UI",
          color: "var(--color-vintage-amber)",
          shadow: "0 0 24px rgb(255 192 56 / 0.4)",
        },
        {
          text: "and",
          color: "var(--color-vintage-coral)",
          shadow: "0 0 22px rgb(255 138 108 / 0.38)",
        },
        {
          text: "code.",
          color: "var(--color-vintage-green)",
          shadow: "0 0 26px rgb(82 242 92 / 0.4)",
        },
      ],
      metrics: [
        {
          k: "Role",
          v: ["Frontend Developer", "UX/UI"],
          c: "var(--color-vintage-green)",
        },
        {
          k: "Stack",
          v: ["Figma · React · TypeScript", "Node · SQL"],
          c: "var(--color-vintage-cyan)",
        },
        {
          k: "Focus",
          v: ["Landings & systems", "Product UX", "Responsive interfaces"],
          c: "var(--color-vintage-amber)",
        },
      ],
    },
  },
  site: {
    ...contentEs.site,
    role: "Frontend Developer · UX/UI · React · TypeScript",
    heroBody: [
      "I build clear, responsive, conversion-oriented web interfaces by combining UX/UI design, React, TypeScript, and product judgment.",
      "I connect design, development, and business needs to turn ideas into usable landings, systems, and digital flows.",
    ],
    languages: [
      { label: "Spanish", level: "Native" },
      { label: "English", level: "B+ (improving toward advanced)" },
    ],
  },
  aboutContent: {
    headline: "Frontend, UX/UI, and digital product—with hands on code.",
    lead: `I combine UX/UI design and frontend development: I understand the problem, structure the experience, and build clear interfaces for real users.`,
    paragraphs: [
      `I have worked on freelance projects, commercial landings, ordering systems, and SaaS products, taking care of the experience from Figma to implementation and deployment.`,
      `I care about interfaces that are easy to understand, professional, and useful for the business: less friction for users, better flows, and products that are easier to maintain.`,
    ],
    interestsTitle: "Interests / exploration",
    interests: [
      "3D design and figure making (Blender, resin printing)",
      "Building personal product-oriented projects",
      "Exploring interfaces and digital experiences",
    ],
  },
  experienceTimeline: [
    {
      period: "2025 — 2026 · 1 year",
      role: "Frontend Developer UX/UI",
      org: "IQ LATAM SAS",
      current: false,
      bullets: [
        "Designed and implemented web interfaces focused on usability and visual consistency",
        "Frontend development with reusable components, API integration, and responsive adaptation",
        "Prototype validation and screen improvements based on feedback",
        "Functional QA support, change documentation, and deliverable tracking",
      ],
    },
    {
      period: "2023 — Present · 3 years",
      role: "Freelance · Frontend Developer UX/UI",
      org: "Independent projects",
      current: true,
      bullets: [
        "UX/UI design (Figma), prototyping, and handoff for digital products",
        "Web application implementation with React, TypeScript, Tailwind CSS, APIs, and deployments",
        "Debugging, feedback-driven iteration, and requirement validation",
        "Stakeholder collaboration with a focus on clarity and outcomes",
      ],
    },
    {
      period: "2024 — May 2026",
      role: "Systems Analyst / Application Support",
      org: "Unidad Educativa Atenas",
      current: false,
      bullets: [
        "User support and management of institutional systems (Tier 1)",
        "Incident triage, resolution, and escalation; follow-up to closure",
        "Requirement gathering and improvement of digital flows",
        "Functional testing (UAT) support and deliverable validation",
      ],
    },
    {
      period: "2016",
      role: "Business Assistant / Maintenance",
      org: "Molle Publicidad",
      current: false,
      bullets: [
        "Business operations support",
        "Hands-on work in a real environment",
        "Early experience with organizational processes",
      ],
    },
  ],
  projectsContent: [
    {
      title: "Golden Burger",
      subtitle: "Landing + ordering system",
      desc: "A complete digital experience for a restaurant: responsive commercial landing page, product presentation, clear navigation, ordering flow, order states, and operational logic.",
      highlights: [
        "Frontend UX/UI design with visual hierarchy, reusable components, and responsive experience",
        "Ordering flow with order states, validations, data handling, and focus on non-technical users",
        "Landing focused on conversion, product clarity, and restaurant operations",
      ],
      tags: ["Frontend", "UX/UI", "Landing", "Orders", "Responsive"],
      image: "/image/golden-burger.png",
      demoUrl: "https://golden-web-omega.vercel.app/",
    },
    {
      title: "Programers Loft Studio",
      subtitle: "Web services landing",
      desc: "A landing page focused on communicating web design and development services for clients who need a digital presence.",
      highlights: [
        "Commercial proposal structure, service presentation, and contact call-to-action",
        "Visual narrative to communicate value quickly and professionally",
        "Freelance approach focused on client acquisition and conversion",
      ],
      tags: ["Landing", "Web services", "UX Writing", "Conversion"],
      image: "/image/programers-loft-studio.png",
      demoUrl: "https://programersloftstudio.vercel.app/",
    },
    {
      title: "Ruta593",
      subtitle: "Transport management SaaS",
      desc: "A SaaS system to manage intercity bus ticket sales.",
      highlights: [
        "User flows for ticket purchase",
        "Full system structure (roles, routes, seats, sales)",
        "Focus on UX, traceability, and business logic",
        "UI development and system architecture",
      ],
      tags: ["Product", "Data", "Roles", "SaaS"],
      image: "/image/ruta593.png",
    },
    {
      title: "Smart medical system",
      subtitle: "In progress",
      desc: "A modern medical management system with advanced functionality.",
      highlights: [
        "UX redesign for traditional medical systems",
        "Focus on efficiency, clarity, data control, and scalability",
        "User-centered new features integration",
      ],
      tags: ["Health", "Flows", "Data", "WIP"],
      image: "/image/gestimed.png",
    },
  ],
  technologiesList: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Angular",
    "Figma",
    "UX/UI Design",
    "Prototyping",
    "Design Systems",
    "Responsive Design",
    "REST APIs",
    "Node.js",
    "SQL (basic/intermediate)",
    "MongoDB",
    "UAT / functional testing",
    "Git/GitHub",
    "Jira",
    "Framer Motion",
  ],
};

export function getContent(locale: Locale): SiteContent {
  return locale === "en" ? contentEn : contentEs;
}

export const navItems: NavItem[] = contentEs.navItems;
export const site = contentEs.site;
export const aboutContent = contentEs.aboutContent;
export const experienceTimeline = contentEs.experienceTimeline;
export const projectsContent = contentEs.projectsContent;
export const technologiesList = contentEs.technologiesList;

export function getNavTypewriterCommand(href: string): string {
  const map: Record<string, string> = {
    "#hero": "booting home_",
    "#sobre-mi": "loading profile_",
    "#tecnologias": "scanning stack_",
    "#proyectos": "opening projects_",
    "#trayectoria": "reading journey_",
    "#contacto": "establishing contact_",
  };
  return map[href] ?? "booting home_";
}
