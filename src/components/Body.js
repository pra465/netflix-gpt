import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);
const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
