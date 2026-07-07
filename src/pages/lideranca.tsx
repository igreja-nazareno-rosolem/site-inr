import { AvatarIniciais, Cartao, Chip, FotoPlaceholder, TituloSecao } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { Icone } from "@/components/icones/icones";
import { EQUIPE, PASTORES } from "@/lib/dados-igreja";

export default function Lideranca() {
  const pastorPresidente = PASTORES.find((pastor) => pastor.destaque);
  const pastoresAuxiliares = PASTORES.filter((pastor) => !pastor.destaque);

  return (
    <>
      <HeroPagina
        sobretitulo="Pastores e Liderança"
        titulo={
          <>
            Quem cuida
            <br />
            da nossa família
          </>
        }
        texto="Conheça os pastores e líderes que servem a INR com dedicação e amor."
        foto="fotos/foto7.jpg"
      />

      {/* Corpo pastoral */}
      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <TituloSecao sobretitulo="Corpo pastoral" titulo="Pastores" />
          <div className="inr-grid inr-g-3" style={{ gridAutoRows: "1fr" }}>
            {pastorPresidente ? (
              <Cartao className="inr-pastor-destaque">
                {/* TODO: confirmar com a equipe a foto do Pr. Isaque */}
                <FotoPlaceholder
                  sobreGradiente
                  rotulo={`foto · ${pastorPresidente.nome}`}
                  style={{ width: 150, height: 150, borderRadius: 20, minHeight: 0 }}
                />
                <div>
                  <Chip style={{ background: "rgba(255,255,255,.18)" }}>
                    <Icone nome="estrela" style={{ width: 16, height: 16 }} /> Pastor Presidente
                  </Chip>
                  <h2 style={{ color: "#fff", margin: "12px 0 4px", fontSize: 30 }}>
                    {pastorPresidente.nome}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,.85)", fontWeight: 700, marginBottom: 8 }}>
                    {pastorPresidente.papel}
                  </p>
                  <p style={{ color: "rgba(255,255,255,.92)", maxWidth: "60ch" }}>
                    {pastorPresidente.bio}
                  </p>
                </div>
              </Cartao>
            ) : null}
            {pastoresAuxiliares.map((pastor) => (
              <Cartao key={pastor.nome} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <AvatarIniciais nome={pastor.nome} grande />
                <div>
                  <h3 style={{ fontSize: 20 }}>{pastor.nome}</h3>
                  <p style={{ fontSize: 13, color: "var(--royal)", fontWeight: 700, margin: "3px 0 8px" }}>
                    {pastor.papel}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--ink-2)" }}>{pastor.bio}</p>
                </div>
              </Cartao>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe de áreas e ministérios */}
      <section className="inr-section inr-light">
        <div className="inr-wrap">
          <TituloSecao sobretitulo="Equipe" titulo="Líderes de ministérios e áreas" />
          <div className="inr-grid inr-g-4">
            {EQUIPE.map((membro) => (
              <Cartao
                key={membro.nome}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: 18 }}
              >
                <AvatarIniciais nome={membro.nome} style={{ width: 48, height: 48, fontSize: 16 }} />
                <div>
                  <p style={{ fontWeight: 800, fontSize: 15 }}>{membro.nome}</p>
                  <p style={{ fontSize: 13, color: "var(--brand-muted)", fontWeight: 600 }}>
                    {membro.area}
                  </p>
                </div>
              </Cartao>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
