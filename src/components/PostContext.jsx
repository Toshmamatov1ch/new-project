import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

// Skrinshotdagi asosiy API manzili:
const BASE_URL = "https://tevoj98108.pythonanywhere.com/api/v1/";

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Backenddan postlarni (articles) yuklash (GET)
  // 1. Backenddan postlarni (articles) yuklash (GET)

  // 1. Backenddan postlarni (articles) yuklash (GET)
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BASE_URL}articles/`);

      // Backenddan kelayotgan response.data.data.results massivini tekshirib olamiz
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data.results)
      ) {
        setPosts(response.data.data.results); // To'g'ri massivni state-ga saqlaymiz
      } else if (response.data && Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        setPosts([]); // Agar kutilmagan format bo'lsa, bo'sh massiv beramiz
      }
    } catch (err) {
      console.error("Postlarni yuklashda xatolik:", err);
      setError("Ma'lumotlarni yuklab bo'lmadi.");
      setPosts([]); // Xatolik yuz berganda crash bo'lmasligi uchun bo'sh massiv qilamiz
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 2. Yangi post yaratish (POST)
  const addPost = async (newPostData) => {
    try {
      const response = await axios.post(`${BASE_URL}articles/`, newPostData);
      const createdPost = response.data.data || response.data;
      setPosts((prevPosts) => [createdPost, ...prevPosts]);
    } catch (err) {
      console.error("Post qo'shishda xatolik:", err);
      throw err;
    }
  };

  // 3. Postni o'chirish (DELETE)
  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}articles/${id}/`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Postni o'chirishda xatolik:", err);
      throw err;
    }
  };

  // 4. Postni tahrirlash (PUT)
  const updatePost = async (id, updatedFields) => {
    try {
      const response = await axios.put(
        `${BASE_URL}articles/${id}/`,
        updatedFields,
      );
      const updatedPost = response.data.data || response.data;
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? updatedPost : post)),
      );
    } catch (err) {
      console.error("Postni yangilashda xatolik:", err);
      throw err;
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        error,
        addPost,
        deletePost,
        updatePost,
        fetchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
