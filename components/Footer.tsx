import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-soft px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt=""
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-display text-lg text-brown-ink">
              Moda Modelo
            </span>
          </div>
          <p className="mt-3 text-sm text-brown-ink/70">
            Elegância para todas as ocasiões. Sua Cidade, UF.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-brown-ink">Categorias</p>
            <ul className="mt-3 space-y-2 text-sm text-brown-ink/70">
              <li>Feminina</li>
              <li>Masculina</li>
              <li>Moda Praia</li>
              <li>Plus Size</li>
              <li>Moda Íntima</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-brown-ink">Loja</p>
            <ul className="mt-3 space-y-2 text-sm text-brown-ink/70">
              <li>Sua Cidade, UF</li>
              <li>Até 10x sem juros</li>
              <li>Coleções toda semana</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-brown-ink">Fale com a gente</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded text-clay-deep transition-colors hover:text-brown-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.22-8.26 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.98-.15.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.29Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/seuinstagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded text-clay-deep transition-colors hover:text-brown-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  @seuinstagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-brown-ink/70">
        © {new Date().getFullYear()} Moda Modelo. Projeto de demonstração, sem vínculo com empresas reais.
      </div>
    </footer>
  );
}