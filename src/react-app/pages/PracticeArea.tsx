import { useParams, Link, useNavigate } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Button } from "@/react-app/components/ui/button";
import { ArrowLeft, Instagram } from "lucide-react";
import { practiceAreas } from "@/react-app/data/practiceAreas";
import CTASection from "@/react-app/components/CTASection";

export default function PracticeArea() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Área não encontrada</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = area.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero da área */}
        <section className="py-16 lg:py-20 bg-accent/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Button
              variant="ghost"
              className="mb-8"
              onClick={() => {
                navigate("/#areas");
                setTimeout(() => {
                  document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para áreas de atuação
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary">{area.title}</h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{area.introText}</p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid gap-10">
              {area.contentBlocks.map((block, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-bold text-primary mb-4">{block.heading}</h2>
                  <ul className="space-y-3">
                    {block.paragraphs.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Metodologia */}
            <div className="mt-12 p-6 bg-accent/40 rounded-xl border border-border">
              <h2 className="text-xl font-bold text-primary mb-3">Nossa Metodologia</h2>
              <p className="text-muted-foreground leading-relaxed">{area.closingMethodologyText}</p>
            </div>

            {/* Advogado(s) responsável(eis) */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {area.responsibleLawyers.length > 1 ? "Advogados Responsáveis" : "Advogado Responsável"}
              </h2>
              <div className="flex flex-col gap-4">
                {area.responsibleLawyers.map((lawyer) => (
                  <div key={lawyer.name} className="flex items-center gap-6 p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-20 h-20 rounded-full object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary">{lawyer.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{lawyer.oab}</p>

                      <a
                        href={lawyer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 text-sm transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>  {/* fecha container */}
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
