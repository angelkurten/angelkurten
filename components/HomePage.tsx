"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Script from "next/script";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

const i18n: Record<Locale, Record<string, string>> = {
  en: {
    "hero.tagline":
      "Engineering Leader. Product Developer.<br>I build things that work.",
    "hero.scroll": "Scroll",
    "about.label": "About",
    "about.text":
      "I've spent years building distributed systems, scaling engineering teams, and embedding AI into real products. Then I realized the line between product and technology <em>doesn't exist anymore</em> \u2014 and I stopped pretending it does. Today I define, build, and ship. End to end. Alone or leading teams.",
    "experience.label": "Experience",
    "exp.0.period": "Sep 2023 \u2014 Present",
    "exp.0.role": "Engineering Manager",
    "exp.0.company": "ORBIDI / PLINNG",
    "exp.0.result":
      "Leading the transformation from an operations-focused company into an AI-driven SaaS platform. Architected AI-native Marketing Intelligence Engine (GPT-5 + RAG). Scaled team from 3 to 18 engineers.",
    "exp.1.period": "May 2022 \u2014 Aug 2023",
    "exp.1.role": "Senior Engineering Manager",
    "exp.1.company": "Crehana",
    "exp.1.result":
      "Led engineering scale-up during high-growth phase of LATAM edtech platform. Directed three distributed squads (20+ engineers). Increased platform availability from 97% to 99.8%. Led migration to Kubernetes-based microservices architecture.",
    "exp.2.period": "Jun 2021 \u2014 Apr 2022",
    "exp.2.role": "Engineering Manager",
    "exp.2.company": "Muni Tienda",
    "exp.2.result":
      "Led engineering during rapid growth phase of e-commerce operations platform. Architected event-driven distributed system processing 5,000+ daily orders with high transactional reliability.",
    "exp.3.period": "Jun 2019 \u2014 May 2021",
    "exp.3.role": "Principal Engineer & Technical Product Manager",
    "exp.3.company": "Mensajeros Urbanos",
    "exp.3.result":
      "Led architecture and product strategy for high-volume logistics platform. Increased team productivity by 40%. Reduced production defects by 45%. Launched a high-volume product line enabling a new revenue stream.",
    "exp.4.period": "Apr 2016 \u2014 May 2019",
    "exp.4.role": "Head of Technology",
    "exp.4.company": "Orange Developers",
    "exp.4.result":
      "Led technology strategy and delivery execution for a custom software firm serving SMEs across LATAM. 94% on-time and on-budget project execution. Established agile governance framework across teams.",
    "exp.5.period": "May 2009 \u2014 Apr 2016",
    "exp.5.role": "Backend Developer",
    "exp.5.company": "Freelance",
    "exp.5.result":
      "Delivered custom backend systems and API-driven applications for 40+ SMEs across LATAM and Europe. Designed scalable RESTful APIs across multiple business domains.",
  },
  es: {
    "hero.tagline":
      "Engineering Leader. Product Developer.<br>Construyo cosas que funcionan.",
    "hero.scroll": "Desplazar",
    "about.label": "Sobre m\u00ed",
    "about.text":
      "He pasado a\u00f1os construyendo sistemas distribuidos, escalando equipos de ingenier\u00eda e integrando IA en productos reales. Entonces me di cuenta de que la l\u00ednea entre producto y tecnolog\u00eda <em>ya no existe</em> \u2014 y dej\u00e9 de pretender que s\u00ed. Hoy defino, construyo y entrego. De principio a fin. Solo o liderando equipos.",
    "experience.label": "Experiencia",
    "exp.0.period": "Sep 2023 \u2014 Presente",
    "exp.0.role": "Engineering Manager",
    "exp.0.company": "ORBIDI / PLINNG",
    "exp.0.result":
      "Liderando la transformaci\u00f3n de una empresa operativa a una plataforma SaaS impulsada por IA. Arquitect\u00e9 un Motor de Inteligencia de Marketing con IA nativa (GPT-5 + RAG). Escal\u00e9 el equipo de 3 a 18 ingenieros.",
    "exp.1.period": "May 2022 \u2014 Ago 2023",
    "exp.1.role": "Senior Engineering Manager",
    "exp.1.company": "Crehana",
    "exp.1.result":
      "Lider\u00e9 el escalamiento de ingenier\u00eda en plataforma edtech LATAM en fase de alto crecimiento. Dirig\u00ed tres squads distribuidos (20+ ingenieros). Llev\u00e9 la disponibilidad de la plataforma del 97% al 99.8%. Lider\u00e9 migraci\u00f3n a arquitectura de microservicios en Kubernetes.",
    "exp.2.period": "Jun 2021 \u2014 Abr 2022",
    "exp.2.role": "Engineering Manager",
    "exp.2.company": "Muni Tienda",
    "exp.2.result":
      "Lider\u00e9 ingenier\u00eda durante fase de crecimiento r\u00e1pido de plataforma de e-commerce. Arquitect\u00e9 sistema distribuido event-driven procesando 5,000+ pedidos diarios con alta confiabilidad transaccional.",
    "exp.3.period": "Jun 2019 \u2014 May 2021",
    "exp.3.role": "Principal Engineer & Technical Product Manager",
    "exp.3.company": "Mensajeros Urbanos",
    "exp.3.result":
      "Lider\u00e9 arquitectura y estrategia de producto para plataforma log\u00edstica de alto volumen. Increment\u00e9 productividad del equipo un 40%. Reduje defectos en producci\u00f3n un 45%. Lanc\u00e9 l\u00ednea de producto de alto volumen habilitando una nueva fuente de ingresos.",
    "exp.4.period": "Abr 2016 \u2014 May 2019",
    "exp.4.role": "Head of Technology",
    "exp.4.company": "Orange Developers",
    "exp.4.result":
      "Lider\u00e9 estrategia tecnol\u00f3gica y ejecuci\u00f3n de entregas para firma de software sirviendo pymes en LATAM. 94% de entrega a tiempo y dentro de presupuesto. Establec\u00ed marco de gobernanza \u00e1gil en todos los equipos.",
    "exp.5.period": "May 2009 \u2014 Abr 2016",
    "exp.5.role": "Backend Developer",
    "exp.5.company": "Freelance",
    "exp.5.result":
      "Entregu\u00e9 sistemas backend y aplicaciones API-driven para 40+ pymes en LATAM y Europa. Dise\u00f1\u00e9 APIs RESTful escalables en m\u00faltiples dominios de negocio.",
  },
};

