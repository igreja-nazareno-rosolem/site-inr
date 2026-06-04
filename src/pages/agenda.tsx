import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const programacaoSemanal = [
  { dia: "Segunda", eventos: [] },
  { dia: "Terça", eventos: [{ hora: "19h00", nome: "Ensaio de Louvor", local: "Templo" }] },
  { dia: "Quarta", eventos: [{ hora: "19h30", nome: "Culto de Oração e Estudo", local: "Templo" }] },
  { dia: "Quinta", eventos: [{ hora: "19h30", nome: "Pequenos Grupos (nos lares)", local: "Vários endereços" }] },
  { dia: "Sexta", eventos: [{ hora: "19h30", nome: "Reunião JNI — Juventude", local: "Templo" }] },
  { dia: "Sábado", eventos: [{ hora: "09h00", nome: "Ministério Infantil (mensal)", local: "Templo" }] },
  {
    dia: "Domingo",
    eventos: [
      { hora: "18h30", nome: "Culto Dominical + Ministério Infantil", local: "Templo" },
    ],
  },
];

const eventosEspeciais = [
  { data: "14 Jun 2025", nome: "Conferência de Família", desc: "Dois dias de palestras e atividades para casais e famílias. Sábado e domingo.", local: "Templo INR", categoria: "Conferência" },
  { data: "29 Jun 2025", nome: "Culto Especial — Aniversário da Igreja", desc: "Celebração dos anos da INR com mensagem especial e louvor. Aberto a toda comunidade.", local: "Templo INR", categoria: "Celebração" },
  { data: "12 Jul 2025", nome: "Retiro JNI — Juventude", desc: "Fim de semana de retiro espiritual para jovens de 13 a 35 anos.", local: "Sítio Esperança — Valinhos/SP", categoria: "Retiro" },
  { data: "10 Ago 2025", nome: "Ação Social no Bairro", desc: "Distribuição de alimentos, corte de cabelo e atendimento comunitário no Jd. Rosolém.", local: "Praça do Bairro", categoria: "Social" },
  { data: "07 Set 2025", nome: "Culto Aberto — Dia da Pátria", desc: "Culto especial com louvores e reflexão sobre cidadania e fé.", local: "Templo INR", categoria: "Culto" },
  { data: "18 Out 2025", nome: "Conferência Missionária", desc: "Um dia dedicado à visão missionária da INR, com convidados e relatos do campo.", local: "Templo INR", categoria: "Missões" },
];

const categoriaCores: Record<string, string> = {
  "Conferência": "bg-purple-100 text-purple-700",
  "Celebração": "bg-amber-100 text-amber-700",
  "Retiro": "bg-green-100 text-green-700",
  "Social": "bg-orange-100 text-orange-700",
  "Culto": "bg-blue-100 text-blue-700",
  "Missões": "bg-rose-100 text-rose-700",
};

export default function Agenda() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Agenda
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cada semana, um convite aberto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Programação regular, eventos especiais e o cronograma de tudo que acontece na INR.
          </motion.p>
        </div>
      </section>

      {/* Programação semanal */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3"
          >
            Programação Semanal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10"
          >
            Atividades recorrentes ao longo da semana.
          </motion.p>

          <div className="space-y-3">
            {programacaoSemanal.map((dia, i) => (
              <motion.div
                key={dia.dia}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4 ${
                  dia.eventos.length > 0
                    ? "bg-card border-border"
                    : "bg-secondary/20 border-border/50"
                }`}
                data-testid={`row-dia-${dia.dia.toLowerCase()}`}
              >
                <div className="sm:w-28 shrink-0">
                  <span className={`font-serif font-bold text-base ${dia.eventos.length > 0 ? "text-foreground" : "text-muted-foreground"}`}>
                    {dia.dia}
                  </span>
                </div>
                {dia.eventos.length === 0 ? (
                  <p className="text-muted-foreground text-sm italic">Sem atividades programadas</p>
                ) : (
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
                    {dia.eventos.map((ev) => (
                      <div key={ev.nome} className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          <span className="text-primary text-sm font-semibold">{ev.hora}</span>
                        </div>
                        <p className="font-medium text-sm">{ev.nome}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground text-xs">{ev.local}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Especiais */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3"
          >
            Eventos Especiais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10"
          >
            Conferências, retiros, ações sociais e celebrações nos próximos meses.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventosEspeciais.map((ev, i) => (
              <motion.div
                key={ev.nome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3"
                data-testid={`card-evento-${i}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">{ev.data}</p>
                      <h3 className="font-serif font-bold text-base leading-snug">{ev.nome}</h3>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${categoriaCores[ev.categoria] || "bg-gray-100 text-gray-600"}`}>
                    {ev.categoria}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{ev.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {ev.local}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notificações */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Fique por dentro de tudo</h2>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Siga a INR nas redes sociais e entre no grupo de avisos do WhatsApp para não perder nenhum evento ou novidade.
          </p>
          <a
            href="https://wa.me/5519999999999?text=Ol%C3%A1!%20Quero%20entrar%20no%20grupo%20de%20avisos%20da%20INR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-green-700 transition-colors"
            data-testid="button-grupo-avisos"
          >
            Entrar no grupo de avisos
          </a>
        </div>
      </section>
    </div>
  );
}
