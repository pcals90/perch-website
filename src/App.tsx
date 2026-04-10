import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MapPinned,
  MoonStar,
  MoveRight,
  Navigation,
  Sparkles,
  Star,
} from "lucide-react";

const palette = {
  canvas: "#f3efe8",
  paper: "#fcfaf7",
  ink: "#121212",
  copy: "#3a3834",
  soft: "#6d6962",
  accentDeep: "#7f6f57",
  dark: "#171614",
};

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const translations = {
  en: {
    nav: ["Approach", "Product", "Flow", "Shortlist"],
    requestAccess: "Request access",
    metaTitle: "Perch | A Calmer Way to Find the Right Home",
    metaDescription:
      "Perch helps people search for a home with more clarity, better context, and a shortlist they can trust.",
    heroEyebrow: "A more considered way to search for a home",
    heroTitle: "Find a home with more clarity and less noise.",
    heroBody:
      "Perch brings together place, preferences, and a clearer sense of fit so people can narrow their options with confidence.",
    seeProduct: "See the product",
    viewFlow: "View the flow",
    heroBadge: "P E R C H edit",
    heroRanked: "Ranked for your routine",
    signals: [
      ["Commute", "14 min"],
      ["Budget", "Within range"],
      ["Noise", "Quiet street"],
    ],
    tradeoffLabel: "What to know",
    tradeoffText:
      "A polished Marina 2BR with a strong day-to-day fit, though a touch tighter than the price suggests.",
    shortlistConfidence: "Shortlist",
    shortlistTitle: "Three viable options. One clear leader.",
    shortlistBadge: "Best balance",
    compare: "Compare",
    whatPerchDoes: "How Perch helps",
    approachTitle:
      "Perch brings more calm, context, and confidence to the way people choose where to live.",
    productTruth: "How it works",
    inPractice: "What that means",
    storyBlocks: [
      {
        title: "Explore with structure",
        body: "Perch starts with area context, personal fit, and a cleaner path through the inventory so the search feels open, but never overwhelming.",
        detail:
          "People stay grounded in neighborhood, commute, and daily routine before they get distracted by surface-level polish.",
        metric: "Area-led search",
      },
      {
        title: "See the real fit quickly",
        body: "Each property comes with a strong image, quick signals, and a simple line that helps explain where it shines and where it asks for compromise.",
        detail:
          "Instead of making people interpret endless details, Perch surfaces the feel of the choice right away: quieter but farther out, polished but less character, spacious but less central.",
        metric: "Quick-read signals",
      },
      {
        title: "Build a shortlist you can trust",
        body: "Saved homes become a working shortlist rather than a pile of tabs. Perch helps narrow the field and makes the differences between strong options easier to understand.",
        detail:
          "By comparing value, comfort, location, and daily fit, the shortlist helps people move forward without second-guessing every option.",
        metric: "A shortlist with clarity",
      },
    ],
    walkthroughEyebrow: "The Perch experience",
    walkthroughTitle: "A search experience that feels calm from the very beginning.",
    walkthroughBody:
      "Perch moves from place to preferences to validation, keeping people close to a small set of promising homes all the way through.",
    stepLabel: "Step",
    editorialView: "Featured view",
    productFlow: "Perch flow",
    flow: [
      {
        step: "01",
        title: "Map awareness",
        body: "Start with place before polish. The surrounding area shapes every choice that follows.",
      },
      {
        step: "02",
        title: "Progressive onboarding",
        body: "Preferences emerge through use, so Perch learns without turning the first session into a form.",
      },
      {
        step: "03",
        title: "Magazine discovery",
        body: "Each home arrives with imagery, signals, and a clear sense of the fit.",
      },
      {
        step: "04",
        title: "Property validation",
        body: "The product surfaces what works, what annoys, and who the home is really for.",
      },
      {
        step: "05",
        title: "Shortlist decision",
        body: "Only a few viable options remain, with enough structure to stop confidently.",
      },
    ],
    decisionEyebrow: "Compare with confidence",
    decisionTitle: "The shortlist is where people should start feeling sure.",
    decisionBody:
      "Perch narrows the search to a few viable homes, then helps clarify what truly separates them: comfort, value, location, and day-to-day fit.",
    stats: [
      ["Commute", "14 min"],
      ["Quiet", "High"],
      ["Confidence", "Strong"],
    ],
    currentLeader: "Current leader",
    leaderBody: "The most balanced option across commute, finish, and overall calm.",
    closingTitle: "For people who want to feel good about where they land.",
    closingBody:
      "Early access for renters, operators, and partners who want a more thoughtful path from search to shortlist.",
    joinEarlyAccess: "Join early access",
    readApproach: "Read the approach",
    shortlist: [
      {
        name: "5242 Tower 1",
        line: "The strongest overall fit for commute, calm, and finish.",
        verdict: "Best balance",
      },
      {
        name: "Marina Gate View",
        line: "A steadier option with less character, but more certainty.",
        verdict: "Safest option",
      },
      {
        name: "Parkside Residence",
        line: "More space for the money, with a little more daily friction.",
        verdict: "Value play",
      },
    ],
  },
  es: {
    nav: ["Enfoque", "Producto", "Flujo", "Shortlist"],
    requestAccess: "Solicitar acceso",
    metaTitle: "Perch | Una forma más serena de encontrar hogar",
    metaDescription:
      "Perch ayuda a buscar hogar con más claridad, mejor contexto y una shortlist en la que se puede confiar.",
    heroEyebrow: "Una forma más serena de buscar hogar",
    heroTitle: "Encuentra hogar con más claridad y menos ruido.",
    heroBody:
      "Perch reúne lugar, preferencias y una lectura más clara del encaje para ayudar a las personas a reducir opciones con confianza.",
    seeProduct: "Ver producto",
    viewFlow: "Ver flujo",
    heroBadge: "P E R C H edit",
    heroRanked: "Clasificado para tu rutina",
    signals: [
      ["Traslado", "14 min"],
      ["Presupuesto", "Dentro del rango"],
      ["Ruido", "Calle silenciosa"],
    ],
    tradeoffLabel: "Qué conviene saber",
    tradeoffText:
      "Un 2 habitaciones en Marina con una vida diaria muy cómoda, aunque un poco ajustado para el precio.",
    shortlistConfidence: "Shortlist",
    shortlistTitle: "Tres opciones viables. Una líder clara.",
    shortlistBadge: "Mejor balance",
    compare: "Comparar",
    whatPerchDoes: "Cómo ayuda Perch",
    approachTitle:
      "Perch aporta calma, contexto y más seguridad al momento de elegir dónde vivir.",
    productTruth: "Cómo funciona",
    inPractice: "Qué significa esto",
    storyBlocks: [
      {
        title: "Explora con estructura",
        body: "Perch empieza por la zona, el estilo de vida y una ruta más clara dentro del inventario, para que la búsqueda se sienta amplia sin volverse abrumadora.",
        detail:
          "La persona se ubica por barrio, trayecto y rutina diaria antes de dejarse llevar por la apariencia de cada anuncio.",
        metric: "Búsqueda guiada por zona",
      },
      {
        title: "Entiende el encaje más rápido",
        body: "Cada propiedad llega con una imagen fuerte, señales rápidas y una frase sencilla que ayuda a entender dónde se siente bien y dónde pide ceder.",
        detail:
          "En lugar de obligar a interpretar detalles sin fin, Perch deja ver desde temprano el tipo de decisión: más tranquila pero más lejos, más pulida pero con menos carácter, más amplia pero menos central.",
        metric: "Señales de lectura rápida",
      },
      {
        title: "Construye una shortlist en la que puedas confiar",
        body: "Guardar una vivienda deja de ser una acumulación y se convierte en una shortlist útil. Perch reduce el campo y hace más fácil entender qué separa a las buenas opciones.",
        detail:
          "Al comparar valor, comodidad, ubicación y encaje diario, la shortlist ayuda a avanzar sin volver a empezar cada vez.",
        metric: "Una shortlist con claridad",
      },
    ],
    walkthroughEyebrow: "La experiencia Perch",
    walkthroughTitle: "Una búsqueda que se siente más serena desde el principio.",
    walkthroughBody:
      "Perch va del lugar a las preferencias y después a la validación, manteniendo a la persona cerca de un grupo pequeño de viviendas prometedoras durante todo el recorrido.",
    stepLabel: "Paso",
    editorialView: "Vista destacada",
    productFlow: "Flujo Perch",
    flow: [
      {
        step: "01",
        title: "Conciencia del mapa",
        body: "Empieza por el lugar antes que por el brillo. El contexto del área marca el tono de cada elección.",
      },
      {
        step: "02",
        title: "Onboarding progresivo",
        body: "Las preferencias emergen con el uso, así que Perch aprende sin convertir la primera sesión en un formulario.",
      },
      {
        step: "03",
        title: "Descubrimiento tipo revista",
        body: "Cada vivienda llega con imágenes, señales y una lectura clara del encaje.",
      },
      {
        step: "04",
        title: "Validación de propiedad",
        body: "El producto muestra qué funciona, qué molesta y para quién es realmente ese hogar.",
      },
      {
        step: "05",
        title: "Decisión de shortlist",
        body: "Solo quedan unas pocas opciones viables, con suficiente estructura para decidir con confianza.",
      },
    ],
    decisionEyebrow: "Comparar con más seguridad",
    decisionTitle: "La shortlist es donde una decisión debería empezar a sentirse clara.",
    decisionBody:
      "Perch reduce la búsqueda a unas pocas viviendas viables y después ayuda a entender qué las separa de verdad: comodidad, valor, ubicación y encaje en el día a día.",
    stats: [
      ["Traslado", "14 min"],
      ["Silencio", "Alto"],
      ["Confianza", "Fuerte"],
    ],
    currentLeader: "Opción líder",
    leaderBody: "La opción más equilibrada entre trayecto, acabados y sensación de calma.",
    closingTitle: "Para quienes quieren sentirse bien con el lugar que eligen.",
    closingBody:
      "Acceso anticipado para arrendatarios, operadores y partners que buscan una manera más considerada de pasar de la búsqueda a una shortlist.",
    joinEarlyAccess: "Unirse al acceso anticipado",
    readApproach: "Leer el enfoque",
    shortlist: [
      {
        name: "5242 Tower 1",
        line: "La opción más completa en trayecto, calma y acabados.",
        verdict: "Mejor balance",
      },
      {
        name: "Marina Gate View",
        line: "Una opción más estable, con menos carácter, pero más certeza.",
        verdict: "Opción más segura",
      },
      {
        name: "Parkside Residence",
        line: "Más espacio por el dinero, con algo más de fricción diaria.",
        verdict: "Mejor valor",
      },
    ],
  },
} as const;

