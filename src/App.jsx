import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostProvider } from "./components/PostContext";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
import PostDetail from "./pages/public/PostDetail";
import CreatPosts from "./pages/admin/CreatPosts";
import Dashboard from "./pages/admin/Dashboard";
import UpdatePosts from "./pages/admin/UpdatePosts";
import Login from "./components/Login";
import ErrorPage from "./pages/public/ErrorPage";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/posts", element: <Posts /> },
        { path: "posts/:id", element: <PostDetail /> },
        { path: "/*", element: <ErrorPage /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [{ index: true, element: <Login /> }],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "createposts", element: <CreatPosts /> },

        { path: "update/:id", element: <UpdatePosts /> },
      ],
    },
  ]);

  return (
    <PostProvider>
      <RouterProvider router={routers} />
    </PostProvider>
  );
}

export default App;
