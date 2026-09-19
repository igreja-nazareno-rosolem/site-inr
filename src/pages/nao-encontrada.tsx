import { Link } from "wouter";
import { Botao, Sobretitulo } from "@/components/design-system";
import { Icone } from "@/components/icones/icones";
import { rotaInterna } from "@/lib/dados-igreja";

export default function NaoEncontrada() {
  return (
    <section className="inr-section inr-light" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="inr-wrap inr-center">
        <Sobretitulo>Erro 404</Sobretitulo>
        <h1 style={{ margin: "14px 0 12px", fontSize: "clamp(30px, 5vw, 52px)" }}>
          Página não encontrada
        </h1>
        <p className="inr-lead" style={{ margin: "0 auto 26px" }}>
          A página que você procura não existe ou pode ter sido movida.
        </p>
        <Botao asChild variante="gradiente">
          <Link href={rotaInterna("/")}>
            <Icone nome="seta" /> Voltar para o início
          </Link>
        </Botao>
      </div>
    </section>
  );
}
