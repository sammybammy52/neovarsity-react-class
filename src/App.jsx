import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import CreateBlog from "./pages/Blogs/CreateBlog";
import AllBlogs from "./pages/Blogs/AllBlogs";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
