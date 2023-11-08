import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import ProductsList from "./pages/ProductsList/ProductsList";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsList />,
    },
    {
        path: 'products/:productId',
        element: <ProductPage />
    }
]);

function App() {

    return (
      <QueryClientProvider client={queryClient}>
          <div className='flex'>
              <RouterProvider router={router} />
              <Sidebar />
          </div>
      </QueryClientProvider>
  );
}

export default App;
