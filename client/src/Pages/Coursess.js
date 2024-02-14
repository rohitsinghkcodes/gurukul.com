import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layouts/Layout.js";
import useCourse from "../hooks/useCourse.js";

const Courses = () => {
  const courses = useCourse();
  return (
    <Layout title="All Courses | E-Commerce App">
      <div className="container mt-2">
        <h1>All Courses</h1>
        <div className="row mt-4">
          {courses.map((c) => (
            <div className="col-md-4 d-flex justify-content-center" key={c._id}>
              <Link
                to={`/course/${c.slug}`}
                className=" card category-tiles p-5 m-2"
                style={{ minWidth: "50vh" }}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
