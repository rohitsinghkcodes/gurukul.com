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
import CoursesVideos from "./Pages/Admin/AllCoursesVideos.js";
import Search from "./Pages/Search.js";
import ResearchPaperViewer from "./Pages/ResearchPaperViewer.js";
import Courses from "./Pages/Courses.js";
import Notes from "./Pages/Notes.js";
import CategoryProduct from "./Pages/CoursesPlaylist__.js";
import LandingPage from "./Pages/LandingPage.js";
import ResearchPapers from "./Pages/ResearchPapers.js";
import VideoGallery from "./Pages/VideoGallery.js";
import CourseVideos from "./Pages/Admin/CourseVideos.js";
import UpdateVideoDetails from "./Pages/Admin/UpdateVideoDetails.js";
import ManagePapers from "./Pages/Admin/ManagePapers.js";
import ManageNotes from "./Pages/Admin/ManageNotes.js";
import UpdatePaperDetails from "./Pages/Admin/UpdatePaperDetails.js";
import UpdateNotes from "./Pages/Admin/UpdateNotes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/course/:slug" element={<CategoryProduct />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/papers" element={<ResearchPapers />} />
        <Route path="/course/videos/:slug" element={<VideoGallery />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route
          path="/research-paper-viewer/:slug"
          element={<ResearchPaperViewer />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-courses" element={<Courses />} />
        <Route path="/all-notes" element={<Notes />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* USER ROUTES */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-course" element={<CreateCourse />} />
          <Route path="admin/manage-papers" element={<ManagePapers />} />
          <Route path="admin/manage-notes" element={<ManageNotes />} />
          <Route
            path="admin/manage-papers/update-papers/:slug"
            element={<UpdatePaperDetails />}
          />
          <Route
            path="admin/manage-notes/update-notes/:slug"
            element={<UpdateNotes />}
          />
          <Route path="admin/add-videos" element={<CreateVideo />} />
          <Route path="admin/courses/:slug" element={<CourseVideos />} />
          <Route
            path="admin/courses/:slug/update-video/:slug"
            element={<UpdateVideoDetails />}
          />
          <Route path="admin/course-videos" element={<CoursesVideos />} />
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
