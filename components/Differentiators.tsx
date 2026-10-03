const items = [
  {
    title: "Moda local",
    desc: "Vestindo Sua Cidade com elegância e confiança",
  },
  {
    title: "Até 10x sem juros",
    desc: "Parcelamento facilitado em todas as peças",
  },
  {
    title: "Até 50% off",
    desc: "Campanhas de queima de estoque toda temporada",
  },
  {
    title: "Atendimento no WhatsApp",
    desc: "Consultoria de look direto com nossa equipe",
  },
];

export default function Differentiators() {
  return (
    <section className="bg-brown-ink py-14 text-cream-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="border-l border-cream-soft/25 pl-5">
            <p className="font-display text-2xl italic text-gold">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-soft/75">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
