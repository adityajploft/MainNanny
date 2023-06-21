// register for nannays
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register_For_Job from "../../assets/img/register_for_job.jpg";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {registerjob} from "../../Utils/ValidatianSchema"

const RegisterForJob = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // validation // form
  const handleSubmit = (values) => {
    // Handle form submission logic hoga yahha
    console.log(values);
  };
  return (
    <>
      <section className="register_s">
        <div className="container">
          <div className="register_s_in">
            <div className="row">
              <div className="col-md-6">
                <div className="register_s_img">
                  <img src={Register_For_Job} />
                </div>
                <div className="register_s_con mt-3">
                  <div className="heading_sec2">
                    <h3>Register For Nanny</h3>
                  </div>
                  <div className="register_s_pera">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.{" "}
                    </p>
                    <ul className="list_type2">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
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
                  <h4>Register to get contacted directly by families</h4>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      mobileNumber: "",
                      whatsappNumber: "",
                      loginName: "",
                      loginPin: "",
                      bio: "",
                    }}
                    validationSchema={registerjob}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="Enter First Name"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <Field
                              type="text"
                              name="lastName"
                              placeholder="Enter Last Name"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <Field
                              type="text"
                              name="mobileNumber"
                              placeholder="Enter Mobile Number"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="mobileNumber"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>WhatsApp Number</label>
                            <Field
                              type="text"
                              name="whatsappNumber"
                              placeholder="Enter WhatsApp Number"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="whatsappNumber"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Login Name</label>
                            <Field
                              type="text"
                              name="loginName"
                              placeholder="Enter Login Name"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="loginName"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label>Login Pin</label>
                            <Field
                              type="text"
                              name="loginPin"
                              placeholder="Enter Login Pin"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="loginPin"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group">
                            <label>Your Bio</label>
                            <Field
                              as="textarea"
                              name="bio"
                              placeholder="Tell us about you"
                              className="form-control"
                              rows="4"
                            />
                            <ErrorMessage
                              name="bio"
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group mt-1">
                            <button
                              type="submit"
                              className="btn btn-type1"
                               onClick={handleShow}
                            >
                              Continue to Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                  <div>
                    <Modal
                      className="search-modal"
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <div className="modal-body">
                          <div className="heading_sec1">
                            <h3>Verify Number</h3>
                            <p>
                              Enter OTP Which one send to your mobile number XXX
                              XXXX XX01
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
                                      to="/registerformsubmit"
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
                                      <Link to="#">Resend</Link>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForJob;
