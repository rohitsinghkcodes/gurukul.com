import express from "express";
import {
  createCourseController,
  updateCourseController,
  courseController,
  getSingleCourseController,
  deleteCourseController,
} from "../controllers/courseController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//^ ######## ROUTES ########
//~ CREATE CATEGORY
router.post(
  "/create-course",
  createCourseController
);

//~ UPDATE CATEGORY
router.put(
  "/update-course/:id",
  requireSignIn,
  isAdmin,
  updateCourseController
);

//~ GET ALL CATEGORIES
router.get("/get-courses", courseController);

//~ GET SINGLE CATEGORY
router.get("/get-single-course/:slug", getSingleCourseController);

//~ DELETE CATEGORY
router.delete(
  "/delete-course/:id",
  requireSignIn,
  isAdmin,
  deleteCourseController
);

//~ GET PRODUCT IMAGE
router.get("/course-image/:cid", productImageController);

//exporting the routers
export default router;
