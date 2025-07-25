import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { routes } from '../Routes';
import CustomNav from './Components/CustomNav/CustomNav';

const AppRoutes = () => {
  const location = useLocation();

  // List of admin/dashboard paths where CustomNav should be hidden
  const hideNavPaths = [
    '/admin/dashboard',
    '/admin/createListing',
    '/admin/manageOrders',
    '/admin/showListing',
  ];

  // Check if current path starts with "/admin" but is not just "/admin" (login)
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNav && <CustomNav />}
      <Routes>
        {routes.map((items, index) => (
          <Route key={index} path={items.path} element={items.element} />
        ))}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
