import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import type { Blog } from '~/types';
interface BlogSectionProps {
  posts: Blog[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  // Filter only featured & published posts
  const featuredPosts = posts.filter((post) => post.isFeatured && post.isPublished);

  if (featuredPosts.length === 0) {
    return (
      <section id="blog" className="py-24 section-theme">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            No Featured Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            There are currently no featured posts to display.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 section-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            Latest Featured Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and best practices.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="blog-card-theme rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex">
            {/* Image */}
            <div className="md:w-1/2 aspect-[16/10] md:aspect-square bg-muted overflow-hidden relative">
              {featuredPosts[0].coverImage ? (
                <img
                  src={featuredPosts[0].coverImage}
                  alt={featuredPosts[0].title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                  Featured Post Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-theme-primary text-white rounded-full text-xs font-medium">
                  Featured
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold blog-title hover:text-theme-primary transition-colors">
                <a href={`/blog/${featuredPosts[0].slug}`}>
                  {featuredPosts[0].title}
                </a>
              </h3>

              {/* Author */}
              <p className="text-muted-foreground">
                By {featuredPosts[0].author}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredPosts[0].tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 px-2 py-1 bg-theme-primary/10 text-theme-primary rounded text-xs"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${featuredPosts[0].slug}`}
                className="inline-flex items-center text-theme-primary hover:text-theme-primary/80 transition-colors font-medium"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Other Featured Posts Grid */}
        {featuredPosts.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(1).map((post, index) => (
              <article
                key={post._id}
                className="group blog-card-theme rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Post Image */}
                <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                      Blog Post Image
                    </div>
                  )}
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold blog-title group-hover:text-theme-primary transition-colors line-clamp-2">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      By {post.author}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-theme-primary/10 text-theme-primary rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-theme-primary/10 text-theme-primary rounded text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-theme-primary hover:text-theme-primary/80 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center btn-theme-primary px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
