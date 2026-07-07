import { motion } from "framer-motion";
import { BookOpen, Heart, Target, Users, MapPin } from "lucide-react";
import { Instagram, Facebook, Youtube } from "@/components/icons/social-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Sobre() {
  const values = [
    {
      title: "Cristo é o nosso centro",
      desc: "Jesus é o fundamento da nossa fé, da nossa mensagem e da nossa esperança. Tudo o que somos e fazemos aponta para Ele.",
    },
    {
      title: "Novos começos em Cristo",
      desc: "Acreditamos que o evangelho tem poder para transformar vidas. Em Cristo, ninguém está perdido demais e sempre existe um novo começo.",
    },
    {
      title: "Santidade que transforma",
      desc: "Buscamos viver uma vida santa, guiada pelo Espírito Santo, refletindo o caráter de Cristo em nossas atitudes e relacionamentos.",
    },
    {
      title: "Amor que acolhe",
      desc: "Somos uma igreja que recebe pessoas com graça, compaixão e respeito, acreditando que todos são amados por Deus.",
    },
    {
      title: "Discipulado que forma",
      desc: "Caminhamos juntos no crescimento espiritual, ajudando pessoas a conhecer, seguir e viver como Jesus.",
    },
    {
      title: "Propósito que envia",
      desc: "Acreditamos que cada pessoa foi criada por Deus com um propósito. Por isso capacitamos e enviamos pessoas para servir e impactar o mundo.",
    },
    {
      title: "Missão que alcança",
      desc: "Somos chamados para levar esperança e o evangelho à nossa cidade, vivendo a missão de Deus onde estamos.",
    },
  ];

  const dnaStatements = [
    "Centraremos nossa vida em Jesus.",
    "Somos um lugar de novos começos.",
    "Somos uma família que acolhe e cuida de pessoas.",
    "Somos discípulos que fazem discípulos.",
    "Somos uma igreja em missão, levando esperança à cidade.",
  ];

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
            Nossa Identidade
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-6"
          >
            Um Lugar de Novos Começos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-white/70 leading-relaxed mb-4"
          >
            Onde Histórias São Transformadas
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Somos uma igreja de novos começos, onde Deus transforma histórias e pessoas descobrem seu propósito em Cristo.
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm md:text-base text-white/90"
          >
            “Assim que, se alguém está em Cristo, nova criatura é; as coisas antigas já passaram; eis que se fizeram novas.” — 2 Coríntios 5:17
          </motion.blockquote>
        </div>
      </section>

      {/* Visão e Missão */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">O que nos move</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nossa identidade é formada por uma visão clara, uma missão profunda e uma cultura que aponta sempre para Jesus.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Visão",
                title: "Um novo começo em Cristo",
                desc: "Ser uma igreja onde pessoas encontram um novo começo em Cristo, descobrem seu propósito e têm suas histórias transformadas pelo poder de Deus.",
              },
              {
                icon: Heart,
                label: "Missão",
                title: "Amar, anunciar e restaurar",
                desc: "Amar pessoas, anunciar o evangelho de Jesus Cristo, restaurar vidas e formar discípulos que vivam o propósito de Deus e impactem nossa cidade.",
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
        <div className="container mx-auto px-4 max-w-5xl text-center">
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
            Esses princípios orientam a forma como vivemos, acolhemos e servimos uns aos outros.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {values.map((valor, i) => (
              <motion.div
                key={valor.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary/50 rounded-2xl p-6 border border-border"
              >
                <h3 className="font-serif text-lg font-bold mb-2">{valor.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Declaração de cultura da igreja</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos uma igreja centrada em Jesus e comprometida em viver o evangelho de forma verdadeira. Acreditamos que, em Cristo, sempre existe um novo começo. Por isso somos uma comunidade que acolhe pessoas com amor, graça e esperança.
              </p>
              <p>
                Valorizamos uma vida de santidade, buscando refletir o caráter de Cristo em tudo o que fazemos. Caminhamos juntos no discipulado, ajudando uns aos outros a crescer na fé e a viver o propósito de Deus.
              </p>
              <p>
                Cremos que Deus transforma histórias, restaura vidas e conduz cada pessoa a descobrir o propósito para o qual foi criada. Somos uma igreja que ama pessoas, serve com alegria e vive a missão de Deus.
              </p>
              <p>
                Nosso desejo é ver vidas sendo transformadas, famílias sendo restauradas e nossa cidade sendo alcançada pelo amor de Cristo. Aqui celebramos novos começos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Manifesto da igreja</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Cremos em um Deus que transforma vidas.</p>
              <p>Um Deus que restaura o que foi quebrado, cura o que foi ferido e oferece novos começos para todos que se aproximam dEle.</p>
              <p>Somos uma igreja que acredita no poder do evangelho.</p>
              <p>Acreditamos que ninguém está longe demais da graça de Deus.</p>
              <p>Acreditamos que toda história pode ser transformada.</p>
              <p>Acreditamos que cada pessoa foi criada por Deus com um propósito.</p>
              <p>Somos uma comunidade que acolhe, discipula e caminha junto.</p>
              <p>Buscamos viver uma vida de santidade, refletindo o amor e o caráter de Cristo em nossas atitudes.</p>
              <p>Vivemos para anunciar a esperança do evangelho e para ver vidas sendo restauradas.</p>
              <p>Amamos nossa cidade e desejamos ser luz onde há escuridão, esperança onde há dor e fé onde há dúvida.</p>
              <p>Somos uma igreja que abre as portas, estende as mãos e aponta sempre para Jesus.</p>
              <p>Aqui pessoas encontram esperança. Aqui vidas são restauradas. Aqui histórias são transformadas. Aqui sempre existe <strong>um novo começo</strong>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm"
          >
            <h4 className="font-serif text-xl font-bold mb-6">DNA da igreja</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {dnaStatements.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-2xl border border-border/70 bg-secondary/40 p-5 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociais e Contatos */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Conecte-se Conosco
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl font-bold">Redes Sociais</h3>

              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/nazarenorosolem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instagram INR</p>
                    <p className="text-muted-foreground text-xs">@nazarenorosolem</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/inrosolem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Facebook</p>
                    <p className="text-muted-foreground text-xs">@inrosolem</p>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@nazarenorosolem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Youtube className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">YouTube</p>
                    <p className="text-muted-foreground text-xs">@nazarenorosolem</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/nazateenrosolem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instagram NazaTeen</p>
                    <p className="text-muted-foreground text-xs">@nazateenrosolem</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/jnisemlimites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instagram JNI</p>
                    <p className="text-muted-foreground text-xs">@jnisemlimites</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Informações Práticas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl font-bold">Informações Práticas</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Localização</p>
                  <p className="font-semibold text-sm mb-2">R. Ercílio Antônio Meira, 777</p>
                  <p className="text-muted-foreground text-xs mb-3">Jardim Santa Izabel, Hortolândia - SP, 13185-220</p>
                  <a
                    href="https://www.google.com/maps/place/Igreja+Do+Nazareno+Rosolem/@-22.8992459,-47.1754609,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8b84d7de5d9e3:0xda4ebad7299672e!8m2!3d-22.8992459!4d-47.172886!16s%2Fg%2F11c1l79jh9?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-medium hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">PIX (Contribuição)</p>
                  <p className="font-semibold text-sm mb-2">CNPJ Sicredi</p>
                  <p className="text-muted-foreground text-xs font-mono mb-3 break-all">09493935001799</p>
                  <a
                    href="https://nubank.com.br/pix/00020126360014BR.GOV.BCB.PIX0114094939350017995204000053039865802BR5901N6001C62070503***63041A8E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-4 py-2 text-xs font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                  >
                    Copiar PIX
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Contato</p>
                  <p className="text-muted-foreground text-xs">Email: a definir</p>
                  <p className="text-muted-foreground text-xs">Telefone: a definir</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
