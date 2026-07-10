import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SolutionLanding } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "Abrir Empresa | Dinâmica Contabilidade",
  description:
    "Abra sua empresa com orientação contábil, definição de atividade, regime tributário e organização documental.",
};

export default function AbrirEmpresaPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionLanding
          eyebrow="Abertura de empresa"
          title="Abra sua empresa com orientação contábil desde o primeiro passo"
          description="A Dinâmica ajuda você a organizar a atividade, entender o regime tributário, preparar documentos e iniciar o CNPJ com mais segurança."
          defaultSubject="Abrir empresa"
          highlights={[
            "Orientação sobre atividade e enquadramento",
            "Organização dos documentos necessários",
            "Apoio para reduzir retrabalho no registro",
            "Atendimento próximo em Manhuaçu e região",
          ]}
          benefits={[
            {
              title: "Escolha correta da atividade",
              description:
                "A análise inicial ajuda a evitar CNAE incompatível, tributação inadequada e dificuldades para emitir notas.",
            },
            {
              title: "Regime tributário com critério",
              description:
                "Simples Nacional, Lucro Presumido ou outro caminho precisam ser avaliados conforme atividade e faturamento.",
            },
            {
              title: "Documentação organizada",
              description:
                "O processo fica mais previsível quando dados pessoais, endereço, atividade e documentação estão bem definidos.",
            },
            {
              title: "Início com rotina contábil",
              description:
                "Além de abrir o CNPJ, a empresa já começa com prazos, guias e obrigações acompanhadas.",
            },
          ]}
          steps={[
            {
              title: "Diagnóstico da atividade",
              description: "Entendemos o serviço, comércio ou operação que será exercida pela empresa.",
            },
            {
              title: "Definição do caminho",
              description: "Avaliamos tipo de empresa, regime tributário e pontos de atenção para o registro.",
            },
            {
              title: "Organização documental",
              description: "Conferimos informações necessárias para reduzir pendências durante o processo.",
            },
            {
              title: "Acompanhamento inicial",
              description: "Depois da abertura, orientamos emissão de notas, guias e primeiras obrigações.",
            },
          ]}
          documents={[
            "Atividade que será exercida e cidade de atuação.",
            "Dados dos sócios ou responsável pela empresa.",
            "Endereço de registro da empresa.",
            "Estimativa de faturamento e necessidade de funcionários.",
          ]}
          faqs={[
            {
              title: "Preciso saber o CNAE antes de falar com a Dinâmica?",
              description:
                "Não. A conversa inicial pode começar pela descrição da atividade. A análise contábil ajuda a identificar o caminho mais adequado.",
            },
            {
              title: "Abrir empresa sempre é Simples Nacional?",
              description:
                "Não necessariamente. O regime depende da atividade, faturamento, estrutura e regras aplicáveis.",
            },
            {
              title: "Depois de abrir, a contabilidade mensal já começa?",
              description:
                "Sim. O ideal é iniciar a rotina contábil desde o começo para acompanhar prazos, notas, guias e declarações.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
