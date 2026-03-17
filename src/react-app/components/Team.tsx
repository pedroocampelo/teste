import { useState } from "react";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { Instagram, X, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Matheus Lucena",
    oab: "OAB/CE 44.968",
    image: "/matheus lucena.png",
    instagram: "https://www.instagram.com/matheuslucenaadv/",
    bio: "Matheus é advogado e acredita que o Direito deve servir para resolver problemas reais de pessoas reais. Formado em Direito pela Universidade de Fortaleza, é membro da OAB/CE desde 2021 e já auxiliou mais de 200 clientes na busca pelos seus direitos. Sua atuação é marcada pela proximidade com o cliente e pela comunicação clara, evitando o “juridiquês” e explicando cada etapa do processo de forma simples e direta.",
    qualifications: [
      "Graduado em Direito pela UNIFOR.",
      "Advogado inscrito na OAB/CE nº 44968 desde 2021. ",
      "Experiência em assessoria jurídica e atuação contenciosa.",
    ],
    areas: ["Direito Empresarial", "Direito Previdenciário", "Direito Trabalhista"],
  },
  {
    name: "Lorenzo Marcello",
    oab: "OAB/CE 48.638",
    image: "/lorenzo marcello.png",
    instagram: "https://www.instagram.com/lorenzofmarcello/",
    bio: "Natural do Rio de Janeiro, Lorenzo Marcello escolheu o Direito como forma de atuar diretamente na solução de problemas concretos das pessoas. Seu trabalho é marcado pela combinação entre comunicação direta, análise técnica e visão estratégica, sempre buscando soluções claras e seguras para cada caso. Acredita que a relação entre advogado e cliente deve ser baseada em confiança, transparência e responsabilidade.",
    qualifications: [
      "Advogado inscrito na OAB/CE nº 48.638.",
      "Atuação em demandas cíveis, imobiliárias, empresariais e trabalhistas.",
      "Experiência em assessoria jurídica e atuação contenciosa.",
    ],
    areas: ["Direito do Consumidor", "Direito Imobiliário"],
  },
   {
    name: "Bruno Romero",
    oab: "OAB/CE 44.829",
    image: "/bruno romero.png",
    instagram: "https://www.instagram.com/bruno_rcl/",
    bio: "Graduado em Direito pela Universidade de Fortaleza, pós-graduado em Direito Imobiliário pela UniBF, MBA pela Fundação Getúlio Vargas em Direito Empresarial. É advogado inscrito na OAB/CE sob o N° 44.829, com anos de experiência no direito privado. É professor nos cursos de Direito, Gestão Financeira e Gestão em Recursos Humanos na Faculdade Facine do grupo MRH. Torcedor do Fortaleza Esporte Clube. Produtor de música eletrônica.",
    qualifications: [
      "Membro efetivo no Tribunal de Prerrogativas do Advogado na OAB/CE.",
      "Especialização em Direito Imobiliário.",
      "Professor da Faculdade Facine.",
    ],
    areas: ["Direito Cível", "Direito Imobiliário", "Direito Previdenciário"],
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
