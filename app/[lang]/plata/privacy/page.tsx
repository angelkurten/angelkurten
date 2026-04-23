import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const EFFECTIVE_DATE_ES = "22 de abril de 2026";
const EFFECTIVE_DATE_EN = "April 22, 2026";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;

  const title =
    locale === "es" ? "Política de Privacidad — Plata" : "Privacy Policy — Plata";
  const description =
    locale === "es"
      ? "Política de Privacidad de la app Plata (app.plata.mobile): qué datos recopilamos, cómo los usamos y tus derechos."
      : "Privacy Policy for the Plata app (app.plata.mobile): what data we collect, how we use it, and your rights.";

  return {
    title,
    description,
    alternates: {
      canonical:
        locale === "es"
          ? "https://angelkurten.com/es/plata/privacy"
          : "https://angelkurten.com/plata/privacy",
      languages: {
        en: "https://angelkurten.com/plata/privacy",
        es: "https://angelkurten.com/es/plata/privacy",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PlataPrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isEs = locale === "es";

  const altLang: Locale = isEs ? "en" : "es";
  const altHref = getLocalizedPath("/plata/privacy", altLang);
  const altLabel = isEs ? "Read in English" : "Leer en español";

  return (
    <>
      <Header lang={locale} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Plata · app.plata.mobile
        </div>

        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {isEs ? "Política de Privacidad" : "Privacy Policy"}
        </h1>

        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {isEs
            ? `Fecha de vigencia: ${EFFECTIVE_DATE_ES}`
            : `Effective date: ${EFFECTIVE_DATE_EN}`}
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </h3>
  );
}

function SpanishContent() {
  return (
    <>
      <p>
        Esta Política de Privacidad describe cómo <strong>Plata</strong> (identificador de
        paquete <code>app.plata.mobile</code>) recopila, utiliza y protege la información
        personal y financiera de los usuarios. Plata es una aplicación móvil de finanzas
        personales que permite registrar gastos y analizar recibos mediante inteligencia
        artificial. Al usar la aplicación, usted acepta las prácticas descritas en este
        documento.
      </p>

      <SectionHeading id="informacion">1. Información que recopilamos</SectionHeading>
      <p>
        Recopilamos únicamente la información necesaria para proporcionar las funciones de
        la aplicación.
      </p>

      <SubHeading>1.1 Datos de cuenta</SubHeading>
      <ul>
        <li>
          <strong>Correo electrónico y nombre</strong>: obtenidos al registrarse o iniciar
          sesión mediante Google o Apple.
        </li>
      </ul>

      <SubHeading>1.2 Datos de perfil (opcionales)</SubHeading>
      <ul>
        <li><strong>Ingreso mensual</strong>: ingresado voluntariamente por el usuario.</li>
        <li><strong>Meta de ahorro</strong>: texto libre ingresado voluntariamente por el usuario.</li>
        <li><strong>Idioma y moneda preferidos</strong>: preferencias de visualización.</li>
      </ul>

      <SubHeading>1.3 Datos financieros</SubHeading>
      <p>Por cada gasto registrado almacenamos:</p>
      <ul>
        <li>Nombre del comercio</li>
        <li>Monto y moneda</li>
        <li>Categoría (comida, transporte, compras, entretenimiento, facturas, salud u otros)</li>
        <li>Fecha del gasto</li>
        <li>Notas opcionales</li>
      </ul>

      <SubHeading>1.4 Permisos del dispositivo</SubHeading>
      <ul>
        <li><strong>Cámara</strong>: para capturar fotografías de recibos y analizarlos con IA.</li>
        <li><strong>Galería de fotos</strong>: para seleccionar imágenes de recibos previamente guardadas.</li>
      </ul>
      <p>
        No recopilamos datos de ubicación, contactos, micrófono, historial de navegación,
        sensores del dispositivo ni identificadores publicitarios.
      </p>

      <SectionHeading id="uso">2. Cómo usamos la información</SectionHeading>
      <p>Utilizamos la información recopilada exclusivamente para:</p>
      <ul>
        <li>Autenticar al usuario y mantener su sesión activa.</li>
        <li>Registrar, visualizar y categorizar sus gastos personales.</li>
        <li>
          Analizar fotografías de recibos mediante IA para extraer automáticamente comercio,
          monto, categoría, fecha e ítems.
        </li>
        <li>Generar resúmenes y análisis financieros personalizados dentro de la app.</li>
        <li>Mantener las preferencias de idioma y moneda seleccionadas por el usuario.</li>
        <li>Cumplir con obligaciones legales aplicables.</li>
      </ul>
      <p>
        <strong>No utilizamos los datos con fines publicitarios</strong>, no realizamos
        perfilado con fines comerciales y no vendemos información a terceros.
      </p>

      <SectionHeading id="terceros">3. Compartición con terceros</SectionHeading>
      <p>
        Plata <strong>no vende ni cede</strong> datos personales a terceros con fines
        comerciales o publicitarios. La información se comparte únicamente con los siguientes
        proveedores, y solo en la medida necesaria para el funcionamiento de la aplicación:
      </p>
      <ul>
        <li>
          <strong>Firebase Authentication (Google LLC)</strong>: utilizado exclusivamente
          para autenticación de usuarios. No empleamos Firestore ni otras bases de datos de
          Firebase.
        </li>
        <li>
          <strong>Google Sign-In y Apple Sign-In</strong>: proveedores OAuth para inicio de
          sesión social.
        </li>
        <li>
          <strong>OpenRouter (Claude Haiku de Anthropic)</strong>: utilizado desde el lado
          del servidor para el análisis de fotografías de recibos mediante IA. Las imágenes
          se envían para procesamiento y no son almacenadas ni reutilizadas para
          entrenamiento.
        </li>
        <li>
          <strong>Expo (Expo, Inc.)</strong>: plataforma utilizada para distribuir
          actualizaciones OTA (Over-the-Air) de la aplicación.
        </li>
      </ul>
      <p>
        Cada uno de estos servicios cuenta con sus propias políticas de privacidad, las
        cuales recomendamos revisar.
      </p>

      <SectionHeading id="almacenamiento">
        4. Almacenamiento y seguridad de datos
      </SectionHeading>
      <ul>
        <li>
          Los datos del usuario se almacenan en una base de datos{" "}
          <strong>PostgreSQL</strong> gestionada por nosotros.
        </li>
        <li>
          No utilizamos Firestore ni almacenamiento local persistente de datos sensibles en
          el dispositivo.
        </li>
        <li>
          Las comunicaciones entre la aplicación y el servidor se realizan mediante
          conexiones cifradas (HTTPS/TLS).
        </li>
        <li>
          El acceso a los datos está restringido mediante autenticación y controles de
          acceso del lado del servidor.
        </li>
        <li>
          Se aplican medidas administrativas, técnicas y organizativas razonables para
          proteger la información contra accesos no autorizados, pérdida o alteración.
        </li>
      </ul>
      <p>
        Ningún sistema es completamente seguro; en caso de un incidente que pueda afectar
        datos personales, notificaremos a los usuarios y autoridades competentes según lo
        exija la ley aplicable.
      </p>

      <SectionHeading id="camara">5. Uso de la cámara y fotos</SectionHeading>
      <p>
        La aplicación solicita permiso para acceder a la cámara y a la galería de fotos
        únicamente cuando el usuario elige capturar o seleccionar una imagen de recibo.
      </p>
      <ul>
        <li>Las fotografías de recibos se envían a nuestro servidor para su análisis con IA.</li>
        <li>
          <strong>Las fotografías no se almacenan</strong> en nuestro servidor ni en el
          dispositivo después del análisis.
        </li>
        <li>El análisis extrae únicamente: comercio, monto, categoría, fecha e ítems del recibo.</li>
        <li>
          No se realiza reconocimiento facial, análisis biométrico ni cualquier otro
          procesamiento ajeno a la extracción de datos del recibo.
        </li>
      </ul>
      <p>
        El usuario puede revocar en cualquier momento los permisos de cámara y galería
        desde la configuración de su dispositivo, sin que ello afecte el resto de la
        funcionalidad de la app.
      </p>

      <SectionHeading id="derechos">6. Derechos del usuario</SectionHeading>
      <p>El usuario tiene derecho a:</p>
      <ul>
        <li><strong>Acceder</strong> a los datos personales que tenemos sobre él.</li>
        <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
        <li><strong>Eliminar</strong> su cuenta y los datos asociados.</li>
        <li><strong>Oponerse</strong> o limitar ciertos tratamientos de sus datos.</li>
        <li>
          <strong>Portabilidad</strong>: solicitar una copia de sus datos en un formato
          estructurado.
        </li>
        <li>
          <strong>Retirar el consentimiento</strong> en cualquier momento, sin efecto
          retroactivo.
        </li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, puede contactarnos en{" "}
        <a href="mailto:angel@angelkurten.com">angel@angelkurten.com</a>. Responderemos en
        un plazo razonable conforme a la legislación aplicable.
      </p>

      <SectionHeading id="retencion">7. Retención de datos</SectionHeading>
      <ul>
        <li>
          Los datos de la cuenta y los gastos registrados se conservan mientras la cuenta
          permanezca activa.
        </li>
        <li>
          Cuando un usuario solicita eliminar su cuenta o un registro, se aplica{" "}
          <strong>borrado lógico (soft-delete)</strong>: los datos dejan de ser accesibles
          de inmediato pero pueden mantenerse temporalmente para fines de recuperación,
          auditoría o cumplimiento legal.
        </li>
        <li>
          Transcurrido un plazo razonable, los datos marcados para eliminación se eliminan
          de forma definitiva.
        </li>
        <li>
          Las fotografías de recibos no se retienen: se eliminan tras completarse el
          análisis por IA.
        </li>
      </ul>

      <SectionHeading id="cambios">8. Cambios a la política</SectionHeading>
      <p>
        Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios
        en la aplicación, en los servicios que utilizamos o en la legislación aplicable.
        Cuando realicemos cambios significativos, actualizaremos la fecha de vigencia al
        inicio de este documento y, cuando sea apropiado, notificaremos a los usuarios
        dentro de la aplicación.
      </p>
      <p>Se recomienda revisar esta página de forma periódica.</p>

      <SectionHeading id="contacto">9. Contacto</SectionHeading>
      <p>
        Si tiene preguntas, comentarios o solicitudes sobre esta Política de Privacidad o
        sobre el tratamiento de sus datos, puede contactarnos en:
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
        This Privacy Policy describes how <strong>Plata</strong> (package identifier{" "}
        <code>app.plata.mobile</code>) collects, uses, and protects users’ personal and
        financial information. Plata is a mobile personal-finance application that lets
        users record expenses and analyze receipts using artificial intelligence. By using
        the app, you accept the practices described in this document.
      </p>

      <SectionHeading id="information">1. Information we collect</SectionHeading>
      <p>We only collect the information needed to provide the app’s features.</p>

      <SubHeading>1.1 Account data</SubHeading>
      <ul>
        <li>
          <strong>Email and name</strong>, obtained when you sign up or sign in with Google
          or Apple.
        </li>
      </ul>

      <SubHeading>1.2 Profile data (optional)</SubHeading>
      <ul>
        <li><strong>Monthly income</strong>, voluntarily entered by the user.</li>
        <li><strong>Savings goal</strong>, free-text field voluntarily entered by the user.</li>
        <li><strong>Preferred language and currency</strong>, display preferences.</li>
      </ul>

      <SubHeading>1.3 Financial data</SubHeading>
      <p>For each recorded expense we store:</p>
      <ul>
        <li>Merchant name</li>
        <li>Amount and currency</li>
        <li>Category (food, transport, shopping, entertainment, bills, health, or other)</li>
        <li>Expense date</li>
        <li>Optional notes</li>
      </ul>

      <SubHeading>1.4 Device permissions</SubHeading>
      <ul>
        <li><strong>Camera</strong>: to capture receipt photos for AI analysis.</li>
        <li><strong>Photo library</strong>: to select previously saved receipt images.</li>
      </ul>
      <p>
        We do not collect location, contacts, microphone, browsing history, device
        sensors, or advertising identifiers.
      </p>

      <SectionHeading id="use">2. How we use information</SectionHeading>
      <p>We use the collected information solely to:</p>
      <ul>
        <li>Authenticate the user and maintain an active session.</li>
        <li>Record, display, and categorize personal expenses.</li>
        <li>
          Analyze receipt photos with AI to automatically extract merchant, amount,
          category, date, and line items.
        </li>
        <li>Generate personalized financial summaries and insights inside the app.</li>
        <li>Keep the user’s language and currency preferences.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>
        <strong>We do not use data for advertising</strong>, we do not profile users for
        commercial purposes, and we do not sell personal data to third parties.
      </p>

      <SectionHeading id="third-parties">3. Sharing with third parties</SectionHeading>
      <p>
        Plata <strong>does not sell or transfer</strong> personal data to third parties
        for commercial or advertising purposes. Information is shared only with the
        following providers, and only to the extent needed for the app to function:
      </p>
      <ul>
        <li>
          <strong>Firebase Authentication (Google LLC)</strong>: used exclusively for user
          authentication. We do not use Firestore or other Firebase databases.
        </li>
        <li>
          <strong>Google Sign-In and Apple Sign-In</strong>: OAuth providers for social
          login.
        </li>
        <li>
          <strong>OpenRouter (Anthropic Claude Haiku)</strong>: used server-side to
          analyze receipt photos with AI. Images are sent for processing and are not
          stored or reused for model training.
        </li>
        <li>
          <strong>Expo (Expo, Inc.)</strong>: platform used to deliver over-the-air (OTA)
          updates for the app.
        </li>
      </ul>
      <p>
        Each of these services has its own privacy policy, which we recommend reviewing.
      </p>

      <SectionHeading id="storage">4. Data storage and security</SectionHeading>
      <ul>
        <li>
          User data is stored in a <strong>PostgreSQL</strong> database managed by us.
        </li>
        <li>
          We do not use Firestore or persistent local storage of sensitive data on the
          device.
        </li>
        <li>
          Communication between the app and the server is encrypted using HTTPS/TLS.
        </li>
        <li>
          Data access is restricted through authentication and server-side access
          controls.
        </li>
        <li>
          We apply reasonable administrative, technical, and organizational safeguards to
          protect information against unauthorized access, loss, or alteration.
        </li>
      </ul>
      <p>
        No system is completely secure; in the event of an incident affecting personal
        data, we will notify users and the competent authorities as required by applicable
        law.
      </p>

      <SectionHeading id="camera">5. Camera and photo usage</SectionHeading>
      <p>
        The app only requests access to the camera and photo library when the user
        chooses to capture or select a receipt image.
      </p>
      <ul>
        <li>Receipt photos are sent to our server for AI analysis.</li>
        <li>
          <strong>Photos are not stored</strong> on our server or on the device after
          analysis.
        </li>
        <li>
          The analysis only extracts: merchant, amount, category, date, and line items.
        </li>
        <li>
          No facial recognition, biometric analysis, or processing unrelated to receipt
          data extraction is performed.
        </li>
      </ul>
      <p>
        You may revoke camera and photo library permissions at any time from your device
        settings, without affecting the rest of the app’s functionality.
      </p>

      <SectionHeading id="rights">6. User rights</SectionHeading>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> the personal data we hold about you.</li>
        <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
        <li><strong>Delete</strong> your account and associated data.</li>
        <li><strong>Object to or restrict</strong> certain processing of your data.</li>
        <li>
          <strong>Portability</strong>: request a copy of your data in a structured
          format.
        </li>
        <li>
          <strong>Withdraw consent</strong> at any time, without retroactive effect.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:angel@angelkurten.com">angel@angelkurten.com</a>. We will respond
        within a reasonable time frame as required by applicable law.
      </p>

      <SectionHeading id="retention">7. Data retention</SectionHeading>
      <ul>
        <li>
          Account data and recorded expenses are kept while the account remains active.
        </li>
        <li>
          When a user requests deletion of their account or a record, we apply{" "}
          <strong>soft-delete</strong>: data becomes immediately inaccessible but may be
          kept temporarily for recovery, audit, or legal compliance purposes.
        </li>
        <li>
          After a reasonable period, data marked for deletion is permanently removed.
        </li>
        <li>Receipt photos are not retained; they are removed after AI analysis completes.</li>
      </ul>

      <SectionHeading id="changes">8. Changes to this policy</SectionHeading>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in the
        app, in the services we use, or in applicable law. When we make significant
        changes, we will update the effective date at the top of this document and, when
        appropriate, notify users within the app.
      </p>
      <p>We recommend reviewing this page periodically.</p>

      <SectionHeading id="contact">9. Contact</SectionHeading>
      <p>
        If you have questions, comments, or requests regarding this Privacy Policy or the
        processing of your data, you can reach us at:
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
