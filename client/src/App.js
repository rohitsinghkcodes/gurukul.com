import { Route, Routes } from "react-router-dom";
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
import CreateVideo from "./Pages/Admin/AddVideosToCourse.js";
import Profile from "./Pages/User/Profile.js";
import Products from "./Pages/Admin/AllCoursesVideos.js";
import Search from "./Pages/Search.js";
import ResearchPaperViewer from "./Pages/ResearchPaperViewer.js";
import Courses from "./Pages/Courses.js";
import CategoryProduct from "./Pages/CoursesPlaylist__.js";
import LandingPage from "./Pages/LandingPage.js";
import ResearchPapers from "./Pages/ResearchPapers.js";
import VideoGallery from "./Pages/VideoGallery.js";
import CourseVideos from "./Pages/Admin/CourseVideos.js";
import UpdateVideoDetails from "./Pages/Admin/UpdateVideoDetails.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/papers" element={<ResearchPapers />} />
        <Route path="/course/videos/:slug" element={<VideoGallery />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/research-paper-viewer/:slug" element={<ResearchPaperViewer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-courses" element={<Courses />} />
        <Route path="/course/:slug" element={<CategoryProduct />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* USER ROUTES */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCourse />} />
          <Route path="admin/create-product" element={<CreateVideo />} />
          <Route path="admin/products/:slug" element={<CourseVideos />} />
          <Route
            path="admin/products/:slug/update-video/:slug"
            element={<UpdateVideoDetails />}
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
