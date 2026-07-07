"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildWhatsappLink, navigation, siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/40 bg-white/82 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className={cn(
            "focus-ring flex items-center gap-3 rounded-2xl px-2 py-1 transition",
            scrolled ? "bg-transparent" : "bg-white/88 shadow-soft backdrop-blur",
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

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md text-sm font-medium transition",
                scrolled ? "text-slate-700 hover:text-bluebrand" : "text-white/82 hover:text-white",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
              scrolled
                ? "bg-bluebrand text-white shadow-soft hover:bg-navy"
                : "bg-white text-bluebrand hover:bg-champagne",
            )}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
            scrolled
              ? "border-slate-200 bg-white text-ink"
              : "border-white/30 bg-white/10 text-white backdrop-blur",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-4 lg:hidden">
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
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
