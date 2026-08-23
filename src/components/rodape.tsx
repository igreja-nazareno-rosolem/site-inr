import { Link } from "wouter";
import { Instagram, Facebook, Youtube } from "@/components/icones/redes-sociais";
import { IGREJA, IDENTIDADE, REDES_SOCIAIS, urlPublica } from "@/lib/dados-igreja";

/** Rodapé navy em quatro colunas, conforme o design aprovado. */
export function Rodape() {
  return (
    <footer className="inr-foot">
      <div className="inr-wrap">
        <div className="inr-foot-grid">
          <div>
            <img
              className="inr-marca-foot"
              src={urlPublica("logo-inr-branco.png")}
              alt={IGREJA.sigla}
            />
            <p style={{ fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 6 }}>
              {IGREJA.nome}
            </p>
            <p style={{ fontSize: 14, maxWidth: "30ch" }}>
              {IGREJA.enderecoCurto}
              <br />
              {IGREJA.cidade} · 13185-220
            </p>
            <div className="inr-foot-soc">
              <a href={REDES_SOCIAIS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={REDES_SOCIAIS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href={REDES_SOCIAIS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>

          <div>
            <h4>Navegar</h4>
            <Link href="/sobre">Sobre</Link>
            <Link href="/lideranca">Liderança</Link>
            <Link href="/ministerios">Ministérios</Link>
            <Link href="/agenda">Agenda</Link>
            {/* TODO Fase 2: link "Novo aqui?" */}
          </div>

          <div>
            <h4>Participe</h4>
            <a href={REDES_SOCIAIS.youtube} target="_blank" rel="noopener noreferrer">
              Cultos Online
            </a>
            <Link href="/contribua">Contribua</Link>
            <Link href="/contato">Contato</Link>
            {/* TODO Fase 2: Boletim e Secretaria · Fase 3: Transparência */}
          </div>

          <div>
            <h4>Fale conosco</h4>
            <a href="tel:+551938698121">{IGREJA.telefone}</a>
            <a href={IGREJA.mapaLink} target="_blank" rel="noopener noreferrer">
              Como chegar
            </a>
            <p style={{ fontSize: 13.5, marginTop: 8, color: "var(--on-dark-faint)" }}>
              Atendimento pastoral
              <br />
              {IGREJA.atendimento}
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <a
                href={REDES_SOCIAIS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inr-chip"
                style={{ fontSize: 12, padding: "7px 13px", background: "rgba(255,255,255,.1)", color: "#fff" }}
              >
                @nazarenorosolem
              </a>
            </div>
          </div>
        </div>

        <div className="inr-foot-bottom">
          <span>
            © {new Date().getFullYear()} {IGREJA.nome} · Hortolândia/SP
          </span>
          <span>{IDENTIDADE.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
