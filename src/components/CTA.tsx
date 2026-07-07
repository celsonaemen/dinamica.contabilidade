import { MessageCircle, MoveRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { buildWhatsappLink, ctaContent } from "@/data/site-content";

export function CTA() {
  return (
    <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-hero-mesh p-8 text-white shadow-glass sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-champagne">Próximo passo</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                {ctaContent.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">{ctaContent.text}</p>
            </div>
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-navy transition hover:bg-champagne"
            >
              <MessageCircle className="h-5 w-5" />
              {ctaContent.button}
              <MoveRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
