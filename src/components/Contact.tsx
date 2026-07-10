import { Clock3, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SmartLeadForm } from "@/components/SmartLeadForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsappLink, siteConfig } from "@/data/site-content";

const contactItems = [
  {
    icon: WhatsAppIcon,
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
    href: siteConfig.contact.mapUrl,
  },
  {
    icon: Clock3,
    label: "Atendimento",
    value: siteConfig.contact.businessHours,
  },
];

export function Contact() {
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
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "WhatsApp" || item.label === "Endereço" ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <SmartLeadForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
