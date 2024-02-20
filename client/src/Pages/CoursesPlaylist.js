import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";
import ReactPlayer from "react-player/youtube";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState([]);
  const [course, setCourse] = useState({});

  //*GET ALL VIDEOS
  const getAllVideos = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/videos/course-video/${params.slug}`
      );
      if (data?.success) {
        setVideosList(data?.videos);
        setCourse(data?.course);
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
      <div className="container mt-5 ">
        <h2 className="ms-3">{course.name} Videos</h2>
        <div className="d-flex flex-wrap">
          {videosList.length > 0 ? (
            videosList?.map((product) => (
              <Link
                key={product._id}
                to={`/course/videos/${course.slug}`}
                className="product-link"
              >
                <div
                  className="card m-2 bg-dark product-card"
                  style={{ width: "20rem" }}
                >
                  <div className="d-flex justify-content-center rrounded-5 p-3 pb-0">
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
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h4 className="text-center text-secondary mt-5">
              No result found for selected filters
            </h4>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
