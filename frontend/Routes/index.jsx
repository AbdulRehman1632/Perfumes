import AdminLogin from "../src/Components/Admin/AdminLogin/AdminLogin";
import CreateListing from "../src/Components/Admin/CreateListing/CreateListing";
import ManageOrder from "../src/Components/Admin/ManageOrders/ManageORder";
import ShowListing from "../src/Components/Admin/ShowListing/ShowListing";
import ProductDetailPage from "../src/Components/HomeComponents/ProductDetailPage/ProductDetailPage";
import DashboardLayoutNavigationLinks from "../src/layout/DashboardLayoutNaviagtionLinks/DashboardLayoutNaviagtionLinks";
import AdminDashboard from "../src/Pages/AdminDashboard/AdminDashboard";
import Home from "../src/Pages/Home/Home";
import Products from "../src/Pages/Products/Products";
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
        element:<Products/>,
        path:"/products"

    },
    {
        element:<ProductDetailPage/>,
        path:"/products/:id"

    },
     {
    element: <AdminLogin />,
    path: "/admin"
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
         <DashboardLayoutNavigationLinks>
                 <AdminDashboard />
         </DashboardLayoutNavigationLinks>
      </AdminProtectedRoute>
    )
  },
  {
    path: "/admin/createListing",
    element: (
      <AdminProtectedRoute> 
         <DashboardLayoutNavigationLinks>
                 <CreateListing />
         </DashboardLayoutNavigationLinks>
 
      </AdminProtectedRoute>
    )
  },
   {
    path: "/admin/manageOrders",
    element: (
      <AdminProtectedRoute> 
         <DashboardLayoutNavigationLinks>
                 <ManageOrder />
         </DashboardLayoutNavigationLinks>
      </AdminProtectedRoute>
    )
  },
   {
    path: "/admin/showListing",
    element: (
      <AdminProtectedRoute> 
         <DashboardLayoutNavigationLinks>
                 <ShowListing />
         </DashboardLayoutNavigationLinks>
      </AdminProtectedRoute>
    )
  }

]
