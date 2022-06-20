import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
import { AboutPage,AuthWrapper,CartPage,CheckoutPage,ErrorPage,HomePage,PrivateRoute,ProductsPage,SharedProductLayout,SingleProductPage } from "./pages";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="/products" element={<SharedProductLayout />}>
                <Route index element={<ProductsPage/>} />
                <Route path=":productId" element={<SingleProductPage />} />
            </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;