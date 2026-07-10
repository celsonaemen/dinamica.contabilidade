"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Building2, Mail, Phone, Send, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buildWhatsappLink } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const subjects = [
  "Abrir empresa",
  "Trocar de contador",
  "BPO financeiro",
  "Contabilidade empresarial",
  "Planejamento tributário",
  "Regularização de empresa",
  "Outro assunto",
];

const regimes = ["Ainda não sei", "MEI", "Simples Nacional", "Lucro Presumido", "Lucro Real"];

const employeeRanges = [
  "Sem funcionários",
  "1 a 5 funcionários",
  "6 a 10 funcionários",
  "11 a 50 funcionários",
  "Mais de 50 funcionários",
];

const revenueRanges = [
  "Ainda não sei",
  "Até R$ 81 mil/ano",
  "Até R$ 360 mil/ano",
  "Até R$ 4,8 milhões/ano",
  "Acima de R$ 4,8 milhões/ano",
];

type SmartLeadFormProps = {
  defaultSubject?: string;
  title?: string;
  description?: string;
  className?: string;
};

function FieldLabel({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
      {Icon ? <Icon className="h-4 w-4 text-bluebrand" /> : null}
      {children}
    </span>
  );
}

export function SmartLeadForm({
  defaultSubject = "Contabilidade empresarial",
  title = "Solicite uma análise contábil",
  description = "Preencha os dados principais e envie uma mensagem estruturada direto para o WhatsApp da Dinâmica.",
  className,
}: SmartLeadFormProps) {
  const [subject, setSubject] = useState(defaultSubject);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [regime, setRegime] = useState("Ainda não sei");
  const [employees, setEmployees] = useState("Sem funcionários");
  const [revenue, setRevenue] = useState("Ainda não sei");
  const [activity, setActivity] = useState("");
  const [message, setMessage] = useState("");

  const whatsappText = useMemo(
    () =>
      [
        `Olá, vim pelo site da Dinâmica Contabilidade.`,
        `Assunto: ${subject}.`,
        name ? `Nome: ${name}.` : "",
        company ? `Empresa: ${company}.` : "",
        cnpj ? `CNPJ: ${cnpj}.` : "",
        phone ? `Telefone: ${phone}.` : "",
        email ? `E-mail: ${email}.` : "",
        activity ? `Atividade: ${activity}.` : "",
        `Regime tributário: ${regime}.`,
        `Funcionários: ${employees}.`,
        `Faturamento: ${revenue}.`,
        message ? `Mensagem: ${message}` : "Gostaria de receber orientação sobre o melhor caminho para minha empresa.",
      ]
        .filter(Boolean)
        .join("\n"),
    [activity, cnpj, company, email, employees, message, name, phone, regime, revenue, subject],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildWhatsappLink(whatsappText), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-slate-400";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-[2rem] border border-slate-200 bg-cloud p-5 shadow-soft sm:p-7", className)}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase text-bluebrand">Contato inteligente</p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight text-ink">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 sm:col-span-2">
          <FieldLabel>Assunto</FieldLabel>
          <select value={subject} onChange={(event) => setSubject(event.target.value)} className={inputClass}>
            {subjects.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <FieldLabel icon={UserRound}>Nome</FieldLabel>
          <input value={name} onChange={(event) => setName(event.target.value)} className={inputClass} placeholder="Seu nome" />
        </label>

        <label className="grid gap-2">
          <FieldLabel icon={Building2}>Empresa</FieldLabel>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={inputClass}
            placeholder="Nome da empresa"
          />
        </label>

        <label className="grid gap-2">
          <FieldLabel>CNPJ</FieldLabel>
          <input value={cnpj} onChange={(event) => setCnpj(event.target.value)} className={inputClass} placeholder="Opcional" />
        </label>

        <label className="grid gap-2">
          <FieldLabel>Atividade</FieldLabel>
          <input
            value={activity}
            onChange={(event) => setActivity(event.target.value)}
            className={inputClass}
            placeholder="Ex.: comércio, serviços, saúde"
          />
        </label>

        <label className="grid gap-2">
          <FieldLabel icon={Phone}>Telefone</FieldLabel>
          <input value={phone} onChange={(event) => setPhone(event.target.value)} className={inputClass} placeholder="DDD + número" />
        </label>

        <label className="grid gap-2">
          <FieldLabel icon={Mail}>E-mail</FieldLabel>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
            placeholder="voce@email.com"
          />
        </label>

        <label className="grid gap-2">
          <FieldLabel>Regime tributário</FieldLabel>
          <select value={regime} onChange={(event) => setRegime(event.target.value)} className={inputClass}>
            {regimes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <FieldLabel>Funcionários</FieldLabel>
          <select value={employees} onChange={(event) => setEmployees(event.target.value)} className={inputClass}>
            {employeeRanges.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <FieldLabel>Faturamento aproximado</FieldLabel>
          <select value={revenue} onChange={(event) => setRevenue(event.target.value)} className={inputClass}>
            {revenueRanges.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 sm:col-span-2">
          <FieldLabel>Mensagem</FieldLabel>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={cn(inputClass, "min-h-32 resize-y")}
            placeholder="Conte o que você precisa resolver"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-bluebrand px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy sm:w-auto"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Enviar pelo WhatsApp
          <ArrowRight className="h-5 w-5" />
        </button>
        <p className="text-xs leading-5 text-slate-500">
          A mensagem será aberta no WhatsApp com os dados preenchidos. Nenhum dado é salvo no site.
        </p>
      </div>
    </form>
  );
}
