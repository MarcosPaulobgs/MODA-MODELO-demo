"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";
import { useLightbox } from "./useLightbox";

const products = [
  {
    name: "Conjuntos Alfaiataria",
    tag: "Feminina",
    image: "/produtos/produto-2.webp",
  },
  {
    name: "Conjunto Jeans Pérolas",
    tag: "Jeans & Tendência",
    image: "/produtos/produto-3.webp",
  },
  {
    name: "Vestido Midi Envelope",
    tag: "Feminina",
    image: "/produtos/produto-9.webp",
  },
  {
    name: "Vestido Boho Tricô",
    tag: "Feminina",
    image: "/produtos/produto-11.webp",
  },
  {
    name: "Calças + Cintos",
    tag: "Acessórios",
    image: "/produtos/produto-12.webp",
  },
  {
    name: "Blusa Poá Laço",
    tag: "Feminina",
    image: "/produtos/produto-14.webp",
  },
];

export default function ProductGrid() {
  const { selected, open, close } = useLightbox<(typeof products)[number]>();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-lg">
          <p className="text-sm font-medium uppercase tracking-wide text-clay-deep">
            Vitrine
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown-ink md:text-4xl">
            Peças da temporada
          </h2>
        </div>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded text-sm font-medium text-brown-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
        >
          Ver catálogo completo
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((product) => {
          const message = encodeURIComponent(
            `Olá! Vi o ${product.name} no site da Moda Modelo e queria saber mais.`
          );
          return (
            <div key={product.name} className="group">
              <button
                type="button"
                onClick={() => open(product)}
                className="block w-full cursor-pointer touch-manipulation overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
                aria-label={`Ver foto: ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt=""
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-brown-ink">
                    {product.name}
                  </p>
                  <p className="text-xs text-brown-ink/70">{product.tag}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/5500000000000?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded text-xs font-medium text-clay-deep underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-deep"
              >
                Perguntar no WhatsApp
              </a>
            </div>
          );
        })}
      </div>

      {selected && (
        <Lightbox
          src={selected.image}
          alt={selected.name}
          onClose={close}
        />
      )}
    </section>
  );
}