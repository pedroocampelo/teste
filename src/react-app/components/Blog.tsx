import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Button } from "@/react-app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { fetchLatestPosts, type BlogPost } from "@/react-app/lib/wordpressApi";

// Posts estáticos de fallback (usados quando o WordPress não está configurado)
const staticPosts: BlogPost[] = [
  {
    id: 1,
    title: "Seja bem-vindo ao nosso Blog Jurídico",
    excerpt:
      "Este blog nasce para conversar sobre Direito de forma clara, acessível e honesta — sem juridiquês desnecessário.",
    content: "",
    date: "19 de fevereiro de 2026",
    slug: "seja-bem-vindo-ao-nosso-blog-juridico",
    link: "/blog/seja-bem-vindo-ao-nosso-blog-juridico",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(staticPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestPosts(3)
      .then((data) => {
        if (data.length > 0) setPosts(data);
      })
      .catch(() => {
        // Mantém posts estáticos se o WordPress não estiver disponível
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            O que a Lei diz?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Artigos e orientações para mantê-lo informado sobre seus direitos
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-accent/40 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {post.featuredImage && (
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-primary leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" size="lg" className="group">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
