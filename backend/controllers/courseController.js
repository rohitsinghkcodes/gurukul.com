import courseModel from "../models/courseModel.js";
import slugify from "slugify";

//* CREATE NEW Course CONTROLLER
export const createCourseController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ msg: "Name is required!" });
    }

    const existingCourse = await courseModel.findOne({ name });

    if (existingCourse) {
      return res.status(400).send({
        msg: "Course already exists!",
      });
    }

    const course = await new courseModel({
      name,
      slug: slugify(name),
    }).save();

    res.status(201).send({
      success: true,
      msg: "New Course Created.",
      course,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error in Course Creation!", err });
  }
};

//* UPDATE Course CONTROLLER
export const updateCourseController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const course = await courseModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      msg: "Course Updated Successfully",
      course,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error while updating Course!", err });
  }
};

//* GET ALL Courses CONTROLLER
export const courseController = async (req, res) => {
  try {
    const courses = await courseModel.find({});
    res.status(200).send({
      success: true,
      msg: "Courses Fetched Successfully!",
      courses,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error while fetching Courses!", err });
  }
};

//* GET SINGLE Course CONTROLLER
export const getSingleCourseController = async (req, res) => {
  try {
    const course = await courseModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      msg: "Course Fetched Successfully!",
      course,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error while fetching Course!", err });
  }
};

//* DELETE Course CONTROLLER
export const deleteCourseController = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      msg: "Course Deleted Successfully!",
      course,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error while deleting Course!", err });
  }
};
