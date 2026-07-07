import {
  AlarmCheck,
  HeartHandshake,
  LineChart,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { differentials } from "@/data/site-content";

const iconMap = {
  HeartHandshake,
  AlarmCheck,
  Workflow,
  SearchCheck,
  ShieldCheck,
  LineChart,
};

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-navy py-20 text-white sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeading
            light
            eyebrow="Diferenciais"
            title="Uma operação contábil pensada para reduzir ruído e aumentar segurança"
            description="O foco é entregar clareza, método e proximidade sem abrir mão da precisão técnica exigida pela rotina contábil."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-3xl border border-white/12 bg-white/8 p-6 backdrop-blur transition hover:bg-white/12">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/12 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
