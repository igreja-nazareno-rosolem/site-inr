import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Liderança", path: "/lideranca" },
    { label: "Ministérios", path: "/ministerios" },
    { label: "Agenda", path: "/agenda" },
    { label: "Transparência", path: "/transparencia" },
    { label: "Contatos", path: "/contatos" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <img src="/logo-inr.jpg" alt="INR" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-serif font-bold text-xl text-primary">INR</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.path ? "text-primary" : "text-foreground/80"
              }`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6">
            <Link href="/contatos" data-testid="button-nav-visit">Visite-nos</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 border-b border-border/50 ${
                location === item.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full mt-2" onClick={() => setIsOpen(false)}>
            <Link href="/contatos">Visite-nos</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
