import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import axios from "axios";
import CategoryForm from "../../Components/Form/CourseForm";
import { Modal } from "antd";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/courses/create-course", {
        name,
      });
      if (data.success) {
        toast.success(`${data.msg}`);
        getAllCategories();
      } else {
        toast.error(`${data.msg}`);
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err}`);
    }
  };

  //* GET ALL CATEGORIES
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

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/courses/update-course/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${data.msg}`);
        setSelected(null);
        setUpdatedName(null);
        setVisible(false);
        getAllCategories();
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
        `/api/v1/courses/delete-course/${id}`,
        { name: updatedName }
      );
      if (data.success) {
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
      <div className="text-center container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card card-dash p-5 rounded-5">
              <h3>Manage Courses</h3>
              <div className="my-3 ">
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Titles</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>

                          <td>
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {

                                setVisible(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger mx-2"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Modal
            title="Update Category"
            onCancel={() => setVisible(false)}
            footer={null}
            open={visible}
          >
            <CategoryForm
              edit={true}
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
