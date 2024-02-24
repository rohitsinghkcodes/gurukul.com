import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
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
        <h1>Course: {course}</h1>
       <div className="d-flex flex-wrap">
       {videosList.map((product) => (
          <div
            className="card m-2 bg-dark product-card"
            style={{ width: "20rem" }}
          >
            <div className="d-flex justify-content-center rounded-5 p-3 pb-0">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=7KDRqBpT8NA"
                controls
                light={true}
                width={"24rem"}
                height={"10rem"}
              />
            </div>

            <div className="card-body product-card">
              <h6
                className="card-title"
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {product.name}
              </h6>
              <p
                className="card-text"
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {product.description}
              </p>
              <div className="btn btn-outline-warning w-100 rounded-3">Edit</div>
            </div>
          </div>
        ))}
       </div>
      </div>
    </Layout>
  );
};

export default CourseVideos;
