import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

// Components
import {Navbar , Footer} from "./components/index.js";
// Pages
import { 
  Home,
  Login,
  Register,
  Add,
  Gig,
  Gigs,
  Message,
  Messages,
  MyGigs,
  Orders
 } from "./pages/index.js";

import "./App.scss";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
          <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/add",
          element : <Add/>
        },
        {
          path : "/orders",
          element : <Orders/>
        },
        {
          path : "/messages",
          element : <Messages/>
        },
        {
          path : "/message/:id",
          element : <Message/>
        },
        {
          path : "/gig/:id",
          element : <Gig/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/mygigs",
          element : <MyGigs/>
        },
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/register",
          element : <Register/>
        }
      ]
    }
  ])

  return  <RouterProvider router={router} />
}

export default App;
