import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";
import Layout from "../Components/Layouts/Layout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const YouTubePlayerPage = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [paperData, setPaperData] = useState([]);

  const getAllPaperData = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/papers/get-single-paper/${params.slug}`
      );
      if (data?.success) {
        setPaperData(data.paper);
      }
    } catch (error) {
      toast.error("Something went wrong while fethcing research papers!");
    }
  };
  

  useEffect(() => {
    getAllPaperData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <div className="m-5">
        <div className="card rounded-5 bg-transparent text-light">
          <div className="row ">
            <div className="col-md-5">
              <img
                src={`https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_1`}
                className="rounded-5 img-fluid"
                style={{ width: "600px", maxHeight: "600px" }}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5
                  style={{
                    fontSize: "35px",
                    color: "#8a2be2",
                  }}
                >
                  {paperData.name}
                </h5>
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {paperData.description}
                </p>
                <p className="text-secondary">
                  Last Updated {paperData.pdf}
                </p>

                <div className="text-center d-flex justify-content-between">
                  <button
                    className="btn btn-danger mt-4 py-3 "
                    style={{
                      width: "40%",
                      borderRadius: "20px",
                    }}
                  >
                    <FaDownload
                      size="25px"
                      style={{ justifyContent: "center", alignItems: "center" }}
                    />{" "}
                    &ensp; Download Paper
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

export default YouTubePlayerPage;
