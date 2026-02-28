import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { ArrowRight } from "lucide-react";
import { fetchAllPosts, type BlogPost } from "@/react-app/lib/wordpressApi";

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

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>(staticPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPosts()
      .then((data) => {
        if (data.length > 0) setPosts(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              O que a Lei diz?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todos os nossos artigos e orientações jurídicas
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-48 bg-accent/40 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">Nenhum artigo encontrado.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
