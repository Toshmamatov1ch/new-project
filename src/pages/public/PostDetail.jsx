import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePosts } from "../../components/PostContext"; // Context'ga yo'lni tekshirib oling
import { FiCalendar, FiArrowLeft, FiUser } from "react-icons/fi";
import PostCard from "../../components/PostCard"; // Mavjud PostCard komponentingiz yo'li

export default function PostDetail() {
  const { id } = useParams();
  const { posts } = usePosts();

  // ID bo'yicha joriy postni topamiz
  const post = posts.find((p) => String(p.id) === String(id));

  // Agar joriy post topilmasa, xatolik sahifasi
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] font-sans px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
          Post Not Found!
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          This article does not exist or might have been removed.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 bg-[#4F46E5] text-white text-sm font-semibold rounded-xl shadow-xs hover:bg-[#4338CA] transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // DIZAYNDAGI "Related Posts" LOGIKASI:
  // Joriy maqoladan tashqari, xuddi shu kategoriyadagi yoki boshqa dastlabki 2 ta postni ajratib olamiz
  const relatedPosts = posts
    .filter((p) => String(p.id) !== String(id)) // joriy postni chiqarib tashlaymiz
    .slice(0, 2); // dastlabki 2 tasini olamiz

  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-12 font-sans text-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#4F46E5] mb-6 transition uppercase tracking-wider"
        >
          <FiArrowLeft /> Back to Posts
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-[#4F46E5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            {post.category}
          </span>
        </div>

        {/* Post Title */}
        <h1 className="text-3xl md:text-[44px] font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
          {post.title}
        </h1>

        {/* Author and Date metadata */}
        <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-8">
          <span className="flex items-center gap-1.5">
            <FiUser size={14} />
            {post.author || "John Doe"}
          </span>
          <span className="flex items-center gap-1.5">
            <FiCalendar size={14} />
            {post.date}
          </span>
        </div>

        {/* Featured Image */}
        <div className="w-full h-75 md:h-120 rounded-3xl overflow-hidden mb-10 bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Article Content */}
        <div className="prose max-w-none text-slate-700 text-[15px] md:text-[16px] leading-relaxed mb-20 space-y-6">
          {/* Agar formadan to'liq matn kiritilgan bo'lsa uni chiqaradi, 
              aks holda tayyor default matn strukturasi ko'rinadi */}
          {post.content ? (
            <p className="whitespace-pre-line">{post.content}</p>
          ) : (
            <>
              <p>
                The landscape of web development is constantly evolving, and
                2024 promises to bring exciting new changes that will shape how
                we build and interact with web applications.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-2">
                Modern Frameworks and Tools
              </h2>
              <p>
                The rise of modern frameworks like React, Vue, and Svelte has
                revolutionized how developers approach building user interfaces.
                These tools provide powerful abstractions that make it easier to
                create complex, interactive applications while maintaining clean
                and maintainable code.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-2">
                Performance and User Experience
              </h2>
              <p>
                Web performance has become more critical than ever. Users expect
                lightning-fast load times and smooth interactions. Modern web
                development focuses heavily on optimizing performance through
                techniques like code splitting, lazy loading, and efficient
                caching strategies.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-2">
                The Rise of AI Integration
              </h2>
              <p>
                Artificial intelligence is becoming increasingly integrated into
                web applications, from chatbots and recommendation systems to
                advanced analytics and personalization features. This trend is
                only expected to grow as AI technologies become more accessible.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-2">
                Web3 and Decentralization
              </h2>
              <p>
                The concept of Web3 and decentralized applications is gaining
                traction. Blockchain technology is being explored for various
                use cases beyond cryptocurrency, including identity management,
                content distribution, and more.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-2">
                Conclusion
              </h2>
              <p>
                The future of web development is bright and full of
                possibilities. By staying up-to-date with the latest
                technologies and best practices, developers can create amazing
                experiences that push the boundaries of what's possible on the
                web.
              </p>
            </>
          )}
        </div>

        {/* --- RELATED POSTS QISMI (Dizayndagi pastki qism) --- */}
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
            Related Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              // O'zingizning tayyor PostCard komponentingizga ma'lumot uzatiladi
              <PostCard key={relatedPost.id} card={relatedPost} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
