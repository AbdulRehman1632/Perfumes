import React from 'react'
// import AdminLogin from '../../Components/Admin/AdminLogin/AdminLogin'
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
 const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // remove token
    navigate("/admin"); // redirect to login page
  };

  return (
    <div>
      <h1>Welcome Admin</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard
