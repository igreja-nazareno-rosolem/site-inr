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
            Entre em contato conosco para informações, acompanhamento pastoral ou qualquer dúvida.
          </motion.p>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3 text-center"
          >
            Pr. Isaque
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-10"
          >
            Pastor Sênior — Fundador da Igreja Local
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">WhatsApp</p>
                <a
                  href="tel:+5519994504004"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  +55 19 99450-4004
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informações gerais */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold">Informações Gerais</h2>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Endereço</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    R. Ercílio Antônio Meira, 777<br />
                    Jardim Santa Izabel<br />
                    Hortolândia — SP, 13185-220
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Atendimento Pastoral</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Terça a Sexta: 9h — 17h
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border bg-secondary/50 flex items-center justify-center min-h-64"
            >
              <div className="text-center p-10">
                <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="font-serif font-bold text-lg text-foreground/60 mb-2">Jardim Santa Izabel</p>
                <p className="text-muted-foreground text-sm mb-4">Hortolândia, SP</p>
                <a
                  href="https://www.google.com/maps/place/Igreja+Do+Nazareno+Rosolem/@-22.8992459,-47.1754609,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8b84d7de5d9e3:0xda4ebad7299672e!8m2!3d-22.8992459!4d-47.172886!16s%2Fg%2F11c1l79jh9?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
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
