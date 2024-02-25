import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import axios from "axios";
import CategoryForm from "../../Components/Form/CourseForm";
import { Modal } from "antd";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner.js";
const { Option } = Select;

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [image, setImage] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [id, setId] = useState("");

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled

    if (!name) {
      toast.warning("NAME field is empty!");
      return;
    }
    if (!description) {
      toast.warning("DESCRIPTION field is empty!");
      return;
    }
    if (!image) {
      toast.warning("Image field is empty!");
      return;
    }

    try {
      const courseData = new FormData();
      courseData.append("name", name);
      courseData.append("description", description);
      courseData.append("image", image);

      const { data } = await axios.post(
        "/api/v1/courses/create-course",
        courseData
      );

      if (data.success) {
        toast.success(`${data.msg}`);
        setName("");
        setDescription("");
        setImage("");
        getAllCategories();
      } else {
        toast.error(`${data.msg}`);
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err}`);
    }
  };

  //* GET ALL Courses
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/courses/get-courses");
      if (data?.success) {
        setCategories(data?.courses);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong in getting courses!");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  //*update course
  const handleUpdate = async (e) => {
    // e.preventDefault();
    try {
      const courseData = new FormData();
      courseData.append("name", updatedName);
      courseData.append("description", updatedDescription);
      updatedImage && courseData.append("image", updatedImage);

      const { data } = await axios.put(
        `/api/v1/courses/update-course/${selected._id}`,
        courseData
      );
      if (data.success) {
        toast.success(`${data.msg}`);
        setSelected(null);
        setUpdatedName(null);
        setUpdatedDescription(null);
        setUpdatedImage(null);
        setVisible(false);
        toast.success("update successful");
        getAllCategories();
        console.log(categories);
      } else {
        toast.error(`${data.msg}`);
      }
    } catch (err) {
      toast.error("Something went wrong while editing course!!");
    }
  };
  //delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/courses/delete-course/${id}`
      );
      if (data?.success) {
        toast.success(`${data.msg}`);
        getAllCategories();
      } else {
        toast.error(`${data.msg}`);
      }
    } catch (err) {
      toast.error("Something went wrong while deleting course!");
    }
  };

  return (
    <Layout title={"Dashboard - Categories"}>
      <div className=" container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card card-dash p-2 rounded-5  ">
              <div className="d-grid text-center align-items-center w-100 m-0">
                <h3>Manage Courses</h3>
                <div className="my-3 ">
                  <CategoryForm
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    image={image}
                    setImage={setImage}
                  />
                </div>
              </div>
              <h4 className="mt-4">Courses</h4>
              <div className="d-flex flex-wrap ">
                {categories.length < 1 ? (
                  <div>
                    <p className="text-light">Available 0 courses.</p>
                  </div>
                ) : (
                  categories?.map((c) => (
                    <div
                      key={c._id}
                      className="card product-card m-1"
                      style={{ width: "22rem" }}
                    >
                      <div
                        style={{
                          borderRadius: "20px 20px 0 0",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`/api/v1/courses/course-image/${c._id}`}
                          alt="course-img"
                          style={{ width: "22rem" }}
                        />
                        <div className="row p-3">
                          <div className="">
                            <h4>{c.name}</h4>
                            <h6
                              style={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {c.description}
                            </h6>
                          </div>
                          <div className=" ">
                            <div
                              className="btn btn-sm btn-primary"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(c.name);
                                setUpdatedDescription(c.description);
                                setId(c._id);
                                setSelected(c);
                              }}
                            >
                              Edit
                            </div>
                            <div
                              className="btn btn-sm btn-danger ms-2"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              Delete
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <Modal
            title="Update Category"
            onCancel={() => setVisible(false)}
            footer={null}
            open={visible}
            width={900}
          >
            <CategoryForm
              edit={true}
              name={updatedName}
              setName={setUpdatedName}
              description={updatedDescription}
              setDescription={setUpdatedDescription}
              id={id}
              image={updatedImage}
              setImage={setUpdatedImage}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
