import React from "react";
import Layout from "../Components/Layouts/Layout";


const ResearchPapers = () => {
  const cardData = Array.from({ length: 5 }, (_, index) => index);

  return (
    <>
      <Layout>
      <div className="container mt-5 text-poppins mb-5 ">
        <h1 className="mb-2 ms-4 ">Research Papers</h1>
        <div className="d-flex justify-content-center row mx-4 ">
          {cardData.map((index) => (
            <div
              className="card mb-3 rounded-4 px-4"
              style={{ minWidth: "100vh" }}
              key={index}
            >
              <div className="row g-0">
                <div className="col-md-2 py-4">
                  <img
                    src="https://media.licdn.com/dms/image/D4D12AQHl1HFTvItqpw/article-cover_image-shrink_720_1280/0/1690440690219?e=2147483647&v=beta&t=fN3x7AxsHbO9VNmQS3rXS3QVymAzr5vDoTjmUMHea1w"
                    className="img-fluid rounded-4"
                    alt="..."
                  />
                </div>
                <div className="col-md-9 py-3">
                  <div className="card-body">
                    <h5 className="card-title">Paper {index}</h5>
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
      </div>
      </Layout>
    </>
  );
};

export default ResearchPapers;
