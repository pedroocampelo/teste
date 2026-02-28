import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { practiceAreas } from "@/react-app/data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-16 lg:py-20 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos suporte jurídico completo em diversas áreas do Direito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {practiceAreas.map((area) => (
            <Card
              key={area.slug}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between gap-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {area.shortDescription}
                </CardDescription>
                <Link to={`/areas/${area.slug}`} onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="w-full group">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
