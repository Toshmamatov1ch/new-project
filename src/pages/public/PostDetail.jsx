import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardsData } from "../../data/cardsData.js";
import PostCard from "../../components/PostCard";

function PostDetail() {
  const { id } = useParams(); // URL'dan dinamik ID'ni olamiz

  // ID bo'yicha joriy postni topamiz
  const post = cardsData.find((item) => item.id === parseInt(id));

  // Agar post topilmasa, 404 dizayni
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-3xl font-extrabold text-[#111827] mb-2">
          Post topilmadi!
        </h2>
        <p className="text-gray-500 mb-6">
          Bunday maqola mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <Link
          to="/"
          className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#3730A3] transition-colors"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  // "Related Posts" uchun joriy postdan boshqa (maksimal 2 ta) maqolani filter qilamiz
  const relatedPosts = cardsData
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  // Kategoriya ranglari
  const categoryStyles = {
    Technology: "bg-blue-100 text-blue-800",
    Productivity: "bg-indigo-100 text-indigo-800",
    Design: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Asosiy maqola konteyneri */}
      <div className="max-w-200 mx-auto px-6 pt-12 pb-16">
        {/* Orqaga qaytish havolasi */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Posts
        </Link>

        {/* Kategoriya Badge'i */}
        <span
          className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide ${categoryStyles[post.category] || "bg-gray-100 text-gray-800"}`}
        >
          {post.category}
        </span>

        {/* Katta Bosh Sarlavha (Title) */}
        <h1 className="text-3xl md:text-[44px] font-extrabold text-[#111827] leading-tight md:leading-13 tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Muallif va Sana qismi */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span className="font-medium text-gray-700">John Doe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 3V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Asosiy Katta Rasm */}
        <div className="rounded-6 overflow-hidden shadow-sm mb-10 bg-gray-50 aspect-video">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-b-xl"
          />
        </div>

        {/* Maqola Batafsil Matni (Rich Text / Typography formatida) */}
        <div className="text-[#374151] text-[17px] leading-7 space-y-6">
          <p className="text-gray-600 font-normal">
            {post.desc} The landscape of web development is constantly evolving,
            and 2024 promises to bring exciting new changes that will shape how
            we build and interact with web applications.
          </p>

          <h2 className="text-2xl font-bold text-[#111827] pt-4">
            Modern Frameworks and Tools
          </h2>
          <p>
            The rise of modern frameworks like React, Vue, and Svelte has
            revolutionized how developers approach building user interfaces.
            These tools provide powerful abstractions that make it easier to
            create complex, interactive applications while maintaining clean and
            maintainable code.
          </p>

          <h2 className="text-2xl font-bold text-[#111827] pt-4">
            Performance and User Experience
          </h2>
          <p>
            Web performance has become more critical than ever. Users expect
            lightning-fast load times and smooth interactions. Modern web
            development focuses heavily on optimizing performance through
            techniques like code splitting, lazy loading, and efficient caching
            strategies.
          </p>

          <h2 className="text-2xl font-bold text-[#111827] pt-4">
            The Rise of AI Integration
          </h2>
          <p>
            Artificial intelligence is becoming increasingly integrated into web
            applications, from chatbots and recommendation systems to advanced
            analytics and personalization features. This trend is only expected
            to grow as AI technologies become more accessible.
          </p>

          <h2 className="text-2xl font-bold text-[#111827] pt-4">
            Web3 and Decentralization
          </h2>
          <p>
            The concept of Web3 and decentralized applications is gaining
            traction. Blockchain technology is being explored for various use
            cases beyond cryptocurrency, including identity management, content
            distribution, and more.
          </p>

          <h2 className="text-2xl font-bold text-[#111827] pt-4">Conclusion</h2>
          <p className="pb-4">
            The future of web development is bright and full of possibilities.
            By staying up-to-date with the latest technologies and best
            practices, developers can create amazing experiences that push the
            boundaries of what's possible on the web.
          </p>
        </div>
      </div>

      {/* 2. Related Posts Qismi (Pastki kulrang fonli blok) */}
      <div className="bg-[#F9FAFB] border-t border-gray-100 py-16">
        <div className="max-w-285 mx-auto px-6">
          {/* Sarlavha */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-10">
            Related Posts
          </h2>

          {/* Grid orqali 2 ta related postni chiqarish */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-200">
            {relatedPosts.map((item) => (
              // Avval yozgan PostCard'imizni bu yerda qayta ishlatamiz
              <PostCard key={item.id} card={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
