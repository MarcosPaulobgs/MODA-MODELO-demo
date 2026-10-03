"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";
import { useLightbox } from "./useLightbox";

const categories = [
  {
    name: "Feminina",
    id: "feminina",
    desc: "Vestidos, conjuntos e peças de crochê",
    image: "/produtos/produto-10.webp",
    className: "md:col-span-2 md:row-span-2",
    imageClassName: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    name: "Moda Praia",
    id: "praia",
    desc: "Biquínis, maiôs e saídas",
    image: "/produtos/produto-16.webp",
    className: "md:col-span-1",
    imageClassName: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    name: "Jeans & Tendência",
    desc: "Peças em denim com detalhes exclusivos",
    image: "/produtos/produto-8.webp",
    className: "md:col-span-1",
    imageClassName: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    name: "Acessórios",
    desc: "Bolsas, óculos e cintos que fecham o look",
    image: "/produtos/produto-15.webp",
    className: "md:col-span-2",
    imageClassName: "aspect-[16/9] md:aspect-auto md:h-full",
  },
];

export default function Categories() {
  const { selected, open, close } = useLightbox<(typeof categories)[number]>();

  return (
    <section
      id="colecao"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20"
    >
      <div className="mb-10 max-w-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-clay-deep">
          Coleção
        </p>
        <h2 className="mt-3 font-display text-3xl text-brown-ink md:text-4xl">
          Escolha por onde começar
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            id={cat.id}
            type="button"
            onClick={() => open(cat)}
            className={`group relative block w-full scroll-mt-20 cursor-pointer touch-manipulation overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep ${cat.className}`}
          >
            <Image
              src={cat.image}
              alt=""
              width={900}
              height={900}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${cat.imageClassName}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-ink/80 via-brown-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl italic text-cream-soft">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-cream-soft/85">{cat.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-brown-ink/70">
        Também temos linhas de Plus Size, Moda Íntima e Perfumaria. Fale com a
        gente no{" "}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded font-medium text-clay-deep underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
        >
          WhatsApp
        </a>{" "}
        e veja o catálogo completo.
      </p>

      {selected && (
        <Lightbox src={selected.image} alt={selected.name} onClose={close} />
      )}
    </section>
  );
}