export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.tags": "Tags",
    "nav.about": "About",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.email": "Email",
    "footer.linkedin": "LinkedIn",

    // Blog
    "blog.title": "Blog",
    "blog.description":
      "Deep-dive posts on distributed systems, AI engineering, and leadership. Real production insights from 15+ years building at scale.",
    "blog.noPosts": "No posts found.",
    "blog.search": "Search posts...",

    // Tags
    "tags.title": "Tags",
    "tags.description": "Browse posts by topic.",
    "tags.postsTagged": "Posts tagged",
    "tags.postSingular": "post",
    "tags.postPlural": "posts",
    "tags.found": "found",

    // Pagination
    "pagination.previous": "Previous",
    "pagination.next": "Next",

    // Post navigation
    "postNav.previous": "Previous",
    "postNav.next": "Next",

    // Table of contents
    "toc.title": "On this page",

    // Related posts
    "relatedPosts.title": "Related Posts",

    // Not found
    "notFound.title": "Page not found",
    "notFound.description":
      "The page you're looking for doesn't exist or has been moved.",
    "notFound.home": "Home",
    "notFound.blog": "Blog",

    // About
    "about.title": "About",
    "about.description":
      "Angel Kurten — Engineering Leader building distributed systems, scaling teams, and shipping AI-driven products end to end.",
    "about.p1":
      "I'm Angel Kurten, an Engineering Leader and Product Developer based in LATAM. I've spent over 15 years building distributed systems, scaling engineering teams, and embedding AI into real products.",
    "about.p2":
      "I realized the line between product and technology doesn't exist anymore — and I stopped pretending it does. Today I define, build, and ship. End to end. Alone or leading teams.",
    "about.p3":
      "Currently I'm leading the transformation from an operations-focused company into an AI-driven SaaS platform at ORBIDI / PLINNG, where I architected an AI-native Marketing Intelligence Engine and scaled the team from 3 to 18 engineers.",
    "about.p4":
      "Previously, I led engineering at Crehana (edtech), Muni Tienda (e-commerce), and Mensajeros Urbanos (logistics), driving availability improvements, Kubernetes migrations, and event-driven architectures at scale.",
    "about.p5": "I write about engineering leadership, distributed systems, and the intersection of product and technology on my",
    "about.blogLink": "blog",

    // Blog paginated
    "blogPaginated.title": "Blog - Page",
    "blogPaginated.description": "Blog posts - page",
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.tags": "Etiquetas",
    "nav.about": "Acerca de",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.email": "Email",
    "footer.linkedin": "LinkedIn",

    // Blog
    "blog.title": "Blog",
    "blog.description":
      "Artículos profundos: sistemas distribuidos, ingeniería con IA y liderazgo. Insights reales de 15+ años construyendo a escala.",
    "blog.noPosts": "No se encontraron publicaciones.",
    "blog.search": "Buscar publicaciones...",

    // Tags
    "tags.title": "Etiquetas",
    "tags.description": "Explorar publicaciones por tema.",
    "tags.postsTagged": "Publicaciones etiquetadas",
    "tags.postSingular": "publicación",
    "tags.postPlural": "publicaciones",
    "tags.found": "encontradas",

    // Pagination
    "pagination.previous": "Anterior",
    "pagination.next": "Siguiente",

    // Post navigation
    "postNav.previous": "Anterior",
    "postNav.next": "Siguiente",

    // Table of contents
    "toc.title": "En esta página",

    // Related posts
    "relatedPosts.title": "Publicaciones Relacionadas",

    // Not found
    "notFound.title": "Página no encontrada",
    "notFound.description":
      "La página que buscas no existe o ha sido movida.",
    "notFound.home": "Inicio",
    "notFound.blog": "Blog",

    // About
    "about.title": "Acerca de",
    "about.description":
      "Angel Kurten — Líder de Ingeniería construyendo sistemas distribuidos, escalando equipos y entregando productos impulsados por IA de principio a fin.",
    "about.p1":
      "Soy Angel Kurten, un Líder de Ingeniería y Desarrollador de Producto en LATAM. He pasado más de 15 años construyendo sistemas distribuidos, escalando equipos de ingeniería e integrando IA en productos reales.",
    "about.p2":
      "Me di cuenta de que la línea entre producto y tecnología ya no existe — y dejé de pretender que sí. Hoy defino, construyo y entrego. De principio a fin. Solo o liderando equipos.",
    "about.p3":
      "Actualmente lidero la transformación de una empresa operativa a una plataforma SaaS impulsada por IA en ORBIDI / PLINNG, donde arquitecté un Motor de Inteligencia de Marketing con IA nativa y escalé el equipo de 3 a 18 ingenieros.",
    "about.p4":
      "Anteriormente, lideré ingeniería en Crehana (edtech), Muni Tienda (e-commerce) y Mensajeros Urbanos (logística), impulsando mejoras de disponibilidad, migraciones a Kubernetes y arquitecturas event-driven a escala.",
    "about.p5": "Escribo sobre liderazgo en ingeniería, sistemas distribuidos y la intersección de producto y tecnología en mi",
    "about.blogLink": "blog",

    // Blog paginated
    "blogPaginated.title": "Blog - Página",
    "blogPaginated.description": "Publicaciones del blog - página",
  },
};

export function t(lang: Locale, key: string): string {
  return translations[lang]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
}

export function getLocalizedPath(path: string, lang: Locale): string {
  if (lang === defaultLocale) {
    return path;
  }
  return `/${lang}${path}`;
}
