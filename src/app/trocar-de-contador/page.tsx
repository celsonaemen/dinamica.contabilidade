import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SolutionLanding } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "Trocar de Contador | Dinâmica Contabilidade",
  description:
    "Migre sua contabilidade com organização, conferência documental e acompanhamento próximo da Dinâmica Contabilidade.",
};

export default function TrocarDeContadorPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionLanding
          eyebrow="Trocar de contador"
          title="Mude de contabilidade com segurança, organização e continuidade"
          description="A Dinâmica conduz a transição com análise do cenário atual, conferência de documentos e organização das rotinas para evitar perda de informações."
          defaultSubject="Trocar de contador"
          highlights={[
            "Diagnóstico do cenário contábil atual",
            "Lista objetiva de documentos para migração",
            "Conferência de pendências e obrigações",
            "Transição orientada sem travar a rotina da empresa",
          ]}
          benefits={[
            {
              title: "Menos risco de informação perdida",
              description:
                "A migração precisa considerar documentos, declarações, folhas, guias e histórico da empresa.",
            },
            {
              title: "Clareza sobre pendências",
              description:
                "Antes de assumir a rotina, analisamos pontos que podem exigir regularização ou atenção.",
            },
            {
              title: "Comunicação mais próxima",
              description:
                "O cliente entende o que está acontecendo, quais documentos são necessários e quais etapas estão em andamento.",
            },
            {
              title: "Rotina mensal organizada",
              description:
                "Após a migração, a empresa passa a seguir um fluxo claro de envio de documentos, guias e orientações.",
            },
          ]}
          steps={[
            {
              title: "Conversa inicial",
              description: "Entendemos por que a empresa quer migrar e quais pontos precisam melhorar.",
            },
            {
              title: "Mapeamento documental",
              description: "Listamos documentos, acessos e informações necessárias para a transição.",
            },
            {
              title: "Conferência de situação",
              description: "Avaliamos pendências fiscais, trabalhistas e contábeis que exigem atenção.",
            },
            {
              title: "Início do atendimento",
              description: "Organizamos a rotina mensal e alinhamos prazos, canais e responsabilidades.",
            },
          ]}
          documents={[
            "CNPJ, regime tributário e atividade da empresa.",
            "Últimas guias e declarações disponíveis.",
            "Informações de folha, funcionários e pró-labore, quando houver.",
            "Acessos fiscais/contábeis necessários para conferência.",
          ]}
          faqs={[
            {
              title: "Posso trocar de contador em qualquer mês?",
              description:
                "Em geral, sim. O cuidado está em organizar a transição para não perder prazos ou documentos.",
            },
            {
              title: "A Dinâmica fala com o contador anterior?",
              description:
                "A transição pode envolver solicitação de documentos e histórico, sempre com alinhamento do cliente.",
            },
            {
              title: "Preciso estar com tudo regular para mudar?",
              description:
                "Não necessariamente. Se houver pendências, elas entram no diagnóstico para definir a melhor forma de regularizar.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
