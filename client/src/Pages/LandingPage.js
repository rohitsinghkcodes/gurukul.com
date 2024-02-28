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
        <div>
          <div className="container pt-4">
            {/* Crousel start */}
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
                    src="https://media.istockphoto.com/id/1284202542/vector/programming-language-python-conceptual-banner-education-coding-computer-language-python.jpg?s=612x612&w=0&k=20&c=DwTB320vMYH8MAnPjrwEeJqlWs1V4y10ExC0xcMmHig="
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-600nw-2149658893.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://img.freepik.com/premium-vector/colorful-banner-with-hands-working-computer-different-electronic-gadgets-devices-symbols-programming-software-development-program-coding_198278-4192.jpg"
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
            {/* Crousel end
            
            
            */}

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
                      className="card product-card mt-2"
                      style={{ width: "19rem" }}
                    >
                      <div
                        style={{
                          borderRadius: "20px 20px 0 0",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`/api/v1/courses/course-image/${product._id}`}
                          alt="course-img"
                          style={{ width: "19rem" }}
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
                            WebkitLineClamp: 3,
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
                <h4 className="text-center text-secondary">
                  No result found for selected filters
                </h4>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default HomePage;
