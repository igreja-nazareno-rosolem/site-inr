import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/site-inr/logo-inr.jpg" alt="INR" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-serif font-bold text-2xl">INR</span>
          </Link>
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            Uma comunidade acolhedora no bairro Rosolém, dedicada a viver e compartilhar o amor autêntico.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-muted-foreground/80 hover:text-white transition-colors" data-testid="link-social-ig">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground/80 hover:text-white transition-colors" data-testid="link-social-fb">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground/80 hover:text-white transition-colors" data-testid="link-social-yt">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-white">Navegação</h4>
          <ul className="space-y-3 text-sm text-muted-foreground/80">
            <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-primary transition-colors">Nossa História</Link></li>
            <li><Link href="/lideranca" className="hover:text-primary transition-colors">Liderança</Link></li>
            <li><Link href="/ministerios" className="hover:text-primary transition-colors">Ministérios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-white">Links Úteis</h4>
          <ul className="space-y-3 text-sm text-muted-foreground/80">
            <li><Link href="/agenda" className="hover:text-primary transition-colors">Agenda Semanal</Link></li>
            <li><Link href="/transparencia" className="hover:text-primary transition-colors">Transparência</Link></li>
            <li><Link href="/contatos" className="hover:text-primary transition-colors">Pedido de Oração</Link></li>
            <li><Link href="/contatos" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-white">Visite-nos</h4>
          <ul className="space-y-4 text-sm text-muted-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Rua Placeholder, 123<br/>Jd. Rosolém, Campinas - SP<br/>13000-000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>(19) 99999-9999</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contato@inr.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground/60">
        &copy; {new Date().getFullYear()} Igreja do Nazareno Rosolém. Todos os direitos reservados.
      </div>
    </footer>
  );
}
