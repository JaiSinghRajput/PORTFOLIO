import { useNavigate } from "react-router-dom";
import { Clock, User, Tag } from "lucide-react";
import { blogs, personalInfo } from "~/data/index";
import type { Blog } from "~/types";

// Utility function
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const blogPosts: Blog[] = blogs.map((post) => ({
  ...post,
  createdAt: new Date(post.createdAt).toISOString(),
  updatedAt: new Date(post.updatedAt).toISOString(),
}));

export default function BlogPage() {
  const navigate = useNavigate();

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="py-4 px-6 bg-gray-900 dark:bg-gray-950 text-white border-b border-gray-800">
        <h1 className="text-xl font-bold">My Portfolio Blog</h1>
      </header>

      <main className="pt-20 flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts on web development, technology trends, and programming best practices.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {sortedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedPosts.map((post) => (
                  <article
                    key={post._id}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      {/* Author & Meta */}
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>

                      {/* Content Preview */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags & Date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Tag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.tags[0] || "General"}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(post.updatedAt)}
                        </span>
                      </div>

                      {/* Tag Chips */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  No blog posts yet
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 text-center border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
