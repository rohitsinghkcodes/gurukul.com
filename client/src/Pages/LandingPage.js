import React from "react";
import Layout from "../Components/Layouts/Layout.js";
// import ReactPlayer from 'react-player/youtube'
import ReactPlayer from "react-player/lazy";
import useCourse from "../hooks/useCourse.js";
import { Link } from "react-router-dom";

const HomePage = () => {
  const courses = useCourse();

  return (
    <Layout title={"Portfolio"}>
      <>
        {/* Crousel */}
        <div>
          <div className="container pt-4">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner rounded-5"
                style={{ height: "60vh" }}
              >
                <div className="carousel-item active">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-summer-background-videocalls_52683-63099.jpg?w=1060&t=st=1706892226~exp=1706892826~hmac=cd6435ea20dcddacd6af78d6d9ff35f0e2a7af78ff82ae4e5d3aef11d2ce3475"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/07/12/19/51/americana-1512910_1280.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://wallpapers.com/images/hd/banner-5000-x-2500-picture-ujmnosb00yhs5z6i.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="ms-3 mt-5">Courses</h1>
              <Link to={`/all-courses`} className="me-5 mt-5 pt-4  show-all">
                Show All
              </Link>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly mt-2">
              {courses.length > 0 ? (
                courses?.slice(0, 4).map((product) => (
                  <Link
                    key={product._id}
                    to={`/course/videos/${product.slug}`}
                    className="product-link"
                  >
                    <div
                      className="card product-card"
                      style={{ width: "19rem" }}
                    >
                      <div style={{ borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=7KDRqBpT8NA"
                          controls
                          light={true}
                          width={"19rem"}
                          height={"10rem"}
                        />
                      </div>
                      <div className="card-body ">
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
                          ghikub{product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <h4 className="text-center text-secondary">
                  No result found for selected filters
                </h4>
              )}
            </div>
          </div>
        </div>
        {/* crousel end */}
      </>
    </Layout>
  );
};

export default HomePage;
