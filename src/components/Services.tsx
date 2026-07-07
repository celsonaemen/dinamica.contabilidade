import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  ChartNoAxesCombined,
  FolderKanban,
  MessagesSquare,
  ReceiptText,
  UsersRound,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site-content";

const iconMap = {
  BriefcaseBusiness,
  ReceiptText,
  UsersRound,
  BadgeCheck,
  ChartNoAxesCombined,
  CalendarCheck2,
  MessagesSquare,
  FolderKanban,
};

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-champagne blur-3xl" />
      <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-mist blur-3xl" />

      <div className="section-shell relative">
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Serviços"
            title="Soluções contábeis completas para a rotina da sua empresa"
            description="Do fiscal ao trabalhista, da abertura à regularização: a Dinâmica organiza as obrigações essenciais para que o empresário tenha mais previsibilidade."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={service.title} delay={index * 0.03}>
                <article className="glass-panel-light group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bluebrand text-white shadow-soft transition group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
