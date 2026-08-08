import { Chip, LinhaAgenda } from "@/components/design-system";
import { HeroPagina } from "@/components/hero-pagina";
import { AGENDA_SEMANAL } from "@/lib/dados-igreja";

export default function Agenda() {
  return (
    <>
      <HeroPagina
        sobretitulo="Programação"
        titulo="Agenda da semana"
        texto="Nossos cultos e encontros fixos. Venha participar — sempre tem um lugar para você."
      />

      <section className="inr-section inr-plain">
        <div className="inr-wrap">
          <div className="inr-sched-list" style={{ maxWidth: 820, margin: "0 auto" }}>
            {AGENDA_SEMANAL.map((item) => (
              <LinhaAgenda
                key={`${item.dia}-${item.hora}-${item.nome}`}
                dia={item.dia}
                hora={item.hora}
                nome={item.nome}
                etiqueta={
                  <Chip variante="linha" style={{ fontSize: 12, padding: "6px 13px" }}>
                    {item.ministerio}
                  </Chip>
                }
              />
            ))}
          </div>
          {/* TODO Fase 2: agenda dinâmica do mês com filtros por categoria e
              ministério (calendário + lista) — ver protótipo pageAgendaDinamica. */}
        </div>
      </section>
    </>
  );
}
