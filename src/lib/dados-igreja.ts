import type { NomeIcone } from "@/components/icones/icones";

/* ============================================================
   DADOS CANÔNICOS — INR (conteúdo aprovado do briefing/handoff)
   Não inventar nomes, contatos ou textos institucionais.
   ============================================================ */

export const WHATSAPP = {
  isaque: "5519994504004",
  secretaria: "551938698121",
} as const;

export function linkWhatsApp(numero: string, mensagem: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

export const REDES_SOCIAIS = {
  instagram: "https://instagram.com/nazarenorosolem",
  facebook: "https://facebook.com/inrosolem",
  youtube: "https://youtube.com/@nazarenorosolem",
  nazateen: "https://instagram.com/nazateenrosolem",
  jni: "https://instagram.com/jnisemlimites",
} as const;

export const IGREJA = {
  nome: "Igreja do Nazareno Rosolém",
  sigla: "INR",
  cidade: "Hortolândia · SP",
  endereco: "R. Ercílio Antônio Meira, 777 — Jardim Santa Izabel, Hortolândia/SP, 13185-220",
  enderecoCurto: "R. Ercílio Antônio Meira, 777 — Jd. Santa Izabel",
  telefone: "(19) 3869-8121",
  atendimento: "Segunda a sexta, das 9h às 17h",
  mapaEmbed:
    "https://www.google.com/maps?q=R.+Erc%C3%ADlio+Ant%C3%B4nio+Meira,+777+-+Jardim+Santa+Izabel,+Hortol%C3%A2ndia+-+SP,+13185-220&output=embed",
  mapaLink: "https://maps.google.com/?q=R.+Erc%C3%ADlio+Ant%C3%B4nio+Meira,+777,+Hortol%C3%A2ndia+SP",
} as const;

export const PIX = {
  chave: "09493935001799",
  tipo: "CNPJ",
  banco: "Sicredi",
  agencia: "2387",
  conta: "2171-7",
  favorecido: "Igreja do Nazareno Rosolém",
} as const;

/* ---------- Identidade Ministerial (documento oficial) ---------- */
export interface Valor {
  n: string;
  icone: NomeIcone;
  titulo: string;
  texto: string;
}

const VALORES: Valor[] = [
  { n: "01", icone: "cruz", titulo: "Cristo é o Nosso Centro", texto: "Jesus é o fundamento da nossa fé, da nossa mensagem e da nossa esperança. Tudo o que somos e fazemos aponta para Ele." },
  { n: "02", icone: "alvorada", titulo: "Novos Começos em Cristo", texto: "O evangelho tem poder para transformar vidas. Em Cristo, ninguém está perdido demais e sempre existe um novo começo." },
  { n: "03", icone: "chama", titulo: "Santidade que Transforma", texto: "Buscamos viver uma vida santa, guiada pelo Espírito Santo, refletindo o caráter de Cristo em atitudes e relacionamentos." },
  { n: "04", icone: "coracao", titulo: "Amor que Acolhe", texto: "Recebemos pessoas com graça, compaixão e respeito, acreditando que todos são amados por Deus." },
  { n: "05", icone: "livro", titulo: "Discipulado que Forma", texto: "Caminhamos juntos no crescimento espiritual, ajudando pessoas a conhecer, seguir e viver como Jesus." },
  { n: "06", icone: "seta", titulo: "Propósito que Envia", texto: "Cada pessoa foi criada por Deus com um propósito. Capacitamos e enviamos pessoas para servir e impactar o mundo." },
  { n: "07", icone: "globo", titulo: "Missão que Alcança", texto: "Somos chamados para levar esperança e o evangelho à nossa cidade, vivendo a missão de Deus onde estamos." },
];

export const IDENTIDADE = {
  slogan: "Um Lugar de Novos Começos",
  complemento: "Onde Histórias São Transformadas",
  versiculoRef: "2 Coríntios 5:17",
  versiculo:
    "Assim que, se alguém está em Cristo, nova criatura é; as coisas antigas já passaram; eis que se fizeram novas.",
  frase:
    "Somos uma igreja de novos começos, onde Deus transforma histórias e pessoas descobrem seu propósito em Cristo.",
  visao:
    "Ser uma igreja onde pessoas encontram um novo começo em Cristo, descobrem seu propósito e têm suas histórias transformadas pelo poder de Deus.",
  missao:
    "Amar pessoas, anunciar o evangelho de Jesus Cristo, restaurar vidas e formar discípulos que vivam o propósito de Deus e impactem nossa cidade.",
  valores: VALORES,
  /** Frases do DNA; o trecho em `destaque` aparece em branco sobre o fundo escuro. */
  dna: [
    { antes: "Somos uma igreja ", destaque: "centrada em Jesus", depois: "." },
    { antes: "Somos um lugar de ", destaque: "novos começos", depois: "." },
    { antes: "Somos uma família que ", destaque: "acolhe e cuida", depois: " de pessoas." },
    { antes: "Somos discípulos que ", destaque: "fazem discípulos", depois: "." },
    { antes: "Somos uma igreja ", destaque: "em missão", depois: ", levando esperança à cidade." },
  ],
  manifesto: [
    "Aqui pessoas encontram esperança.",
    "Aqui vidas são restauradas.",
    "Aqui histórias são transformadas.",
    "Aqui sempre existe um novo começo.",
  ],
  /** Declaração de Cultura da Igreja — texto aprovado, verbatim do documento oficial. */
  declaracaoCultura: [
    "Somos uma igreja centrada em Jesus e comprometida em viver o evangelho de forma verdadeira.",
    "Acreditamos que, em Cristo, sempre existe um novo começo. Por isso somos uma comunidade que acolhe pessoas com amor, graça e esperança.",
    "Valorizamos uma vida de santidade, buscando refletir o caráter de Cristo em tudo o que fazemos. Caminhamos juntos no discipulado, ajudando uns aos outros a crescer na fé e a viver o propósito de Deus.",
    "Cremos que Deus transforma histórias, restaura vidas e conduz cada pessoa a descobrir o propósito para o qual foi criada.",
    "Somos uma igreja que ama pessoas, serve com alegria e vive a missão de Deus.",
    "Nosso desejo é ver vidas sendo transformadas, famílias sendo restauradas e nossa cidade sendo alcançada pelo amor de Cristo.",
  ],
  declaracaoCulturaFinal: "Aqui celebramos novos começos.",
  manifestoIntro:
    "Cremos em um Deus que transforma vidas — que restaura o que foi quebrado, cura o que foi ferido e oferece novos começos para todos que se aproximam dEle. Ninguém está longe demais da graça de Deus. Amamos nossa cidade e desejamos ser luz onde há escuridão, esperança onde há dor e fé onde há dúvida.",
} as const;

/* ---------- Cultos da semana ---------- */
export interface ItemAgenda {
  dia: string;
  hora: string;
  nome: string;
  categoria: "culto" | "evento";
  ministerio: string;
}

export const PROXIMOS_CULTOS = [
  { dia: "Domingo", hora: "8h30", nome: "Culto da Manhã" },
  { dia: "Domingo", hora: "9h45", nome: "EBD · Escola Bíblica" },
  { dia: "Domingo", hora: "19h00", nome: "Culto da Noite" },
] as const;

export const AGENDA_SEMANAL: ItemAgenda[] = [
  { dia: "Domingo", hora: "8h30", nome: "Culto da Manhã", categoria: "culto", ministerio: "Geral" },
  { dia: "Domingo", hora: "9h45", nome: "EBD — Escola Bíblica Dominical", categoria: "culto", ministerio: "DNI" },
  { dia: "Domingo", hora: "19h00", nome: "Culto da Noite", categoria: "culto", ministerio: "Geral" },
  { dia: "Terça", hora: "19h30", nome: "Culto de Oração", categoria: "culto", ministerio: "Geral" },
  { dia: "Sábado", hora: "19h30", nome: "Culto de Jovens e Adolescentes", categoria: "culto", ministerio: "JNI" },
  { dia: "1ª Sexta", hora: "19h30", nome: "Culto de Homens", categoria: "evento", ministerio: "Homens" },
  { dia: "3ª Sexta", hora: "22h30", nome: "Vigília da Juventude", categoria: "evento", ministerio: "JNI" },
  { dia: "Últ. Sexta", hora: "19h30", nome: "Culto de Mulheres", categoria: "evento", ministerio: "Mulheres" },
];

/* ---------- Pastores ---------- */
export interface Pastor {
  nome: string;
  papel: string;
  bio: string;
  destaque?: boolean;
}

export const PASTORES: Pastor[] = [
  { nome: "Pr. Isaque", papel: "Pastor Presidente · Fundador", bio: "Fundou a INR e pastoreia a igreja desde 2001. Lidera com cuidado pastoral próximo de cada família.", destaque: true },
  { nome: "Pr. Adnan Attuy", papel: "Pastor Auxiliar", bio: "Coordena o ministério de Casais ao lado da esposa, Débora Attuy." },
  { nome: "Pr. Gustavo Fontes", papel: "Pastor Auxiliar", bio: "Apoio ao corpo pastoral e ensino da Palavra." },
  { nome: "Pr. Gabriel", papel: "Pastor Auxiliar", bio: "Atua no acompanhamento e discipulado da igreja." },
  { nome: "Pr. Rivaldo Sena", papel: "Pastor Auxiliar", bio: "Dedicado ao cuidado pastoral e à pregação." },
  { nome: "Pr. Jorge", papel: "Pastor Auxiliar", bio: "Apoio ministerial e suporte ao rebanho." },
];

/* ---------- Equipe / líderes de áreas ---------- */
export interface MembroEquipe {
  nome: string;
  area: string;
}

export const EQUIPE: MembroEquipe[] = [
  { nome: "Matheus Gabriel", area: "Secretaria" },
  { nome: "Sidmar", area: "Financeiro" },
  { nome: "Adriana de Paula", area: "Ministério Infantil" },
  { nome: "Marcos Cogo", area: "JNI — Juventude" },
  { nome: "Wesley Alves", area: "Louvor" },
  { nome: "Rafael Fonseca", area: "Mídia" },
  { nome: "Rones", area: "Ação Social" },
  { nome: "Diego Santos", area: "MNI — Missões" },
  { nome: "Pr. Adnan e Débora Attuy", area: "Casais" },
  { nome: "Carla", area: "Mulheres" },
  { nome: "Alan", area: "Homens" },
  { nome: "Liderança DNI", area: "Discipulado" },
];

/* ---------- Ministérios ---------- */
export interface Ministerio {
  id: string;
  icone: NomeIcone;
  nome: string;
  subtitulo: string;
  proposito: string;
  participar: string;
  instagram?: string;
}

export const MINISTERIOS: Ministerio[] = [
  { id: "jni", icone: "chama", nome: "JNI", subtitulo: "Juventude Nazarena", proposito: "Reunir e formar os jovens da igreja em comunhão, louvor e missão.", participar: "Sábados, 19h30, no culto de jovens.", instagram: REDES_SOCIAIS.jni },
  { id: "nazateen", icone: "faisca", nome: "NazaTeen", subtitulo: "Adolescentes", proposito: "Espaço dos adolescentes para crescer na fé com amizade e diversão.", participar: "Sábados, junto ao culto da juventude.", instagram: REDES_SOCIAIS.nazateen },
  { id: "infantil", icone: "pipa", nome: "Infantil", subtitulo: "Crianças", proposito: "Ensinar as crianças sobre Jesus de forma lúdica, segura e acolhedora.", participar: "Durante os cultos de domingo. Fale com Adriana de Paula." },
  { id: "louvor", icone: "musica", nome: "Louvor", subtitulo: "Adoração", proposito: "Conduzir a igreja à presença de Deus por meio da música.", participar: "Ensaios semanais. Fale com Wesley Alves." },
  { id: "midia", icone: "camera", nome: "Mídia", subtitulo: "Comunicação", proposito: "Transmissões, fotos e comunicação visual dos cultos e eventos.", participar: "Servir nas transmissões e redes. Fale com Rafael Fonseca." },
  { id: "recepcao", icone: "maos", nome: "Recepção", subtitulo: "Acolhida", proposito: "Receber cada pessoa com calor e atenção na chegada à igreja.", participar: "Escala de domingos. Fale na secretaria." },
  { id: "dni", icone: "livro", nome: "DNI", subtitulo: "Discipulado", proposito: "Acompanhar novos convertidos e firmar a fé dos membros.", participar: "EBD aos domingos, 9h45, e grupos de discipulado." },
  { id: "mni", icone: "globo", nome: "MNI", subtitulo: "Missões", proposito: "Mobilizar a igreja para missões locais e mundiais.", participar: "Participe das ações missionárias. Fale com Diego Santos." },
  { id: "casais", icone: "aliancas", nome: "Casais", subtitulo: "Famílias", proposito: "Fortalecer casamentos à luz da Palavra.", participar: "Encontros periódicos. Fale com Pr. Adnan e Débora." },
  { id: "homens", icone: "escudo", nome: "Homens", subtitulo: "Varões", proposito: "Comunhão e edificação dos homens da igreja.", participar: "1ª sexta do mês, 19h30. Fale com Alan." },
  { id: "mulheres", icone: "coracao", nome: "Mulheres", subtitulo: "MNI Mulheres", proposito: "Edificar e cuidar das mulheres em todas as fases da vida.", participar: "Última sexta do mês, 19h30. Fale com Carla." },
  { id: "social", icone: "presente", nome: "Ação Social", subtitulo: "Amor ao próximo", proposito: "Servir a comunidade do Rosolém com amor prático.", participar: "Campanhas e ações. Fale com Rones." },
];

/* ---------- Central de contatos ---------- */
export interface Contato {
  icone: NomeIcone;
  titulo: string;
  descricao: string;
  whatsapp: string;
  mensagem: string;
}

export const CONTATOS: Contato[] = [
  { icone: "documento", titulo: "Secretaria", descricao: "Documentos, agendamentos, certidões e dúvidas gerais.", whatsapp: WHATSAPP.secretaria, mensagem: "Olá! Falo com a secretaria da INR?" },
  { icone: "carteira", titulo: "Financeiro", descricao: "Contribuições, ofertas e prestação de contas.", whatsapp: WHATSAPP.secretaria, mensagem: "Olá! Preciso de ajuda com o financeiro da INR." },
  { icone: "pessoas", titulo: "Ministérios", descricao: "Quero servir ou saber mais sobre um ministério.", whatsapp: WHATSAPP.secretaria, mensagem: "Olá! Quero saber sobre os ministérios da INR." },
  { icone: "oracao", titulo: "Pedido de oração", descricao: "Compartilhe seu pedido — vamos orar com você.", whatsapp: WHATSAPP.isaque, mensagem: "Paz! Gostaria de um pedido de oração." },
  { icone: "conversa", titulo: "Aconselhamento pastoral", descricao: "Converse com um pastor em particular.", whatsapp: WHATSAPP.isaque, mensagem: "Paz! Gostaria de marcar um aconselhamento pastoral." },
  { icone: "calendario", titulo: "Eventos e espaços", descricao: "Reserva de salas e informações de eventos.", whatsapp: WHATSAPP.secretaria, mensagem: "Olá! Gostaria de informações sobre eventos/espaços." },
];

// TODO Fase 2: AVISOS (boletim), VIDEOS (cultos online), JORNADA (novo aqui)
// e SERVICOS (secretaria) existem no protótipo aprovado (design-handoff
// js/data.js) e entram quando essas páginas forem construídas.

/** URL de um recurso em `public/` respeitando o base path do GitHub Pages. */
export function urlPublica(caminho: string): string {
  return `${import.meta.env.BASE_URL}${caminho.replace(/^\//, "")}`;
}

export function usuarioInstagram(url: string): string {
  const match = url.match(/instagram\.com\/([^/?#]+)(?:\/|$)/i);
  return match ? `@${match[1].replace(/^@/, "")}` : "";
}
