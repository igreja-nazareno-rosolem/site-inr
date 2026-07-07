import { Link } from "wouter";
import { Botao, Cartao, Emblema, FotoPlaceholder, Sobretitulo, TituloSecao } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { Icone } from "@/components/icones/icones";
import { IDENTIDADE } from "@/lib/dados-igreja";

export default function Sobre() {
  return (
    <>
      <HeroPagina
        sobretitulo="Sobre a INR"
        titulo={
          <>
            Um lugar de
            <br />
            novos começos
          </>
        }
        texto={IDENTIDADE.frase}
        foto="fotos/foto4.jpg"
      />

      {/* Versículo da visão */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <figure className="inr-verse">
            <blockquote>
              "Assim que, se alguém está em Cristo, <em>nova criatura é</em>; as coisas antigas já
              passaram; eis que se fizeram novas."
            </blockquote>
            <figcaption>{IDENTIDADE.versiculoRef} · Versículo da Visão</figcaption>
          </figure>
        </div>
      </section>

      {/* Nossa história */}
      <section className="inr-section inr-light">
        <div className="inr-wrap">
          <div className="inr-grid inr-g-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <Sobretitulo>Nossa história</Sobretitulo>
              <h2 style={{ margin: "14px 0 18px", fontSize: "clamp(26px, 4vw, 38px)" }}>
                Fundada na fé, firmada no amor
              </h2>
              <p className="inr-lead" style={{ marginBottom: 14 }}>
                A INR nasceu do desejo de servir o bairro Rosolém com o Evangelho. Sob a liderança
                do Pr. Isaque desde 2001, crescemos como uma comunidade que valoriza a Palavra, a
                comunhão e o cuidado com cada pessoa.
              </p>
              <p className="inr-lead">
                Ao longo dos anos, vimos famílias serem transformadas, ministérios florescerem e
                novas gerações conhecerem a Cristo. Seguimos firmes no propósito de acolher, ensinar
                e enviar.
              </p>
            </div>
            {/* TODO: confirmar com a equipe a foto da fachada/congregação */}
            <FotoPlaceholder
              rotulo="foto · fachada / congregação"
              style={{ minHeight: 320, borderRadius: 24 }}
            />
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="inr-section inr-dark">
        <div className="inr-wrap">
          <TituloSecao centralizado sobretitulo="No que cremos" titulo="Missão e Visão" />
          <div className="inr-grid inr-g-2" style={{ maxWidth: 940, margin: "0 auto" }}>
            <Cartao style={{ padding: 32 }}>
              <Emblema suave>
                <Icone nome="globo" />
              </Emblema>
              <h3 style={{ margin: "16px 0 8px", fontSize: 22 }}>Missão</h3>
              <p style={{ color: "var(--on-dark-muted)" }}>{IDENTIDADE.missao}</p>
            </Cartao>
            <Cartao style={{ padding: 32 }}>
              <Emblema suave>
                <Icone nome="estrela" />
              </Emblema>
              <h3 style={{ margin: "16px 0 8px", fontSize: 22 }}>Visão</h3>
              <p style={{ color: "var(--on-dark-muted)" }}>{IDENTIDADE.visao}</p>
            </Cartao>
          </div>
        </div>
      </section>

      {/* Declaração de Cultura */}
      <section className="inr-section inr-light">
        <div className="inr-wrap">
          <TituloSecao
            centralizado
            sobretitulo="Nossa cultura"
            titulo="Declaração de Cultura da Igreja"
          />
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              textAlign: "center",
            }}
          >
            {IDENTIDADE.declaracaoCultura.map((paragrafo) => (
              <p key={paragrafo} className="inr-lead" style={{ maxWidth: "none" }}>
                {paragrafo}
              </p>
            ))}
            <p
              className="inr-grad-ink"
              style={{
                fontWeight: 800,
                letterSpacing: "-.02em",
                fontSize: "clamp(22px, 3.2vw, 32px)",
                marginTop: 10,
              }}
            >
              {IDENTIDADE.declaracaoCulturaFinal}
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <TituloSecao sobretitulo="Nossos valores" titulo="O que nos move" />
          <div className="inr-valores-grid">
            {IDENTIDADE.valores.map((valor) => (
              <div key={valor.n} className="inr-valor-card">
                <div className="inr-valor-topo">
                  <Emblema>
                    <Icone nome={valor.icone} />
                  </Emblema>
                  <span className="inr-valor-num">{valor.n}</span>
                </div>
                <h3>{valor.titulo}</h3>
                <p>{valor.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="inr-section inr-dark inr-dna-sec">
        <div className="inr-wrap">
          <Sobretitulo>Nosso DNA</Sobretitulo>
          <ul className="inr-dna-list">
            {IDENTIDADE.dna.map((linha) => (
              <li key={linha.destaque} className="inr-dna-linha">
                {linha.antes}
                <b>{linha.destaque}</b>
                {linha.depois}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manifesto */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div className="inr-manif">
            <Sobretitulo>Manifesto</Sobretitulo>
            <p className="inr-manif-intro">{IDENTIDADE.manifestoIntro}</p>
            <div className="inr-manif-linhas">
              {IDENTIDADE.manifesto.map((frase, indice) => (
                <p
                  key={frase}
                  className={
                    indice === IDENTIDADE.manifesto.length - 1
                      ? "inr-manif-linha inr-manif-final"
                      : "inr-manif-linha"
                  }
                >
                  {frase}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="inr-section inr-light">
        <div className="inr-wrap">
          <Cartao
            style={{
              padding: "clamp(28px, 5vw, 52px)",
              display: "flex",
              gap: 30,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: "46ch" }}>
              <Sobretitulo>Faça parte</Sobretitulo>
              <h2 style={{ margin: "12px 0 10px", fontSize: "clamp(24px, 3.5vw, 34px)" }}>
                Sua história também tem lugar aqui
              </h2>
              <p style={{ color: "var(--ink-2)" }}>
                Conheça nossa liderança e os ministérios em que você pode servir.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Botao asChild variante="gradiente">
                <Link href="/lideranca">
                  <Icone nome="pessoas" /> Liderança
                </Link>
              </Botao>
              <Botao asChild variante="contorno">
                <Link href="/ministerios">
                  <Icone nome="maos" /> Ministérios
                </Link>
              </Botao>
            </div>
          </Cartao>
        </div>
      </section>
    </>
  );
}
