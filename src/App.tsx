import { useEffect, type ReactNode } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import { WhatsAppFlutuante } from "@/components/design-system";
import { WHATSAPP } from "@/lib/dados-igreja";
import Inicio from "@/pages/inicio";
import Sobre from "@/pages/sobre";
import Lideranca from "@/pages/lideranca";
import Ministerios from "@/pages/ministerios";
import Agenda from "@/pages/agenda";
import Contato from "@/pages/contato";
import Contribua from "@/pages/contribua";
import NaoEncontrada from "@/pages/nao-encontrada";

// Mantido para a Fase 2 (agenda dinâmica, boletim e outros dados remotos)
const clienteQuery = new QueryClient();

function Estrutura({ children }: { children: ReactNode }) {
  const [caminhoAtual] = useLocation();

  // Volta ao topo e reinicia a animação de entrada a cada troca de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caminhoAtual]);

  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <main key={caminhoAtual} className="flex-1 inr-page-anim">
        {children}
      </main>
      <Rodape />
      <WhatsAppFlutuante telefone={WHATSAPP.secretaria} />
    </div>
  );
}

function Rotas() {
  return (
    <Estrutura>
      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/lideranca" component={Lideranca} />
        <Route path="/ministerios" component={Ministerios} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/contato" component={Contato} />
        <Route path="/contribua" component={Contribua} />
        {/* TODO Fase 2: /cultos-online, /boletim, /novo, /ministerio/:id, /secretaria */}
        <Route component={NaoEncontrada} />
      </Switch>
    </Estrutura>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <QueryClientProvider client={clienteQuery}>
      <WouterRouter base={base || "/"}>
        <Rotas />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