const experienceKeys = [0, 1, 2, 3, 4, 5] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-03-04T00:00:00-05:00",
  dateModified: "2026-03-04T00:00:00-05:00",
  mainEntity: {
    "@type": "Person",
    name: "Angel Kurten",
    url: "https://angelkurten.com",
    email: "mailto:angelkurten@gmail.com",
    jobTitle: "Engineering Manager",
    description:
      "Engineering Leader building scalable distributed systems and AI-driven products across high-growth SaaS platforms.",
    knowsLanguage: ["en", "es"],
    worksFor: {
      "@type": "Organization",
      name: "ORBIDI / PLINNG",
    },
    sameAs: ["https://linkedin.com/in/angelkurten"],
  },
};

function t(lang: Locale, key: string): string {
  return i18n[lang][key] ?? key;
}

export default function HomePage() {
  const params = useParams();
  const lang = (params.lang as Locale) || "en";
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const addRevealRef = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const otherLang: Locale = lang === "en" ? "es" : "en";
  const langSwitchHref = getLocalizedPath("/", otherLang);

  return (
    <div className="portfolio-page">
      <Script
        id="jsonld-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="portfolio-nav" aria-label="Main navigation">
        <Link href={getLocalizedPath("/blog", lang)}>Blog</Link>
        <Link href={getLocalizedPath("/tags", lang)}>Tags</Link>
        <Link href={getLocalizedPath("/about", lang)}>About</Link>
      </nav>

      {/* Language Switcher */}
      <nav className="lang-switch" aria-label="Language">
        <Link
          href={langSwitchHref}
          className="lang-switch-link"
        >
          {otherLang.toUpperCase()}
        </Link>
      </nav>

      {/* Hero */}
      <header className="hero" role="banner">
        <h1 className="hero__name reveal" ref={addRevealRef}>
          Angel
          <br />
          Kurten
        </h1>
        <p
          className="hero__tagline reveal"
          ref={addRevealRef}
          dangerouslySetInnerHTML={{ __html: t(lang, "hero.tagline") }}
        />
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span>{t(lang, "hero.scroll")}</span>
        </div>
      </header>

      <main>
        {/* About */}
        <section className="about" id="about" aria-labelledby="about-heading">
          <h2
            className="section-label reveal"
            id="about-heading"
            ref={addRevealRef}
          >
            {t(lang, "about.label")}
          </h2>
          <p
            className="about__text reveal"
            ref={addRevealRef}
            dangerouslySetInnerHTML={{ __html: t(lang, "about.text") }}
          />
        </section>

        {/* Experience */}
        <section
          className="experience"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <h2
            className="section-label reveal"
            id="experience-heading"
            ref={addRevealRef}
          >
            {t(lang, "experience.label")}
          </h2>
          <ul className="timeline">
            {experienceKeys.map((i) => (
              <li className="timeline__item reveal" key={i} ref={addRevealRef}>
                <div className="timeline__meta">
                  <p className="timeline__period">{t(lang, `exp.${i}.period`)}</p>
                </div>
                <div>
                  <h3 className="timeline__role">
                    {t(lang, `exp.${i}.role`)}{" "}
                    <span className="timeline__company">
                      &mdash; {t(lang, `exp.${i}.company`)}
                    </span>
                  </h3>
                  <p className="timeline__result">
                    {t(lang, `exp.${i}.result`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Portfolio Footer */}
      <footer className="portfolio-footer">
        <address className="portfolio-footer__links">
          <a href="mailto:angelkurten@gmail.com">angelkurten@gmail.com</a>
          <a
            href="https://linkedin.com/in/angelkurten"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </address>
        <small className="portfolio-footer__copy">&copy; 2026</small>
      </footer>
    </div>
  );
}
