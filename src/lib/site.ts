import type { Locale } from "@/lib/i18n";

export type NavItem = { label: string; href: string };

export const SITE_BRAND_SECOND_LINE = "Application Analyst (UX/UI)";

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
      "Selección de trabajo con foco en UX, implementación y lógica de negocio.",
    technologiesKicker: "Tecnologías",
    technologiesTitle: "Herramientas y stack",
    technologiesLead:
      "Herramientas que uso en soporte, análisis y construcción de interfaces: de datos y APIs al detalle visual.",
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
      profileTitle: "Analista de aplicaciones (UX/UI)",
      profileSubtitle: "— del requerimiento a la operación",
      titleWords: [
        {
          text: "Soporte",
          color: "var(--color-vintage-green)",
          shadow: "0 0 28px rgb(82 242 92 / 0.45)",
        },
        {
          text: "a",
          color: "var(--color-vintage-cyan)",
          shadow: "0 0 24px rgb(60 252 236 / 0.4)",
        },
        {
          text: "aplicaciones",
          color: "var(--color-vintage-magenta)",
          shadow: "0 0 26px rgb(232 120 255 / 0.4)",
        },
        {
          text: "con",
          color: "var(--color-vintage-amber)",
          shadow: "0 0 24px rgb(255 192 56 / 0.4)",
        },
        {
          text: "criterio",
          color: "var(--color-vintage-coral)",
          shadow: "0 0 22px rgb(255 138 108 / 0.38)",
        },
        {
          text: "real.",
          color: "var(--color-vintage-green)",
          shadow: "0 0 26px rgb(82 242 92 / 0.4)",
        },
      ],
      metrics: [
        {
          k: "Rol",
          v: ["Soporte a aplicaciones", "Análisis y seguimiento"],
          c: "var(--color-vintage-green)",
        },
        {
          k: "Stack",
          v: ["Figma · React · TypeScript", "Node · SQL"],
          c: "var(--color-vintage-cyan)",
        },
        {
          k: "Enfoque",
          v: [
            "Incidencias y cambios",
            "UX en producción",
            "Interés: Workday / HR",
          ],
          c: "var(--color-vintage-amber)",
        },
      ],
    },
  },

  site: {
    name: `Raul Ortiz ${SITE_BRAND_SECOND_LINE}`,
    role: "Application Analyst · UX/UI · De la incidencia al cambio",
    heroBody: [
      "Priorizo aplicaciones estables y claras para el usuario: triage, documentación de requerimientos y mejoras que se adoptan en el día a día.",
      "Conecto negocio, soporte y desarrollo para cerrar incidencias, validar cambios y dejar herramientas más usables y mantenibles.",
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
    headline: "Análisis, soporte y producto digital con mano en el código.",
    lead: `Combino rol de analista/soporte a aplicaciones con UX/UI y desarrollo: entiendo el problema, lo traduzco en requerimientos y lo acompaño hasta que funciona en producción.`,
    paragraphs: [
      `En sistemas institucionales participo en soporte (Tier 1), seguimiento de incidencias, levantamiento de requerimientos y mejora de flujos. En paralelo, proyectos propios (SaaS, demos) me dieron visión de producto de punta a punta.`,
      `Me interesa que las herramientas sean adoptadas de verdad: menos fricción para el usuario, mejor trazabilidad para el equipo y cambios que el negocio pueda sostener.`,
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
      period: "2024 — Actualidad",
      role: "Analista en Sistemas",
      org: "Unidad Educativa Atenas",
      current: true,
      bullets: [
        "Soporte a usuarios y gestión de sistemas institucionales (Tier 1)",
        "Triage, resolución y escalamiento de incidencias; seguimiento hasta cierre",
        "Levantamiento de requerimientos y mejora de flujos digitales",
        "Documentación de cambios para continuidad operativa",
      ],
    },
    {
      period: "2023 — Actualidad",
      role: "Freelance · UX & desarrollo full stack",
      org: "Proyectos independientes",
      current: true,
      bullets: [
        "Diseño UX/UI (Figma), prototipado y handoff para productos digitales",
        "Implementación y soporte de aplicaciones web: interfaces, APIs y despliegues",
        "Debugging, mejora continua basada en feedback y validación de requerimientos",
        "Colaboración con clientes/stakeholders con foco en claridad y resultados",
      ],
    },
    {
      period: "2023 — 2024",
      role: "Pasantías en Sistemas",
      org: "Unidad Educativa Atenas",
      current: false,
      bullets: [
        "Soporte operativo, mantenimiento de sistemas y atención de incidencias",
        "Diagnóstico y solución de incidencias básicas",
        "Registro de requerimientos y buenas prácticas de soporte",
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
      title: "GridForge",
      subtitle: "Demo — Sistema académico",
      desc: "Demo funcional desarrollado en equipo para entorno educativo.",
      highlights: [
        "Diseño de interfaz y flujos (operación/soporte)",
        "Implementación de funcionalidades clave y validaciones",
        "Trabajo colaborativo en desarrollo de producto",
      ],
      tags: ["Soporte", "Flujos", "Equipo", "Educación"],
      image: "/image/atenas.png",
      demoUrl: "https://atenas-demo-next-js.vercel.app/",
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
    "Figma",
    "UX/UI Design",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "SQL (básico/intermedio)",
    "MongoDB",
    "REST APIs",
    "UAT / testing funcional",
    "Jira (seguimiento)",
    "Tailwind CSS",
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
      "A curated selection focused on UX, implementation, and business logic.",
    technologiesKicker: "Technologies",
    technologiesTitle: "Tools and stack",
    technologiesLead:
      "Tools I use for support, analysis, and interface building—from data and APIs to visual detail.",
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
      profileTitle: "Application Analyst (UX/UI)",
      profileSubtitle: "— from requirement to operations",
      titleWords: [
        {
          text: "Support",
          color: "var(--color-vintage-green)",
          shadow: "0 0 28px rgb(82 242 92 / 0.45)",
        },
        {
          text: "real",
          color: "var(--color-vintage-cyan)",
          shadow: "0 0 24px rgb(60 252 236 / 0.4)",
        },
        {
          text: "apps",
          color: "var(--color-vintage-magenta)",
          shadow: "0 0 26px rgb(232 120 255 / 0.4)",
        },
        {
          text: "with",
          color: "var(--color-vintage-amber)",
          shadow: "0 0 24px rgb(255 192 56 / 0.4)",
        },
        {
          text: "clear",
          color: "var(--color-vintage-coral)",
          shadow: "0 0 22px rgb(255 138 108 / 0.38)",
        },
        {
          text: "criteria.",
          color: "var(--color-vintage-green)",
          shadow: "0 0 26px rgb(82 242 92 / 0.4)",
        },
      ],
      metrics: [
        {
          k: "Role",
          v: ["Application support", "Analysis & follow-up"],
          c: "var(--color-vintage-green)",
        },
        {
          k: "Stack",
          v: ["Figma · React · TypeScript", "Node · SQL"],
          c: "var(--color-vintage-cyan)",
        },
        {
          k: "Focus",
          v: ["Incidents & changes", "UX in production", "Interest: Workday / HR"],
          c: "var(--color-vintage-amber)",
        },
      ],
    },
  },
  site: {
    ...contentEs.site,
    role: "Application Analyst · UX/UI · From incident to change",
    heroBody: [
      "I prioritize stable, clear applications for real users: triage, requirement documentation, and improvements people actually adopt.",
      "I connect business, support, and development to close incidents, validate changes, and leave tools more usable and maintainable.",
    ],
    languages: [
      { label: "Spanish", level: "Native" },
      { label: "English", level: "B+ (improving toward advanced)" },
    ],
  },
  aboutContent: {
    headline: "Analysis, support, and digital product—with hands on code.",
    lead: `I blend application analysis/support with UX/UI and development: I understand the problem, translate it into requirements, and drive it until it works in production.`,
    paragraphs: [
      `In institutional systems I handle Tier-1 support, incident follow-up, requirement gathering, and flow improvements. In parallel, side projects (SaaS, demos) gave me end-to-end product perspective.`,
      `I care about real adoption: less friction for users, better traceability for teams, and changes the business can sustain.`,
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
      period: "2024 — Present",
      role: "Systems Analyst",
      org: "Unidad Educativa Atenas",
      current: true,
      bullets: [
        "User support and management of institutional systems (Tier 1)",
        "Incident triage, resolution, and escalation; follow-up to closure",
        "Requirement gathering and improvement of digital flows",
        "Change documentation for operational continuity",
      ],
    },
    {
      period: "2023 — Present",
      role: "Freelance · UX & Full‑Stack Development",
      org: "Independent projects",
      current: true,
      bullets: [
        "UX/UI design (Figma), prototyping, and handoff for digital products",
        "Web app implementation and support: interfaces, APIs, and deployments",
        "Debugging, feedback-driven iteration, and requirement validation",
        "Stakeholder collaboration with a focus on clarity and outcomes",
      ],
    },
    {
      period: "2023 — 2024",
      role: "Systems Internship",
      org: "Unidad Educativa Atenas",
      current: false,
      bullets: [
        "Operational support, system maintenance, and incident handling",
        "Basic incident diagnosis and resolution",
        "Requirement logging and support best practices",
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
      title: "GridForge",
      subtitle: "Demo — Academic system",
      desc: "A functional team-built demo for an educational environment.",
      highlights: [
        "UI design and operational/support flows",
        "Implementation of key features and validations",
        "Collaborative product development work",
      ],
      tags: ["Support", "Flows", "Team", "Education"],
      image: "/image/atenas.png",
      demoUrl: "https://atenas-demo-next-js.vercel.app/",
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
    "Figma",
    "UX/UI Design",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "SQL (basic/intermediate)",
    "MongoDB",
    "REST APIs",
    "UAT / functional testing",
    "Jira (tracking)",
    "Tailwind CSS",
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
