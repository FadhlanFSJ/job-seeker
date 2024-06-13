import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Footer from './Components/FooterDiv/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import JobSingle from './Pages/JobSingle';
import Login from './Pages/Login';
import FavJobs from './Pages/FavJobs';
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
        path: "/favjobs",
        element: <FavJobs />,
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

const App = () => {
  return (
    <div className='w-[100%] m-auto bg-blue'>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
