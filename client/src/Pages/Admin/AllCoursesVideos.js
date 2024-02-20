import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layouts/Layout.js";
import AdminMenu from "../../Components/Layouts/AdminMenu.js";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useCourse from "../../hooks/useCourse.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  //   const [image, setImage] = useState("")
  const courses = useCourse();

  //*GET ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/get-products");
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong While Fetching The Product!");
    }
  };

  //*LIFECYCLE METHOD
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="container mt-2">
              <h1>All Courses</h1>
              <div className="row mt-4">
                {courses.map((c) => (
                  <div
                    className="col-md-4 d-flex justify-content-center"
                    key={c._id}
                  >
                    <Link
                      to={`/dashboard/admin/products/${c.slug}`}
                      className=" card category-tiles p-4 m-2"
                      style={{ minWidth: "40vh" }}
                    >
                      {c.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
