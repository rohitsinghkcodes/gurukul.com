import React from "react";
import Layout from "../Components/Layouts/Layout";
import ReactPlayer from "react-player/lazy";

const VideoGallery = () => {
  // const cardData = Array.from({ length: 5 }, (_, index) => index);
  return (
    <Layout>
      {/* <div className="container mt-5 text-poppins mb-5 ">
        <h1 className=" mb-2 ms-4 ">Youtube Videos</h1>
        <div className="d-flex justify-content-center row mx-4 ">
          {cardData.map((index) => (
            <div
              className="card mb-3 rounded-4 px-4"
              style={{ minWidth: "100vh" }}
              key={index}
            >
              <div className="row g-0 ">
                <div className="col-md-2 py-4">
                  <img 
                    src="https://cdn.pixabay.com/photo/2020/03/19/13/58/youtube-4947559_1280.jpg"
                    className="img-fluid  rounded-4 "
                    alt="..."
                  />
                </div>
                <div className="col-md-9 py-3">
                  <div className="card-body ">
                    <h5 className="card-title ">Video {index}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="m-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-light bg-dark p-3 rounded-4">
              <h2>Algorithms</h2>
              <p>Title number 1</p>
              <p>Title number 2</p>
              <p>Title number 3</p>
              <p>Title number 4</p>
              <p>Title number 5</p>
              <p>Title number 6</p>
            </div>
          </div>
          <div className="col-md-8">
          <div className="player-container">
      <ReactPlayer
        url={[
          "https://www.youtube.com/watch?v=oUFJJNQGwhk",
          "https://www.youtube.com/watch?v=jNgP6d9HraI",
        ]}
        width="100%"
        height="480px"
        controls
      />
    </div>
            <div className="card text-light bg-dark p-3 rounded-4 mt-2">
              <h2 className="p-2 mt-3">
                Youtube video description || New Video
              </h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                assumenda molestias sapiente tempora sint quas. Nostrum, optio
                veniam accusamus a voluptates in reiciendis voluptatum inventore
                minus culpa eligendi debitis laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoGallery;
