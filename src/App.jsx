import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import ProductsPage from './Pages/ProductsPage';
import NotFound from './Pages/NotFound';
import StandarLayout from "./Layout/StandarLayout";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      {
        path: "/products",
        element:  <ProductsPage />,
      }
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
 
  );
}

export default App;
