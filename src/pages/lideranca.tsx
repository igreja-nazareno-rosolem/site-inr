import { motion } from "framer-motion";
import { Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

function Avatar({ nome, size = "lg" }: { nome: string; size?: "lg" | "md" }) {
  const initials = nome
    .split(" ")
    .filter((_, i) => i === 0 || i === nome.split(" ").length - 1)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const dim = size === "lg" ? "h-24 w-24" : "h-14 w-14";
  const text = size === "lg" ? "text-2xl" : "text-base";
  return (
    <div className={`${dim} rounded-full bg-primary/15 flex items-center justify-center border-2 border-primary/20 shrink-0`}>
      <span className={`font-serif font-bold text-primary ${text}`}>{initials}</span>
    </div>
  );
}

export default function Lideranca() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Liderança
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Servir é o maior cargo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Conheça as pessoas que dedicam sua vida ao cuidado e crescimento da nossa comunidade.
          </motion.p>
        </div>
      </section>

      {/* Pastor Senior */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Pastor Sênior
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-5">
              <Avatar nome="Pastor Isaque" size="lg" />
              <div>
                <h3 className="font-serif text-2xl font-bold">Pr. Pastor Isaque</h3>
                <p className="text-primary text-sm font-medium mt-1">Pastor Sênior, Fundador da Igreja Local</p>
                <p className="text-muted-foreground text-xs mt-1">Pastor desde 2001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipe Pastoral */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Equipe Pastoral
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          >
            Pastores dedicados ao ministério e cuidado espiritual.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pr. Adnan Attuy",
              "Pr. Gustavo Fontes",
              "Pr. Gabriel",
              "Pr. Rivaldo Sena",
            ].map((nome, i) => (
              <motion.div
                key={nome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4"
              >
                <Avatar nome={nome} size="md" />
                <h4 className="font-serif font-bold text-base">{nome}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão & Administração */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Gestão & Administração
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { funcao: "Secretaria", nome: "Matheus Gabriel" },
              { funcao: "Administração Geral", nome: "Rones Silva" },
              { funcao: "Tesouraria", nome: "Sidimar Oliveira" },
            ].map((item, i) => (
              <motion.div
                key={item.funcao}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <Avatar nome={item.nome} size="md" />
                <div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">{item.funcao}</p>
                  <h4 className="font-serif font-bold text-sm">{item.nome}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Junta Local */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-1 text-center"
          >
            Junta Local
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-12"
          >
            Diáconos e líderes responsáveis pelos departamentos ministeriais.
          </motion.p>

          {/* Ecônomos */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">Ecônomos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Fernando Martins",
                "Alan Santos",
                "Elton Souza",
                "Claudinei Nascimento",
              ].map((nome, i) => (
                <motion.div
                  key={nome}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <Avatar nome={nome} size="md" />
                  <h4 className="font-serif font-bold text-sm">{nome}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Departamentos Especiais */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">Departamentos Especiais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { funcao: "DNI - Discipulado", nome: "Dayana Barbosa" },
                { funcao: "JNI - Juventude", nome: "Marcos Cogo" },
                { funcao: "MNI - Missões", nome: "Diego Vieira" },
              ].map((item, i) => (
                <motion.div
                  key={item.funcao}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <Avatar nome={item.nome} size="md" />
                  <div>
                    <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">{item.funcao}</p>
                    <h4 className="font-serif font-bold text-sm">{item.nome}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mordomos */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">Mordomos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Valdemir Jorge",
                "Carla Nascimento",
                "Lena Amorim",
                "Valdirene Stegani",
              ].map((nome, i) => (
                <motion.div
                  key={nome}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <Avatar nome={nome} size="md" />
                  <h4 className="font-serif font-bold text-sm">{nome}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departamentos Gerais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Departamentos Gerais
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { funcao: "Mídia", nome: "Rafael Fonseca" },
              { funcao: "Louvor e Músicos", nome: "Wesley Alves" },
              { funcao: "Eleitas", nome: "Carla Nascimento" },
              { funcao: "Homens de Honra", nome: "Alan" },
              { funcao: "Família", nome: "Pr. Adnan e Debora" },
              { funcao: "Infantil", nome: "Adriana de Paula" },
              { funcao: "Recepção", nome: "Michele" },
              { funcao: "Ministério Compaixão", nome: "Pr. Adnan e Debora" },
              { funcao: "Casa da Esperança", nome: "Pr. Gabriel" },
              { funcao: "Dança", nome: "Gabrielly Desanti" },
            ].map((item, i) => (
              <motion.div
                key={item.funcao}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4"
              >
                <Avatar nome={item.nome} size="md" />
                <div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">{item.funcao}</p>
                  <h4 className="font-serif font-bold text-sm">{item.nome}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Quer ser parte da equipe?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Temos diferentes formas de servir na INR — cada pessoa tem dons únicos que a comunidade precisa. Converse com a liderança e descubra onde você pode contribuir.
          </p>
          <a
            href="https://wa.me/5519994504004?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20posso%20servir%20na%20INR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Quero servir
          </a>
        </div>
      </section>
    </div>
  );
}
