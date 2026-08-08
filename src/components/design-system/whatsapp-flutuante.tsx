import * as React from "react";
import { cn } from "@/lib/utils";
import { linkWhatsApp } from "@/lib/dados-igreja";

export interface WhatsAppFlutuanteProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Telefone em formato internacional sem símbolos, ex.: "551938698121". */
  telefone: string;
  /** Mensagem pré-preenchida; codificada na URL automaticamente. */
  mensagem?: string;
}

const MENSAGEM_PADRAO = "Olá! Vim pelo site da INR e gostaria de uma informação.";

/** Botão flutuante fixo do WhatsApp (canto inferior direito). */
export const WhatsAppFlutuante = React.forwardRef<HTMLAnchorElement, WhatsAppFlutuanteProps>(
  ({ className, telefone, mensagem = MENSAGEM_PADRAO, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("inr-wa-float", className)}
      href={linkWhatsApp(telefone, mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      {...props}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7-1.8a12.9 12.9 0 0 0 5 1c6.6 0 12-5.3 12-11.9S22.6 3 16 3Zm0 21.7c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3a9.6 9.6 0 0 1-1.5-5.1c0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8-4.5 9.7-10 9.7Zm5.5-7.3c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8 8 0 0 1-3.9-3.4c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    </a>
  )
);
WhatsAppFlutuante.displayName = "InrWhatsAppFlutuante";
