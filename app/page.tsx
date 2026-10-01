// Hello World
"use client";

import React, { useState } from "react";
import PRXLogo from "./components/PRXLogo";
import W1Logo from "./components/W1Logo";
import PRXAppIcon from "./components/PRXAppIcon";
import IntroSplash from "./components/IntroSplash";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Target,
  Plane,
  Car,
  Home,
  Globe2,
  Cpu,
  Leaf,
  KeyRound,
  Hourglass,
  Layers,
  Award,
  Users2,
  Briefcase,
  Share2,
  Play,
  Printer,
  ChevronRight,
  Compass,
  CheckCircle2,
  Flame,
  Coins,
} from "lucide-react";

export default function ProposalPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeObjectiveTab, setActiveObjectiveTab] = useState<string>("PRX START");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const objectivesList = [
    {
      id: "PRX START",
      title: "PRX START",
      concept: "Meu primeiro investimento",
      products: "Tesouro Direto, CDBs e fundos conservadores",
      icon: Coins,
      tag: "Entrada & Reserva",
      desc: "A porta de entrada simples e sem complicação para quem está dando os primeiros passos e deseja ver o dinheiro render com segurança.",
    },
    {
      id: "PRX TRIP",
      title: "PRX TRIP",
      concept: "Minha próxima viagem",
      products: "Renda fixa de curto e médio prazo",
      icon: Plane,
      tag: "Experiências",
      desc: "Metodologia de poupança programada para viagens de férias, festivais e intercâmbios, conectando a data do embarque ao vencimento do ativo.",
    },
    {
      id: "PRX CAR",
      title: "PRX CAR",
      concept: "Meu primeiro carro",
      products: "Renda fixa + carteira por objetivo",
      icon: Car,
      tag: "Conquista",
      desc: "Estratégia híbrida para quem quer adquirir o primeiro veículo ou dar uma entrada expressiva sem se endividar em financiamentos abusivos.",
    },
    {
      id: "PRX HOME",
      title: "PRX HOME",
      concept: "Meu primeiro apê",
      products: "Carteira diversificada de longo prazo",
      icon: Home,
      tag: "Patrimônio",
      desc: "Planejamento focado na conquista do primeiro imóvel, combinando consistência de aportes e rentabilidade real acima da inflação.",
    },
    {
      id: "PRX GLOBAL",
      title: "PRX GLOBAL",
      concept: "Quero investir no mundo",
      products: "ETFs e fundos internacionais",
      icon: Globe2,
      tag: "Internacional",
      desc: "Dolarização patrimonial e exposição às maiores economias globais a partir de frações acessíveis de cotas internacionais.",
    },
    {
      id: "PRX TECH",
      title: "PRX TECH",
      concept: "Quero investir no futuro",
      products: "ETFs e fundos de tecnologia e inovação",
      icon: Cpu,
      tag: "Inovação",
      desc: "Alocação focada nas teses que a própria Geração Z consome e acredita: IA, semicondutores, cibersegurança e economia digital.",
    },
    {
      id: "PRX GREEN",
      title: "PRX GREEN",
      concept: "Dinheiro + impacto",
      products: "Fundos e ativos ESG, quando adequados",
      icon: Leaf,
      tag: "Sustentabilidade",
      desc: "Investimentos em governança, sustentabilidade e transição energética para jovens que exigem coerência com seus valores humanos.",
    },
    {
      id: "PRX FREEDOM",
      title: "PRX FREEDOM",
      concept: "Independência financeira",
      products: "Carteira diversificada de longo prazo",
      icon: KeyRound,
      tag: "Liberdade",
      desc: "Construção de renda passiva contínua para dar ao jovem o poder de escolha profissional e liberdade de locomoção ao longo da vida.",
    },
    {
      id: "PRX RETIRE",
      title: "PRX RETIRE",
      concept: "Começar cedo muda tudo",
      products: "Previdência e investimentos de longo prazo",
      icon: Hourglass,
      tag: "Juros Compostos",
      desc: "O superpoder que só o jovem tem: o fator tempo. Mostrar matematicamente como começar aos 18 anos exige 10x menos esforço do que aos 40.",
    },
  ];

  const selectedObjective = objectivesList.find((o) => o.id === activeObjectiveTab) || objectivesList[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#032029] selection:text-white relative overflow-x-hidden">
      {/* Splash Screen Cinético com fatiamento sequencial PRX × W1 */}
      <IntroSplash isOpen={showIntro} onClose={() => setShowIntro(false)} />

      {/* ========================================================================= */}
      {/* 1. CABEÇALHO INSTITUCIONAL FIXO                                           */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logos da Parceria */}
          <div className="flex items-center gap-3 sm:gap-5">
            <PRXLogo size="sm" showSubtitle={false} className="w-20 sm:w-24" />
            <span className="text-slate-300 font-light text-xl sm:text-2xl select-none" aria-hidden="true">
              ×
            </span>
            <W1Logo size="sm" showSubtitle={false} className="w-16 sm:w-20" />
          </div>

          {/* Navegação Rápida (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-slate-600">
            <a href="#oportunidade" className="hover:text-[#032029] transition-colors cursor-pointer">
              A Oportunidade
            </a>
            <a href="#parceria" className="hover:text-[#032029] transition-colors cursor-pointer">
              PRX Invest × W1
            </a>
            <a href="#objetivos" className="hover:text-[#032029] transition-colors cursor-pointer">
              Linha PRX
            </a>
            <a href="#first100" className="hover:text-[#032029] transition-colors cursor-pointer">
              PRX First 100
            </a>
            <a href="#anti-bet" className="hover:text-[#032029] transition-colors cursor-pointer">
              Anti-Bet
            </a>
            <a href="#tese" className="hover:text-[#032029] transition-colors cursor-pointer">
              A Tese
            </a>
          </nav>

          {/* Ações do Cabeçalho */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowIntro(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-sm cursor-pointer transition-colors"
              title="Rever apresentação da marca"
              aria-label="Rever animação da marca"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Rever Marca</span>
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#032029] hover:bg-[#053240] rounded-sm cursor-pointer transition-all shadow-xs"
              aria-label="Compartilhar proposta"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Copiado!" : "Compartilhar"}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ======================================================================= */}
        {/* 2. HERO SECTION — PRX × W1 CONSULTORIA FINANCEIRA                       */}
        {/* ======================================================================= */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-100 overflow-hidden">
          {/* Geometria de Apoio Sutil */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#032029_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-slate-200 bg-slate-50/80 rounded-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#032029]" />
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-slate-600">
                PRX INVEST × W1 CONSULTORIA FINANCEIRA
              </span>
            </div>

            {/* Título Principal Monumental */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 leading-[1.15] mb-8">
              Uma nova geração de investidores <br className="hidden sm:inline" />
              <span className="font-semibold text-[#032029]">começa antes do patrimônio.</span>
            </h1>

            {/* Subtítulo / Lead */}
            <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
              Nossa proposta não é criar mais uma prateleira de investimentos. É construir, junto à W1, uma
              jornada capaz de transformar jovens consumidores em jovens investidores — falando de dinheiro a
              partir dos seus objetivos, da sua linguagem e do futuro que desejam construir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#parceria"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#032029] hover:bg-[#053240] rounded-sm cursor-pointer transition-all shadow-sm"
              >
                <span>Conhecer o Modelo Estratégico</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#objetivos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-sm cursor-pointer transition-colors"
              >
                <span>Explorar Linha PRX</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Assinatura Dual Visual no Hero */}
            <div className="mt-16 pt-12 border-t border-slate-100 flex items-center justify-center gap-6 sm:gap-10 opacity-95">
              <div className="flex items-center">
                <PRXLogo size="md" showSubtitle={true} className="w-28 sm:w-36" />
              </div>
              <span className="text-slate-300 font-light text-2xl sm:text-3xl select-none" aria-hidden="true">
                ×
              </span>
              <div className="flex items-center">
                <W1Logo size="md" showSubtitle={true} className="w-28 sm:w-36" />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 3. A OPORTUNIDADE                                                       */}
        {/* ======================================================================= */}
        <section id="oportunidade" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                01 • Cenário & Ecossistema
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                A Oportunidade
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A PRX nasce como um ecossistema digital desenvolvido para a Geração Z, conectando benefícios,
                experiências, empreendedorismo, serviços financeiros, investimentos, saúde mental e novas formas
                de relacionamento.
              </p>
            </div>

            {/* Grid Tríptico de Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#032029] mb-5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Vertical PRX INVEST</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dentro do ecossistema, o PRX INVEST será a vertical dedicada à construção da vida
                    financeira e patrimonial dos jovens desde o primeiro real.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 uppercase">
                  Foco: Geração Z
                </div>
              </div>

              <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#032029] mb-5">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Jornada de Transformação</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nossa proposta não é criar mais uma prateleira estéril de investimentos, e sim construir
                    uma jornada que transforme jovens consumidores em jovens investidores.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 uppercase">
                  Método: Objetivos Reais
                </div>
              </div>

              <div className="bg-white p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#032029] mb-5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Linguagem do Futuro</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Falando de dinheiro a partir dos objetivos dos jovens, da sua própria linguagem cultural e
                    do futuro concreto que desejam construir ativamente.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 uppercase">
                  Voz: Conexão Cultural
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 4. PRX INVEST × W1 (A PARCERIA ESTRATÉGICA)                            */}
        {/* ======================================================================= */}
        <section id="parceria" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                02 • Aliança Estratégica
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                PRX INVEST × W1
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A proposta é avaliar a W1 como parceira estratégica de inteligência e planejamento financeiro
                do PRX INVEST, participando ativamente da construção da jornada financeira oferecida à
                comunidade PRX.
              </p>
            </div>

            {/* Matriz de Competências Complementares */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* O que a PRX entrega */}
              <div className="bg-[#fafafa] p-8 sm:p-10 border border-slate-200 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm bg-[#032029] text-white flex items-center justify-center font-mono text-xs font-bold">
                    PRX
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">A PRX entra com:</h3>
                    <p className="text-xs text-slate-500 font-mono">Comunidade, Plataforma e Distribuição</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Audiência jovem qualificada e engajada",
                    "Comunidade vibrante e canais proprietários",
                    "Tecnologia moderna e ecossistema digital",
                    "Linguagem autêntica e sem barreira de 'financês'",
                    "Capacidade massiva de distribuição",
                    "Experiência nativa Gen Z em todos os pontos de contato",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#032029] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* O que a W1 entrega */}
              <div className="bg-[#fafafa] p-8 sm:p-10 border border-slate-200 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm bg-[#032029] text-white flex items-center justify-center font-mono text-xs font-bold">
                    W1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">A W1 entra com:</h3>
                    <p className="text-xs text-slate-500 font-mono">Planejamento, Inteligência & Metodologia</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Expertise financeira consolidada de ponta",
                    "Metodologia proprietária de planejamento patrimonial",
                    "Curadoria técnica de carteiras e alocações",
                    "Educação financeira estruturada para cada fase",
                    "Estrutura e know-how de assessoria de alta performance",
                    "Parceiros habilitados para os serviços e produtos aplicáveis",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#032029] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Aviso Regulatório Institucional */}
            <div className="p-5 border border-slate-200 bg-slate-50/70 rounded-sm flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Conformidade e Segurança Regulatória:</strong> A distribuição
                e execução de produtos de investimento deverão ocorrer estritamente por meio das instituições
                devidamente habilitadas e dentro de todas as exigências regulatórias aplicáveis (CVM, Anbima e Banco Central).
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 5. INVESTIMENTO POR OBJETIVOS, NÃO POR "FINANCÊS"                       */}
        {/* ======================================================================= */}
        <section id="objetivos" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                03 • Nova Lógica de Mercado
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                Investimento por Objetivos, não por “Financês”
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Queremos inverter a lógica tradicional do mercado. O jovem não acorda pensando “quero comprar
                um ETF”, “renda fixa” ou “previdência”. Ele pensa: <em className="text-slate-900 font-medium">“Quero viajar. Quero meu primeiro carro. Quero meu apê. Quero empreender. Quero liberdade.”</em>
              </p>
            </div>

            {/* Frase em Destaque */}
            <div className="mb-12 p-6 sm:p-8 bg-white border-l-4 border-[#032029] border-y border-r border-slate-200 rounded-sm shadow-xs">
              <p className="text-base sm:text-lg text-slate-800 font-light italic leading-relaxed">
                “Em vez da linguagem tradicional — renda fixa, multimercado, RV, previdência — criamos
                ‘objetivos de vida’ e, por trás deles, o parceiro financeiro disponibiliza os produtos adequados.
                A PRX transforma o objetivo em porta de entrada para educação financeira e investimento.”
              </p>
            </div>

            {/* Showcase Interativo da Linha PRX */}
            <div className="bg-white border border-slate-200 rounded-sm shadow-xs overflow-hidden">
              {/* Header do Showcase */}
              <div className="p-6 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Catálogo Oficial: Linha PRX</h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Conceitos de Vida × Produtos Possíveis por Trás
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-white border border-slate-200 rounded-sm text-slate-600">
                  9 Linhas de Objetivos
                </span>
              </div>

              {/* Grid / Tabela da Linha PRX */}
              <div className="divide-y divide-slate-100">
                {objectivesList.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeObjectiveTab === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveObjectiveTab(item.id)}
                      className={`p-5 sm:p-6 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        isSelected ? "bg-slate-50/90" : "hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? "bg-[#032029] text-white" : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-200/70 text-slate-600 rounded-xs">
                              {item.tag}
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-medium text-slate-800 mt-0.5">
                            {item.concept}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 max-w-xl">{item.desc}</p>
                        </div>
                      </div>

                      <div className="md:text-right shrink-0">
                        <span className="text-xs text-slate-400 font-mono block">Produtos por trás:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#032029] font-mono">
                          {item.products}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 6. PRX FIRST 100                                                        */}
        {/* ======================================================================= */}
        <section id="first100" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                04 • Jornada Proprietária
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                PRX FIRST 100
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Propomos uma jornada proprietária de entrada: <strong>Seus primeiros R$ 100 investidos</strong>.
                Uma experiência de educação financeira prática que ensina risco, diversificação, juros
                compostos, reserva de emergência e visão de longo prazo.
              </p>
            </div>

            {/* Milestones de Gamificação Positiva */}
            <div className="bg-[#fafafa] p-8 sm:p-12 border border-slate-200 rounded-sm mb-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-mono text-[#032029] uppercase tracking-wider font-semibold">
                  Evolução em Milestones Patrimoniais
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 mt-1">
                  Não queremos gamificar especulação. <br />
                  <span className="font-semibold text-[#032029]">Queremos gamificar disciplina financeira.</span>
                </h3>
              </div>

              {/* Trilha de Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: "Milestone 1",
                    value: "R$ 100",
                    title: "O Ponto de Partida",
                    desc: "Quebra da barreira psicológica de investir pela primeira vez e aprender a operar.",
                  },
                  {
                    step: "Milestone 2",
                    value: "R$ 1.000",
                    title: "A Reserva Inicial",
                    desc: "Primeiro hábito consolidado. Compreensão de liquidez e previsibilidade de retorno.",
                  },
                  {
                    step: "Milestone 3",
                    value: "R$ 5.000",
                    title: "Acelerador Patrimonial",
                    desc: "Início da diversificação ativa entre classes de ativos e primeiros dividendos perceptíveis.",
                  },
                  {
                    step: "Milestone 4",
                    value: "R$ 10.000",
                    title: "Jovem Investidor Pleno",
                    desc: "Consolidação de mentalidade investidora com horizonte de independência e maturidade.",
                  },
                ].map((m, idx) => (
                  <div key={idx} className="bg-white p-6 border border-slate-200 rounded-sm flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                        {m.step}
                      </span>
                      <div className="text-2xl sm:text-3xl font-mono font-semibold text-[#032029] my-2">
                        {m.value}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">{m.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 7. DO ANTI-BET AO INVESTIDOR                                            */}
        {/* ======================================================================= */}
        <section id="anti-bet" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                  05 • Posição Cultural
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-6">
                  Do Anti-Bet ao Investidor
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  Este é um dos territórios mais importantes da PRX. Enquanto boa parte da economia digital
                  disputa a atenção do jovem oferecendo gratificação imediata e riscos destrutivos, queremos
                  construir uma narrativa firme na direção oposta:
                </p>

                <div className="p-6 bg-white border border-slate-200 rounded-sm mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight block">
                    Menos aposta. <span className="font-semibold text-[#032029]">Mais patrimônio.</span>
                  </span>
                  <p className="text-sm text-slate-600 mt-2">
                    Dentro do ecossistema PRX, comportamentos financeiros positivos poderão gerar
                    reconhecimento, benefícios e experiências exclusivas.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A mensagem é simples e poderosa:{" "}
                  <strong className="text-slate-900">
                    não gastar pode valer. Poupar pode valer. Investir no próprio futuro pode valer.
                  </strong>
                </p>
              </div>

              {/* Visual de Comparativo Anti-Bet */}
              <div className="lg:col-span-5 bg-white p-8 border border-slate-200 rounded-sm shadow-xs">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
                  Opostos Conceituais
                </span>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                    <span className="text-xs font-mono text-slate-500 uppercase block">Cultura de Apostas</span>
                    <span className="text-sm font-semibold text-slate-700 block mt-1">Gratificação Imediata</span>
                    <p className="text-xs text-slate-500 mt-0.5">Expectativa irreal, ilusão de atalho e perda de capital.</p>
                  </div>
                  <div className="text-center font-mono text-xs text-slate-300">VS</div>
                  <div className="p-4 bg-slate-50 border border-slate-900 rounded-sm">
                    <span className="text-xs font-mono text-[#032029] uppercase font-bold block">Cultura PRX × W1</span>
                    <span className="text-sm font-semibold text-[#032029] block mt-1">Construção Patrimonial</span>
                    <p className="text-xs text-slate-600 mt-0.5">Disciplina, juros compostos, conquistas reais e LTV duradouro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 8. EDUCAÇÃO FINANCEIRA W1 × PRX & PRX FOUNDERS                          */}
        {/* ======================================================================= */}
        <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Educação Financeira */}
            <div className="mb-20">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                  06 • Formação & Conteúdo
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                  Educação Financeira W1 × PRX
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  A parceria também extrapola o aplicativo. A W1 participará de conteúdos e experiências
                  proprietárias voltadas à nova geração, transformando educação financeira em cultura jovem:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#fafafa] p-8 border border-slate-200 rounded-sm">
                  <span className="text-xs font-mono text-[#032029] uppercase font-bold block mb-2">Formato 1</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">PRX MONEY TALKS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Conversas rápidas, dinâmicas e sem rodeios sobre dinheiro, investimentos e decisões do
                    dia a dia jovem.
                  </p>
                </div>

                <div className="bg-[#fafafa] p-8 border border-slate-200 rounded-sm">
                  <span className="text-xs font-mono text-[#032029] uppercase font-bold block mb-2">Formato 2</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">PRX MONEY SESSIONS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Encontros presenciais com jovens sobre planejamento financeiro, independência e
                    construção de patrimônio.
                  </p>
                </div>

                <div className="bg-[#fafafa] p-8 border border-slate-200 rounded-sm">
                  <span className="text-xs font-mono text-[#032029] uppercase font-bold block mb-2">Formato 3</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">W1 Experts × PRX</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Especialistas traduzindo temas complexos para uma linguagem que faça real sentido para um
                    jovem de 16, 18 ou 20 anos.
                  </p>
                </div>
              </div>
            </div>

            {/* PRX FOUNDERS × W1 */}
            <div className="pt-16 border-t border-slate-200">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
                  07 • Jovens Empreendedores
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-slate-950 tracking-tight mt-2 mb-4">
                  PRX FOUNDERS × W1
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Existe ainda uma segunda conexão estratégica: a vertical dedicada à identificação e conexão
                  de jovens empreendedores. Founders poderão cadastrar seus negócios, apresentar seus modelos
                  e participar de mentorias e networking.
                </p>
              </div>

              <div className="bg-[#fafafa] p-8 sm:p-10 border border-slate-200 rounded-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Inteligência Financeira para Founders:
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  A W1 poderá participar desse ecossistema oferecendo conteúdo e assessoria técnica em temas
                  críticos: finanças pessoais do founder, organização patrimonial, planejamento, valuation,
                  captação e separação rigorosa entre patrimônio pessoal e empresarial.
                </p>
                <div className="p-4 bg-white border border-slate-200 rounded-sm text-sm text-[#032029] font-medium">
                  “Estamos formando não apenas futuros investidores. Estamos nos aproximando também de futuros
                  empresários e futuros clientes de alta renda.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 9. A TESE & CONCLUSÃO ESTRATÉGICA                                      */}
        {/* ======================================================================= */}
        <section id="tese" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono font-medium tracking-widest text-[#032029] uppercase">
              08 • Conclusão Estratégica
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-950 tracking-tight mt-2 mb-8">
              A Tese
            </h2>

            <div className="text-left bg-white p-8 sm:p-12 border border-slate-200 rounded-sm shadow-xs mb-12 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                O jovem de hoje pode ainda não possuir grande patrimônio. Mas esse não é o ponto.
              </p>
              <p>
                Ele pode ser o empresário, executivo, profissional liberal, investidor ou founder de alta
                renda dos próximos dez anos. Por isso, acreditamos que existe uma oportunidade singular de{" "}
                <strong className="text-slate-950">construir relacionamento antes do patrimônio</strong>.
              </p>
              <p>
                Não queremos disputar apenas o AUM de hoje. Queremos{" "}
                <strong className="text-[#032029]">construir o LTV da próxima geração</strong>.
              </p>
              <p>
                A W1 possui conhecimento financeiro e excelência de planejamento. A PRX possui acesso,
                linguagem e conexão profunda com essa geração.
              </p>
              <p className="font-semibold text-slate-950 pt-2 border-t border-slate-100">
                Juntos, podemos começar a formar o cliente do futuro antes que o mercado financeiro comece a
                disputá-lo.
              </p>
            </div>

            {/* Manifesto Final */}
            <div className="py-10 px-6 border border-slate-200 bg-white rounded-sm mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                PRX × W1 CONSULTORIA FINANCEIRA
              </div>
              <blockquote className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900 mb-4">
                “We don't sell investments to Gen Z. <br />
                <span className="font-semibold text-[#032029]">We build Gen Z investors.”</span>
              </blockquote>
              <div className="text-xs font-mono font-medium text-slate-500 uppercase tracking-widest">
                PRX — the next pays
              </div>
            </div>

            {/* Botões de Ação na Conclusão */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowIntro(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#032029] hover:bg-[#053240] rounded-sm cursor-pointer transition-all shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Rever Apresentação da Marca</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-sm cursor-pointer transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Salvar PDF</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 10. RODAPÉ INSTITUCIONAL (FINTECH / FARIA LIMA PREMIUM)                   */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200/80 bg-white text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Rodapé Principal (Primeiras Linhas + Identidade) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <PRXAppIcon size={32} />
                <p className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                  © 2026 PRX. Todos os direitos reservados.
                </p>
              </div>
              <p className="text-xs sm:text-sm font-mono font-medium text-slate-600 tracking-wider">
                PRX — the next pays.
              </p>
            </div>

            {/* Aliança de Marcas */}
            <div className="flex items-center gap-4 pt-1 md:pt-0">
              <PRXLogo size="sm" showSubtitle={false} className="w-20" />
              <span className="text-slate-300 font-light text-base" aria-hidden="true">×</span>
              <W1Logo size="sm" showSubtitle={false} className="w-18" />
            </div>
          </div>

          {/* Links Institucionais e Conformidade */}
          <nav aria-label="Informações institucionais" className="py-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-slate-600">
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Termos de Uso</span>
            <span className="text-slate-300 select-none" aria-hidden="true">·</span>
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Política de Privacidade</span>
            <span className="text-slate-300 select-none" aria-hidden="true">·</span>
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Política de Cookies</span>
            <span className="text-slate-300 select-none" aria-hidden="true">·</span>
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Segurança</span>
            <span className="text-slate-300 select-none" aria-hidden="true">·</span>
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Atendimento</span>
          </nav>

          {/* Informações Legais / Disclaimers (Menor, Estilo Faria Lima / Fintech) */}
          <div className="pt-6 border-t border-slate-100 space-y-3 text-[11px] sm:text-xs leading-relaxed text-slate-400 font-normal">
            <p className="max-w-4xl">
              As marcas, nomes, logotipos, conteúdos, imagens, produtos e serviços apresentados neste site são de propriedade da PRX ou de seus respectivos titulares. É proibida a reprodução, distribuição ou utilização sem autorização prévia.
            </p>
            <p className="max-w-4xl">
              PRX respeita a sua privacidade e realiza o tratamento de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
            <p className="font-mono text-slate-500 pt-1">
              CNPJ: 68025417000142 · Goiânia — GO · Brasil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
