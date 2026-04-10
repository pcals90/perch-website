import { useEffect, useState } from "react";
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
    heroEyebrow: "Editorial decision engine for housing",
    heroTitle: "Choose where you live with structure, not noise.",
    heroBody:
      "Perch turns housing search into a calm editorial system: place-aware, profile-aware, and built to move people toward a shortlist they can trust.",
    seeProduct: "See the product",
    viewFlow: "View the flow",
    heroBadge: "P E R C H edit",
    heroRanked: "Ranked for your routine",
    signals: [
      ["Commute", "14 min"],
      ["Budget", "Within range"],
      ["Noise", "Quiet street"],
    ],
    tradeoffLabel: "Tradeoff note",
    tradeoffText:
      "Modern Marina 2BR. Strong daily fit, slightly tighter than the price suggests.",
    shortlistConfidence: "Shortlist confidence",
    shortlistTitle: "Three viable options. One clear leader.",
    shortlistBadge: "Best balance",
    compare: "Compare",
    whatPerchDoes: "What Perch actually does",
    approachTitle:
      "The product gives housing search shape, then makes the tradeoffs readable.",
    productTruth: "Product truth",
    inPractice: "In practice",
    storyBlocks: [
      {
        title: "Explore with structure",
        body: "Perch begins with area logic, profile signals, and a cleaner sequence through the inventory. The experience feels expansive without becoming noisy.",
        detail:
          "Users stay oriented by neighborhood, commute, and daily-life context before they commit attention to listing polish.",
        metric: "Area-first discovery",
      },
      {
        title: "Understand tradeoffs instantly",
        body: "Each property arrives with one strong image, quick-scan signals, and an editorial line on the catch. The point is not more data. It is faster clarity.",
        detail:
          "Perch makes the compromise legible right away: slightly tight for the price, calm but farther out, polished but less character.",
        metric: "Quick-scan signals",
      },
      {
        title: "Build a shortlist you can trust",
        body: "Saving a home becomes a decision surface, not a pile. Perch narrows to a few serious options and explains what separates them with confidence.",
        detail:
          "The shortlist compares certainty, value, feel, and friction so users can stop browsing and move forward without second-guessing.",
        metric: "Decision-ready shortlist",
      },
    ],
    walkthroughEyebrow: "Product walkthrough",
    walkthroughTitle: "A decision journey designed to feel legible.",
    walkthroughBody:
      "Perch moves from place to profile to validation, keeping the user close to a small set of strong options the whole way through.",
    stepLabel: "Step",
    editorialView: "Editorial view",
    productFlow: "Product flow",
    flow: [
      {
        step: "01",
        title: "Map awareness",
        body: "Start with place before polish. Area context frames every decision that follows.",
      },
      {
        step: "02",
        title: "Progressive onboarding",
        body: "Preferences emerge through use, so Perch learns without turning the first session into a form.",
      },
      {
        step: "03",
        title: "Magazine discovery",
        body: "Each home arrives with image, signals, and one clear line on the tradeoff.",
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
    decisionEyebrow: "Decision support",
    decisionTitle: "The shortlist is where conviction should arrive.",
    decisionBody:
      "Perch reduces the final decision to a few viable homes, then clarifies what separates them: certainty, value, image, comfort, and daily fit.",
    stats: [
      ["Commute", "14 min"],
      ["Quiet", "High"],
      ["Confidence", "Strong"],
    ],
    currentLeader: "Current leader",
    leaderBody: "The cleanest balance across commute, finish, and overall calm.",
    closingTitle: "Built for people who need to choose well, not keep browsing.",
    closingBody:
      "Early access for renters, operators, and partners shaping a calmer path from search to shortlist.",
    joinEarlyAccess: "Join early access",
    readApproach: "Read the approach",
    shortlist: [
      {
        name: "5242 Tower 1",
        line: "Cleanest overall fit for commute, quiet, and finish.",
        verdict: "Best balance",
      },
      {
        name: "Marina Gate View",
        line: "More certainty, less character, strongest fallback.",
        verdict: "Safest option",
      },
      {
        name: "Parkside Residence",
        line: "More room for the money, but more daily friction.",
        verdict: "Value play",
      },
    ],
  },
  es: {
    nav: ["Enfoque", "Producto", "Flujo", "Shortlist"],
    requestAccess: "Solicitar acceso",
    heroEyebrow: "Motor editorial de decisión para vivienda",
    heroTitle: "Elige dónde vivir con estructura, no con ruido.",
    heroBody:
      "Perch convierte la búsqueda de vivienda en un sistema editorial sereno: consciente del lugar, consciente del perfil y diseñado para llevar a las personas a una shortlist en la que puedan confiar.",
    seeProduct: "Ver producto",
    viewFlow: "Ver flujo",
    heroBadge: "P E R C H edit",
    heroRanked: "Clasificado para tu rutina",
    signals: [
      ["Traslado", "14 min"],
      ["Presupuesto", "Dentro del rango"],
      ["Ruido", "Calle silenciosa"],
    ],
    tradeoffLabel: "Nota de equilibrio",
    tradeoffText:
      "Marina moderna de 2 habitaciones. Muy buena para el día a día, aunque algo ajustada para el precio.",
    shortlistConfidence: "Confianza de shortlist",
    shortlistTitle: "Tres opciones viables. Una líder clara.",
    shortlistBadge: "Mejor balance",
    compare: "Comparar",
    whatPerchDoes: "Lo que Perch realmente hace",
    approachTitle:
      "El producto le da forma a la búsqueda de vivienda y vuelve legibles los tradeoffs.",
    productTruth: "Verdad del producto",
    inPractice: "En la práctica",
    storyBlocks: [
      {
        title: "Explora con estructura",
        body: "Perch empieza con lógica de zona, señales de perfil y una secuencia más clara dentro del inventario. La experiencia se siente amplia sin volverse ruidosa.",
        detail:
          "Las personas se orientan por barrio, traslado y contexto de vida diaria antes de dedicar atención al brillo de cada anuncio.",
        metric: "Descubrimiento guiado por zona",
      },
      {
        title: "Entiende los tradeoffs al instante",
        body: "Cada propiedad llega con una imagen fuerte, señales de lectura rápida y una línea editorial sobre el costo real de elegirla. No se trata de más datos. Se trata de claridad más rápida.",
        detail:
          "Perch vuelve legible el compromiso desde el principio: algo justa para el precio, más tranquila pero más lejos, pulida pero con menos carácter.",
        metric: "Señales de lectura rápida",
      },
      {
        title: "Construye una shortlist en la que puedas confiar",
        body: "Guardar una vivienda deja de ser una pila y se convierte en una superficie de decisión. Perch reduce a unas pocas opciones serias y explica qué las separa.",
        detail:
          "La shortlist compara certeza, valor, sensación y fricción para que la persona deje de navegar y avance sin dudar.",
        metric: "Shortlist lista para decidir",
      },
    ],
    walkthroughEyebrow: "Recorrido del producto",
    walkthroughTitle: "Un recorrido de decisión pensado para sentirse legible.",
    walkthroughBody:
      "Perch va del lugar al perfil y luego a la validación, manteniendo al usuario cerca de un conjunto pequeño de opciones fuertes durante todo el recorrido.",
    stepLabel: "Paso",
    editorialView: "Vista editorial",
    productFlow: "Flujo de producto",
    flow: [
      {
        step: "01",
        title: "Conciencia del mapa",
        body: "Empieza por el lugar antes que por el brillo. El contexto del área enmarca cada decisión que sigue.",
      },
      {
        step: "02",
        title: "Onboarding progresivo",
        body: "Las preferencias emergen con el uso, así que Perch aprende sin convertir la primera sesión en un formulario.",
      },
      {
        step: "03",
        title: "Descubrimiento tipo revista",
        body: "Cada vivienda llega con imagen, señales y una línea clara sobre el tradeoff.",
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
    decisionEyebrow: "Soporte de decisión",
    decisionTitle: "La shortlist es donde debería llegar la convicción.",
    decisionBody:
      "Perch reduce la decisión final a unas pocas viviendas viables y luego aclara qué las separa: certeza, valor, imagen, comodidad y encaje diario.",
    stats: [
      ["Traslado", "14 min"],
      ["Silencio", "Alto"],
      ["Confianza", "Fuerte"],
    ],
    currentLeader: "Opción líder",
    leaderBody: "El balance más limpio entre traslado, acabados y calma general.",
    closingTitle: "Hecho para personas que necesitan elegir bien, no seguir navegando.",
    closingBody:
      "Acceso anticipado para arrendatarios, operadores y partners que buscan un camino más sereno desde la búsqueda hasta la shortlist.",
    joinEarlyAccess: "Unirse al acceso anticipado",
    readApproach: "Leer el enfoque",
    shortlist: [
      {
        name: "5242 Tower 1",
        line: "El encaje más limpio entre traslado, calma y acabados.",
        verdict: "Mejor balance",
      },
      {
        name: "Marina Gate View",
        line: "Más certeza, menos carácter, la mejor alternativa segura.",
        verdict: "Opción más segura",
      },
      {
        name: "Parkside Residence",
        line: "Más espacio por el dinero, pero más fricción diaria.",
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

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
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
    <div className="relative min-h-[640px] lg:min-h-[720px]">
      <div
        className="absolute inset-x-0 top-10 h-[520px] overflow-hidden rounded-[36px] sm:top-0 sm:h-[560px] lg:left-10 lg:right-0 lg:h-[680px]"
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

        <div className="absolute right-6 top-20 max-w-[320px] sm:right-8 sm:top-24">
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
        className="absolute -bottom-2 left-0 w-[88%] rounded-[30px] p-5 sm:w-[68%] sm:p-6"
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
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const nextLocale = detectLocale();
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  const copy = translations[locale];

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
