import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { News } from "@/components/News";

export const metadata: Metadata = {
  title: "Notícias | Dinâmica Contabilidade",
  description:
    "Orientações e conteúdos da Dinâmica Contabilidade sobre rotina fiscal, trabalhista e empresarial.",
};

export default function NoticiasPage() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="bg-hero-mesh pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
          <div className="section-shell">
            <p className="mb-4 text-sm font-semibold uppercase text-champagne">Notícias</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Conteúdos para acompanhar melhor a rotina contábil da sua empresa
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
              Orientações sobre obrigações fiscais, departamento pessoal, gestão empresarial e organização contábil.
            </p>
          </div>
        </section>
        <News />
      </main>
      <Footer />
    </>
  );
}
