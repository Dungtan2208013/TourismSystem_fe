import React from 'react';
import { Routes, Route } from 'react-router-dom';

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
        {/* Add more admin-related routes here */}
      </Routes>
    </div>
  );
}

export default AdminRouter;
