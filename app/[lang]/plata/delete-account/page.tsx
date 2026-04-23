import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const EFFECTIVE_DATE_ES = "23 de abril de 2026";
const EFFECTIVE_DATE_EN = "April 23, 2026";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;

  const title =
    locale === "es"
      ? "Eliminar tu cuenta de Plata"
      : "Delete your Plata account";
  const description =
    locale === "es"
      ? "Cómo solicitar la eliminación de tu cuenta de Plata y los datos asociados."
      : "How to request deletion of your Plata account and associated data.";

  return {
    title,
    description,
    alternates: {
      canonical:
        locale === "es"
          ? "https://angelkurten.com/es/plata/delete-account"
          : "https://angelkurten.com/plata/delete-account",
      languages: {
        en: "https://angelkurten.com/plata/delete-account",
        es: "https://angelkurten.com/es/plata/delete-account",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PlataDeleteAccountPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isEs = locale === "es";

  const altLang: Locale = isEs ? "en" : "es";
  const altHref = getLocalizedPath("/plata/delete-account", altLang);
  const altLabel = isEs ? "Read in English" : "Leer en español";

  return (
    <>
      <Header lang={locale} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Plata · app.plata.mobile
        </div>

        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {isEs ? "Eliminar tu cuenta de Plata" : "Delete your Plata account"}
        </h1>

        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {isEs
            ? `Última actualización: ${EFFECTIVE_DATE_ES}`
            : `Last updated: ${EFFECTIVE_DATE_EN}`}
        </p>

        <div className="mt-4">
          <Link
            href={altHref}
            className="text-sm underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors"
          >
            {altLabel}
          </Link>
        </div>

        <article className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {isEs ? <SpanishContent /> : <EnglishContent />}
        </article>
      </main>
      <Footer lang={locale} />
    </>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 font-[family-name:var(--font-dm-serif)] text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
    >
      {children}
    </h2>
  );
}

function SpanishContent() {
  return (
    <>
      <p>
        Esta página explica cómo solicitar la eliminación de tu cuenta en la app{" "}
        <strong>Plata</strong> (identificador de paquete <code>app.plata.mobile</code>),
        desarrollada por <strong>Angel Kurten</strong>. Al eliminar tu cuenta se borran
        tus datos personales y financieros asociados, según se detalla más abajo.
      </p>

      <SectionHeading id="pasos">1. Cómo solicitar la eliminación</SectionHeading>
      <p>
        Puedes eliminar tu cuenta directamente desde la aplicación siguiendo estos pasos:
      </p>
      <ol>
        <li>Abre la app <strong>Plata</strong> en tu dispositivo.</li>
        <li>
          Ve a <strong>Perfil</strong> &rsaquo; <strong>Privacidad</strong> &rsaquo;{" "}
          <strong>Eliminar cuenta</strong>.
        </li>
        <li>Confirma la eliminación cuando se te solicite.</li>
      </ol>

      <SectionHeading id="alternativa">2. Alternativa por correo</SectionHeading>
      <p>
        Si no puedes acceder a la app, puedes solicitar la eliminación enviando un correo
        a{" "}
        <a href="mailto:angel@angelkurten.com?subject=Eliminar%20cuenta">
          angel@angelkurten.com
        </a>{" "}
        con el asunto <strong>“Eliminar cuenta”</strong>, desde la dirección de correo
        asociada a tu cuenta de Plata. Esto nos permite verificar tu identidad antes de
        procesar la solicitud.
      </p>

      <SectionHeading id="datos-eliminados">3. Datos que se eliminan</SectionHeading>
      <p>Al procesar tu solicitud eliminamos los siguientes datos:</p>
      <ul>
        <li>Correo electrónico</li>
        <li>Nombre</li>
        <li>Gastos registrados</li>
        <li>Ingresos</li>
        <li>Metas de ahorro</li>
        <li>Preferencias (idioma, moneda y demás ajustes de la cuenta)</li>
      </ul>

      <SectionHeading id="datos-conservados">
        4. Datos que se conservan temporalmente
      </SectionHeading>
      <p>
        Por razones legales y de seguridad, podemos conservar{" "}
        <strong>registros anonimizados de uso</strong> durante un máximo de{" "}
        <strong>30 días</strong> tras la eliminación. Estos registros no permiten
        identificarte personalmente y se utilizan únicamente para cumplir con
        obligaciones legales, prevención de fraude y auditoría.
      </p>

      <SectionHeading id="plazo">5. Plazo de procesamiento</SectionHeading>
      <p>
        Las solicitudes de eliminación se procesan en un plazo máximo de{" "}
        <strong>7 días hábiles</strong> desde su recepción. Una vez completado el
        proceso, tus datos personales dejarán de estar disponibles y no será posible
        recuperarlos.
      </p>

      <SectionHeading id="contacto">6. Contacto</SectionHeading>
      <p>
        Si tienes dudas sobre el proceso de eliminación o sobre el tratamiento de tus
        datos, puedes escribirnos a:
      </p>
      <ul>
        <li><strong>Responsable</strong>: Angel Kurten</li>
        <li>
          <strong>Correo electrónico</strong>:{" "}
          <a href="mailto:angel@angelkurten.com">angel@angelkurten.com</a>
        </li>
        <li>
          <strong>Aplicación</strong>: Plata (<code>app.plata.mobile</code>)
        </li>
      </ul>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <p>
        This page explains how to request deletion of your account in the{" "}
        <strong>Plata</strong> app (package identifier <code>app.plata.mobile</code>),
        developed by <strong>Angel Kurten</strong>. Deleting your account removes your
        personal and financial data as described below.
      </p>

      <SectionHeading id="steps">1. How to request deletion</SectionHeading>
      <p>You can delete your account directly from the app by following these steps:</p>
      <ol>
        <li>Open the <strong>Plata</strong> app on your device.</li>
        <li>
          Go to <strong>Profile</strong> &rsaquo; <strong>Privacy</strong> &rsaquo;{" "}
          <strong>Delete account</strong>.
        </li>
        <li>Confirm the deletion when prompted.</li>
      </ol>

      <SectionHeading id="alternative">2. Email alternative</SectionHeading>
      <p>
        If you cannot access the app, you can request deletion by emailing{" "}
        <a href="mailto:angel@angelkurten.com?subject=Delete%20account">
          angel@angelkurten.com
        </a>{" "}
        with the subject <strong>&ldquo;Delete account&rdquo;</strong>, from the email
        address associated with your Plata account. This lets us verify your identity
        before processing the request.
      </p>

      <SectionHeading id="data-deleted">3. Data that gets deleted</SectionHeading>
      <p>When your request is processed, the following data is deleted:</p>
      <ul>
        <li>Email address</li>
        <li>Name</li>
        <li>Recorded expenses</li>
        <li>Income</li>
        <li>Savings goals</li>
        <li>Preferences (language, currency, and other account settings)</li>
      </ul>

      <SectionHeading id="data-retained">4. Data retained temporarily</SectionHeading>
      <p>
        For legal and security reasons, we may retain{" "}
        <strong>anonymized usage logs</strong> for up to <strong>30 days</strong> after
        deletion. These logs cannot identify you personally and are used only to comply
        with legal obligations, fraud prevention, and audit requirements.
      </p>

      <SectionHeading id="timeline">5. Processing timeline</SectionHeading>
      <p>
        Deletion requests are processed within a maximum of{" "}
        <strong>7 business days</strong> of receipt. Once the process is complete, your
        personal data will no longer be available and cannot be recovered.
      </p>

      <SectionHeading id="contact">6. Contact</SectionHeading>
      <p>
        If you have questions about the deletion process or how we handle your data, you
        can reach us at:
      </p>
      <ul>
        <li><strong>Data controller</strong>: Angel Kurten</li>
        <li>
          <strong>Email</strong>:{" "}
          <a href="mailto:angel@angelkurten.com">angel@angelkurten.com</a>
        </li>
        <li>
          <strong>App</strong>: Plata (<code>app.plata.mobile</code>)
        </li>
      </ul>
    </>
  );
}
