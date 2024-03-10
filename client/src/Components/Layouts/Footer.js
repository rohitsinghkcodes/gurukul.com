import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
    // <footer className=" footer py-4 mt-4">
    //   <ul className="nav justify-content-center border-dark  mb-3">
    //     <li className="nav-item">
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/policy">Privacy Policy</Link>
    //     </li>
    //   </ul>
    //   <hr className="mx-5" />
    //   <div className="d-flex container justify-content-between">
    //     <h5 className="">All rights reserved &copy; gurukulcse.com</h5>
    //     <div>
    //       <div className="btn btn-outline-light rounded-5 py-2">
    //         <FaInstagram />
    //       </div>
    //       <div className="btn btn-outline-light rounded-5 ms-2 py-2">
    //         <FaFacebookF />
    //       </div>
    //       <div className="btn btn-outline-light rounded-5 ms-2 py-2">
    //         <FaXTwitter />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="text-center footer">
      <section className>
        <div className="container text-center text-md-start pt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className=" f-head" />
                gurukulcse.com
              </h6>
            </div>
            <div className="col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link className="f-link" to="/about">
                  About
                </Link>
              </p>
              <p>
                <Link className="f-link" to="/policy">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="col-md-6 col-xl-6 mx-auto mb-md-0 mb-4 ">
              <h6 class="text-uppercase fw-bold mb-4">CONTACT US</h6>
              <div className="row">
                <div className="col">
                  {" "}
                  <p className="f-link">
                    <IoHome /> &ensp;Greater Noida, 203209, India
                  </p>
                  <p className="f-link">
                    <IoMdMail />
                    &ensp;gurukulcse@gmail.com
                  </p>
                  <p className="f-link">
                    <FaInstagram /> &ensp;Instagram
                  </p>
                  <p className="f-link">
                    <FaGithub /> &ensp;Github
                  </p>
                </div>
                <div className="col">
                  <p className="f-link">
                    <FaInstagram /> &ensp;Instagram
                  </p>
                  <p className="f-link">
                    <FaFacebookF /> &ensp;Facebook
                  </p>
                  <p className="f-link">
                    <FaXTwitter /> &ensp;Twitter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {"</> "}gurukulcse.com | &ensp;All rights reserved &copy; gurukulcse.com
      </div>
    </footer>
  );
};

export default Footer;
