import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Link as RouterLink } from "react-router-dom";
import "highlight.js/styles/github-dark.css"; // or another theme

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className = "" }: MarkdownProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;
            return (
              <figure className="my-8">
                <img
                  src={src}
                  alt={alt || "Blog image"}
                  className="rounded-lg object-cover w-full h-auto max-h-[500px]"
                />
                {alt && (
                  <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },
          a: ({ href, children }) => {
            if (!href) return <span>{children}</span>;
            if (href.startsWith("http")) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {children}
                </a>
              );
            }
            return (
              <RouterLink
                to={href}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {children}
              </RouterLink>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-6 leading-relaxed text-gray-800 dark:text-gray-200">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gray-100 dark:bg-gray-800 rounded-r-lg italic text-gray-600 dark:text-gray-300">
              {children}
            </blockquote>
          ),
          code: ({ inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className={`hljs block rounded-lg p-4 text-sm font-mono overflow-x-auto border border-gray-300 dark:border-gray-700 ${className || ""
                  }`}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="rounded-lg overflow-x-auto my-6">{children}</pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-200 dark:bg-gray-700">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-8 border-gray-300 dark:border-gray-700" />
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-900 dark:text-gray-100">
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
