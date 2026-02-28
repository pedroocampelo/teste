import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Button } from "@/react-app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { fetchPostBySlug, type BlogPost as WPBlogPost } from "@/react-app/lib/wordpressApi";

// Posts estáticos de fallback
const staticPosts: Record<string, WPBlogPost> = {
  "seja-bem-vindo-ao-nosso-blog-juridico": {
    id: 1,
    title: "Seja bem-vindo ao nosso Blog Jurídico",
    date: "19 de fevereiro de 2026",
    slug: "seja-bem-vindo-ao-nosso-blog-juridico",
    link: "/blog/seja-bem-vindo-ao-nosso-blog-juridico",
    excerpt: "Este blog nasce para conversar sobre Direito de forma clara.",
    content: `<p>Se você já se sentiu perdido ao tentar entender um contrato, uma decisão judicial ou até mesmo uma notícia sobre uma nova lei, saiba que isso é comum. O Direito está presente no nosso dia a dia, mas muitas vezes é tratado de forma distante e cheio de termos complicados. Este blog nasce para simplificar essa realidade e aproximar o Direito das pessoas.</p>

<p>Aqui vamos falar, de forma clara e direta, sobre temas jurídicos que fazem parte da vida cotidiana e sobre dúvidas recorrentes, como: o que é o BPC/LOAS e quem tem direito? Trabalhei sem carteira assinada, posso exigir meus direitos? Quais são os direitos trabalhistas e como identificar possíveis violações? Entre outros assuntos que impactam decisões importantes da vida pessoal e profissional.</p>

<p>A proposta é traduzir o que a lei diz para a prática, sem juridiquês desnecessário. Este é um espaço de informação e orientação, pensado para quem quer entender melhor seus direitos.</p>

<p>Seja bem-vindo(a).</p>`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<WPBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetchPostBySlug(slug)
      .then((data) => {
        if (data) {
          setPost(data);
        } else {
          // Fallback para posts estáticos
          setPost(staticPosts[slug] ?? null);
        }
      })
      .catch(() => {
        setPost(staticPosts[slug] ?? null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  const handleBackToBlog = () => {
    navigate("/#blog");
    setTimeout(() => {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="h-8 bg-accent/40 rounded animate-pulse w-1/3" />
            <div className="h-12 bg-accent/40 rounded animate-pulse" />
            <div className="space-y-3 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-accent/40 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Artigo não encontrado</h1>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-8" onClick={handleBackToBlog}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Button>

          <article className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
            <h1 className="text-4xl font-bold text-primary mb-8">{post.title}</h1>

            {post.featuredImage && (
              <figure className="mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </figure>
            )}

            <div
              className="text-muted-foreground leading-relaxed prose-headings:text-primary prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
