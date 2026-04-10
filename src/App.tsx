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
  surface: "#f7f3ed",
  paper: "#fcfaf7",
  muted: "#ece7df",
  ink: "#121212",
  copy: "#3a3834",
  soft: "#6d6962",
  accent: "#a48f72",
  accentDeep: "#7f6f57",
  dark: "#171614",
};

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const shortlist = [
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
];

const flow = [
  {
    step: "01",
    title: "Map awareness",
    body: "Start with place before polish. Area context frames every decision that follows.",
    icon: MapPinned,
  },
  {
    step: "02",
    title: "Progressive onboarding",
    body: "Preferences emerge through use, so Perch learns without turning the first session into a form.",
    icon: Navigation,
  },
  {
    step: "03",
    title: "Magazine discovery",
    body: "Each home arrives with image, signals, and one clear line on the tradeoff.",
    icon: MoonStar,
  },
  {
    step: "04",
    title: "Property validation",
    body: "The product surfaces what works, what annoys, and who the home is really for.",
    icon: Check,
  },
  {
    step: "05",
    title: "Shortlist decision",
    body: "Only a few viable options remain, with enough structure to stop confidently.",
    icon: Star,
  },
];

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

function Signal({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
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

function HeroVisual() {
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

        <div className="absolute left-6 right-6 top-6 flex items-start justify-between">
          <div
            className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ backgroundColor: "rgba(252,250,247,0.92)", color: palette.ink }}
          >
            P E R C H edit
          </div>
          <div
            className="rounded-full px-3 py-2 text-[11px] font-medium"
            style={{ backgroundColor: "rgba(252,250,247,0.88)", color: palette.copy }}
          >
            Ranked for your routine
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap gap-2">
            <Signal label="Commute" value="14 min" />
            <Signal label="Budget" value="Within range" />
            <Signal label="Noise" value="Quiet street" />
          </div>
          <div className="max-w-[620px] text-[32px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px]">
            Modern Marina 2BR. Strong daily fit, slightly tighter than the price suggests.
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
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: palette.soft }}
            >
              Shortlist confidence
            </div>
            <div
              className="mt-2 text-[22px] font-semibold tracking-[-0.03em]"
              style={{ color: palette.ink }}
            >
              Three viable options. One clear leader.
            </div>
          </div>
          <div
            className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ backgroundColor: palette.ink, color: palette.paper }}
          >
            Best balance
          </div>
        </div>

        <div className="space-y-3">
          {shortlist.map((item, index) => (
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
                Compare
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
}: {
  title: string;
  body: string;
  detail: string;
  image: string;
  reverse?: boolean;
  metric: string;
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
            Product truth
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
            In practice
          </div>
          <p className="text-[15px] leading-[1.65]" style={{ color: palette.ink }}>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function WalkthroughRail() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
      <div
        className="rounded-[32px] p-7 sm:p-8"
        style={{ backgroundColor: "rgba(252,250,247,0.72)" }}
      >
        <Eyebrow>Product walkthrough</Eyebrow>
        <div
          className="max-w-[420px] text-[36px] font-semibold leading-[1.02] tracking-[-0.04em]"
          style={{ color: palette.ink }}
        >
          A decision journey designed to feel legible.
        </div>
        <p
          className="mt-5 max-w-[420px] text-[16px] leading-[1.7]"
          style={{ color: palette.copy }}
        >
          Perch moves from place to profile to validation, keeping the user close to a small set of strong options the whole way through.
        </p>
      </div>

      <div className="grid gap-4">
        {flow.map((item, index) => {
          const Icon = item.icon;
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
                  Step {item.step}
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
                {index === 2 ? "Editorial view" : "Product flow"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DecisionPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <div>
        <Eyebrow>Decision support</Eyebrow>
        <div
          className="max-w-[520px] text-[38px] font-semibold leading-[1.02] tracking-[-0.04em]"
          style={{ color: palette.ink }}
        >
          The shortlist is where conviction should arrive.
        </div>
        <p
          className="mt-5 max-w-[520px] text-[17px] leading-[1.72]"
          style={{ color: palette.copy }}
        >
          Perch reduces the final decision to a few viable homes, then clarifies what separates them: certainty, value, image, comfort, and daily fit.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Commute", "14 min"],
            ["Quiet", "High"],
            ["Confidence", "Strong"],
          ].map(([label, value]) => (
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
                Current leader
              </div>
              <div
                className="mt-2 text-[26px] font-semibold tracking-[-0.04em]"
                style={{ color: palette.ink }}
              >
                5242 Tower 1
              </div>
              <p className="mt-3 text-[15px] leading-[1.65]" style={{ color: palette.copy }}>
                The cleanest balance across commute, finish, and overall calm.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {shortlist.map((item, index) => (
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
            {["Approach", "Product", "Flow", "Shortlist"].map((item) => (
              <a
                key={item}
                href={
                  item === "Flow"
                    ? "#flow"
                    : item === "Shortlist"
                      ? "#shortlist"
                      : `#${item.toLowerCase()}`
                }
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
            Request access
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
              <Eyebrow>Editorial decision engine for housing</Eyebrow>
              <h1
                className="text-[54px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]"
                style={{ color: palette.ink }}
              >
                Choose where you live with structure, not noise.
              </h1>
              <p
                className="mt-6 max-w-[460px] text-[18px] leading-[1.68]"
                style={{ color: palette.copy }}
              >
                Perch turns housing search into a calm editorial system: place-aware, profile-aware, and built to move people toward a shortlist they can trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#product"
                  className="inline-flex h-12 items-center rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: palette.ink, color: palette.paper }}
                >
                  See the product
                </a>
                <a
                  href="#flow"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: "rgba(18,18,18,0.06)", color: palette.ink }}
                >
                  View the flow <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </section>

        <section id="approach" className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 max-w-[760px]">
              <Eyebrow>What Perch actually does</Eyebrow>
              <div
                className="text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[52px]"
                style={{ color: palette.ink }}
              >
                The product gives housing search shape, then makes the tradeoffs readable.
              </div>
            </div>

            <div className="space-y-6">
              <StoryBlock
                title="Explore with structure"
                body="Perch begins with area logic, profile signals, and a cleaner sequence through the inventory. The experience feels expansive without becoming noisy."
                detail="Users stay oriented by neighborhood, commute, and daily-life context before they commit attention to listing polish."
                image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
                metric="Area-first discovery"
              />
              <StoryBlock
                title="Understand tradeoffs instantly"
                body="Each property arrives with one strong image, quick-scan signals, and an editorial line on the catch. The point is not more data. It is faster clarity."
                detail="Perch makes the compromise legible right away: slightly tight for the price, calm but farther out, polished but less character."
                image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
                reverse
                metric="Quick-scan signals"
              />
              <StoryBlock
                title="Build a shortlist you can trust"
                body="Saving a home becomes a decision surface, not a pile. Perch narrows to a few serious options and explains what separates them with confidence."
                detail="The shortlist compares certainty, value, feel, and friction so users can stop browsing and move forward without second-guessing."
                image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80"
                metric="Decision-ready shortlist"
              />
            </div>
          </div>
        </section>

        <section
          id="product"
          className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
          style={{ backgroundColor: "rgba(252,250,247,0.5)" }}
        >
          <div id="flow" className="mx-auto max-w-[1500px]">
            <WalkthroughRail />
          </div>
        </section>

        <section id="shortlist" className="w-full px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <DecisionPanel />
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
                  Built for people who need to choose well, not keep browsing.
                </div>
                <p className="mt-5 max-w-[620px] text-[17px] leading-[1.72] text-white/72">
                  Early access for renters, operators, and partners shaping a calmer path from search to shortlist.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@perch.so"
                  className="inline-flex h-12 items-center rounded-full px-5 text-[14px] font-medium"
                  style={{ backgroundColor: palette.paper, color: palette.ink }}
                >
                  Join early access
                </a>
                <a
                  href="#approach"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[14px] font-medium text-white"
                  style={{ backgroundColor: "rgba(252,250,247,0.1)" }}
                >
                  Read the approach <MoveRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
