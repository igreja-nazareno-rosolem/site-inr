import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Shield, TrendingUp, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const distribuicao = [
  { name: "Missões", value: 20, cor: "#2563eb", descricao: "Apoio a missionários locais e internacionais e projetos evangelísticos." },
  { name: "Ministérios", value: 18, cor: "#7c3aed", descricao: "Recursos para JNI, Infantil, Louvor, Discipulado e demais departamentos." },
  { name: "Manutenção", value: 16, cor: "#4f46e5", descricao: "Conservação e melhorias no espaço físico da igreja." },
  { name: "Custos Operacionais", value: 15, cor: "#6d28d9", descricao: "Contas de energia, água, internet, materiais de escritório e afins." },
  { name: "Ações Sociais", value: 14, cor: "#0ea5e9", descricao: "Cestas básicas, bazares, atendimento a famílias e parceria com entidades." },
  { name: "Eventos", value: 10, cor: "#a855f7", descricao: "Conferências, retiros, celebrações e eventos comunitários." },
  { name: "Estrutura", value: 7, cor: "#38bdf8", descricao: "Equipamentos, mobiliário e infraestrutura de som e mídia." },
];

const RADIAN = Math.PI / 180;

function renderCustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: {
  cx?: number; cy?: number; midAngle?: number;
  innerRadius?: number; outerRadius?: number; percent?: number;
}) {
  // recharts v3 types these geometry fields as optional on the label render prop.
  if (
    cx == null || cy == null || midAngle == null ||
    innerRadius == null || outerRadius == null || percent == null
  ) return null;
  if (percent < 0.07) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

const trimestres = [
  { periodo: "Jan — Mar 2025", entradas: "R$ 48.200", saidas: "R$ 43.100", saldo: "+R$ 5.100" },
  { periodo: "Out — Dez 2024", entradas: "R$ 52.600", saidas: "R$ 49.800", saldo: "+R$ 2.800" },
  { periodo: "Jul — Set 2024", entradas: "R$ 44.900", saidas: "R$ 41.500", saldo: "+R$ 3.400" },
];

export default function Transparencia() {
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
            Transparência Financeira
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Seus recursos, bem administrados
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed"
          >
            Acreditamos que confiança se constrói com clareza. Aqui você acompanha como os recursos da INR são aplicados a serviço do Reino.
          </motion.p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, titulo: "Prestação de contas", desc: "Relatórios aprovados em assembleia de membros a cada trimestre." },
              { icon: TrendingUp, titulo: "Planejamento responsável", desc: "Orçamento anual votado pelos membros e executado com critério." },
              { icon: Heart, titulo: "Propósito claro", desc: "Cada centavo investido no crescimento das pessoas e da comunidade." },
            ].map((item, i) => (
              <motion.div
                key={item.titulo}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 items-start p-6 rounded-2xl bg-card border border-border"
                data-testid={`card-valor-${i}`}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-1">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gráfico */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3 text-center"
          >
            Distribuição de recursos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          >
            Como os recursos arrecadados são alocados entre as áreas da igreja (referência anual 2024).
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 h-80"
              data-testid="chart-distribuicao"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribuicao}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={130}
                    dataKey="value"
                  >
                    {distribuicao.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Percentual"]}
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "13px" }}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={10}
                    formatter={(value) => <span style={{ fontSize: "12px", color: "#64748b" }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Lista */}
            <div className="w-full lg:w-1/2 space-y-3">
              {distribuicao.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                  data-testid={`row-distribuicao-${i}`}
                >
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.cor}18` }}>
                    <span className="font-bold text-sm" style={{ color: item.cor }}>{item.value}%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resumo trimestral */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold mb-3"
          >
            Resumo Trimestral
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10"
          >
            Balanço simplificado de entradas e saídas por trimestre.
          </motion.p>

          <div className="space-y-4">
            {trimestres.map((t, i) => (
              <motion.div
                key={t.periodo}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center"
                data-testid={`row-trimestre-${i}`}
              >
                <div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">Período</p>
                  <p className="font-serif font-bold text-sm">{t.periodo}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">Entradas</p>
                  <p className="font-semibold text-green-600 text-sm">{t.entradas}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">Saídas</p>
                  <p className="font-semibold text-foreground text-sm">{t.saidas}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-1">Saldo</p>
                  <p className="font-semibold text-primary text-sm">{t.saldo}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs mt-6"
          >
            * Valores aproximados. Relatórios detalhados disponíveis na secretaria para membros da igreja.
          </motion.p>
        </div>
      </section>

      {/* Dúvidas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Tem alguma dúvida financeira?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Nossa equipe financeira está disponível para esclarecer qualquer questão sobre o uso dos recursos da INR.
          </p>
          <a
            href="https://wa.me/5519991110002?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20finan%C3%A7as%20da%20INR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-green-700 transition-colors"
            data-testid="button-whatsapp-financeiro"
          >
            Falar com o Financeiro
          </a>
        </div>
      </section>
    </div>
  );
}
