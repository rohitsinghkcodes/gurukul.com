import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa6";

const YouTubePlayerPage = () => {
  return (
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
                className="card-title"
                style={{
                  fontSize: "54px",
                }}
              >
                7787
              </h5>
              <p className="card-text">
                878878888888888888888888888888888888888888888888888888888888888888888888888888888888888888888lorem
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                quas corrupti atque expedita nulla error voluptate natus id
                suscipit excepturi eos sapiente necessitatibus praesentium,
                incidunt, impedit reiciendis quod quos pariatur!
              </p>
              <h6
                className="card-title"
                style={{
                  fontSize: "28px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "#a9a9a9",
                    verticalAlign: "super",
                  }}
                >
                  ₹
                </span>
                2424242
                <span
                  className="ms-1"
                  style={{ fontSize: "14px", color: "#a9a9a9" }}
                >
                  MRP:{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "13px",
                      color: "#a9a9a9",
                    }}
                  >
                    ₹242424
                  </span>
                  <span
                    className="ms-1"
                    style={{
                      fontSize: "18px",
                      color: "rgb(204, 204, 42) ",
                    }}
                  >
                    % off
                  </span>
                </span>
              </h6>

              {/* <div className="row text-center bg-transparent mt-4">
                  <div className="col-md-2">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <FaTruckFast
                        size="30px"
                        color="wheat"
                        style={{
                          transform: "rotateY(180deg)", // Fix the rotate property
                        }}
                      />
                      <p
                        className="m-0 mt-2" // Add margin to separate the text from the icon
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Free Delivery
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <IoMdCash size="30px" color="wheat" />
                      <p
                        className="m-0 mt-2" // Add margin to separate the text from the icon
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Pay on Delivery
                      </p>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <TbTruckReturn size="30px" color="wheat" />

                      <p
                        className="m-0 mt-2" // Add margin to separate the text from the icon
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        10 days replacement
                      </p>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <IoIosMedal size="30px" color="wheat" />

                      <p
                        className="m-0 mt-2" // Add margin to separate the text from the icon
                        style={{
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        Top Brand
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <RiSecurePaymentLine size="30px" color="wheat" />

                      <p
                        className="m-0 mt-2" // Add margin to separate the text from the icon
                        style={{
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        Secure Transaction
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div
                      className="container pt-3 m-2 rounded-4 d-flex flex-column align-items-center"
                      style={{
                        height: "100px",
                        backgroundColor: "rgba(65, 65, 65, 0.285)",
                      }}
                    >
                      <div className="d-flex flex-column align-items-center">
                        <MdOutlineAssignmentReturn size="30px" color="wheat" />
                        <p
                          className="m-0 mt-2"
                          style={{ fontSize: "12px", marginTop: "4px" }}
                        >
                          Non-Returnable
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

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
  );
};

export default YouTubePlayerPage;
