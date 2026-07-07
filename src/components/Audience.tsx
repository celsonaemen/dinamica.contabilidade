import { ArrowUpRight, Landmark, Store, UserRoundPlus } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { audiences } from "@/data/site-content";

export function Audience() {
  return (
    <section id="publicos" className="bg-cloud py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Para quem atendemos"
            title="Apoio contábil para diferentes fases e perfis de empresa"
            description="A Dinâmica atua com empresas que precisam estruturar rotinas, organizar obrigações e manter uma base contábil confiável para operar e crescer."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Landmark className="mb-4 h-7 w-7 text-bluebrand" />
              <p className="text-sm font-semibold">Regimes tributários</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Store className="mb-4 h-7 w-7 text-bluebrand" />
              <p className="text-sm font-semibold">Comércio e serviços</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <UserRoundPlus className="mb-4 h-7 w-7 text-bluebrand" />
              <p className="text-sm font-semibold">Novos negócios</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="group flex min-h-28 items-center justify-between gap-4 rounded-3xl border border-white bg-white p-6 shadow-sm transition hover:border-gold/60 hover:shadow-soft"
              >
                <span className="text-lg font-semibold leading-6 text-ink">{audience}</span>
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-champagne text-bluebrand transition group-hover:bg-bluebrand group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
