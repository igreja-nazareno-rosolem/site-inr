import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import { Botao, Cartao, Chip, Emblema } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { GlifoWhatsApp, Icone } from "@/components/icones/icones";
import { PIX, WHATSAPP, linkWhatsApp } from "@/lib/dados-igreja";
import { gerarPayloadPix } from "@/lib/pix";

const ESTILO_ROTULO: CSSProperties = {
  fontSize: 12,
  color: "var(--brand-muted)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".08em",
};

export default function Contribua() {
  const [copiada, setCopiada] = useState(false);
  const [toastVisivel, setToastVisivel] = useState(false);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);
  const payloadPix = gerarPayloadPix();

  useEffect(() => {
    return () => {
      if (temporizador.current) clearTimeout(temporizador.current);
    };
  }, []);

  async function copiarChave() {
    try {
      await navigator.clipboard.writeText(PIX.chave);
    } catch {
      const area = document.createElement("textarea");
      area.value = PIX.chave;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopiada(true);
    setToastVisivel(true);
    if (temporizador.current) clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => {
      setCopiada(false);
      setToastVisivel(false);
    }, 2400);
  }

  return (
    <>
      <HeroPagina
        sobretitulo="Contribua"
        titulo={
          <>
            Generosidade que
            <br />
            edifica a igreja
          </>
        }
        texto="Sua contribuição sustenta a obra, os ministérios e o cuidado com as pessoas. Contribua com alegria."
        foto="fotos/foto6.jpg"
      />

      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-2" style={{ gap: 30, alignItems: "start" }}>
            {/* Cartão PIX com QR Code */}
            <Cartao style={{ padding: 34, textAlign: "center", background: "var(--grad)", color: "#fff" }}>
              <Chip style={{ background: "rgba(255,255,255,.18)" }}>
                <Icone nome="pix" style={{ width: 16, height: 16 }} /> PIX · {PIX.tipo}
              </Chip>
              <div
                style={{
                  width: 200,
                  height: 200,
                  margin: "24px auto",
                  background: "#fff",
                  borderRadius: 18,
                  padding: 12,
                  boxShadow: "var(--sh-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <QRCodeSVG value={payloadPix} size={176} level="M" aria-label="QR Code PIX" />
              </div>
              <p style={{ color: "rgba(255,255,255,.85)", fontSize: 14, marginBottom: 6 }}>
                Chave PIX (CNPJ)
              </p>
              <p style={{ fontWeight: 800, fontSize: 22, letterSpacing: ".02em" }}>{PIX.chave}</p>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 13, margin: "4px 0 18px" }}>
                Banco {PIX.banco} · {PIX.favorecido}
              </p>
              <Botao variante="claro" bloco onClick={copiarChave}>
                <Icone nome={copiada ? "confirmado" : "copiar"} />
                <span>{copiada ? "Chave copiada!" : "Copiar chave"}</span>
              </Botao>
            </Cartao>

            {/* Dados bancários e orientações */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Cartao style={{ padding: 30 }}>
                <h3 style={{ fontSize: 21, marginBottom: 16 }}>Dados para depósito</h3>
                <div className="inr-grid inr-g-2" style={{ gap: 14 }}>
                  <div>
                    <p style={ESTILO_ROTULO}>Banco</p>
                    <p style={{ fontWeight: 800, fontSize: 17 }}>{PIX.banco}</p>
                  </div>
                  <div>
                    <p style={ESTILO_ROTULO}>Agência</p>
                    <p style={{ fontWeight: 800, fontSize: 17 }}>{PIX.agencia}</p>
                  </div>
                  <div>
                    <p style={ESTILO_ROTULO}>Conta Corrente</p>
                    <p style={{ fontWeight: 800, fontSize: 17 }}>{PIX.conta}</p>
                  </div>
                  <div>
                    <p style={ESTILO_ROTULO}>Favorecido</p>
                    <p style={{ fontWeight: 800, fontSize: 15 }}>{PIX.favorecido}</p>
                  </div>
                </div>
              </Cartao>
              <Cartao style={{ padding: 30, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <Emblema suave>
                  <Icone nome="coracao" />
                </Emblema>
                <div>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>
                    "Cada um contribua segundo propôs no coração"
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--ink-2)" }}>
                    2 Coríntios 9:7 — Deus ama quem dá com alegria. Toda contribuição é registrada e
                    aplicada na obra.
                  </p>
                </div>
              </Cartao>
              {/* TODO Fase 3: link para a página de transparência financeira */}
              <Botao asChild variante="contorno" bloco>
                <a
                  href={linkWhatsApp(WHATSAPP.secretaria, "Olá! Tenho uma dúvida sobre contribuição/PIX.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlifoWhatsApp style={{ width: 18, height: 18 }} /> Dúvidas sobre contribuição
                </a>
              </Botao>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso flutuante de confirmação — via portal para escapar da animação
          de entrada da página (.inr-page-anim força opacity nos filhos do main) */}
      {createPortal(
        <div className={`inr-toast${toastVisivel ? " inr-visivel" : ""}`} role="status" aria-live="polite">
          <Icone nome="confirmado" /> Chave PIX copiada
        </div>,
        document.body
      )}
    </>
  );
}
