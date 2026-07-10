import { ArrowUpRight, ExternalLink, Newspaper } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getNewsItems } from "@/lib/news";

export async function News() {
  const newsItems = await getNewsItems();

  return (
    <section id="noticias" className="bg-cloud py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="Notícias"
              title="Atualizações sobre reforma tributária e contabilidade"
              description="Cards alimentados pelos RSS do Portal Contábeis, filtrados para mostrar apenas temas ligados à reforma tributária e à rotina contábil."
            />
            <div className="rounded-3xl border border-white bg-white/72 p-5 shadow-soft backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase text-bluebrand">Fonte: Portal Contábeis</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A seleção ignora assuntos fora do contexto da contabilidade. Para ler a matéria completa, use o botão do card.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {newsItems.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {newsItems.map((post, index) => (
            <AnimatedSection key={`${post.source}-${post.title}`} delay={index * 0.04}>
              <article className="group h-full rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-champagne px-3 py-1.5 text-xs font-semibold text-bluebrand">
                    <Newspaper className="h-4 w-4" />
                    {post.theme}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-bluebrand transition group-hover:bg-bluebrand group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{post.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                  <span>{post.source}</span>
                  {post.publishedAt ? <span>• {post.publishedAt}</span> : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-bluebrand transition hover:text-navy"
                >
                  Ler no site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection className="mt-10">
            <div className="rounded-3xl border border-white bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm">
              <p className="text-lg font-semibold text-ink">Nenhuma notícia de reforma tributária ou contabilidade encontrada agora.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A página atualiza automaticamente quando os feeds publicam conteúdo dentro desses temas.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
