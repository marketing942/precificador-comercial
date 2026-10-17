import Link from "next/link";

const tools = [
  {
    href: "/precificacao",
    title: "Precificação de Serviço",
    description: "Calcule o custo da operação, o preço por hora e visualize o DRE completo",
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "bg-gold/10 border border-gold/30 group-hover:bg-gold/20",
    border: "hover:border-gold/60",
    badge: "text-gold-light bg-gold/10",
  },
  {
    href: "/precificacao-produtos",
    title: "Precificação de Produtos",
    description: "DRE por produto — Mentorias, Presencial, Online, Físicos e Supletivo",
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    iconBg: "bg-gold/10 border border-gold/30 group-hover:bg-gold/20",
    border: "hover:border-gold/60",
    badge: "text-gold-light bg-gold/10",
  },
  {
    href: "/precificacao-saas",
    title: "Precificação de SaaS",
    description: "Descubra o preço mensal ideal com base em Churn, CAC, Margem e LTV/CAC alvo",
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    iconBg: "bg-gold/10 border border-gold/30 group-hover:bg-gold/20",
    border: "hover:border-gold/60",
    badge: "text-gold-light bg-gold/10",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-gray-900 mb-3">Precificador</h1>
        <p className="text-base text-gray-500 mb-6">Ferramentas de precificação para o time comercial</p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group">
            <div className={`bg-ink-900 rounded-2xl border border-gray-200 p-6 transition-all duration-200 ${tool.border}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${tool.iconBg}`}>
                {tool.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{tool.title}</h2>
              <p className="text-sm text-gray-500">{tool.description}</p>
              <span className={`inline-block mt-4 text-xs font-medium px-2 py-1 rounded-full ${tool.badge}`}>
                Disponível
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
