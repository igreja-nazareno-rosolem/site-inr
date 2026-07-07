import { Link } from "wouter";
import { Botao, Cartao, CartaoCulto, Emblema, LinhaAgenda, Sobretitulo } from "@/components/design-system";
import { Icone } from "@/components/icones/icones";
import {
  AGENDA_SEMANAL,
  IGREJA,
  MINISTERIOS,
  PROXIMOS_CULTOS,
  REDES_SOCIAIS,
  urlPublica,
} from "@/lib/dados-igreja";

export default function Inicio() {
  return (
    <>
      {/* Hero principal com foto e faixa de cultos */}
      <section className="inr-hero">
        <div
          className="inr-hero-photo"
          style={{ backgroundImage: `url('${urlPublica("fotos/foto1.jpg")}')` }}
        />
        <div className="inr-hero-inner inr-wrap">
          <Sobretitulo style={{ color: "rgba(255,255,255,.88)" }}>{IGREJA.nome}</Sobretitulo>
          <h1 style={{ marginTop: 16 }}>
            Um lugar de
            <br />
            novos começos.
          </h1>
          <p className="inr-lead">
            <strong style={{ color: "#fff" }}>Onde histórias são transformadas.</strong> Somos uma
            igreja em Hortolândia que acolhe pessoas com amor, graça e esperança — em todas as fases
            da vida.
          </p>
          <div className="inr-hero-ctas">
            <Botao asChild variante="claro">
              <Link href="/agenda">
                <Icone nome="calendario" /> Programação
              </Link>
            </Botao>
            <Botao asChild variante="fantasma">
              <a href={REDES_SOCIAIS.youtube} target="_blank" rel="noopener noreferrer">
                <Icone nome="ao_vivo" /> Assista ao vivo
              </a>
            </Botao>
            <Botao asChild variante="fantasma">
              <a href={IGREJA.mapaLink} target="_blank" rel="noopener noreferrer">
                <Icone nome="pino" /> Como chegar
              </a>
            </Botao>
            <Botao asChild variante="fantasma">
              <Link href="/contribua">
                <Icone nome="coracao" /> Contribua
              </Link>
            </Botao>
          </div>
          <div className="inr-svc-strip">
            {PROXIMOS_CULTOS.map((culto) => (
              <CartaoCulto key={`${culto.dia}-${culto.hora}`} dia={culto.dia} hora={culto.hora} nome={culto.nome} />
            ))}
          </div>
        </div>
      </section>

      {/* Prévia dos ministérios */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div
            className="inr-section-head"
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}
          >
            <div>
              <Sobretitulo>Envolva-se</Sobretitulo>
              <h2 style={{ marginTop: 12 }}>Ministérios para cada idade</h2>
            </div>
            <Botao asChild variante="contorno" tamanho="pequeno">
              <Link href="/ministerios">
                Ver todos <Icone nome="seta" />
              </Link>
            </Botao>
          </div>
          <div className="inr-grid inr-g-3">
            {MINISTERIOS.slice(0, 6).map((ministerio) => (
              <Cartao
                key={ministerio.id}
                hover
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <Emblema>
                  <Icone nome={ministerio.icone} />
                </Emblema>
                <div>
                  <h3 style={{ fontSize: 19 }}>{ministerio.nome}</h3>
                  <p style={{ fontSize: 13, color: "var(--brand-muted)", fontWeight: 600 }}>
                    {ministerio.subtitulo}
                  </p>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-2)" }}>{ministerio.proposito}</p>
              </Cartao>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa semana (fundo escuro) */}
      <section className="inr-section inr-dark">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <Sobretitulo>Nossa semana</Sobretitulo>
              <h2 style={{ margin: "14px 0 16px", fontSize: "clamp(26px, 4vw, 40px)" }}>
                Sempre tem um encontro
                <br />
                esperando por você
              </h2>
              <p className="inr-lead">
                Cultos, oração, juventude e EBD ao longo da semana. Confira os horários e venha
                participar.
              </p>
              <Botao asChild variante="gradiente" style={{ marginTop: 24 }}>
                <Link href="/agenda">
                  <Icone nome="calendario" /> Ver agenda completa
                </Link>
              </Botao>
            </div>
            <div className="inr-sched-list">
              {AGENDA_SEMANAL.slice(0, 5).map((item) => (
                <LinhaAgenda
                  key={`${item.dia}-${item.hora}`}
                  dia={item.dia}
                  hora={item.hora}
                  nome={item.nome}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TODO Fase 2: seção "Avisos da semana" (boletim) entra aqui quando o
          boletim dinâmico for construído — ver protótipo pageHome. */}

      {/* Primeira vez + visita */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-2" style={{ gap: 24 }}>
            <Cartao
              style={{ background: "var(--grad)", color: "#fff", padding: 40, display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Emblema style={{ background: "rgba(255,255,255,.18)" }}>
                <Icone nome="estrela" />
              </Emblema>
              <h3 style={{ color: "#fff", fontSize: 26 }}>É a sua primeira vez?</h3>
              <p style={{ color: "rgba(255,255,255,.9)" }}>
                Preparamos uma jornada simples para você conhecer a igreja, do primeiro culto à
                membresia.
              </p>
              {/* TODO Fase 2: apontar para a página "Novo aqui?" quando ela existir */}
              <Botao asChild variante="claro" style={{ alignSelf: "flex-start", marginTop: 6 }}>
                <Link href="/contato">
                  Começar jornada <Icone nome="seta" />
                </Link>
              </Botao>
            </Cartao>
            <Cartao style={{ padding: 40, display: "flex", flexDirection: "column", gap: 16 }}>
              <Emblema suave>
                <Icone nome="pino" />
              </Emblema>
              <h3 style={{ fontSize: 26 }}>Venha nos visitar</h3>
              <p style={{ color: "var(--ink-2)" }}>
                {IGREJA.enderecoCurto} — {IGREJA.cidade}. Será uma alegria receber você e sua
                família.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
                <Botao asChild variante="contorno">
                  <a href={IGREJA.mapaLink} target="_blank" rel="noopener noreferrer">
                    <Icone nome="pino" /> Como chegar
                  </a>
                </Botao>
                <Botao asChild variante="contorno">
                  <Link href="/contato">
                    <Icone nome="conversa" /> Falar conosco
                  </Link>
                </Botao>
              </div>
            </Cartao>
          </div>
        </div>
      </section>
    </>
  );
}
