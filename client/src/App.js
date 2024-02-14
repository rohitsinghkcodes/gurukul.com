import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Policy from "./Pages/Policy.js";
import PagenotFound from "./Pages/PagenotFound.js";
import Register from "./Pages/Auth/Register.js";
import Login from "./Pages/Auth/Login.js";
import PrivateRoute from "./Components/Routes/PrivateRoutes.js";
import ForgotPassword from "./Pages/Auth/ForgotPassword.js";
import AdminRoute from "./Components/Routes/AdminRoutes.js";
import AdminDashboard from "./Pages/Admin/AdminDashboard.js";
import CreateCourse from "./Pages/Admin/CreateCourse.js";
import CreateProduct from "./Pages/Admin/CreateProduct.js";
import Profile from "./Pages/User/Profile.js";
import Products from "./Pages/Admin/Products.js";
import UpdateProduct from "./Pages/Admin/UpdateProduct.js";
import Search from "./Pages/Search.js";
import ProductDetails from "./Pages/ProductDetails.js";
import Categories from "./Pages/Coursess.js";
import CategoryProduct from "./Pages/CategoryProduct.js";
import LandingPage from "./Pages/LandingPage.js";
import ResearchPapers from "./Pages/ResearchPapers.js";
import VideoGallery from "./Pages/VideoGallery.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/papers" element={<ResearchPapers />} />
        <Route path="/videos" element={<VideoGallery />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* USER ROUTES */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCourse />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route
            path="admin/update-product/:slug"
            element={<UpdateProduct />}
          />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
