import React, { useState } from "react";
import { Link } from "react-router-dom";
import cross from "../../assets/img/cross.svg";
import Search_ic1 from "../../assets/img/search_ic1.svg";
import search_ic2 from "../../assets/img/search_ic2.svg";

import Heart_ic from "../../assets/img/heart_ic.svg";
import Calendar_ic from "../../assets/img/calendar_ic.svg";
import Right_arrow from "../../assets/img/right_arrow.svg";
import Video_ic from "../../assets/img/video_ic.svg";
import location_ic from "../../assets/img/location_ic.svg";
import category_ic from "../../assets/img/category_ic.svg";
import flag_ic from "../../assets/img/flag_ic.svg";
import right_ic from "../../assets/img/right_ic.svg";
import whatsapp_ic from "../../assets/img/whatsapp_ic.svg";
import calender1 from "../../assets/img/calender1.svg";
import left_ic from "../../assets/img/left_ic.svg";

// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

import { Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { searchNannoies } from "../../Utils/ValidatianSchema";

const SearchNannoies = () => {
  // ;

  //   const [lookingFor, setLookingFor] = useState([]);
  //   const [location, setLocation] = useState([]);
  //   const [nationality, setNationality] = useState([]);
  //   const [religion, setReligion] = useState([]);
  //   const [postStatus, setPostStatus] = useState([]);

  //   const handleLookingForChange = (selectedOptions) => {
  //     setLookingFor(selectedOptions);
  //   };

  //   const handleLocationChange = (selectedOptions) => {
  //     setLocation(selectedOptions);
  //   };

  //   const handleNationalityChange = (selectedOptions) => {
  //     setNationality(selectedOptions);
  //   };

  //   const handleReligionChange = (selectedOptions) => {
  //     setReligion(selectedOptions);
  //   };

  //   const handlePostStatusChange = (selectedOptions) => {
  //     setPostStatus(selectedOptions);
  //   };

  //   const lookingForOptions = [
  //     { label: 'Nanny', value: 'Nanny' },
  //     { label: 'Maid', value: 'Maid' },
  //     { label: 'Driver', value: 'Driver' },
  //   ];

  //   const locationOptions = [
  //     { label: 'Location 1', value: 'Location 1' },
  //     { label: 'Location 2', value: 'Location 2' },
  //     { label: 'Location 3', value: 'Location 3' },
  //   ];

  //   const nationalityOptions = [
  //     { label: 'Nationality 1', value: 'Nationality 1' },
  //     { label: 'Nationality 2', value: 'Nationality 2' },
  //     { label: 'Nationality 3', value: 'Nationality 3' },
  //   ];

  //   const religionOptions = [
  //     { label: 'Religion 1', value: 'Religion 1' },
  //     { label: 'Religion 2', value: 'Religion 2' },
  //     { label: 'Religion 3', value: 'Religion 3' },
  //   ];

  //   const postStatusOptions = [
  //     { label: 'Post Status 1', value: 'Post Status 1' },
  //     { label: 'Post Status 2', value: 'Post Status 2' },
  //     { label: 'Post Status 3', value: 'Post Status 3' },
  //   ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionList = [
    { value: "Nanny", label: "Nanny" },
    { value: "Livein", label: "Livein" },
    { value: "Location", label: "Location" },
    { value: "Nationality", label: "Nationality" },
    { value: "Religion", label: "Religion" },
    { value: "Skills", label: "Skills" },
    { value: "age", label: "Age" },
  ];
  // gender form
  const [selectedGender, setSelectedGender] = useState("male");
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  // age form
  const [selectedAge, setSelectedAge] = useState("");
  // age form events
  function handleAgeChange(event) {
    setSelectedAge(event.target.value);
  }

  // value form
  const handleSelect = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  // validation
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="main_sec">
        <section className="search_profile_head">
          <div className="container">
            <div className="search_profile_head_in">
              <div className="search_now_btn">
                <Link to="/" className=" btn btn-type1">
                  Flter
                </Link>
              </div>
              <div className="search_sec">
                <div className="search_sec_heading">
                  <h1>Start your search now</h1>{" "}
                  <Link to="/" className="cross_ic">
                    <img src={cross} />
                  </Link>
                </div>
                <div className="search_sec_itm">
                  <label>Looking for</label>
                  <select>
                    <option>Nanny</option>
                    <option>Driver</option>
                    <option>Driver</option>
                  </select>
                </div>
                <div className="search_sec_itm">
                  <label>Position</label>
                  <select>
                    <option>Live In</option>
                    <option>Live Out</option>
                    <option>Live Out</option>
                  </select>
                </div>
                <div className="search_sec_itm">
                  <label>Location</label>
                  <select>
                    <option>Abu Dhabi</option>
                    <option>Abu Dhabi</option>
                    <option>Abu Dhabi</option>
                  </select>
                </div>
                <div className="search_sec_itm">
                  <label>Nationality</label>
                  <select>
                    <option>Filipino</option>
                    <option>Filipino</option>
                    <option>Filipino</option>
                  </select>
                </div>
                <div className="search_sec_itm search_sec_itm_btn">
                  <button type="button" className="btn_default">
                    <img src={Search_ic1} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
              <div className="advance_search">
                <button
                  // to="/"
                  className="advance_search_btn"
                  onClick={handleShow}
                >
                  <i className="advance_search_ic">
                    <img src={search_ic2} />
                  </i>
                  <span>Advance Search</span>
                </button>
              </div>
              <div>
                <div>
                  <Modal
                    className="search-modal"
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <div className="heading_sec1">
                        <h3>Advance Search</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry.
                        </p>
                      </div>
                      <div className="modal_content">
                        <Formik
                          initialValues={{
                            nanny: "",
                            liveIn: "",
                            location: "",
                            nationality: "",
                            religion: "",
                            gender: "",
                            age: "",
                            lastUpdated: "",
                            skills: "",
                            postStatus: "",
                            experience: "",
                          }}
                          validationSchema={searchNannoies}
                          onSubmit={handleSubmit}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <Row>
                                <Col md={6}>
                                  <Form.Group controlId="nanny">
                                    <select
                                      name="nanny"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.nanny}
                                    >
                                      <option value="">Nanny</option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.nanny && touched.nanny && (
                                      <div className="error">
                                        {errors.nanny}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="liveIn">
                                    <select
                                      name="liveIn"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.liveIn}
                                    >
                                      <option value="">Live In</option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.liveIn && touched.liveIn && (
                                      <div className="error">
                                        {errors.liveIn}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="location">
                                    <select
                                      name="location"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.location}
                                    >
                                      <option value="">Select Location</option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.location && touched.location && (
                                      <div className="error">
                                        {errors.location}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="nationality">
                                    <select
                                      name="nationality"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.nationality}
                                    >
                                      <option value="">
                                        Select Nationality
                                      </option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.nationality &&
                                      touched.nationality && (
                                        <div className="error">
                                          {errors.nationality}
                                        </div>
                                      )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="religion">
                                    <select
                                      name="religion"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.religion}
                                    >
                                      <option value="">Select Religion</option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.religion && touched.religion && (
                                      <div className="error">
                                        {errors.religion}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group>
                                    <div className="custom_radio_itms">
                                      <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={values.gender === "male"}
                                      />
                                      <label htmlFor="male">Male</label>
                                      <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={values.gender === "female"}
                                      />
                                      <label htmlFor="female">Female</label>
                                    </div>
                                    {errors.gender && touched.gender && (
                                      <div className="error">
                                        {errors.gender}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={12}>
                                  <Form.Group>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="age"
                                      name="age"
                                      placeholder="Age"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.age}
                                    />
                                    {errors.age && touched.age && (
                                      <div className="error">{errors.age}</div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group>
                                    <Form.Control
                                      type="text"
                                      className="form-control"
                                      id="lastUpdated"
                                      name="lastUpdated"
                                      placeholder="Last Updated"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.lastUpdated}
                                    />
                                    {errors.lastUpdated &&
                                      touched.lastUpdated && (
                                        <div className="error">
                                          {errors.lastUpdated}
                                        </div>
                                      )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="skills">
                                    <select
                                      name="skills"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.skills}
                                    >
                                      <option value="">Select Skills</option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.skills && touched.skills && (
                                      <div className="error">
                                        {errors.skills}
                                      </div>
                                    )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="postStatus">
                                    <select
                                      name="postStatus"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.postStatus}
                                    >
                                      <option value="">
                                        Select Post Status
                                      </option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.postStatus &&
                                      touched.postStatus && (
                                        <div className="error">
                                          {errors.postStatus}
                                        </div>
                                      )}
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="experience">
                                    <select
                                      name="experience"
                                      className="form-control"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.experience}
                                    >
                                      <option value="">
                                        Select Experience
                                      </option>
                                      {/* Add your options here */}
                                    </select>
                                    {errors.experience &&
                                      touched.experience && (
                                        <div className="error">
                                          {errors.experience}
                                        </div>
                                      )}
                                  </Form.Group>
                                </Col>
                                <Col md={12}>
                                  <Form.Group className="mb-0 mt-1 text-center">
                                    <Button
                                      type="submit"
                                      className="btn btn-type1"
                                    >
                                      Search
                                    </Button>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile_sec profile_sec_main">
          <div className="container">
            <div className="profile_sec_in">
              <div className="profile_itms">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src={Heart_ic} />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src="img/heart_fill.svg" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src={Heart_ic} />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src="img/heart_fill.svg" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src={Heart_ic} />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="profile_itm">
                      <div
                        className="profile_itm_img"
                        style={{
                          backgroundImage:
                            "url(" +
                            "https://v1.checkprojectstatus.com/maids_nanny/img/nanny_image.jpg" +
                            ")",
                        }}
                      ></div>
                      <div className="profile_itm_con">
                        <div className="profile_itm_head">
                          <h5>Annabele Enobio</h5>
                          <div className="profile_mts">
                            <div className="profile_mt">
                              Saudi Arabia | <span>2000-2500 AED</span>
                            </div>
                            <div className="profile_mt">
                              Posted On: 22-05-2023
                            </div>
                          </div>
                          <div className="profile_itm_heart">
                            <img src={Heart_ic} />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={Calendar_ic} />
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={Right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={Video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination_sec">
                  <ul>
                    <li>
                      <Link  to="/">
                        <img src={left_ic} />
                      </Link>
                    </li>
                    <li>
                      <Link className="pp" to="/">1</Link>
                    </li>
                    <li>
                      <Link className="pp" to="/">2</Link>
                    </li>
                    <li>
                      <Link className="pp" to="/">3</Link>
                    </li>
                    <li className="pagitionation_seprate">
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                    <li>
                      <Link className="pp" to="/">15</Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={right_ic} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="wts_fixed">
          <Link to="/">
            <img src={whatsapp_ic} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchNannoies;
