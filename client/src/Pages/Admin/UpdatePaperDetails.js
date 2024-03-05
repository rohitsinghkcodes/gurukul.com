import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
const { Option } = Select;

const UpdatePaperDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState("");

  const getSinglePaper = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/papers/get-single-paper/${params.slug}`
      );
      if (data?.success) {
        setName(data.paper.name);
        setDescription(data.paper.description);
        setLink(data.paper.pdfLink);
        setId(data.paper._id);
      }
    } catch (error) {
      toast.error("Something went wrong while fethcing research papers!");
    }
  };

  useEffect(() => {
    getSinglePaper();
    //eslint-disable-next-line
  }, []);

  //*handle Update paper Button
  const handleUpdatePaperBtn = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled

    if (!name) {
      toast.warning("tite field is empty!");
      return;
    }
    if (!description) {
      toast.warning("description field is empty!");
      return;
    }
    if (!link) {
      toast.warning("link field is empty!");
      return;
    }

    try {
      const paperData = new FormData();
      paperData.append("name", name);
      paperData.append("description", description);
      paperData.append("pdfLink", link);

      const { data } = await axios.put(
        `/api/v1/papers/update-paper/${id}`,
        paperData
      );
      if (data?.success) {
        toast.success(`${data?.msg}`);
        navigate("/dashboard/admin/manage-papers");
      } else {
        toast.error(`${data?.msg}`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong In Adding new paper!");
    }
  };

  //*handle Delete Product Button
  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    try {
      const confirm = window.prompt(
        'Type "yes" if you sure, you want to delete this product?'
      );
      if (!confirm) return;
      const { data } = await axios.delete(`/api/v1/papers/delete-paper/${id}`);
      if (data?.success) {
        toast.success(`${data?.msg}`);
        navigate("/dashboard/admin/manage-papers");
      } else {
        toast.error(`${data?.msg}`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong In Deleting The Paper!");
    }
  };

  return (
    <Layout title={"Dashboard - Products"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card card-dash p-5 rounded-5">
              <h3>Update Research Paper Details</h3>
              <div className="m-1 mt-2 ">
                <div className="mb-4">
                  <label className="form-label ">Title</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter the title of the paper"
                    className=" form-control "
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-light">Description</label>
                  <textarea
                    type="text"
                    value={description}
                    placeholder="Enter the description of the paper"
                    className="form-control "
                    style={{ height: "12rem" }}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-light">Pdf Link</label>
                  <input
                    type="string"
                    value={link}
                    placeholder="Enter the link of the pdf"
                    className=" form-control "
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <button
                    className="btn btn-info "
                    onClick={handleUpdatePaperBtn}
                  >
                    Update Details
                  </button>
                  <button
                    className="btn btn-danger ms-4 "
                    onClick={handleDeleteBtn}
                  >
                    Detete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePaperDetails;
