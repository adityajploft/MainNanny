import React, { useState } from "react";
import nanny_profile from "../../assets/img/nanny_profile.jpg";
import heart_ic from "../../assets/img/heart_ic.svg";
import share from "../../assets/img/share.svg";
import calendar_ic from "../../assets/img/calendar_ic.svg";
import location_ic from "../../assets/img/location_ic.svg";
import category_ic from "../../assets/img/category_ic.svg";
import flag_ic from "../../assets/img/flag_ic.svg";
import right_arrow from "../../assets/img/right_arrow.svg";
import call_ic from "../../assets/img/call_ic.svg";
import wts_ic from "../../assets/img/wts_ic.svg";
import email_ic from "../../assets/img/email_ic.svg";
// import vid_image from "../../assets/img/vid_image.svg"
// import vid_image from "../../assets/img/vid_image.svg"

import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const NannyDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // details
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = (event) => {
    event.preventDefault();
    setShowDetails(true);
  };
  // model for login

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = (event) => {
    event.preventDefault();
    setShowLogin(true);
  };

  return (
    <>
      <section className="nannydetail_sec">
        <div className="container">
          <div className="nannydetail_sec_in">
            <div className="row">
              <div className="col-md-12">
                <div className="nannydetail_sec_head nannydetail_box">
                  <div className="nannydetail_sec_img">
                    <img src={nanny_profile} />
                  </div>
                  <div className="nannydetail_sec_con">
                    <div className="profile_itm_head">
                      <h4>Annabele Enobio</h4>
                      <div className="profile_mts">
                        <div className="profile_mt">
                          Posted On: <span>22-05-2023</span> | Location:{" "}
                          <span>Saudi Arabia</span> | Desired monthly salary:{" "}
                          <span>AED 2500-3200</span>
                        </div>
                        <div className="profile_mts_meta">
                          <div className="profile_itm_heart">
                            <img src={heart_ic} />
                          </div>
                          <div className="profile_itm_share">
                            <img src={share} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nannydetail_bio">
                      <h5>Bio:</h5>
                      <p>
                        I have been working in the UAE for 4 years as a
                        nanny/maid with 2 employers. My first employer is a
                        local family, they have 4 kids ages 7, 10, 14 and 16. My
                        second employer is also a local family, I took care of
                        their grandchildren, 5 year old twins and 3 years old. I
                        can cook basic food, but I can follow recipes and I am
                        willing to learn. I am available to start anytime.
                      </p>
                    </div>
                    <div className="profile_itm_meta">
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src={calendar_ic} />
                        </i>
                        <span>38 Year Old</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src={location_ic} />
                        </i>
                        <span>Filipino</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src={category_ic} />
                        </i>
                        <span>Nanny</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src={flag_ic} />
                        </i>
                        <span>Full time live out</span>
                      </div>
                    </div>
                    <div className="nannydetail_sec_btn">
                      <button
                        to="/"
                        onClick={handleShow}
                        className="btn btn-type2"
                      >
                        <span>Contact to Nanny</span>
                        <i>
                          <img src={right_arrow} />
                        </i>
                      </button>
                      <Link to="/" className="btn btn-type1 ms-2">
                        Watch Video
                      </Link>
                    </div>
                    {/* model */}
                    <Modal show={show} onHide={handleClose}>
                      <div className="modal-dialog modal-md">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                          <div className="modal-body">
                            <div className="heading_sec1">
                              <h3>Want To Contact Now</h3>
                              <p>
                                First you register here and then get in touch
                                with the nannies
                              </p>
                            </div>
                            <div className="modal_content">
                              <form>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group mt-1 text-center">
                                      <button
                                        onClick={handleShowDetails}
                                        className="btn btn-type1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#contactsubscribe_modal"
                                      >
                                        Register Here
                                      </button>
                                    </div>
                                    {/* nanny details */}
                                    <div>
                                      <Modal
                                        show={showDetails}
                                        onHide={handleCloseDetails}
                                      >
                                        <div className="modal-dialog modal-md">
                                          <div className="modal-content">
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                            <div className="modal-body">
                                              <div className="heading_sec2 heading_sec_left">
                                                <h3>Contact Details</h3>
                                              </div>
                                              <div className="modal_content">
                                                <div className="contactdetail_sec">
                                                  <div className="nannydetail_sec_img">
                                                    <img src={nanny_profile} />
                                                  </div>
                                                  <div className="nannydetail_sec_con">
                                                    <h5>Annabele Enobio</h5>
                                                    <ul className="contactdetail_sec_itms">
                                                      <li>
                                                        <Link to="#">
                                                          <i>
                                                            <img
                                                              src={call_ic}
                                                            />
                                                          </i>
                                                          <div className="contactdetail_sec_itm_cn">
                                                            <span>
                                                              Contact Number
                                                            </span>
                                                            <p>
                                                              +971 - 0213654789
                                                            </p>
                                                          </div>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link to="/">
                                                          <i>
                                                            <img src={wts_ic} />
                                                          </i>
                                                          <div className="contactdetail_sec_itm_cn">
                                                            <span>
                                                              Contact Number
                                                            </span>
                                                            <p>
                                                              +971 - 0213654789
                                                            </p>
                                                          </div>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link to="/">
                                                          <i>
                                                            <img
                                                              src={email_ic}
                                                            />
                                                          </i>
                                                          <div className="contactdetail_sec_itm_cn">
                                                            <span>
                                                              Email Address
                                                            </span>
                                                            <p>
                                                              annabele_enobio@gmail.com
                                                            </p>
                                                          </div>
                                                        </Link>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group text-center mb-0">
                                      <label className="mb-0">
                                        <span>Already have an account?</span>
                                        <br />
                                        <button
                                          // to="/"

                                          data-bs-toggle="modal"
                                          data-bs-target="#login_modal"
                                          onClick={handleShowLogin}
                                        >
                                          Login
                                        </button>
                                      </label>
                                    </div>
                                    {/* Login model  */}
                                    <div>
                                      <Modal
                                        show={showLogin}
                                        onHide={handleCloseLogin}
                                      >
                                        <div className="modal-dialog modal-md">
                                          <div className="modal-content">
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                            <div className="modal-body">
                                              <div className="heading_sec1">
                                                <h3>Login</h3>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry.
                                                </p>
                                              </div>
                                              <div className="modal_content">
                                                <form>
                                                  <div className="row">
                                                    <div className="col-md-12">
                                                      {/* <!-- Nav tabs --> */}
                                                      <ul className="nav nav-tabs">
                                                        <li className="nav-item">
                                                          <Link
                                                            className="nav-link active"
                                                            data-bs-toggle="tab"
                                                            to="/"
                                                          >
                                                            Nanny
                                                          </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                          <Link
                                                            className="nav-link"
                                                            data-bs-toggle="tab"
                                                            to="/"
                                                          >
                                                            Employer
                                                          </Link>
                                                        </li>
                                                      </ul>

                                                      {/* <!-- Tab panes --> */}
                                                      <div className="tab-content">
                                                        <div
                                                          className="tab-pane active"
                                                          id="nanny"
                                                        >
                                                          <div className="modal_tab_content">
                                                            <div className="col-md-12">
                                                              <div className="form-group">
                                                                <input
                                                                  type="text"
                                                                  name=""
                                                                  placeholder="Login Name"
                                                                  className="form-control"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group">
                                                                <input
                                                                  type="text"
                                                                  name=""
                                                                  placeholder="Login Pin '1234'"
                                                                  className="form-control"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group text-center mb-0">
                                                                <label className="mb-3">
                                                                  <Link
                                                                    to="/"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#forgotpin_modal"
                                                                  >
                                                                    Forgot Pin?
                                                                  </Link>
                                                                </label>
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group mt-1 text-center">
                                                                <button
                                                                  type="button"
                                                                  className="btn btn-type1"
                                                                >
                                                                  Submit
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group text-center mb-0">
                                                                <label className="mb-0">
                                                                  New User?{" "}
                                                                  <Link to="/">
                                                                    Register
                                                                  </Link>
                                                                </label>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="tab-pane fade"
                                                          id="family"
                                                        >
                                                          <div className="modal_tab_content">
                                                            <div className="col-md-12">
                                                              <div className="form-group">
                                                                <input
                                                                  type="text"
                                                                  name=""
                                                                  placeholder="Email Address"
                                                                  className="form-control"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group">
                                                                <input
                                                                  type="text"
                                                                  name=""
                                                                  placeholder="Password"
                                                                  className="form-control"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group text-center mb-0">
                                                                <label className="mb-3">
                                                                  <Link
                                                                    to="/"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#forgotpassword_modal"
                                                                  >
                                                                    Forgot
                                                                    Password?
                                                                  </Link>
                                                                </label>
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group mt-1 text-center">
                                                                <button
                                                                  type="button"
                                                                  className="btn btn-type1"
                                                                >
                                                                  Submit
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="form-group text-center mb-0">
                                                                <label className="mb-0">
                                                                  New User?{" "}
                                                                  <Link to="/">
                                                                    Register
                                                                  </Link>
                                                                </label>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Modal>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nannydetail_box">
                  <h4>Personal Info</h4>
                  <ul className="nannydetail_box_itms">
                    <li>
                      <span>Candidate ID:</span>{" "}
                      <span className="nannydetail_box_itm_value">CN7864</span>
                    </li>
                    <li>
                      <span>Registered Date:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        12/05/2023
                      </span>
                    </li>
                    <li>
                      <span>Religion:</span>{" "}
                      <span className="nannydetail_box_itm_value">Others</span>
                    </li>
                    <li>
                      <span>Nationality:</span>{" "}
                      <span className="nannydetail_box_itm_value">Nepal</span>
                    </li>
                    <li>
                      <span>Current Location:</span>{" "}
                      <span className="nannydetail_box_itm_value">Dubai</span>
                    </li>
                    <li>
                      <span>Recommendation:</span>{" "}
                      <span className="nannydetail_box_itm_value">No</span>
                    </li>
                    <li>
                      <span>Preferred Location:</span>{" "}
                      <span className="nannydetail_box_itm_value">N/A</span>
                    </li>
                    <li>
                      <span>Visa Status:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Company Visa
                      </span>
                    </li>
                    <li>
                      <span>Age:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        39 years, 5 months
                      </span>
                    </li>
                    <li>
                      <span>Date Of Birth:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        06/12/1983
                      </span>
                    </li>
                    <li>
                      <span>Languages:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        English, Hindi, Urdu, Nepali
                      </span>
                    </li>
                    <li>
                      <span>Marital Status:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Married (2Kids)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nannydetail_box">
                  <h4>Salary & Experience</h4>
                  <ul className="nannydetail_box_itms">
                    <li>
                      <span>Position:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Full time live in
                      </span>
                    </li>
                    <li>
                      <span>Expected Salary:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        AED 2500-3200
                      </span>
                    </li>
                    <li>
                      <span>Available From:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        05/12/2023
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - UAE:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Beginner
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - GCC:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        9-12 years
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - Others:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        9-12 years
                      </span>
                    </li>
                  </ul>
                  <div className="nannydetail_experties">
                    <h4>Experties</h4>
                    <ul className="experties_itms">
                      <li>Babycare</li>
                      <li>Housecleaning</li>
                      <li>Petcare</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nannydetail_video" id="video_sec">
            <div className="heading_sec1">
              <h3>About Nanny</h3>
            </div>
            <div className="nannydetail_video_in">
              <div className="nannydetail_video_img">
                <img src="img/vid_image.jpg" alt="video is not here" />
              </div>
              <div className="nannydetail_video_btn">
                <button to="/">
                  <img src="img/video_play.svg" alt="video is not here" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NannyDetails;
