import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '.../components/Header';
import Footer from '.../components/Footer';
import Body from '.../components/Body';
import About from '../views/Customers/pages/About';
import Blog from '../views/Customers/pages/Blog';
//more pages..

const CustomerRouter = () => {
  return (
    <>
      <Header />  {/* Header dùng chung cho mọi trang */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />  {/* Footer dùng chung cho mọi trang */}
    </>
  );
};

export default CustomerRouter;
