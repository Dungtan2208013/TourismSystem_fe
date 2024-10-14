import React,{useEffect} from "react";
import { Link,Route,Routes,useNavigate } from "react-router-dom";
import Header from '../views/components/Header';
import Footer from '../views/components/Footer';
import Body from '../views/components/Body';

import About from "../views/Customers/pages/about";
import Blog from "../views/Customers/pages/blog";
import BlogDetails from "../views/Customers/pages/blogdetails";
import Contact from '../views/Customers/pages/contact';
import Index from '../views/Customers/pages/index'; 
import Packages from '../views/Customers/pages/packages'; 
import Login from '../views/Customers/pages/login'; 
import Register from '../views/Customers/pages/register'; 
import Booking from '../views/Customers/pages/booking'; 
import Tour from '../views/Customers/pages/tour'; 
import TourDetails from '../views/Customers/pages/tour_details';
import ContaxtForm from "../views/Customers/pages/contaxtForm";
 

const CustomerRouter = () => {
  return (
    <>
      <Header />  {/* Header dùng chung cho mọi trang */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contaxtForm" element={<ContaxtForm />} />
        <Route index elemen={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour_details" element={<TourDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />  {/* Footer dùng chung cho mọi trang */}
    </>
  );
};

export default CustomerRouter;