type Locale = keyof typeof translations;
type Copy = (typeof translations)[Locale];

const flowIcons = [MapPinned, Navigation, MoonStar, Check, Star];
const storyImages = [
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
];

function detectLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const languages = [
    ...(navigator.languages ?? []),
    navigator.language ?? "",
  ].map((language) => language.toLowerCase());

  const hasEnglish = languages.some((language) => language.startsWith("en"));
  const hasSpanish = languages.some((language) => language.startsWith("es"));

  if (hasEnglish) {
    return "en";
  }

  if (hasSpanish) {
    return "es";
  }

  return "en";
}

function Eyebrow({ children }: { children: string }) {
  return (
    <div
      className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em]"
      style={{ color: palette.soft }}
    >
      {children}
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-medium"
      style={{ backgroundColor: "rgba(18,18,18,0.05)", color: palette.ink }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: palette.accentDeep }}
      />
      <span style={{ color: palette.soft }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function HeroVisual({ copy }: { copy: Copy }) {
  return (
    <div className="relative">
      <div
        className="relative h-[420px] overflow-hidden rounded-[36px] sm:h-[520px] lg:ml-10 lg:h-[680px]"
        style={{
          backgroundColor: palette.paper,
          boxShadow: "0 35px 100px rgba(18,18,18,0.08)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
          alt="Refined apartment interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
          <div
            className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ backgroundColor: "rgba(252,250,247,0.92)", color: palette.ink }}
          >
            {copy.heroBadge}
          </div>
          <div
            className="rounded-full px-3 py-2 text-[11px] font-medium"
            style={{ backgroundColor: "rgba(252,250,247,0.88)", color: palette.copy }}
          >
            {copy.heroRanked}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {copy.signals.map(([label, value]) => (
              <Signal key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <div className="absolute left-6 right-6 top-20 sm:left-auto sm:right-8 sm:top-24 sm:max-w-[320px]">
          <div
            className="rounded-[24px] px-5 py-4"
            style={{
              backgroundColor: "rgba(252,250,247,0.9)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 18px 50px rgba(18,18,18,0.08)",
            }}
          >
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: palette.soft }}
            >
              {copy.tradeoffLabel}
            </div>
            <p
              className="mt-2 text-[15px] leading-[1.55]"
              style={{ color: palette.ink }}
            >
              {copy.tradeoffText}
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative mt-4 rounded-[30px] p-5 sm:p-6 lg:-mt-24 lg:w-[68%]"
        style={{
          backgroundColor: "rgba(252,250,247,0.92)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 26px 80px rgba(18,18,18,0.1)",
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: palette.soft }}
            >
              {copy.shortlistConfidence}
            </div>
            <div
              className="mt-2 text-[22px] font-semibold tracking-[-0.03em]"
              style={{ color: palette.ink }}
            >
              {copy.shortlistTitle}
            </div>
          </div>
          <div
            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ backgroundColor: palette.ink, color: palette.paper }}
          >
            {copy.shortlistBadge}
          </div>
        </div>

        <div className="space-y-3">
          {copy.shortlist.map((item, index) => (
            <div
              key={item.name}
              className="grid gap-2 rounded-[22px] px-4 py-4 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center"
              style={{
                backgroundColor: index === 0 ? "rgba(18,18,18,0.94)" : "rgba(18,18,18,0.04)",
                color: index === 0 ? palette.paper : palette.ink,
              }}
            >
              <div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: index === 0 ? "rgba(252,250,247,0.64)" : palette.soft }}
                >
                  {item.verdict}
                </div>
                <div className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">
                  {item.name}
                </div>
              </div>
              <p
                className="text-[14px] leading-[1.55]"
                style={{ color: index === 0 ? "rgba(252,250,247,0.82)" : palette.copy }}
              >
                {item.line}
              </p>
              <button
                className="inline-flex h-10 items-center rounded-full px-4 text-[13px] font-medium"
                style={{
                  backgroundColor: index === 0 ? "rgba(252,250,247,0.12)" : "rgba(18,18,18,0.07)",
                  color: index === 0 ? palette.paper : palette.ink,
                }}
              >
                {copy.compare}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryBlock({
  title,
  body,
  detail,
  image,
  reverse,
  metric,
  copy,
}: {
  title: string;
  body: string;
  detail: string;
  image: string;
  reverse?: boolean;
  metric: string;
  copy: Copy;
}) {
  return (
    <div
      className={`grid items-stretch gap-6 lg:gap-10 ${reverse ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div
          className="relative h-[360px] overflow-hidden rounded-[32px] sm:h-[420px]"
          style={{ boxShadow: "0 28px 80px rgba(18,18,18,0.08)" }}
        >
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {metric}
            </div>
            <div className="max-w-[520px] text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              {title}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col justify-between rounded-[32px] p-8 sm:p-10 ${reverse ? "lg:order-1" : ""}`}
        style={{ backgroundColor: "rgba(252,250,247,0.86)" }}
      >
        <div>
          <div
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: palette.soft }}
          >
            {copy.productTruth}
          </div>
          <div
            className="max-w-[520px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em]"
            style={{ color: palette.ink }}
          >
            {title}
          </div>
          <p
            className="mt-5 max-w-[520px] text-[17px] leading-[1.72]"
            style={{ color: palette.copy }}
          >
            {body}
          </p>
        </div>

        <div
          className="mt-10 rounded-[26px] p-5 sm:p-6"
          style={{ backgroundColor: "rgba(18,18,18,0.04)" }}
        >
          <div
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: palette.soft }}
          >
            {copy.inPractice}
          </div>
          <p className="text-[15px] leading-[1.65]" style={{ color: palette.ink }}>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function WalkthroughRail({ copy }: { copy: Copy }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
      <div
        className="rounded-[32px] p-7 sm:p-8"
        style={{ backgroundColor: "rgba(252,250,247,0.72)" }}
      >
        <Eyebrow>{copy.walkthroughEyebrow}</Eyebrow>
        <div
          className="max-w-[420px] text-[36px] font-semibold leading-[1.02] tracking-[-0.04em]"
          style={{ color: palette.ink }}
        >
          {copy.walkthroughTitle}
        </div>
        <p
          className="mt-5 max-w-[420px] text-[16px] leading-[1.7]"
          style={{ color: palette.copy }}
        >
          {copy.walkthroughBody}
        </p>
      </div>

      <div className="grid gap-4">
        {copy.flow.map((item, index) => {
          const Icon = flowIcons[index];
          return (
            <div
              key={item.step}
              className="grid gap-4 rounded-[30px] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
              style={{
                backgroundColor: index === 2 ? palette.ink : "rgba(252,250,247,0.82)",
                color: index === 2 ? palette.paper : palette.ink,
                boxShadow: index === 2 ? "0 24px 80px rgba(18,18,18,0.12)" : undefined,
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  backgroundColor: index === 2 ? "rgba(252,250,247,0.12)" : "rgba(18,18,18,0.06)",
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: index === 2 ? palette.paper : palette.ink }}
                />
              </div>
              <div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: index === 2 ? "rgba(252,250,247,0.6)" : palette.soft }}
                >
                  {copy.stepLabel} {item.step}
                </div>
                <div className="mt-2 text-[24px] font-semibold tracking-[-0.03em]">
                  {item.title}
                </div>
                <p
                  className="mt-2 max-w-[680px] text-[15px] leading-[1.65]"
                  style={{ color: index === 2 ? "rgba(252,250,247,0.8)" : palette.copy }}
                >
                  {item.body}
                </p>
              </div>
              <div
                className="justify-self-start rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] sm:justify-self-end"
                style={{
                  backgroundColor: index === 2 ? "rgba(252,250,247,0.12)" : "rgba(18,18,18,0.05)",
                  color: index === 2 ? palette.paper : palette.copy,
                }}
              >
                {index === 2 ? copy.editorialView : copy.productFlow}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DecisionPanel({ copy }: { copy: Copy }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <div>
        <Eyebrow>{copy.decisionEyebrow}</Eyebrow>
        <div
          className="max-w-[520px] text-[38px] font-semibold leading-[1.02] tracking-[-0.04em]"
          style={{ color: palette.ink }}
        >
          {copy.decisionTitle}
        </div>
        <p
          className="mt-5 max-w-[520px] text-[17px] leading-[1.72]"
          style={{ color: palette.copy }}
        >
          {copy.decisionBody}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {copy.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[24px] px-4 py-5"
              style={{ backgroundColor: "rgba(18,18,18,0.05)" }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: palette.soft }}
              >
                {label}
              </div>
              <div
                className="mt-3 text-[22px] font-semibold tracking-[-0.03em]"
                style={{ color: palette.ink }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-[34px] p-5 sm:p-6"
        style={{
          backgroundColor: palette.paper,
          boxShadow: "0 30px 90px rgba(18,18,18,0.08)",
        }}
      >
        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div
            className="overflow-hidden rounded-[28px]"
            style={{ backgroundColor: "rgba(18,18,18,0.05)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
              alt="Shortlisted apartment"
              className="h-[250px] w-full object-cover sm:h-[320px]"
            />
            <div className="p-5">
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: palette.soft }}
              >
                {copy.currentLeader}
              </div>
              <div
                className="mt-2 text-[26px] font-semibold tracking-[-0.04em]"
                style={{ color: palette.ink }}
              >
                {copy.shortlist[0].name}
              </div>
              <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: palette.copy }}>
                {copy.leaderBody}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {copy.shortlist.map((item, index) => (
              <div
                key={item.name}
                className="rounded-[24px] p-4"
                style={{
                  backgroundColor: index === 0 ? palette.ink : "rgba(18,18,18,0.04)",
                  color: index === 0 ? palette.paper : palette.ink,
                }}
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: index === 0 ? "rgba(252,250,247,0.64)" : palette.soft }}
                >
                  {item.verdict}
                </div>
                <div className="mt-1 text-[20px] font-semibold tracking-[-0.03em]">
                  {item.name}
                </div>
                <p
                  className="mt-2 text-[14px] leading-[1.6]"
                  style={{ color: index === 0 ? "rgba(252,250,247,0.82)" : palette.copy }}
                >
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const locale = detectLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const copy = translations[locale];

  useEffect(() => {
    document.title = copy.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", copy.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", copy.metaTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", copy.metaDescription);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", copy.metaTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", copy.metaDescription);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", locale === "es" ? "es_ES" : "en_US");
    }
  }, [copy, locale]);

  return (
    <div
      className="w-full"
      style={{ backgroundColor: palette.canvas, color: palette.ink }}
    >
      <header className="sticky top-0 z-40 w-full backdrop-blur-[14px]">
        <div
          className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
          style={{ backgroundColor: "rgba(243,239,232,0.8)" }}
        >
          <div
            className="text-[12px] font-semibold uppercase tracking-[0.52em]"
            style={{ color: palette.ink }}
          >
            P E R C H
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {copy.nav.map((item, index) => (
              <a
                key={item}
                href={index === 0 ? "#approach" : index === 1 ? "#product" : index === 2 ? "#flow" : "#shortlist"}
                className="text-[14px]"
                style={{ color: palette.copy }}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="inline-flex h-11 items-center rounded-full px-5 text-[14px] font-medium"
            style={{ backgroundColor: palette.ink, color: palette.paper }}
          >
            {copy.requestAccess}
          </a>
        </div>
      </header>

      <main className="w-full">
        <section className="w-full px-5 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28 lg:pt-10">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="max-w-[520px] pb-4"
            >
              <Eyebrow>{copy.heroEyebrow}</Eyebrow>
              <h1
                className="text-[54px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]"
                style={{ color: palette.ink }}
              >
                {copy.heroTitle}
              </h1>
              <p
                className="mt-6 max-w-[460px] text-[18px] leading-[1.68]"
                style={{ color: palette.copy }}
              >
                {copy.heroBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#product"
                  className="inline-flex h-12 items-center rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: palette.ink, color: palette.paper }}
                >
                  {copy.seeProduct}
                </a>
                <a
                  href="#flow"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: "rgba(18,18,18,0.06)", color: palette.ink }}
                >
                  {copy.viewFlow} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <HeroVisual copy={copy} />
            </motion.div>
          </div>
        </section>

        <section id="approach" className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 max-w-[760px]">
              <Eyebrow>{copy.whatPerchDoes}</Eyebrow>
              <div
                className="text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[52px]"
                style={{ color: palette.ink }}
              >
                {copy.approachTitle}
              </div>
            </div>

            <div className="space-y-6">
              {copy.storyBlocks.map((block, index) => (
                <StoryBlock
                  key={block.title}
                  title={block.title}
                  body={block.body}
                  detail={block.detail}
                  metric={block.metric}
                  image={storyImages[index]}
                  reverse={index === 1}
                  copy={copy}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="product"
          className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
          style={{ backgroundColor: "rgba(252,250,247,0.5)" }}
        >
          <div id="flow" className="mx-auto max-w-[1500px]">
            <WalkthroughRail copy={copy} />
          </div>
        </section>

        <section id="shortlist" className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <DecisionPanel copy={copy} />
          </div>
        </section>

        <section id="cta" className="w-full px-5 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1500px]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="grid gap-10 rounded-[40px] px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14"
              style={{
                backgroundColor: palette.dark,
                boxShadow: "0 32px 100px rgba(18,18,18,0.12)",
              }}
            >
              <div>
                <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/58">
                  <Sparkles className="h-3.5 w-3.5" />
                  P E R C H
                </div>
                <div className="max-w-[760px] text-[38px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[52px]">
                  {copy.closingTitle}
                </div>
                <p className="mt-5 max-w-[620px] text-[17px] leading-[1.72] text-white/72">
                  {copy.closingBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@perch.so"
                  className="inline-flex h-12 items-center rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: palette.paper, color: palette.ink }}
                >
                  {copy.joinEarlyAccess}
                </a>
                <a
                  href="#approach"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[14px] font-medium text-white"
                  style={{ backgroundColor: "rgba(252,250,247,0.1)" }}
                >
                  {copy.readApproach} <MoveRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
