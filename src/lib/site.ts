export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

export const SITE_BRAND_SECOND_LINE = "Application Analyst (UX/UI)";

export const site = {
  name: `Raul Ortiz ${SITE_BRAND_SECOND_LINE}`,
  /** Línea bajo el título del hero (tres ideas, separadas por ·). */
  role: "Application Analyst · UX/UI · De la incidencia al cambio",
  /** Párrafos intro del hero (debajo del rol). */
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
  /** Discord: abre el cliente web; con sesión iniciada puedes añadir amigo o enviar MD con el tag. */
  discord: {
    url: "https://discord.com/channels/@me",
    handle: "x_Rad0x#8300",
  },
  languages: [
    { label: "Español", level: "Nativo" },
    { label: "Inglés", level: "B+ (en progreso a nivel avanzado)" },
  ],
} as const;

export const aboutContent = {
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
} as const;

export const experienceTimeline = [
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
] as const;

export const projectsContent = [
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
] as const;

export const technologiesList = [
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
] as const;

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
