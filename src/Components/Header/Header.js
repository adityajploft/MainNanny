import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// React-router-dom for navigation
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
// react-bootstap
import { Container, Image, Nav, NavLink, Navbar } from "react-bootstrap";

// formik 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation formik yup 
const validationSchema = Yup.object().shape({
  loginName: Yup.string().required("Login Name is required"),
  loginPin: Yup.string().required("Login Pin is required"),
  emailAddress: Yup.string().email("Invalid email address").required("Email Address is required"),
  password: Yup.string().required("Password is required"),
});

const handleSubmit = (values) => {
  console.log(values);

};

const Header = () => {
  // login modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // forgot password modal 
  const [showPassword, setShowPassword] = useState(false);
  const handleClosePassword = () => setShowPassword(false);
  const handleShowPassword = () => setShowPassword(true);

  const [activeTab, setActiveTab] = useState("nanny");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const [isshow, setIsShow] = useState(false)
  let navigate = useNavigate();

  return (
    <>
      <Navbar className="hdr" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="p-0">
              <Image
                src={logo}
                alt={"Flite Logo"}
                fluid={true}
                className={"Hlogo"}
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img src="https://v1.checkprojectstatus.com/maids_nanny/img/menu.svg"  alt=""/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gx-5 menu-links">
              <NavLink className="active" onClick={() => navigate("/")}>
                Home
              </NavLink>

              <NavLink onClick={() => navigate("/searchnannies")}>
                Search Nannies
              </NavLink>
              <NavLink onClick={() => navigate("/serviceplan")}>
                Service Plans
              </NavLink>
              <NavLink>
                <Dropdown className="drp-bt">
                  <Dropdown.Toggle id="dropdown-basic">
                    Other Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="drp-bt-nemu">
                    <Dropdown.Item onClick={() => navigate("/visa")}>
                      Visa & Sponsorship
                    </Dropdown.Item>
                    <Dropdown.Item to="#">Another action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavLink>
              <NavLink onClick={() => navigate("/blog")}>Blog</NavLink>
              <NavLink onClick={() => navigate("/about")}>About Us</NavLink>
              <NavLink onClick={() => navigate("/contactUs")}>
                Contact Us
              </NavLink>
            </Nav>
            <Nav className="mbl-marg align-items-center">
              <span className="p-2 lne-mtr d-flex align-items-center">|</span>
              <NavLink
                to={"/login"}
                className={"nav-link"}
                onClick={() => navigate("/register")}
              >
                Register
              </NavLink>
              <NavLink type="button" className="btn-type1" onClick={handleShow}>
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Login && Register model */}

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-body">
          <div className="heading_sec1">
            <h3>Login</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="modal_content">
            <Formik
              initialValues={{
                loginName: "",
                loginPin: "",
                emailAddress: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === "nanny" ? "active" : ""}`}
                          data-bs-toggle="tab"
                          onClick={() => handleTabClick("nanny")}
                        >
                          Nanny
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${activeTab === "employer" ? "active" : ""}`}
                          data-bs-toggle="tab"
                          onClick={() => handleTabClick("employer")}
                        >
                          Employer
                        </Link>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className={`tab-pane ${activeTab === "nanny" ? "active" : ""}`} id="nanny">
                        <div className="modal_tab_content">
                          <div className="col-md-12">
                            <div className="form-group">
                              <Field
                                type="text"
                                name="loginName"
                                placeholder="Login Name"
                                className="form-control"
                              />
                              <ErrorMessage name="loginName" component="div" className="error-message" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Field
                                type="text"
                                name="loginPin"
                                placeholder="Login Pin '1234'"
                                className="form-control"
                              />
                              <ErrorMessage name="loginPin" component="div" className="error-message" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group text-center mb-0">
                              <label className="mb-3">
                                <Link to="/" data-bs-toggle="modal" data-bs-target="#forgotpin_modal">
                                  Forgot Pin?
                                </Link>
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mt-1 text-center">
                              <button type="submit" className="btn btn-type1">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group text-center mb-0">
                              <label className="mb-0">
                                New User? <Link to="/register">Register</Link>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`tab-pane ${activeTab === "employer" ? "active" : ""}`} id="employer">
                        <div className="modal_tab_content">
                          <div className="col-md-12">
                            <div className="form-group">
                              <Field
                                type="text"
                                name="emailAddress"
                                placeholder="Email Address"
                                className="form-control"
                              />
                              <ErrorMessage name="emailAddress" component="div" className="error-message" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                              />
                              <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group text-center mb-0">
                              <label className="mb-3">
                                <Link
                                  to="/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forgotpassword_modal"
                                  onClick={handleShowPassword}
                                >
                                  Forgot Password?
                                </Link>
                              </label>
                            </div>
                            <div>
                              <Modal show={showPassword} onHide={handleClosePassword}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                  <div className="modal-body">
                                    <div className="heading_sec1">
                                      <h3>Forgot Password</h3>
                                      <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                      </p>
                                    </div>
                                    <div className="modal_content">
                                      <form>
                                        <div className="row">
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
                                                <Link
                                                  to="/"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#login_modal"
                                                >
                                                  Back to Login
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
                          <div className="col-md-12">
                            <div className="form-group mt-1 text-center">
                              <button type="submit" className="btn btn-type1">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group text-center mb-0">
                              <label className="mb-0">
                                New User? <Link to="/register">Register</Link>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Header;
