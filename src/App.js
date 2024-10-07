import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';//dang thong bao bat o goc man hinh
import 'react-toastify/dist/ReactToastify.css';
import CustomerRouter from './routes/CustomerRouter';
import AdminRouter from './routes/AdminRouter';
import Header from './views/components/Header';
import Body from './views/components/Body';
import Footer from './views/components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Customers/pages/About';
import Blog from './Customers/pages/Blog';
import 'public/customer/fontawesome/css/all.min.css'; // Import FontAwesome CSS


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/customer" element={<CustomerRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
       {/* <Route path="/Booker" element={<BookerRouter />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

// ----


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

