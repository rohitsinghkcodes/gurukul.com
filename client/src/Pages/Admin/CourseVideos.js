import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const { Option } = Select;

const CourseVideos = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState([]);
  const [course, setCourse] = useState("");

  //*GET ALL VIDEOS
  const getAllVideos = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/videos/course-video/${params.slug}`
      );
      if (data?.success) {
        setVideosList(data?.videos);
        setCourse(data?.course.name);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while getting getAllVideos!");
    }
  };

  useEffect(() => {
    getAllVideos();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <h1>{course}</h1>
        {videosList.map((v) => (
          <div className="card p-3 mt-2">
            <div className="row">
              <div className="col-6">
                <h4>{v.name}</h4>
                <p>{v.description}</p>
              </div>

              <div className="col">
                <div
                  className="btn btn-warning ms-2 px-5"
                  onClick={() => {
                    navigate(`update-video/${v.slug}`);
                  }}
                >
                  edit
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CourseVideos;
