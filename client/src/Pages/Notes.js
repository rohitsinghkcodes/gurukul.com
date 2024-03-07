import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import { FaDownload } from "react-icons/fa6";

const Notes = () => {
  const [allSubNotes, setAllSubNotes] = useState([]);
  const navigate = useNavigate();

  const getAllNotes = async () => {
    try {
      const { data } = await axios.get(`/api/v1/notes/get-all-notes`);
      if (data?.success) {
        setAllSubNotes(data.all_sub_notes);
      }
    } catch (error) {
      toast.error("Something went wrong while fethcing research papers!");
    }
  };

  useEffect(() => {
    getAllNotes();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="container">
        <h3 className="ms-4 mt-5">All Notes</h3>
        <div className="d-flex flex-wrap">
          {allSubNotes.length > 0 ? (
            allSubNotes?.map((n) => (
              <div
                className="card rp-card mb-3 mx-2"
                style={{ width: "26rem" }}
                key={n._id}
              >
                <div
                  style={{
                    borderRadius: "20px 20px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/api/v1/notes/sub-image/${n._id}`}
                    alt="sunject-notes-img"
                    style={{
                      minWidth: "26rem",
                      height: "14rem",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="card-body ">
                  <h6
                    style={{
                      color: "white",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {n.name}
                  </h6>
                  <p
                    style={{
                      color: "#ffffffd3",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {n.description}
                  </p>
                  <p className="card-text text-secondary">
                    Last updated {moment(n.updatedAt).fromNow()}
                  </p>
                  <div className="text-center d-flex justify-content-center">
                    <a
                      href={n.pdfLink}
                      target="_blank"
                      className="btn btn-info py-3 px-4 "
                      style={{
                        width: "100%",
                        borderRadius: "20px",
                      }}
                    >
                      <FaDownload
                        size="25px"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />{" "}
                      &ensp; Download pdf
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-center text-secondary">
              No result found for selected filters
            </h4>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
