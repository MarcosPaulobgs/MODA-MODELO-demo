"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Feminina", href: "#feminina" },
  { label: "Praia", href: "#praia" },
  { label: "Íntima", href: "#colecao" },
  { label: "Plus Size", href: "#colecao" },
  { label: "Masculina", href: "#colecao" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu mobile com Esc e sempre que a tela crescer pro
  // breakpoint md (evita ficar "preso" aberto atrás do menu desktop).
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mql = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (mql.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    mql.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      mql.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream-soft/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <Link href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.webp"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full sm:h-11 sm:w-11"
          />
          <span className="truncate font-display text-base tracking-tight text-brown-ink sm:text-lg">
            Moda Modelo
          </span>
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded text-sm text-brown-ink/80 transition-colors hover:text-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-clay-deep px-3.5 py-2 text-xs font-medium text-cream-soft transition-colors hover:bg-brown-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Fale no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brown-ink transition-colors hover:bg-line/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menu principal"
          className="border-t border-line bg-cream-soft px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-brown-ink/80 transition-colors hover:bg-line/40 hover:text-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
