// URL base do WordPress — troque pela URL real quando estiver pronto
// Exemplo: "https://seublog.com.br"
const WP_BASE_URL = import.meta.env.VITE_WORDPRESS_URL || "";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link: string;
  featuredImage?: string;
}

function mapWPPost(post: WPPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    date: formatDate(post.date),
    link: post.link,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}

export async function fetchLatestPosts(count = 3): Promise<BlogPost[]> {
  if (!WP_BASE_URL) return [];
  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/posts?per_page=${count}&orderby=date&order=desc&_embed=1`
  );
  if (!res.ok) throw new Error("Erro ao buscar posts do WordPress");
  const data: WPPost[] = await res.json();
  return data.map(mapWPPost);
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  if (!WP_BASE_URL) return [];
  let page = 1;
  const allPosts: BlogPost[] = [];

  while (true) {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&orderby=date&order=desc&_embed=1`
    );
    if (!res.ok) break;
    const data: WPPost[] = await res.json();
    if (data.length === 0) break;
    allPosts.push(...data.map(mapWPPost));
    if (data.length < 100) break;
    page++;
  }

  return allPosts;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!WP_BASE_URL) return null;
  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`
  );
  if (!res.ok) return null;
  const data: WPPost[] = await res.json();
  if (data.length === 0) return null;
  return mapWPPost(data[0]);
}
