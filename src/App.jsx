import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Footer from './Components/FooterDiv/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import JobSingle from './Pages/JobSingle';
import Login from './Pages/Login';
import Register from './Pages/Register';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className='w-[95%] m-auto bg-white'>
      <RouterProvider router={route} />
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobSingle />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default App;
