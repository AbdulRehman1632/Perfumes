import AdminLogin from "../src/Components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "../src/Pages/AdminDashboard/AdminDashboard";
import Home from "../src/Pages/Home/Home";
import AdminProtectedRoute from "../src/ProtectedRoute/AdminProtectedRoute/AdminProtectedRoute";




export const routes = [

    {
        element:<Home/>,
        path:"/"

    },
    {
        element:<Home/>,
        path:"/home"

    },
     {
    element: <AdminLogin />,
    path: "/admin"
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    )
  }

]
