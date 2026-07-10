import Image from "next/image";
import { buildWhatsappLink, navigation, services, siteConfig } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/logo-dinamica.png"
              alt={siteConfig.companyName}
              width={180}
              height={180}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/64">{siteConfig.description}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-champagne">Links rápidos</h2>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/64 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-champagne">Serviços</h2>
            <div className="mt-4 grid gap-3">
              {services.slice(0, 5).map((service) => (
                <a key={service.title} href="/#servicos" className="text-sm text-white/64 transition hover:text-white">
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-champagne">Contato</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/64">
              <a href={buildWhatsappLink()} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {siteConfig.contact.whatsappDisplay}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="transition hover:text-white">
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {siteConfig.contact.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/54">
          © {siteConfig.companyName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
