import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

// Lazy-loaded components
const ProductList = React.lazy(() => import('./Components/ProductList'));
const ProductDetail = React.lazy(() => import('./Components/ProductDetail'));
const Cart = React.lazy(() => import('./Components/Cart'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
