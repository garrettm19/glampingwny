import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  content: string;
  faq?: {
    question: string;
    answer: string;
  }[];
  relatedPosts: {
    title: string;
    slug: string;
    image: string;
  }[];
}

interface BlogTemplateProps {
  post: BlogPost;
  slug: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ post, slug }) => {
  const canonicalUrl = `https://glampingwny.com/blog/${slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Glamping WNY Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.featuredImage.url} />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.featuredImage.url} />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "image": post.featuredImage.url,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "Glamping WNY",
              "logo": {
                "@type": "ImageObject",
                "url": "https://glampingwny.com/logo.png"
              }
            },
            ...(post.faq && {
              "mainEntity": post.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          })}
        </script>
      </Helmet>

      {/* Back to Blog */}
      <div className="container-custom pt-24">
        <Link 
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <article className="pt-8 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.readTime} read
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">{post.author.name}</div>
                <div className="text-sm text-gray-600">{post.author.role}</div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-12">
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                width={post.featuredImage.width}
                height={post.featuredImage.height}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* FAQ Section */}
            {post.faq && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {post.faq.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card p-6"
                    >
                      <h3 className="text-lg font-bold text-primary-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="flex items-center gap-4 mb-12">
              <span className="font-medium text-gray-900">Share this post:</span>
              <button
                onClick={() => {
                  navigator.share({
                    title: post.title,
                    text: post.description,
                    url: canonicalUrl
                  });
                }}
                className="btn btn-outline py-2 px-4"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Related Posts */}
            {post.relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Related Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card overflow-hidden"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-bold text-primary-900 mb-4">
                          {relatedPost.title}
                        </h3>
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogTemplate;