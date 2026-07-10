"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildWhatsappLink, navigation, siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const updateHeaderState = () => {
      const hero = document.getElementById("inicio");

      setScrolled(window.scrollY > 12);
      setOverHero(hero ? hero.getBoundingClientRect().bottom > 112 : window.scrollY < 520);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300 sm:top-4">
      <nav
        className={cn(
          "relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 overflow-hidden rounded-[1.75rem] border px-3 py-2 shadow-[0_18px_50px_rgba(5,18,42,0.18)] backdrop-blur-md transition-all duration-300 sm:h-20 sm:px-5",
          overHero
            ? "border-white/30 bg-white/10 ring-1 ring-white/18"
            : scrolled
              ? "border-white/80 bg-white/78 ring-1 ring-white/75"
              : "border-white/55 bg-white/24 ring-1 ring-white/45",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.30),rgba(255,255,255,0.08)_42%,rgba(195,170,113,0.12))]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
        <a
          href="#inicio"
          className={cn(
            "focus-ring relative z-10 flex items-center gap-3 rounded-2xl px-1 py-1 transition",
            overHero ? "drop-shadow-[0_8px_18px_rgba(0,0,0,0.24)]" : "drop-shadow-none",
          )}
        >
          <Image
            src="/logo-dinamica.png"
            alt={siteConfig.companyName}
            width={168}
            height={168}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <div className="relative z-10 hidden items-center gap-3 xl:gap-5 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md text-xs font-semibold transition xl:text-[13px]",
                overHero
                  ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.42)] hover:text-champagne"
                  : "text-slate-700 hover:text-bluebrand",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-sm transition",
              overHero
                ? "border-white/30 bg-white/18 text-white hover:bg-white/26"
                : scrolled
                  ? "border-bluebrand/20 bg-bluebrand text-white shadow-soft hover:bg-navy"
                  : "border-white/35 bg-white/22 text-white hover:bg-white/30",
            )}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm lg:hidden",
            overHero
              ? "border-white/35 bg-white/16 text-white"
              : scrolled
                ? "border-slate-200 bg-white/86 text-ink"
                : "border-white/35 bg-white/16 text-white",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl lg:hidden">
          <div className="glass-panel-light overflow-hidden rounded-2xl p-3">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-bluebrand/7 hover:text-bluebrand"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-bluebrand px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
