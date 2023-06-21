// Register For Nanny

import React, { useState } from "react";
import Register_For_Nanny from "../../assets/img/register_for_nanny.jpg";
import Whatsapp_ic from "../../assets/img/whatsapp_ic.svg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for email
  const [showEmail, setShowEmail] = useState(false);
  const handleCloseEmail = () => setShowEmail(false);
  const handleShowEmail = (e) => {
    e.preventDefault();
    setShowEmail(true);
  };

  return (
    <>
      <div className="main_sec">
        <section className="register_s">
          <div className="container">
            <div className="register_s_in">
              <div className="row">
                <div className="col-md-6">
                  <div className="register_s_img">
                    <img src={Register_For_Nanny} />
                  </div>
                  <div className="register_s_con mt-3">
                    <div className="heading_sec2">
                      <h3>Register For Nanny</h3>
                    </div>
                    <div className="register_s_pera">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry.{" "}
                      </p>
                      <ul className="list_type2">
                        <li>
                          Lorem Ipsum is simply dummy text of the printing
                        </li>
                        <li>Lorem Ipsum is simply dummy</li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing Lorem
                          Ipsum is simply dummy
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing for
                          more
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="register_s_form">
                    <h4>Register to get access to contact details</h4>
                    <form>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter First Name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter Last Name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter Mobile Number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>WhatsApp Number</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter WhatsApp Number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Email Address</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter Email Address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="text"
                              name=""
                              placeholder="Enter Password"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Position</label>
                            <select className="form-control">
                              <option>Select Position</option>
                              <option>Position</option>
                              <option>Position</option>
                              <option>Position</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Location</label>
                            <select className="form-control">
                              <option>Select Location</option>
                              <option>Location</option>
                              <option>Location</option>
                              <option>Location</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group mt-1">
                            <button
                              type="button"
                              className="btn btn-type1"
                              onClick={handleShow}
                            >
                              Continue to Register
                            </button>
                          </div>
                          <div>
                            <Modal
                              className="search-modal"
                              show={show}
                              onHide={handleClose}
                            >
                              <Modal.Header closeButton></Modal.Header>
                              <Modal.Body>
                                {/* verify Number */}
                                <div className="modal-body">
                                  <div className="heading_sec1">
                                    <h3>Verify Number</h3>
                                    <p>
                                      Enter OTP Which one send to your mobile
                                      number XXX XXXX XX01
                                    </p>
                                  </div>
                                  <div className="modal_content">
                                    <form>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter OTP"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group mt-1 text-center">
                                            <button
                                              // to="/"
                                              onClick={handleShowEmail}
                                              className="btn btn-type1"
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group text-center mb-0">
                                            <p className="otm_time">00:58</p>
                                            <label className="mb-0">
                                              You din't receive OTP?{" "}
                                              <Link to="/">Resend</Link>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                          {/* email verfy */}
                          <div>
                            <Modal
                              className="search-modal"
                              show={showEmail}
                              onHide={handleCloseEmail}
                            >
                              <Modal.Header closeButton></Modal.Header>
                              <Modal.Body>
                                <div className="modal-body">
                                  <div className="heading_sec1">
                                    <h3>Verify Email</h3>
                                    <p>
                                      Enter OTP Which one send to your Email
                                      address xyz@gmail.com
                                    </p>
                                  </div>
                                  <div className="modal_content">
                                    <form>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Enter OTP"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group mt-1 text-center">
                                            <Link
                                              to="/registersubmit"
                                              className="btn btn-type1"
                                            >
                                              Submit
                                            </Link>
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group text-center mb-0">
                                            <p className="otm_time">00:58</p>
                                            <label className="mb-0">
                                              You din't receive OTP?{" "}
                                              <Link to="/registerform">
                                                Resend
                                              </Link>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group mb-0">
                            <label className="mb-0">
                              If you already have an account?{" "}
                              <Link
                                to="/"
                                data-bs-toggle="modal"
                                data-bs-target="#login_modal"
                              >
                                Login
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="login_modal"

          aria-labelledby="login_modalLabel"
          aria-hidden="true"
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
                    Lorem Ipsum is simply dummy text of the printing and
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
                          <div className="tab-pane active" id="nanny">
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
                                    New User? <Link to="/">Register</Link>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="family">
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
                                      Forgot Password?
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
                                    New User? <Link to="/">Register</Link>
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
        </div>
        <div className="wts_fixed">
          <Link to="/">
            <img src={Whatsapp_ic} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
