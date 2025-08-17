import { useParams, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getBlogPostBySlug } from "~/lib/data";
import { Markdown } from "~/components/Blog/Markdown";
import { formatDate } from "~/lib/utils";
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react";
import type { Blog } from "~/types";

export default function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>(); // ✅ pull slug from params
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching blog post for slug:", slug);
    if (!slug) return;

    async function fetchData() {
      try {
        const fetchedPost = await getBlogPostBySlug(slug!);
        if (!fetchedPost || !fetchedPost.isPublished) {
          navigate("/404");
          return;
        }
        setPost(fetchedPost);
      } catch (err) {
        console.error(err);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug, navigate]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!post) {
    return null; 
  }

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Back to Blog */}
        <section className="py-8 border-b">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post?.readTime || "5"} min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Markdown content={post.content} />
          </div>
        </section>

        {/* Tags */}
        <section className="py-8 border-t">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Tags</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 
             hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 
             shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </span>

              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
