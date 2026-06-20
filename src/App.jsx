import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  const routers = createBrowserRouter([
    {
      index: true,
      element: <PublicLayout />,
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
