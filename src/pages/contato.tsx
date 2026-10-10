import { Botao, Cartao, Emblema } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { GlifoWhatsApp, Icone } from "@/components/icones/icones";
import { CONTATOS, IGREJA, linkWhatsApp } from "@/lib/dados-igreja";

export default function Contato() {
  return (
    <>
      <HeroPagina
        sobretitulo="Central de Contatos"
        titulo="Com quem falar"
        texto="Escolha o assunto e fale direto pelo WhatsApp. Atendimento pastoral de segunda a sexta, das 9h às 18h."
        foto="fotos/foto2.jpg"
      />

      {/* Atendimento + mapa */}
      <section className="inr-section inr-light">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-2" style={{ gap: 30, alignItems: "stretch" }}>
            <Cartao style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontSize: 22 }}>Atendimento</h3>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                <Emblema suave>
                  <Icone nome="telefone" />
                </Emblema>
                <div>
                  <p style={{ fontWeight: 800 }}>{IGREJA.telefone}</p>
                  <p style={{ fontSize: 13, color: "var(--brand-muted)" }}>Secretaria</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                <Emblema suave>
                  <Icone nome="conversa" />
                </Emblema>
                <div>
                  <p style={{ fontWeight: 800 }}>+55 19 99450-4004</p>
                  <p style={{ fontSize: 13, color: "var(--brand-muted)" }}>Pr. Isaque</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "center" }}>
                <Emblema suave>
                  <Icone nome="relogio" />
                </Emblema>
                <div>
                  <p style={{ fontWeight: 800 }}>{IGREJA.atendimento}</p>
                  <p style={{ fontSize: 13, color: "var(--brand-muted)" }}>Atendimento pastoral</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <Emblema suave>
                  <Icone nome="pino" />
                </Emblema>
                <div>
                  <p style={{ fontWeight: 800 }}>Endereço</p>
                  <p style={{ fontSize: 14, color: "var(--ink-2)" }}>{IGREJA.endereco}</p>
                </div>
              </div>
              <Botao asChild variante="gradiente" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                <a href={IGREJA.mapaLink} target="_blank" rel="noopener noreferrer">
                  <Icone nome="pino" /> Como chegar
                </a>
              </Botao>
            </Cartao>
            <Cartao style={{ padding: 0, overflow: "hidden", minHeight: 380 }}>
              <iframe
                src={IGREJA.mapaEmbed}
                style={{ width: "100%", height: "100%", minHeight: 380, border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa — como chegar à INR"
              />
            </Cartao>
          </div>
        </div>
      </section>
    </>
  );
}
