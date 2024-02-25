import express from "express";
import {
  createCourseController,
  updateCourseController,
  courseController,
  getSingleCourseController,
  deleteCourseController,
  courseImageController,
} from "../controllers/courseController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

//router object
const router = express.Router();

//^ ######## ROUTES ########
//~ CREATE CATEGORY
router.post(
  "/create-course",
  requireSignIn,
  isAdmin,
  formidable(),
  createCourseController
);

//~ UPDATE COURSE
router.put(
  "/update-course/:id",
  requireSignIn,
  isAdmin,
  formidable(),
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
router.get("/course-image/:cid", courseImageController);

//exporting the routers
export default router;
