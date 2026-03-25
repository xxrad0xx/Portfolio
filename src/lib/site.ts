export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

export const SITE_BRAND_SECOND_LINE = "UX Developer";

export const site = {
  name: `Raul Ortiz ${SITE_BRAND_SECOND_LINE}`,
  /** Línea bajo el título del hero (tres ideas, separadas por ·). */
  role: "UX como base · UI con criterio · Sistemas que sí funcionan",
  /** Párrafos intro del hero (debajo del rol). */
  heroBody: [
    "No me enfoco solo en cómo se ve una interfaz, sino en cómo se usa, cómo responde y cómo escala.",
    "Trabajo conectando diseño y desarrollo para construir productos claros, funcionales y pensados para el mundo real.",
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
  headline: "Código limpio, decisiones de diseño claras.",
  lead: `Tengo experiencia construyendo soluciones reales desde cero, combinando lógica de desarrollo con diseño de interfaces enfocadas en el usuario.`,
  paragraphs: [
    `Actualmente trabajo como analista en sistemas, donde participo en procesos técnicos y soporte a sistemas institucionales. Además, he desarrollado proyectos propios como plataformas SaaS y demos funcionales, lo que me ha permitido entender cómo llevar una idea desde concepto hasta implementación.`,
    `Me enfoco en diseñar interfaces intuitivas, reducir fricción en la experiencia del usuario y construir productos que sean claros, mantenibles y escalables.`,
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
      "Soporte y gestión de sistemas institucionales",
      "Resolución de problemas técnicos y mantenimiento de infraestructura digital",
      "Apoyo en procesos tecnológicos internos",
      "Participación en mejora de flujos digitales dentro de la institución",
    ],
  },
  {
    period: "2023 — Actualidad",
    role: "Freelance · UX & desarrollo full stack",
    org: "Proyectos independientes",
    current: true,
    bullets: [
      "Diseño UX, prototipado y experiencia de usuario para productos digitales",
      "Desarrollo full stack: interfaces, lógica de negocio y despliegue",
      "Más de 3 años llevando ideas desde el concepto hasta producción",
      "Colaboración con clientes y proyectos bajo demanda, con foco en claridad y rendimiento",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Pasantías en Sistemas",
    org: "Unidad Educativa Atenas",
    current: false,
    bullets: [
      "Apoyo en tareas técnicas y mantenimiento de sistemas",
      "Diagnóstico y solución de incidencias básicas",
      "Introducción al trabajo con sistemas reales en entorno institucional",
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
      "Diseño de interfaz y experiencia de usuario",
      "Implementación de funcionalidades clave",
      "Trabajo colaborativo en desarrollo de producto",
    ],
    tags: ["Demo", "Equipo", "Educación"],
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
      "Enfoque en experiencia del usuario y lógica de negocio",
      "Desarrollo de interfaz y arquitectura del sistema",
    ],
    tags: ["SaaS", "UX", "Producto"],
    image: "/image/ruta593.png",
  },
  {
    title: "Sistema médico inteligente",
    subtitle: "En desarrollo",
    desc: "Sistema de gestión médica con enfoque moderno y funcionalidades avanzadas.",
    highlights: [
      "Rediseño de experiencia de usuario en sistemas médicos tradicionales",
      "Enfoque en eficiencia, claridad y escalabilidad",
      "Integración de nuevas funcionalidades centradas en el usuario",
    ],
    tags: ["UX", "Salud", "WIP"],
    image: "/image/gestimed.png",
  },
] as const;

export const technologiesList = [
  "Figma",
  "UX/UI Design",
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "MongoDB",
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
