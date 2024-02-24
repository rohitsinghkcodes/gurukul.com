import Layout from "../Components/Layouts/Layout";
import ReactPlayer from "react-player/lazy";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VideoGallery = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [videosList, setVideosList] = useState([]);
  const [course, setCourse] = useState("");
  const [video, setVideo] = useState({});

  //*GET ALL VIDEOS
  const getAllVideos = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/videos/course-video/${params.slug}`
      );
      if (data?.success) {
        setVideosList(data?.videos);
        setCourse(data?.course.name);
        setVideo(data?.videos[0]);
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
      <div className="m-4">
        {videosList.length > 0 ? (
          <div className="row">
            <div className="col-md-4">
              <div className="card card-bg p-2 rounded-4">
                <h2 className="px-2 pt-2 ">{course} Playlist</h2>
                {videosList.map((v, i) => (
                  <div
                    className={`card  p-3 mt-2 ${
                      v?._id == video?._id ? "vid-bg" : "bg-black text-light"
                    }`}
                    onClick={() => setVideo(v)}
                  >
                    <div className="row">
                      <div className="col-4">
                        <div>
                          <img
                            src={`https://img.youtube.com/vi/7KDRqBpT8NA/mqdefault.jpg`}
                            alt=""
                            width={"98%"}
                          />
                        </div>
                      </div>
                      <div className="col ms-1">
                        <h6>{v.name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-8">
              <div className="player-container">
                <ReactPlayer
                  url={video?.link}
                  width="100%"
                  height="480px"
                  controls
                />
              </div>
              <div className="card text-light card-bg p-3 rounded-4 mt-3">
                <h2 className="p-2 mt-3">{video?.name}</h2>
                <p className="p-2">{video?.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="m-5">
            <h1 className="">{course} Course</h1>
            <p className="text-light pt-2">Sorry! 0 Videos Found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VideoGallery;
