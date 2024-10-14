import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';//dang thong bao bat o goc man hinh
import 'react-toastify/dist/ReactToastify.css';
// import CustomerRouter from '../routes/CustomerRouter';
// import AdminRouter from './routes/AdminRouter';
import CustomerRouter from "./routers/CustomerRouter";
// import ProviderRouter from "./routers/ProviderRouter";



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
      <Route path='/*' element={<CustomerRouter/>}/>
        {/* <Route path="/admin" element={<AdminRouter />} />
        <Route path="/provider" element={<ProviderRouter />} />  */}


      </Routes>
    </div>
  );
}
export default App;
