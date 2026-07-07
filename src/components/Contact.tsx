"use client";

import { FormEvent, useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { buildWhatsappLink, siteConfig } from "@/data/site-content";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: buildWhatsappLink(),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: siteConfig.contact.address,
  },
  {
    icon: Clock3,
    label: "Atendimento",
    value: siteConfig.contact.businessHours,
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      `Olá, sou ${name || "um visitante do site"}.`,
      company ? `Empresa: ${company}.` : "",
      message ? `Mensagem: ${message}` : "Gostaria de falar com a Dinâmica Contabilidade.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a Dinâmica Contabilidade"
            description="Envie uma mensagem para iniciar uma conversa sobre a rotina contábil, fiscal ou trabalhista da sua empresa."
          />

          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-gold/50">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-bluebrand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-ink">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-cloud p-5 shadow-soft sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Nome
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink outline-none"
                  placeholder="Seu nome"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Empresa
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink outline-none"
                  placeholder="Nome da empresa"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
              Mensagem
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="focus-ring min-h-36 resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink outline-none"
                placeholder="Conte em poucas palavras o que você precisa"
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bluebrand px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy sm:w-auto"
            >
              <Send className="h-5 w-5" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
