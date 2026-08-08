import type { ReactNode } from "react";
import { Sobretitulo } from "@/components/design-system";
import { urlPublica } from "@/lib/dados-igreja";

export interface HeroPaginaProps {
  sobretitulo: ReactNode;
  titulo: ReactNode;
  texto?: ReactNode;
  /** Caminho da foto em `public/` (ex.: "fotos/foto4.jpg"). Sem foto, fica só o gradiente. */
  foto?: string;
}

/** Hero interno das páginas: gradiente da marca com foto opcional ao fundo. */
export function HeroPagina({ sobretitulo, titulo, texto, foto }: HeroPaginaProps) {
  return (
    <section className="inr-hero">
      {foto ? (
        <div
          className="inr-hero-photo"
          style={{ backgroundImage: `url('${urlPublica(foto)}')` }}
        />
      ) : null}
      <div
        className="inr-hero-inner inr-wrap"
        style={{ paddingTop: "clamp(48px, 7vw, 76px)", paddingBottom: "clamp(48px, 7vw, 76px)" }}
      >
        <Sobretitulo style={{ color: "rgba(255,255,255,.85)" }}>{sobretitulo}</Sobretitulo>
        <h1 style={{ marginTop: 14, fontSize: "clamp(30px, 5vw, 52px)" }}>{titulo}</h1>
        {texto ? (
          <p className="inr-lead" style={{ marginTop: 16 }}>
            {texto}
          </p>
        ) : null}
      </div>
    </section>
  );
}
