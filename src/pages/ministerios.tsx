import { motion } from "framer-motion";
import { Music, Baby, UserCheck, Monitor, BookMarked, Heart, Star, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const ministerios = [
  {
    icon: Star,
    nome: "JNI — Juventude Nazarena",
    descricao:
      "O ministério jovem da INR é um espaço vibrante para jovens de 13 a 35 anos. Encontros semanais, retiros, missões e um ambiente seguro para crescer na fé e nas amizades.",
    quando: "Sextas-feiras, 19h30",
    como: "Apareça numa sexta ou fale com Joel Santos pelo WhatsApp.",
    cor: "bg-amber-500/10 text-amber-600",
    borda: "border-amber-200",
  },
  {
    icon: Baby,
    nome: "Ministério Infantil",
    descricao:
      "Crianças de 0 a 12 anos têm um espaço dedicado com ensino bíblico adaptado, atividades criativas e equipe capacitada. Durante os cultos, nossas crianças aprendem de forma lúdica e segura.",
    quando: "Domingos, 18h30 (paralelo ao culto)",
    como: "Traga seus filhos no domingo — a recepção vai orientar você.",
    cor: "bg-rose-500/10 text-rose-600",
    borda: "border-rose-200",
  },
  {
    icon: Music,
    nome: "Ministério de Louvor",
    descricao:
      "Nossa equipe de adoração conduz a igreja em momentos de encontro real com Deus. Músicos, cantores e técnicos de som trabalham juntos para criar uma experiência de culto genuíno.",
    quando: "Ensaios: Terças-feiras, 19h",
    como: "Tem talento musical ou técnico? Fale com Camila Ferreira.",
    cor: "bg-purple-500/10 text-purple-600",
    borda: "border-purple-200",
  },
  {
    icon: UserCheck,
    nome: "Ministério de Recepção",
    descricao:
      "O primeiro sorriso que você vê ao entrar na INR. Nossa equipe de recepção acolhe visitantes, orienta membros e cria uma atmosfera de bem-vindo que começa antes do culto.",
    quando: "Domingos, a partir de 18h",
    como: "Ama pessoas e quer ser o rosto da hospitalidade? Fale com a liderança.",
    cor: "bg-teal-500/10 text-teal-600",
    borda: "border-teal-200",
  },
  {
    icon: Monitor,
    nome: "Ministério de Mídia",
    descricao:
      "Som, imagem, transmissão ao vivo, design e redes sociais. Nossa equipe de mídia garante que a mensagem da INR chegue longe — dentro e fora do templo.",
    quando: "Atua em todos os cultos e eventos",
    como: "Tem habilidades em tecnologia, design ou audiovisual? Fale com Thiago Rodrigues.",
    cor: "bg-blue-500/10 text-blue-600",
    borda: "border-blue-200",
  },
  {
    icon: BookMarked,
    nome: "Discipulado",
    descricao:
      "Crescimento espiritual intencional e relacional. Grupos de discipulado, estudo bíblico e acompanhamento de novos membros são o coração da jornada de fé na INR.",
    quando: "Grupos nos lares: diversas noites da semana",
    como: "Quer crescer ou liderar um grupo? Fale com o Eld. Roberto Alves.",
    cor: "bg-green-500/10 text-green-600",
    borda: "border-green-200",
  },
  {
    icon: Heart,
    nome: "Ação Social",
    descricao:
      "Fé que se move. Distribuição de alimentos, apoio a famílias vulneráveis, bazares beneficentes e parceria com entidades locais. Servimos o bairro de forma prática e contínua.",
    quando: "Ações mensais e pontuais",
    como: "Quer ajudar ou sabe de uma necessidade no bairro? Fale com Pra. Patrícia Lima.",
    cor: "bg-orange-500/10 text-orange-600",
    borda: "border-orange-200",
  },
  {
    icon: Star,
    nome: "Pequenos Grupos",
    descricao:
      "Comunidade acontece nos lares. Nossos grupos de casa reúnem famílias e amigos para partilha, oração e estudo bíblico em um ambiente íntimo e acolhedor durante a semana.",
    quando: "Diversas noites — consulte a secretaria",
    como: "Quer entrar num grupo ou começar um na sua casa? Fale com a secretaria.",
    cor: "bg-indigo-500/10 text-indigo-600",
    borda: "border-indigo-200",
  },
];

export default function Ministerios() {
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
            Ministérios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cada dom tem um lugar aqui
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Desde a criança pequena até o adulto experiente — há um ministério esperando pelo que você tem a oferecer.
          </motion.p>
        </div>
      </section>

      {/* Grade de ministérios */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ministerios.map((m, i) => (
              <motion.div
                key={m.nome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`bg-card border ${m.borda} rounded-2xl p-8 flex flex-col gap-4`}
                data-testid={`card-ministerio-${i}`}
              >
                <div className={`h-12 w-12 rounded-xl ${m.cor} flex items-center justify-center`}>
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold">{m.nome}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{m.descricao}</p>
                <div className="border-t border-border pt-4 space-y-2 text-sm">
                  <p className="text-foreground/80">
                    <span className="font-semibold">Quando:</span> {m.quando}
                  </p>
                  <p className="text-muted-foreground">{m.como}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ainda não sabe por onde começar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 mb-8 leading-relaxed"
          >
            Não precisa decidir agora. Venha a um culto, conheça as pessoas e deixe a comunidade revelar onde você se encaixa naturalmente.
          </motion.p>
          <a
            href="https://wa.me/5519999999999?text=Oi!%20Gostaria%20de%20conhecer%20os%20minist%C3%A9rios%20da%20INR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
            data-testid="button-fale-conosco-ministerios"
          >
            Fale conosco <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
