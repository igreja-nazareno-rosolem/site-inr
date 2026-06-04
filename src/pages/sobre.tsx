import { motion } from "framer-motion";
import { BookOpen, Heart, Target, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Sobre() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Nossa História
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-6"
          >
            Mais de três décadas de fé, amor e comunidade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Nascemos como uma pequena congregação com um grande sonho: ser um ponto de luz no bairro Rosolém. Hoje, somos uma família que cresce unida pela graça e pelo propósito de Cristo.
          </motion.p>
        </div>
      </section>

      {/* História timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 space-y-6">
              <motion.h2
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl font-bold"
              >
                Do início até hoje
              </motion.h2>
              <motion.p
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed"
              >
                A Igreja do Nazareno Rosolém foi fundada em 1991 por um pequeno grupo de famílias que se reunia em salas de estar com o coração cheio de esperança. O que começou como um culto doméstico se tornou uma das comunidades mais ativas do bairro.
              </motion.p>
              <motion.p
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed"
              >
                Ao longo dos anos, a INR cresceu não apenas em número, mas em profundidade. Expandimos nossos ministérios, construímos nosso templo próprio em 2003, e hoje servimos a centenas de famílias com programas de discipulado, ação social, e missões locais e internacionais.
              </motion.p>
              <motion.p
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed"
              >
                Nossa história é feita de pessoas — de histórias de transformação, de famílias restauradas, de jovens que encontraram propósito. E ela continua sendo escrita a cada domingo, cada grupo de casa, cada ato de serviço.
              </motion.p>
            </div>

            <div className="md:w-1/2 space-y-0">
              {[
                { year: "1991", title: "Fundação da igreja", desc: "Primeiro culto realizado na casa de uma família fundadora no Jd. Rosolém." },
                { year: "1998", title: "Primeiro templo", desc: "Construção do primeiro espaço próprio — fruto de muito sacrifício e fé coletiva." },
                { year: "2003", title: "Expansão ministerial", desc: "Lançamento dos ministérios JNI, infantil e louvor como departamentos estruturados." },
                { year: "2012", title: "Missões locais", desc: "Início do programa de ações sociais no bairro e plantio de células nas casas." },
                { year: "2024", title: "Presente e futuro", desc: "Seguimos crescendo em fé, relevância comunitária e impacto transformador." },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-6 pb-8 relative"
                  data-testid={`timeline-item-${item.year}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                      <span className="text-primary text-xs font-bold">{item.year.slice(2)}</span>
                    </div>
                    {i < 4 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">{item.year}</p>
                    <h4 className="font-serif font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visão, Missão, Propósito */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">O que nos move</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nossa identidade é moldada por três pilares que guiam tudo que fazemos como comunidade de fé.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                label: "Visão",
                title: "Ser uma comunidade de transformação",
                desc: "Enxergamos um bairro, uma cidade e um mundo transformados pelo amor prático e genuíno de Cristo — onde toda pessoa encontra pertencimento, dignidade e esperança.",
              },
              {
                icon: Heart,
                label: "Missão",
                title: "Fazer discípulos que fazem discípulos",
                desc: "Nossa missão é clara: evangelizar, ensinar, envolver e enviar. Cada membro é um missionário em potencial no seu lar, trabalho e vizinhança.",
              },
              {
                icon: BookOpen,
                label: "Propósito",
                title: "Glorificar a Deus em tudo",
                desc: "Culto, serviço, comunidade e missão — tudo o que fazemos é uma resposta de amor e gratidão àquele que nos criou e nos redimiu.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm"
                data-testid={`card-${item.label.toLowerCase()}`}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">{item.label}</p>
                <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
          >
            Nossos valores
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Não são apenas palavras — são compromissos que aparecem no dia a dia da nossa comunidade.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Amor genuíno", "Transparência", "Discipulado", "Missão", "Comunidade", "Oração", "Serviço", "Integridade"].map((valor, i) => (
              <motion.div
                key={valor}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary/50 rounded-xl py-5 px-4 font-medium text-sm"
                data-testid={`tag-valor-${i}`}
              >
                {valor}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
