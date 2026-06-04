import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const contatos = [
  {
    area: "Secretaria",
    descricao: "Informações gerais, documentos e cadastro de membros.",
    whatsapp: "5519991110001",
    mensagem: "Olá! Preciso falar com a secretaria da INR.",
    cor: "bg-blue-50 border-blue-200",
    iconCor: "bg-blue-100 text-blue-600",
  },
  {
    area: "Financeiro",
    descricao: "Dízimos, ofertas, recibos e transparência financeira.",
    whatsapp: "5519991110002",
    mensagem: "Olá! Tenho uma dúvida sobre o financeiro da INR.",
    cor: "bg-green-50 border-green-200",
    iconCor: "bg-green-100 text-green-600",
  },
  {
    area: "Ministérios",
    descricao: "Informações sobre ministérios, como participar e escalas.",
    whatsapp: "5519991110003",
    mensagem: "Olá! Quero saber mais sobre os ministérios da INR.",
    cor: "bg-purple-50 border-purple-200",
    iconCor: "bg-purple-100 text-purple-600",
  },
  {
    area: "Pedido de Oração",
    descricao: "Envie um pedido de oração — nossa equipe intercede por você.",
    whatsapp: "5519991110004",
    mensagem: "Olá! Gostaria de enviar um pedido de oração.",
    cor: "bg-rose-50 border-rose-200",
    iconCor: "bg-rose-100 text-rose-600",
  },
  {
    area: "Aconselhamento",
    descricao: "Acompanhamento pastoral com confidencialidade e cuidado.",
    whatsapp: "5519991110005",
    mensagem: "Olá! Gostaria de agendar um aconselhamento pastoral.",
    cor: "bg-amber-50 border-amber-200",
    iconCor: "bg-amber-100 text-amber-600",
  },
  {
    area: "Eventos",
    descricao: "Informações, inscrições e organização de eventos da INR.",
    whatsapp: "5519991110006",
    mensagem: "Olá! Tenho uma dúvida sobre os eventos da INR.",
    cor: "bg-teal-50 border-teal-200",
    iconCor: "bg-teal-100 text-teal-600",
  },
];

export default function Contatos() {
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
            Contatos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Estamos aqui para você
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Fale diretamente com quem pode ajudar — cada área tem um canal exclusivo para atender você com agilidade e cuidado.
          </motion.p>
        </div>
      </section>

      {/* Central de Contatos */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3 text-center"
          >
            Central de Atendimento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto"
          >
            Escolha a área de interesse e inicie uma conversa direta pelo WhatsApp.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contatos.map((c, i) => (
              <motion.div
                key={c.area}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`border rounded-2xl p-6 flex flex-col gap-4 ${c.cor}`}
                data-testid={`card-contato-${c.area.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${c.iconCor}`}>
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">{c.area}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.descricao}</p>
                </div>
                <a
                  href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.mensagem)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-green-700 transition-colors w-fit"
                  data-testid={`button-whatsapp-${c.area.toLowerCase().replace(/ /g, "-")}`}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações gerais */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Endereço */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold">Onde encontrar a INR</h2>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Endereço</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rua das Acácias, 450<br />
                    Jardim Rosolém<br />
                    Campinas — SP, 13000-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Telefone geral</p>
                  <a
                    href="tel:+5519999999999"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    data-testid="link-telefone"
                  >
                    (19) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">E-mail</p>
                  <a
                    href="mailto:contato@inr.com.br"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    contato@inr.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Secretaria — horário de atendimento</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Terças e Quintas: 9h — 12h<br />
                    Domingos: 18h — após o culto
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mapa placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border bg-secondary/50 flex items-center justify-center min-h-64"
            >
              <div className="text-center p-10">
                <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="font-serif font-bold text-lg text-foreground/60 mb-2">Jardim Rosolém</p>
                <p className="text-muted-foreground text-sm">Rua das Acácias, 450 — Campinas, SP</p>
                <a
                  href="https://maps.google.com/?q=Jardim+Rosolém,+Campinas,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  data-testid="link-google-maps"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
