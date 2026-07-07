import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site-content";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeading
            align="center"
            eyebrow="Processo de atendimento"
            title="Um fluxo simples para organizar a contabilidade desde o primeiro contato"
            description="O atendimento é estruturado para entender o cenário da empresa, organizar documentos e manter acompanhamento recorrente."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.05}>
              <article className="relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-6 text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
