import React, { createContext, useState, useContext } from "react"; // <-- useState mana shu yerda import bo'lishi shart!

const PostContext = createContext();

const initialPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    category: "Technology",
    date: "2025-11-20",
    status: "Published",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    description:
      "The landscape of web development is constantly evolving, and 2024 promises to bring exciting new changes...",
  },
  {
    id: 2,
    title: "Mastering Productivity",
    category: "Productivity",
    date: "2025-11-18",
    status: "Published",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500",
    description:
      "Proven strategies and tools to boost your daily workflow and achieve your goals faster.",
  },
  {
    id: 3,
    title: "Design Principles That Matter",
    category: "Design",
    date: "2025-11-15",
    status: "Draft",
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=500",
    description:
      "Core design principles every creator should know to build beautiful user experiences.",
  },
  {
    id: 4,
    title: "Building Scalable Applications",
    category: "Technology",
    date: "2025-11-12",
    status: "Published",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    description:
      "Learn how to architect applications capable of handling millions of users efficiently.",
  },
];

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  // Yangi post qo'shish
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // Postni tahrirlash (Update) funksiyasi
  const updatePost = (id, updatedFields) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        String(post.id) === String(id) ? { ...post, ...updatedFields } : post,
      ),
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
