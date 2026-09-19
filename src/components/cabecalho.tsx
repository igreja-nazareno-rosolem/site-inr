import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Botao } from "@/components/design-system";
import { Icone, GlifoWhatsApp } from "@/components/icones/icones";
import { IGREJA, WHATSAPP, linkWhatsApp, rotaInterna, urlPublica } from "@/lib/dados-igreja";

const LINKS_NAVEGACAO = [
  { caminho: "/", rotulo: "Início" },
  { caminho: "/sobre", rotulo: "Sobre" },
  { caminho: "/lideranca", rotulo: "Liderança" },
  { caminho: "/ministerios", rotulo: "Ministérios" },
  { caminho: "/agenda", rotulo: "Agenda" },
  { caminho: "/contato", rotulo: "Contato" },
  // TODO Fase 2: Cultos Online, Boletim e "Novo aqui?" entram aqui quando as páginas existirem
];

/** Barra de navegação com gradiente da marca + menu lateral no mobile. */
export function Cabecalho() {
  const [caminhoAtual] = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolada, setRolada] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolada(window.scrollY > 30);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava a rolagem do fundo enquanto o menu lateral está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <header className={cn("inr-nav", rolada && "inr-rolada")}>
        <div className="inr-wrap inr-nav-inner">
          <Link href={rotaInterna("/")} className="inr-marca" onClick={fecharMenu}>
            <img src={urlPublica("logo-inr-branco.png")} alt={`${IGREJA.sigla} — ${IGREJA.nome}`} />
          </Link>
          <nav className="inr-nav-links" aria-label="Navegação principal">
            {LINKS_NAVEGACAO.map((link) => (
              <Link
                key={link.caminho}
                href={rotaInterna(link.caminho)}
                className={cn(caminhoAtual === link.caminho && "inr-ativa")}
              >
                {link.rotulo}
              </Link>
            ))}
          </nav>
          <Botao asChild variante="gradiente" tamanho="pequeno" className="inr-nav-cta">
            <Link href={rotaInterna("/contribua")}>
              <Icone nome="coracao" /> Contribua
            </Link>
          </Botao>
          <button
            className="inr-nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(true)}
          >
            <Icone nome="menu" />
          </button>
        </div>
      </header>

      <div className={cn("inr-menu-lateral", menuAberto && "inr-aberto")} aria-hidden={!menuAberto}>
        <div className="inr-menu-topo">
          <Link href={rotaInterna("/")} className="inr-marca" onClick={fecharMenu}>
            <img src={urlPublica("logo-inr-branco.png")} alt={`${IGREJA.sigla} — ${IGREJA.nome}`} />
          </Link>
          <button className="inr-menu-fechar" aria-label="Fechar menu" onClick={fecharMenu}>
            <Icone nome="fechar" />
          </button>
        </div>
        <nav aria-label="Navegação do menu">
          {LINKS_NAVEGACAO.map((link) => (
            <Link
              key={link.caminho}
              href={rotaInterna(link.caminho)}
              className={cn(caminhoAtual === link.caminho && "inr-ativa")}
              onClick={fecharMenu}
            >
              {link.rotulo}
              <span>
                <Icone nome="seta_direita" />
              </span>
            </Link>
          ))}
        </nav>
        <div className="inr-menu-rodape">
          <Botao asChild variante="gradiente" bloco>
            <Link href={rotaInterna("/contribua")} onClick={fecharMenu}>
              <Icone nome="coracao" /> Contribua
            </Link>
          </Botao>
          <Botao asChild variante="whatsapp" bloco>
            <a
              href={linkWhatsApp(WHATSAPP.secretaria, "Olá! Vim pelo site da INR.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlifoWhatsApp style={{ width: 18, height: 18 }} /> WhatsApp
            </a>
          </Botao>
        </div>
      </div>
    </>
  );
}
