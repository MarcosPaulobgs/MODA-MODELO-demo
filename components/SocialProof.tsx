import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="bg-cream px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <Image
          src="/logo.webp"
          alt="Moda Modelo"
          width={64}
          height={64}
          className="rounded-full"
        />
        <h2 className="max-w-xl font-display text-3xl text-brown-ink md:text-4xl">
          Looks reais, em pessoas reais
        </h2>
        <p className="max-w-md text-brown-ink/75">
          Todos os dias postamos peças novas em araras e em modelos de
          verdade, para você ver exatamente como a roupa cai antes de vir até
          a loja.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <div>
            <p className="font-display text-3xl text-clay-deep">+1 mil</p>
            <p className="text-sm text-brown-ink/70">seguidoras no Instagram</p>
          </div>
          <div>
            <p className="font-display text-3xl text-clay-deep">100+</p>
            <p className="text-sm text-brown-ink/70">looks publicados</p>
          </div>
          <div>
            <p className="font-display text-3xl text-clay-deep">10x</p>
            <p className="text-sm text-brown-ink/70">sem juros em toda loja</p>
          </div>
        </div>

        <a
          href="https://instagram.com/seuinstagram"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-clay-deep px-7 py-3 text-sm font-medium text-clay-deep transition-colors hover:bg-clay-deep hover:text-cream-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
        >
          Seguir @seuinstagram
        </a>
      </div>
    </section>
  );
}
