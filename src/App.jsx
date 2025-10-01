import React, { useState } from "react";

// ------------------------------------------------------------
// SCOREWELL SOLUTIONS LLC — Single‑Page Website (Landing + Key Sections)
// TailwindCSS utility classes are used for styling.
// ------------------------------------------------------------

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.28-2.03a.75.75 0 10-1.06-1.06l-5.47 5.47-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l6-6z"
      clipRule="evenodd"
    />
  </svg>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
    {children}
  </span>
);

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-6">
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-widest text-indigo-600">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
          {title}
        </h2>
      )}
      {subtitle && <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const StatCard = ({ label, value, foot }) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <div className="text-slate-500 text-sm">{label}</div>
    <div className="mt-2 text-3xl font-semibold text-slate-900">{value}</div>
    {foot && <div className="mt-2 text-xs text-slate-500">{foot}</div>}
  </div>
);

const FeatureCard = ({ title, desc, items }) => (
  <div className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
    {items && (
      <ul className="mt-6 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <Check />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const CTA = () => (
  <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-12 text-white text-center shadow-lg">
    <h3 className="text-2xl md:text-3xl font-semibold">
      Because your wellbeing deserves more than a number
    </h3>
    <p className="mt-3 opacity-90">
      ScoreWell gives people clear, personalized steps — and gives organizations
      a simpler, more cost‑effective way to support wellbeing.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-medium shadow-sm hover:shadow"
      >
        Get a demo
      </a>
      <a
        href="#process"
        className="inline-flex items-center justify-center rounded-xl ring-1 ring-white/60 px-5 py-3 font-medium hover:bg-white/10"
      >
        See how it works
      </a>
    </div>
  </div>
);

export default function ScoreWellSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold text-indigo-700"
          >
            <span className="inline-block h-8 w-8 rounded-xl bg-indigo-600"></span>
            ScoreWell
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#winwin" className="hover:text-indigo-700">
              Win‑Win
            </a>
            <a href="#solutions" className="hover:text-indigo-700">
              Solutions
            </a>
            <a href="#icp" className="hover:text-indigo-700">
              Who we serve
            </a>
            <a href="#industries" className="hover:text-indigo-700">
              Industries
            </a>
            <a href="#process" className="hover:text-indigo-700">
              Process
            </a>
            <a href="#values" className="hover:text-indigo-700">
              Values
            </a>
            <a href="#pricing" className="hover:text-indigo-700">
              Pricing
            </a>
            <a href="#contact" className="hover:text-indigo-700">
              Contact
            </a>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center rounded-xl border px-3 py-2 text-sm"
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-3 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Win‑Win", "#winwin"],
                ["Solutions", "#solutions"],
                ["Who we serve", "#icp"],
                ["Industries", "#industries"],
                ["Process", "#process"],
                ["Values", "#values"],
                ["Pricing", "#pricing"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl bg-slate-50 px-4 py-3 hover:bg-slate-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <Pill>
              Built by Coaches. Designed for People. Powered by Technology.
            </Pill>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Live Well with ScoreWell
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              ScoreWell Solutions builds tailored, HIPAA‑compliant applications
              that replace outdated systems, reduce costs, and support wellbeing
              — for companies and independent workers alike.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700"
              >
                Request a demo
              </a>
              <a
                href="#winwin"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium"
              >
                Our win‑win approach
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-indigo-100 blur-3xl" />
      </section>

      {/* WIN‑WIN */}
      <Section
        id="winwin"
        eyebrow="The Win‑Win"
        title="Healthier people. Stronger organizations."
        subtitle="ScoreWell creates multidimensional value: personalized support for individuals and practical savings for organizations."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="For Individuals"
            desc="Clarity, encouragement, and step‑by‑step guidance that makes change doable."
            items={[
              "Plain‑language insights",
              "Personalized action plans",
              "Celebrates progress, not perfection",
            ]}
          />
          <FeatureCard
            title="For Organizations"
            desc="Lower program complexity and costs with a platform that adapts to your workflows."
            items={[
              "Cost‑savings levers",
              "Engagement & retention",
              "Configurable dashboards",
            ]}
          />
          <FeatureCard
            title="For Partners"
            desc="Designed to complement clubs and clinics with experiences beyond one‑size‑fits‑all."
            items={[
              "Member/patient pathways",
              "Flexible interfaces",
              "Grow services & revenue",
            ]}
          />
        </div>
      </Section>

      {/* STATS */}
      <Section
        id="impact"
        eyebrow="Why this matters"
        title="Most people don't need more data — they need clearer guidance."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Adults with basic or below‑basic health literacy"
            value="35–36%"
            foot="Source: HHS health literacy survey"
          />
          <StatCard
            label="Only"
            value="12% proficient"
            foot="Much health info is written too complexly"
          />
          <StatCard
            label="Recommended reading level"
            value="6th grade"
            foot="NIH & AMA guidance for materials"
          />
          <StatCard
            label="Our promise"
            value="Clear next steps"
            foot="Plain language + positive framing"
          />
        </div>
      </Section>

      {/* SOLUTIONS SUITE */}
      <Section
        id="solutions"
        eyebrow="Our Solutions"
        title="A suite of tools to help you thrive"
        subtitle="ScoreWell Solutions LLC offers multiple products — each designed to solve real‑world challenges for different audiences."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="ScoreWell™"
            desc="Employee‑facing wellness & incentive app."
            items={[
              "Wellbeing scoring",
              "Actionable recommendations",
              "Friendly, inclusive UX",
            ]}
          />
          <FeatureCard
            title="DocuWell™"
            desc="Coach & admin documentation platform. HIPAA‑compliant and built to support independent coaches and organizations."
            items={[
              "HIPAA‑compliant secure records",
              "Session notes & checklists",
              "Audit trails & reporting",
              "Templates for clubs, clinics, and employers",
            ]}
          />
          <FeatureCard
            title="Access+"
            desc="Subscription‑based wellness benefit for employees and self‑employed gig workers."
            items={[
              "B2B: Employers can offer Access+ as a benefit",
              "B2C: Self‑employed & gig workers can subscribe directly",
              "Personalized coaching with certified specialists",
            ]}
          />
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        id="industries"
        eyebrow="Industries we serve"
        title="Tailored for every sector"
        subtitle="Our platform adapts to diverse industries with compliance and accessibility in mind."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Hospitality & Gaming"
            desc="Tools to engage large, diverse employee populations."
          />
          <FeatureCard
            title="Healthcare"
            desc="HIPAA‑compliant wellness and workflow solutions."
          />
          <FeatureCard
            title="Education"
            desc="Support for faculty, staff, and student wellbeing."
          />
          <FeatureCard
            title="Government & Public Sector"
            desc="Modernization with compliance and accessibility in mind."
          />
          <FeatureCard
            title="Startups & SMBs"
            desc="Affordable, customizable solutions that grow with your business."
          />
          <FeatureCard
            title="Logistics & Gig Economy"
            desc="Drivers, freelancers, and independent workers often lack access to traditional wellness benefits. With Access+, they can subscribe directly to connect with certified wellness coaches. Platforms can offer Access+ to retain talent."
          />
        </div>
      </Section>

      {/* ICPs */}
      <Section id="icp" eyebrow="Who we serve" title="Built to fit your world">
        <div className="grid md:grid-cols-4 gap-6">
          <FeatureCard
            title="Employers"
            desc="Engage employees with personalized support while reducing program sprawl and licensing costs."
            items={[
              "Configurable rules",
              "Simple employee experience",
              "Savings you can see",
            ]}
          />
          <FeatureCard
            title="Health Clubs"
            desc="Deliver wellbeing beyond workouts to deepen member relationships and retention."
            items={[
              "Member pathways",
              "Sticky experiences",
              "Upsell coaching & recovery",
            ]}
          />
          <FeatureCard
            title="Medical Providers"
            desc="Complement care plans with clear, lifestyle‑focused guidance patients can follow."
            items={[
              "Plain‑language plans",
              "Progress visibility",
              "Community partnerships",
            ]}
          />
          <FeatureCard
            title="Individuals"
            desc="Health‑minded people seeking personalized guidance. Future app model: subscription access with pairing to certified wellness specialists (NBHWC and diverse backgrounds)."
            items={[
              "Personalized matching",
              "Subscription‑based app (future)",
              "Support aligned to your needs, preferences & beliefs",
            ]}
          />
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="How it works"
        title="A guided, client‑centered journey"
        subtitle="We start by listening to your unique needs, then tailor solutions to fit — just like in health coaching."
      >
        <ol className="grid md:grid-cols-5 gap-6 list-decimal list-inside">
          <li className="rounded-2xl bg-white p-5 shadow-sm border">
            Discovery Questionnaire
          </li>
          <li className="rounded-2xl bg-white p-5 shadow-sm border">
            Consultation & Alignment
          </li>
          <li className="rounded-2xl bg-white p-5 shadow-sm border">
            Tailored Solution Design
          </li>
          <li className="rounded-2xl bg-white p-5 shadow-sm border">
            Pilot & Feedback Loop
          </li>
          <li className="rounded-2xl bg-white p-5 shadow-sm border">
            Scale & Continuous Improvement
          </li>
        </ol>
        <p className="mt-6 text-slate-600 max-w-3xl">
          Our philosophy is rooted in behavioral change and health coaching. We
          start by listening to your unique needs, then build solutions tailored
          to your goals. Just like in coaching, our technology meets people
          where they are, simplifying complex workflows and making wellbeing
          accessible.
        </p>
        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      {/* VALUES */}
      <Section
        id="values"
        eyebrow="Our values"
        title="Positive. Accessible. Client‑centered."
        subtitle="We celebrate progress, keep language simple, and make next steps obvious."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Accessibility"
            desc="We design to a 6th‑grade reading level so everyone can participate."
            items={["Plain language", "Friendly visuals", "Inclusive UX"]}
          />
          <FeatureCard
            title="Empowerment"
            desc="We turn insight into action with encouraging, step‑by‑step guidance."
            items={["Doable next steps", "Celebrate wins", "Adaptive pathways"]}
          />
          <FeatureCard
            title="Personalization"
            desc="No one‑size‑fits‑all — ScoreWell adapts to each person and each organization."
            items={[
              "Configurable modules",
              "Role‑based views",
              "Evolves with you",
            ]}
          />
        </div>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        eyebrow="Packaging"
        title="Simple, scalable options"
      >
        <div className="grid md:grid-cols-4 gap-6">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Employers</h3>
            <p className="mt-2 text-slate-600">
              Per‑employee pricing with volume tiers. Start with one region;
              expand property‑by‑property.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check />
                <span>Core platform + analytics</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Configurable workflows</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Add‑ons: advanced analytics, multi‑language</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Talk to sales
            </a>
          </div>
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Health Clubs</h3>
            <p className="mt-2 text-slate-600">
              Per‑location or membership band. Launch with a pilot club to prove
              lift.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check />
                <span>Member pathways & insights</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Retention‑focused dashboards</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Coaching & recovery upsell hooks</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Get a pilot
            </a>
          </div>
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Medical Providers</h3>
            <p className="mt-2 text-slate-600">
              Licensing or employer‑sponsored models. Start with one clinic or
              specialty.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check />
                <span>Plain‑language patient plans</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Lifestyle guidance that complements care</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Community & employer partnerships</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Discuss options
            </a>
          </div>
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Individuals / Access+</h3>
            <p className="mt-2 text-slate-600">
              Subscription access to certified wellness specialists and
              personalized guidance.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <Check />
                <span>Direct subscription for self‑employed & gig workers</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Employer‑sponsored option available</span>
              </li>
              <li className="flex gap-2">
                <Check />
                <span>Personalized matching (NBHWC, diverse backgrounds)</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-white"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Get in touch"
        title="Start doing well with ScoreWell"
        subtitle="Share a bit about your organization and goals. We'll tailor a walkthrough to your needs."
      >
        <form className="grid md:grid-cols-2 gap-4 rounded-3xl border bg-white p-6 shadow-sm">
          <input
            required
            placeholder="Full name"
            className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            required
            type="email"
            placeholder="Work email"
            className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            placeholder="Organization"
            className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
          />
          <select className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Employer</option>
            <option>Health Club</option>
            <option>Medical Provider</option>
            <option>Individual / Access+</option>
            <option>Other</option>
          </select>
          <input
            placeholder="Team size / Locations"
            className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="What problems are you trying to solve?"
            className="md:col-span-2 h-28 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="md:col-span-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-medium"
          >
            Request demo
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-500">
          By reaching out you agree to our friendly emails and privacy‑first
          approach. We'll never sell your data.
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold text-indigo-700">
              <span className="inline-block h-8 w-8 rounded-xl bg-indigo-600"></span>
              ScoreWell Solutions LLC
            </div>
            <p className="mt-3 text-slate-600">
              Built by Coaches. Designed for People. Powered by Technology.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href="#values" className="hover:text-indigo-700">
                  Our values
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-indigo-700">
                  Process
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-indigo-700">
                  Industries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Solutions</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href="#solutions" className="hover:text-indigo-700">
                  ScoreWell™
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-indigo-700">
                  DocuWell™
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-indigo-700">
                  Access+
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href="#contact" className="hover:text-indigo-700">
                  Request a demo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-700">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ScoreWell Solutions LLC. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
