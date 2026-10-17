"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/precificacao" },
  { label: "Produtos", href: "/precificacao-produtos" },
  { label: "SaaS", href: "/precificacao-saas" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-ink-900 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-gray-900 text-base tracking-wide">Precificador</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg font-ui text-[15px] font-semibold tracking-wide transition-colors ${
                  pathname === item.href
                    ? "bg-gold/10 text-gold-light"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
