import Image from "next/image";
import {
  Building2,
  Cpu,
  FileCheck2,
  Handshake,
  MoveRight,
  ShieldCheck,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsappLink, heroContent, heroHighlights } from "@/data/site-content";

const iconMap = {
  Handshake,
  FileCheck2,
  Building2,
  Cpu,
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-hero-mesh pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0,transparent_34%,rgba(195,170,113,0.12)_100%)]" />
      <div className="absolute left-0 top-28 -z-10 h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-3xl" />
      <div className="absolute bottom-12 right-0 -z-10 h-80 w-80 rounded-full border border-gold/20 bg-gold/10 blur-3xl" />

      <div className="section-shell grid items-center gap-12 pb-16 md:grid-cols-[1.08fr_0.92fr] lg:pb-20">
        <AnimatedSection className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-champagne backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            {heroContent.eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-navy shadow-glass transition hover:bg-champagne"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {heroContent.primaryCta}
            </a>
            <a
              href="#servicos"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16"
            >
              {heroContent.secondaryCta}
              <MoveRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroContent.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/14 bg-white/9 p-4 backdrop-blur">
                <strong className="block text-2xl font-semibold text-white">{metric.value}</strong>
                <span className="mt-1 block text-sm leading-5 text-white/68">{metric.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="relative mx-auto w-full max-w-xl">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <div className="rounded-[1.5rem] border border-white/18 bg-white/90 p-6 shadow-glass">
              <Image
                src="/logo-dinamica-redonda.png"
                alt="Dinâmica Contabilidade"
                width={500}
                height={499}
                priority
                className="mx-auto h-auto w-full max-w-[230px] sm:max-w-[270px]"
              />
              <div className="gold-line my-6" />
              <div className="grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200/80 bg-white/82 p-4 text-ink shadow-sm"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bluebrand text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-5 text-slate-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
