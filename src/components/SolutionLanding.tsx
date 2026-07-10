import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { SmartLeadForm } from "@/components/SmartLeadForm";
import { buildWhatsappLink } from "@/data/site-content";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type ContentItem = {
  title: string;
  description: string;
};

type SolutionLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  defaultSubject: string;
  highlights: string[];
  benefits: ContentItem[];
  steps: ContentItem[];
  documents?: string[];
  faqs: ContentItem[];
};

const iconSet = [ShieldCheck, ClipboardCheck, BadgeCheck, FileText, Lightbulb, CheckCircle2];

export function SolutionLanding({
  eyebrow,
  title,
  description,
  defaultSubject,
  highlights,
  benefits,
  steps,
  documents = [],
  faqs,
}: SolutionLandingProps) {
  return (
    <>
      <section id="inicio" className="relative overflow-hidden bg-hero-mesh pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_42%,rgba(195,170,113,0.14))]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-champagne">{eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsappLink(`Olá, quero falar sobre: ${defaultSubject}.`)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-navy transition hover:bg-champagne"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com especialista
              </a>
              <a
                href="#formulario"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16"
              >
                Enviar dados da empresa
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/12 p-5 shadow-glass backdrop-blur-md">
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-none text-gold" />
                  <span className="text-sm font-semibold leading-5 text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-bluebrand">Como a Dinâmica ajuda</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Um atendimento estruturado para reduzir ruído e acelerar decisões
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A conversa começa pelo diagnóstico. Depois organizamos documentos, obrigações e próximos passos para que a empresa tenha clareza sobre prazos, riscos e responsabilidades.
            </p>

            {documents.length ? (
              <div className="mt-8 rounded-3xl border border-white bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-ink">Informações úteis para começar</h3>
                <div className="mt-4 grid gap-3">
                  {documents.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <FileText className="mt-0.5 h-5 w-5 flex-none text-bluebrand" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = iconSet[index % iconSet.length];
              return (
                <article key={benefit.title} className="rounded-3xl border border-white bg-white/82 p-6 shadow-sm backdrop-blur-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bluebrand text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-bluebrand">Processo</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Passo a passo com clareza do começo ao acompanhamento
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-6 text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="bg-cloud py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-bluebrand">Próximo passo</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Envie os dados principais para uma análise inicial
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              O formulário monta uma mensagem objetiva no WhatsApp. Isso ajuda a equipe a entender o cenário antes do primeiro contato.
            </p>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.title} className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <summary className="cursor-pointer text-base font-semibold text-ink">{faq.title}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.description}</p>
                </details>
              ))}
            </div>
          </div>

          <SmartLeadForm
            defaultSubject={defaultSubject}
            title="Receber orientação da Dinâmica"
            description="Preencha o que souber. Se algum dado ainda não estiver claro, deixe em branco ou selecione a opção mais próxima."
          />
        </div>
      </section>
    </>
  );
}
