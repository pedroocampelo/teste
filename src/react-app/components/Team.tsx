import { useState } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { Instagram, X, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Bruno Romero",
    oab: "OAB/CE 44.829",
    image: "/bruno romero.png",
    instagram: "https://www.instagram.com/bruno_rcl/",
    bio: "Advogado especializado em Direito Cível e Trabalhista, com ampla experiência em defesa de direitos e resolução de conflitos. Comprometido com soluções jurídicas eficazes e orientação transparente.",
    qualifications: [
      "Graduado em Direito",
      "Especialização em Direito Civil",
      "Atuação em Direito Trabalhista",
      "Membro da OAB/CE desde 2020",
    ],
    areas: ["Direito Cível", "Direito Trabalhista"],
  },
  {
    name: "Lorenzo Marcello",
    oab: "OAB/CE 48.638",
    image: "/lorenzo marcello.png",
    instagram: "https://www.instagram.com/lorenzofmarcello/",
    bio: "Advogado focado em Direito do Consumidor e Empresarial, auxiliando tanto pessoas físicas quanto jurídicas na proteção de seus direitos e interesses. Reconhecido pela objetividade e clareza nas orientações.",
    qualifications: [
      "Graduado em Direito",
      "Especialização em Direito do Consumidor",
      "Atuação em Direito Empresarial",
      "Membro da OAB/CE desde 2021",
    ],
    areas: ["Direito do Consumidor", "Direito Empresarial"],
  },
  {
    name: "Matheus Lucena",
    oab: "OAB/CE 44.968",
    image: "/matheus lucena.png",
    instagram: "https://www.instagram.com/matheuslucenaadv/",
    bio: "Advogado especializado em Direito Imobiliário e Previdenciário, oferecendo assessoria completa em transações imobiliárias e benefícios previdenciários. Reconhecido pela atenção aos detalhes e compromisso com resultados.",
    qualifications: [
      "Graduado em Direito",
      "Especialização em Direito Imobiliário",
      "Atuação em Direito Previdenciário",
      "Membro da OAB/CE desde 2020",
    ],
    areas: ["Direito Imobiliário", "Direito Previdenciário"],
  },
];

type TeamMember = (typeof team)[0];

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.oab}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Sobre</h4>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Formação e Atuação</h4>
            <ul className="space-y-2">
              {member.qualifications.map((q, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Áreas de Atuação</h4>
            <div className="flex flex-wrap gap-2">
              {member.areas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <Instagram className="w-4 h-4" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="equipe" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Conheça a equipe que irá te orientar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e comprometidos com a defesa dos seus direitos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center flex flex-col flex-1 items-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.oab}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  onClick={() => setSelected(member)}
                >
                  Ver mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
