import { Botao, Cartao, Emblema, Sobretitulo } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { GlifoWhatsApp, Icone } from "@/components/icones/icones";
import { MINISTERIOS, WHATSAPP, linkWhatsApp } from "@/lib/dados-igreja";

export default function Ministerios() {
  return (
    <>
      <HeroPagina
        sobretitulo="Envolva-se"
        titulo="Ministérios da INR"
        texto="Há um lugar para você servir e crescer. Conheça nossos ministérios e descubra onde participar."
        foto="fotos/foto3.jpg"
      />

      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-4" style={{ gridAutoRows: "1fr" }}>
            {MINISTERIOS.map((ministerio) => (
              // TODO Fase 2: transformar em link para a página individual do ministério
              <Cartao
                key={ministerio.id}
                hover
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <Emblema>
                  <Icone nome={ministerio.icone} />
                </Emblema>
                <div>
                  <h3 style={{ fontSize: 20 }}>{ministerio.nome}</h3>
                  <p style={{ fontSize: 13, color: "var(--royal)", fontWeight: 700 }}>
                    {ministerio.subtitulo}
                  </p>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-2)", flex: 1 }}>
                  {ministerio.proposito}
                </p>
                <div style={{ paddingTop: 10, borderTop: "1px solid var(--line-light)" }}>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "var(--brand-muted)",
                      fontSize: 13,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    <Icone nome="seta" style={{ width: 15, height: 15, flex: "none" }} /> Como
                    participar
                  </p>
                  <p style={{ fontSize: 13.5, color: "var(--ink-2)" }}>{ministerio.participar}</p>
                </div>
              </Cartao>
            ))}
          </div>
        </div>
      </section>

      <section className="inr-section inr-dark">
        <div className="inr-wrap inr-center">
          <Sobretitulo>Vamos juntos</Sobretitulo>
          <h2 style={{ margin: "12px 0 14px", fontSize: "clamp(26px, 4vw, 40px)" }}>
            Quer servir em um ministério?
          </h2>
          <p className="inr-lead" style={{ margin: "0 auto 26px" }}>
            Fale com a gente e encontraremos o lugar ideal para você usar seus dons.
          </p>
          <Botao asChild variante="whatsapp">
            <a
              href={linkWhatsApp(WHATSAPP.secretaria, "Olá! Quero servir em um ministério da INR.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlifoWhatsApp style={{ width: 18, height: 18 }} /> Quero participar
            </a>
          </Botao>
        </div>
      </section>
    </>
  );
}
