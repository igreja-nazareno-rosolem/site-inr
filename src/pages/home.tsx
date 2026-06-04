import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Igreja do Nazareno Rosolém" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm text-sm font-medium tracking-wide">
              Bem-vindo à sua casa
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Uma igreja para amar,<br />
              <span className="text-primary">crescer e servir.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              Igreja do Nazareno Rosolém. Mais do que um lugar, uma família de fé onde você pode encontrar propósito, conexão verdadeira e o amor transformador de Jesus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-full w-full sm:w-auto text-base" asChild>
                <Link href="/agenda" data-testid="button-hero-agenda">Ver Horários</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto text-base bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link href="/sobre" data-testid="button-hero-sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 md:py-24 bg-background relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Cultos Dominicais</h3>
              <p className="text-muted-foreground mb-4">Domingos às 18h30. Momentos de louvor, oração e uma palavra edificante.</p>
              <Link href="/agenda" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Ver programação completa <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Localização</h3>
              <p className="text-muted-foreground mb-4">Estamos localizados no coração do Jardim Rosolém. Fácil acesso e ambiente acolhedor.</p>
              <Link href="/contatos" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Como chegar <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 shadow-lg shadow-primary/20 text-primary-foreground"
            >
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Pequenos Grupos</h3>
              <p className="text-primary-foreground/90 mb-4">Conecte-se durante a semana. Comunidade, estudo e partilha de vida nos lares.</p>
              <Link href="/ministerios" className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Encontre um grupo <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Short About */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nossa Essência</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Acreditamos em um Evangelho simples, relacional e transformador. Nossa missão é 
            fazer discípulos semelhantes a Cristo nas nações, começando pelo nosso bairro. 
            Seja você um cristão de longa data ou alguém apenas buscando respostas, 
            aqui você tem um lugar à mesa.
          </p>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link href="/sobre">Leia mais sobre nós</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
