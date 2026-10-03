"use client";

import { useEffect, useRef, useState } from "react";

// Hook compartilhado pra abrir/fechar uma foto em tela cheia.
// - Fecha com a tecla Esc, com o X, clicando fora da foto, ou com o
//   botão "voltar" do celular.
// - Trava a rolagem do body enquanto está aberta.
// - Devolve o foco pro botão que abriu a foto ao fechar.
//
// Sobre o botão voltar do celular: ao abrir a foto, empurramos uma
// entrada extra no histórico (window.history.pushState) sem trocar a
// URL. Isso faz o navegador "gastar" o próximo back nessa entrada em
// vez de sair da página. Usamos a API nativa do navegador (não o
// router do Next.js), então isso não muda a rota nem interfere na
// navegação/restauração de rolagem do App Router.
export function useLightbox<T>() {
  const [selected, setSelected] = useState<T | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  // Marca se o fechamento atual veio de um evento "popstate" (botão
  // voltar), pra não tentar voltar no histórico de novo no cleanup.
  const closingFromPopState = useRef(false);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";
    window.history.pushState({ lightboxOpen: true }, "");

    const handlePopState = () => {
      closingFromPopState.current = true;
      setSelected(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
      // Devolve o foco pra quem abriu a foto (botão da grade), senão
      // o teclado/leitor de tela fica "perdido" no topo da página.
      triggerRef.current?.focus();

      // Se fechou pelo X, Esc ou clique fora (não pelo botão voltar),
      // remove a entrada de histórico que empurramos ao abrir — assim
      // ela não fica "sobrando" pro usuário ter que dar back duas vezes.
      if (!closingFromPopState.current) {
        window.history.back();
      }
      closingFromPopState.current = false;
    };
  }, [selected]);

  const open = (item: T) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setSelected(item);
  };

  const close = () => setSelected(null);

  return {
    selected,
    open,
    close,
  };
}
