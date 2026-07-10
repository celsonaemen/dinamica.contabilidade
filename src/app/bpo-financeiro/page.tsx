import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SolutionLanding } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "BPO Financeiro | Dinâmica Contabilidade",
  description:
    "Organize contas a pagar, contas a receber, conciliação, fluxo de caixa e relatórios financeiros com apoio da Dinâmica.",
};

export default function BpoFinanceiroPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionLanding
          eyebrow="BPO financeiro"
          title="Mais controle financeiro para sua empresa decidir com segurança"
          description="O BPO Financeiro apoia a organização de contas, conciliação, fluxo de caixa e relatórios para reduzir tarefas operacionais e melhorar a visão de gestão."
          defaultSubject="BPO financeiro"
          highlights={[
            "Contas a pagar e receber mais organizadas",
            "Conciliação bancária e controle de vencimentos",
            "Fluxo de caixa com leitura mais clara",
            "Relatórios para apoiar tomada de decisão",
          ]}
          benefits={[
            {
              title: "Rotina financeira previsível",
              description:
                "Organização de lançamentos, vencimentos e recebimentos para reduzir atrasos e retrabalho.",
            },
            {
              title: "Conciliação bancária",
              description:
                "Acompanhamento entre extratos, pagamentos, recebimentos e movimentações para identificar inconsistências.",
            },
            {
              title: "Fluxo de caixa acompanhado",
              description:
                "Visão mais clara de entradas, saídas e compromissos futuros para apoiar decisões.",
            },
            {
              title: "Relatórios gerenciais",
              description:
                "Informações resumidas para o empresário entender o financeiro sem depender de planilhas soltas.",
            },
          ]}
          steps={[
            {
              title: "Mapeamento financeiro",
              description: "Entendemos contas, bancos, formas de cobrança e rotina atual da empresa.",
            },
            {
              title: "Organização dos fluxos",
              description: "Definimos categorias, prazos, documentos e modelo de acompanhamento.",
            },
            {
              title: "Execução recorrente",
              description: "Apoiamos contas a pagar, receber, conciliação e registros financeiros.",
            },
            {
              title: "Relatórios e orientação",
              description: "Entregamos visão resumida para acompanhamento e tomada de decisão.",
            },
          ]}
          documents={[
            "Contas bancárias utilizadas pela empresa.",
            "Forma atual de controle financeiro.",
            "Principais fornecedores, clientes e vencimentos recorrentes.",
            "Notas, recibos e documentos financeiros do período.",
          ]}
          faqs={[
            {
              title: "BPO Financeiro substitui a contabilidade?",
              description:
                "Não. Ele complementa a contabilidade organizando a rotina financeira e melhorando a qualidade das informações.",
            },
            {
              title: "A empresa precisa ter sistema financeiro?",
              description:
                "Não obrigatoriamente. O diagnóstico inicial identifica a melhor forma de organizar o fluxo conforme a realidade da empresa.",
            },
            {
              title: "Esse serviço serve para empresa pequena?",
              description:
                "Sim, especialmente quando o empresário precisa ganhar tempo e ter mais controle sobre contas e caixa.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
