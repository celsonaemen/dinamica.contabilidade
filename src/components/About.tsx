import { CheckCircle2, ClipboardCheck, FileText, MessageSquareText } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent } from "@/data/site-content";

const cards = [
  { icon: ClipboardCheck, label: "Rotinas acompanhadas" },
  { icon: FileText, label: "Informações organizadas" },
  { icon: MessageSquareText, label: "Orientação objetiva" },
];

export function About() {
  return (
    <section id="sobre" className="bg-cloud py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <AnimatedSection>
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.text}
          />
          <div className="mt-8 grid gap-3">
            {aboutContent.bullets.map((bullet) => (
              <div key={bullet} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <p className="text-sm leading-6 text-slate-600">{bullet}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-soft">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />
            <div className="absolute bottom-6 left-6 h-32 w-32 rounded-full bg-teal/15 blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-3">
              {cards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <card.icon className="mb-5 h-7 w-7 text-bluebrand" />
                  <p className="text-sm font-semibold leading-5 text-ink">{card.label}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-5 rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm font-medium uppercase text-champagne">Papel consultivo</p>
              <p className="mt-3 text-2xl font-semibold leading-tight">
                Menos incerteza nas obrigações e mais clareza para gerir a empresa.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/72">
                A proposta é manter a contabilidade como uma base de segurança para o dia a dia:
                documentos em ordem, prazos acompanhados e comunicação acessível.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
