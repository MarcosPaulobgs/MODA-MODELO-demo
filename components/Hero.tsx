"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const POSTER =
  "https://res.cloudinary.com/gfbljogf/image/upload/v1789418979/Clothing_photos_video_transitions_20260914174352_00-00-00.webp";
const VIDEO_SRC =
  "https://res.cloudinary.com/gfbljogf/video/upload/v1789421758/Fashion_outfits_video_displaying__20260914183256.mp4";

export default function Hero() {
  // Respeita a preferência do sistema por menos movimento: em vez do
  // vídeo em loop, mostra só a imagem de capa parada.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className={styles.hero}>
      {reducedMotion ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={POSTER}
          alt=""
          aria-hidden="true"
          className={styles.heroImage}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          preload="auto"
          aria-hidden="true"
          poster={POSTER}
          className={styles.heroImage}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.heading}>Elegância para todas as ocasiões</h1>
        <p className={styles.paragraph}>
          Moda feminina, masculina, íntima, plus size, praia e perfumaria em
          um só lugar.
        </p>

        <div className={styles.actions}>
          <a href="#colecao" className={styles.btnPrimary}>
            Ver coleção
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Falar com uma consultora
          </a>
        </div>
      </div>
    </section>
  );
}
