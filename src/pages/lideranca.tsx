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

const pastores = [
  {
    nome: "Pr. Carlos Eduardo Mendes",
    funcao: "Pastor Titular",
    bio: "Ordenado pela Igreja do Nazareno há mais de 20 anos, Pr. Carlos lidera a INR com visão pastoral e coração missionário. Formado em Teologia pelo Seminário Nazareno, é apaixonado por discipulado e família.",
    anos: "Pastor desde 2008",
  },
  {
    nome: "Pra. Renata Mendes",
    funcao: "Pastora Auxiliar — Família e Mulheres",
    bio: "Pra. Renata coordena os ministérios voltados à família e às mulheres da INR. Com formação em Psicologia e Teologia, ela combina cuidado prático e espiritual em tudo que faz.",
    anos: "Na liderança desde 2010",
  },
];

const lideres = [
  { nome: "Diac. Marcos Oliveira", funcao: "Diácono — Administração e Finanças", area: "Financeiro" },
  { nome: "Diac. Fernanda Costa", funcao: "Diaconisa — Ministério Infantil", area: "Infantil" },
  { nome: "Eld. Roberto Alves", funcao: "Presbítero — Discipulado", area: "Discipulado" },
  { nome: "Eld. Patrícia Lima", funcao: "Presbítera — Ações Sociais", area: "Social" },
  { nome: "Joel Santos", funcao: "Líder JNI — Juventude Nazarena", area: "JNI" },
  { nome: "Camila Ferreira", funcao: "Líder de Louvor e Adoração", area: "Louvor" },
  { nome: "Thiago Rodrigues", funcao: "Coordenador de Mídia", area: "Mídia" },
  { nome: "Ana Paula Silva", funcao: "Secretária Geral", area: "Secretaria" },
];

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

      {/* Pastores */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Pastores
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          >
            Liderança espiritual com compromisso pastoral e amor pela comunidade.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastores.map((p, i) => (
              <motion.div
                key={p.nome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
                data-testid={`card-pastor-${i}`}
              >
                <div className="flex items-center gap-5">
                  <Avatar nome={p.nome} size="lg" />
                  <div>
                    <h3 className="font-serif text-xl font-bold">{p.nome}</h3>
                    <p className="text-primary text-sm font-medium mt-1">{p.funcao}</p>
                    <p className="text-muted-foreground text-xs mt-1">{p.anos}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-5">
                  {p.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Líderes */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Equipe de Liderança
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          >
            Diáconos, presbíteros e líderes ministeriais que formam o time de serviço da INR.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {lideres.map((l, i) => (
              <motion.div
                key={l.nome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4"
                data-testid={`card-lider-${i}`}
              >
                <Avatar nome={l.nome} size="md" />
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{l.area}</span>
                  <h4 className="font-serif font-bold text-sm leading-snug">{l.nome}</h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-snug">{l.funcao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Quer ser parte da equipe?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Temos diferentes formas de servir na INR — cada pessoa tem dons únicos que a comunidade precisa. Converse com a liderança e descubra onde você pode contribuir.
          </p>
          <a
            href="https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20posso%20servir%20na%20INR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity"
            data-testid="button-quero-servir"
          >
            Quero servir
          </a>
        </div>
      </section>
    </div>
  );
}
