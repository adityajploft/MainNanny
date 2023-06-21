import React, { useState } from "react";
import cross from "../../assets/img/cross.svg";
import search_ic1 from "../../assets/img/search_ic1.svg";
import search_ic2 from "../../assets/img/search_ic2.svg";
import home_image from "../../assets/img/home_image.svg";
import shape1 from "../../assets/img/shape1.svg";
import shape2 from "../../assets/img/shape2.svg";
import right_arrow from "../../assets/img/right_arrow.svg";
import chat_with_expert from "../../assets/img/chat_with_expert.svg";
import cat1 from "../../assets/img/cat1.svg";
import cat2 from "../../assets/img/cat2.svg";
import cat3 from "../../assets/img/cat3.svg";
import cat4 from "../../assets/img/cat4.svg";
import cat5 from "../../assets/img/cat5.svg";
import heart_ic from "../../assets/img/heart_ic.svg";
import calendar_ic from "../../assets/img/calendar_ic.svg";
import location_ic from "../../assets/img/location_ic.svg";
import category_ic from "../../assets/img/category_ic.svg";
import flag_ic from "../../assets/img/flag_ic.svg";
import video_ic from "../../assets/img/video_ic.svg";
import heart_fill from "../../assets/img/heart_fill.svg";
import basic from "../../assets/img/basic.svg";
import standard from "../../assets/img/standard.svg";
import premium from "../../assets/img/premium.svg";
import quote from "../../assets/img/quote.svg";
import user_image from "../../assets/img/user_image.png";
import blog_1 from "../../assets/img/blog_1.jpg";
import blog_2 from "../../assets/img/blog_2.jpg";
import blog_3 from "../../assets/img/blog_3.jpg";
import faq from "../../assets/img/faq.png";
import shape_trusted from "../../assets/img/shape_trusted.svg";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import logo3 from "../../assets/img/logo3.png";
import logo4 from "../../assets/img/logo4.png";
import logo5 from "../../assets/img/logo5.png";
import logo6 from "../../assets/img/logo6.png";
import Register_For_Nanny from "../../assets/img/register_for_nanny.jpg";
import Register_for_job from "../../assets/img/register_for_job.jpg";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import icon4 from "../../assets/img/icon4.png";

//React-js-bootstap select
import Select from "react-select";

import { Form, Row, Col, Button ,Accordion } from "react-bootstrap";
// for model
import Modal from "react-bootstrap/Modal";
// react router dom
import { Link } from "react-router-dom";
// react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  // reactbootstap Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // age form
  const [selectedAge, setSelectedAge] = useState("");
  // age form events
  function handleAgeChange(event) {
    setSelectedAge(event.target.value);
  }
  // Form value
  const handleSelect = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

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

  // home page start and see
  const options = {
    Lookingfor: [
      { value: "Abc", label: "Live In" },
      { value: "Live Out", label: "Live Out" },
      { value: "Other", label: "Other" },
    ],
    position: [
      { value: "Live In", label: "Live In" },
      { value: "Live Out", label: "Live Out" },
      { value: "Other", label: "Other" },
    ],
    location: [
      { value: "Abu Dhabi", label: "Abu Dhabi" },
      { value: "Dubai", label: "Dubai" },
      { value: "Sharjah", label: "Sharjah" },
    ],
    nationality: [
      { value: "Filipino", label: "Filipino" },
      { value: "Indian", label: "Indian" },
      { value: "British", label: "British" },
    ],
  };

  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedLookingFor, setSelectedLookingFor] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedNationalities, setSelectedNationalities] = useState([]);

  const handleLookingforChange = (selectedOptions) => {
    setSelectedLookingFor(selectedOptions);
  };

  const handlePositionChange = (selectedOptions) => {
    setSelectedPositions(selectedOptions);
  };

  const handleLocationChange = (selectedOptions) => {
    setSelectedLocations(selectedOptions);
  };

  const handleNationalityChange = (selectedOptions) => {
    setSelectedNationalities(selectedOptions);
  };
  // home page start and see

  // react slick
  const settings = {
    dots: true,
    errow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const logos = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, //For  Set the number of items to show in a row
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust the number of items to show on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  //--------------------------------------- react slick------------------------------------------------------ //
  //For  Accordion
  const [activeKey, setActiveKey] = useState(null);
  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };
  //------------------------------------For  Accordion-----------------------------------------------------------//
  return (
    <>
      <div className="main_sec">
        <section className="homesld_sec bg_type2">
          <div className="container">
            <div className="homesld_sec_in">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="homesld_sec_con">
                    <div className="heading_type1">
                      <h5>What are you looking for?</h5>
                      <h1>Start your search now</h1>
                    </div>
                    <div className="search_now_btn">
                      <Link to="/" className=" btn btn-type1">
                        Search
                      </Link>
                    </div>
                    <div className="search_sec">
                      <div className="search_sec_heading">
                        <h1>Start your search now</h1>{" "}
                        <Link to="/" className="cross_ic">
                          <img src={cross} alt="" />
                        </Link>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group-h">
                              <label className="form-label">LOOKING FOR</label>
                              <Select
                                isMulti
                                options={options.Lookingfor}
                                value={selectedLookingFor}
                                onChange={handleLookingforChange}
                                menuPortalTarget={document.body}
                                menuPlacement="auto"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group-h">
                              <label className="form-label">POSITION</label>
                              <Select
                                isMulti
                                options={options.position}
                                value={selectedPositions}
                                onChange={handlePositionChange}
                                menuPortalTarget={document.body}
                                menuPlacement="auto"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group-h">
                              <label className="form-label">LOCATION</label>
                              <Select
                                isMulti
                                options={options.location}
                                value={selectedLocations}
                                onChange={handleLocationChange}
                                menuPortalTarget={document.body}
                                menuPlacement="auto"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group-h">
                              <label className="form-label">NATIONALITY</label>
                              <Select
                                isMulti
                                options={options.nationality}
                                value={selectedNationalities}
                                onChange={handleNationalityChange}
                                menuPortalTarget={document.body}
                                menuPlacement="auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="search_sec_itm search_sec_itm_btn">
                        <button type="button" className="btn_default">
                          <img src={search_ic1} alt="" />
                          <span>Search</span>
                        </button>
                      </div>
                    </div>
                    <div className="advance_search">
                      <h4>Are you searching Different way?</h4>
                      <button
                        className="advance_search_btn"
                        onClick={handleShow}
                      >
                        <i className="advance_search_ic">
                          <img src={search_ic2} alt="" />
                        </i>
                        <span>Advance Search</span>
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
                          <div className="heading_sec1">
                            <h3>Advance Search</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry.
                            </p>
                          </div>
                          <div className="modal_content">
                            <Form>
                              <Row>
                                <Col md={6}>
                                  <Form.Group controlId="Nanny">
                                    {/* <Form.Label>Nanny</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Nanny"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="livein">
                                    {/* <Form.Label>Live In</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Live In"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="location">
                                    {/* <Form.Label>Location</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Location"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="nationality">
                                    {/* <Form.Label>Nationality</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Nationality"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="religion">
                                    {/* <Form.Label>Religion</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Religion"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <div className="custom_radio_itms">
                                      <Form.Check
                                        type="radio"
                                        id="male"
                                        label="Male"
                                        value="male"
                                        name="gender"
                                        onChange={handleGenderChange}
                                      />
                                      <Form.Check
                                        type="radio"
                                        id="female"
                                        label="Female"
                                        value="female"
                                        name="gender"
                                        onChange={handleGenderChange}
                                      />
                                    </div>
                                  </Form.Group>
                                </Col>
                                <Col md={12}>
                                  <Form.Group>
                                    <Form.Control
                                      type="text"
                                      className="form-control"
                                      id="date"
                                      placeholder="Age"
                                      value={selectedAge} 
                                      onChange={handleAgeChange} 
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group>
                                    <Form.Control
                                      type="text"
                                      className="form-control"
                                      id="date"
                                      placeholder="Last Updated"
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="skills">
                                    {/* <Form.Label>Skills</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Skills"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="postStatus">
                                    {/* <Form.Label>Post Status</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Post Status"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group controlId="experience">
                                    {/* <Form.Label>Experience</Form.Label> */}
                                    <Select
                                      options={optionList}
                                      placeholder="Select Experience"
                                      value={selectedOptions}
                                      onChange={handleSelect}
                                      isSearchable={true}
                                      isMulti
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={12}>
                                  <Form.Group className="mb-0 mt-1 text-center">
                                    <Button
                                      type="button"
                                      className="btn btn-type1"
                                    >
                                      Search
                                    </Button>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="homesld_sec_img">
                    <img src={home_image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cat_btns">
          <div className="shape_sec1">
            <img src={shape1} alt="" />
          </div>
          <div className="container">
            <div className="cat_btns_in">
              <div className="row justify-content-center">
                <div className="col-md-5 col-sm-6">
                  <div className="cat_btns_itm">
                    <div className="cat_btns_itm_img">
                      <img src={Register_For_Nanny} alt="" />
                    </div>
                    <div className="cat_btns_itm_btn">
                      <h4>Are you Looking for Nanny</h4>
                      <Link to="/registerformnanny" className="btn btn-type2">
                        <span>Register Now</span>
                        <i>
                          <img src={right_arrow} alt="" />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6">
                  <div className="cat_btns_itm">
                    <div className="cat_btns_itm_img">
                      <img src={Register_for_job} alt="" />
                    </div>
                    <div className="cat_btns_itm_btn">
                      <h4>Are You Looking for a Job</h4>
                      <Link to="/registerforjob" className="btn btn-type2">
                        <span>Register Now</span>
                        <i>
                          <img src={right_arrow} alt="" />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="chat_sec bg_type1">
          <div className="container">
            <div className="chat_sec_in">
              <div className="chat_sec_head">
                <span>1000+</span>Available Profiles
              </div>
              <div className="chat_sec_btn">
                <Link to="/">
                  <img src={chat_with_expert} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="category_sec">
          <div className="container">
            <div className="category_sec_in">
              <div className="heading_sec1">
                <h3>Popular Job Categories</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="category_itms">
                <div className="row">
                  <div className="col_5 col">
                    <div className="category_itm">
                      <div className="category_itm_ic">
                        <img src={cat1} alt="" />
                      </div>
                      <div className="category_itm_con">
                        <h5 className="category_name">Nanny</h5>
                        <span className="category_profiles">105 Profiles</span>
                        <Link to="/searchnannies" className="more_btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col_5 col">
                    <div className="category_itm">
                      <div className="category_itm_ic">
                        <img src={cat2} alt="" />
                      </div>
                      <div className="category_itm_con">
                        <h5 className="category_name">Maid</h5>
                        <span className="category_profiles">128 Profiles</span>
                        <Link to="/searchnannies" className="more_btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col_5 col">
                    <div className="category_itm">
                      <div className="category_itm_ic">
                        <img src={cat3} alt="" />
                      </div>
                      <div className="category_itm_con">
                        <h5 className="category_name">Private Nurse</h5>
                        <span className="category_profiles">150 Profiles</span>
                        <Link to="/searchnannies" className="more_btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col_5 col">
                    <div className="category_itm">
                      <div className="category_itm_ic">
                        <img src={cat4} alt="" />
                      </div>
                      <div className="category_itm_con">
                        <h5 className="category_name">Babysitter</h5>
                        <span className="category_profiles">128 Profiles</span>
                        <Link to="/searchnannies" className="more_btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col_5 col">
                    <div className="category_itm">
                      <div className="category_itm_ic">
                        <img src={cat5} alt="" />
                      </div>
                      <div className="category_itm_con">
                        <h5 className="category_name">Driver</h5>
                        <span className="category_profiles">100 Profiles</span>
                        <Link to="/searchnannies" className="more_btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape_sec2">
            <img src={shape2} alt="" />
          </div>
        </section>
        <section className="profile_sec bg_type1">
          <div className="container">
            <div className="profile_sec_in">
              <div className="heading_sec1">
                <h3>
                  Last Posted On<span>(22-05-2023)</span>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
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
                            <img src={heart_ic} alt="" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={calendar_ic} alt="" />
                            </i>
                            <span>38 Year Old</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={location_ic} alt="" />
                            </i>
                            <span>Filipino</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={category_ic} alt="" />
                            </i>
                            <span>Nanny</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={flag_ic} alt="" />
                            </i>
                            <span>Full time live out</span>
                          </div>
                        </div>
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={right_arrow} alt="" />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} alt="" />
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
                            <img src={heart_ic} alt="" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={calendar_ic} alt="" />
                            </i>
                            <span>38 Year Old</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={location_ic} alt="" />
                            </i>
                            <span>Filipino</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={category_ic} alt="" />
                            </i>
                            <span>Nanny</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={flag_ic} alt="" />
                            </i>
                            <span>Full time live out</span>
                          </div>
                        </div>
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={right_arrow} alt="" />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} alt="" />
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
                            <img src={heart_ic} alt="" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={calendar_ic} alt="" />
                            </i>
                            <span>38 Year Old</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={location_ic} alt="" />
                            </i>
                            <span>Filipino</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={category_ic} alt="" />
                            </i>
                            <span>Nanny</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={flag_ic} alt="" />
                            </i>
                            <span>Full time live out</span>
                          </div>
                        </div>
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={right_arrow} alt="" />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} alt="" />
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
                            <img src={heart_ic} alt="" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={calendar_ic} alt="" />
                            </i>
                            <span>38 Year Old</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={location_ic} alt="" />
                            </i>
                            <span>Filipino</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={category_ic} alt="" />
                            </i>
                            <span>Nanny</span>
                          </div>
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={flag_ic} alt="" />
                            </i>
                            <span>Full time live out</span>
                          </div>
                        </div>
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={right_arrow} alt="" />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} alt="" />
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
                            <img src={heart_fill} alt="" />
                          </div>
                        </div>
                        <div className="profile_itm_meta">
                          <div className="profile_itm_meta_itm">
                            <i>
                              <img src={calendar_ic} alt="" />
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
                              <img src={right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} />
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
                            <img src={heart_fill} />
                          </div>
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
                        <div className="profile_itm_btns">
                          <Link to="/nannydetails" className="btn btn-type2">
                            <span>View Profile</span>
                            <i>
                              <img src={right_arrow} />
                            </i>
                          </Link>
                          <Link to="/" className="btn btn-type1 btn-round">
                            <i>
                              <img src={video_ic} />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="all_btn_sec">
                  <Link to="/searchnannies" className="btn btn-type1">
                    View All Profiles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="steps_sec">
          <div className="container">
            <div className="steps_sec_in">
              <div className="row">
                <div className="col-md-4">
                  <div className="steps_con">
                    <div className="heading_sec2">
                      <h6>How It Works</h6>
                      <h3>Follow our steps here we will help you.</h3>
                    </div>
                    <ul className="list_type1">
                      <li>Trusted & Quality Job</li>
                      <li>International Job</li>
                      <li>No Extra Charge</li>
                      <li>Top Families</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="steps_con_itms">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="steps_con_itm">
                          <span className="steps_con_itm_n">01</span>
                          <div className="steps_con_itm_ic">
                            <img src={icon1} />
                          </div>
                          <div className="steps_con_itm_con">
                            <div className="contant">
                            <h4>
                              Register Your
                              <br /> Account
                            </h4>
                            <p>
                              You need to create an account to find the band
                              preferred job.
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="steps_con_itm">
                          <span className="steps_con_itm_n">02</span>
                          <div className="steps_con_itm_ic">
                            <img src={icon2} />
                          </div>
                          <div className="steps_con_itm_con">
                          <div className="contant">
                            <h4>
                              Search
                              <br /> Your Profiles
                            </h4>
                            <p>
                              You need to create an account to find the best and
                              preferred job.
                            </p>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="steps_con_itm">
                          <span className="steps_con_itm_n">03</span>
                          <div className="steps_con_itm_ic">
                            <img src={icon3} />
                          </div>
                          <div className="steps_con_itm_con">
                          <div className="contant">
                            <h4>
                              Take a<br /> Service Plan
                            </h4>
                            <p>
                              You need to create an account to find the band
                              preferred job.
                            </p>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="steps_con_itm">
                          <span className="steps_con_itm_n">04</span>
                          <div className="steps_con_itm_ic">
                            <img src={icon4} />
                          </div>
                          <div className="steps_con_itm_con">
                          <div className="contant">
                            <h4>
                              Find Contact
                              <br /> Details
                            </h4>
                            <p>
                              You need to create an account to find the best and
                              preferred job.
                            </p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="plan_sec bg_type2">
          <div className="container">
            <div className="plan_sec_in">
              <div className="heading_sec1">
                <h3>Service Plans</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="plan_sec_itms">
                <div className="row">
                  <div className="col-md-4">
                    <div className="plan_sec_itm">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={basic} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Basic<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 200
                          <span className="plan_sec_prc_time">/ 2 Week</span>
                        </div>
                      </div>
                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 2 weeks</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li>Dedicated consultant*</li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan_sec_itm">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={standard} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Standard<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 300
                          <span className="plan_sec_prc_time">/ 1 Month</span>
                        </div>
                        <div className="plan_sec_offer">
                          <span>Best Offer</span>
                        </div>
                      </div>

                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 1 month</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li className="text-decoration-line-through">
                            Dedicated consultant*
                          </li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan_sec_itm activated">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={premium} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Premium<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 400
                          <span className="plan_sec_prc_time">/ 2 Month</span>
                        </div>
                      </div>
                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 2 months</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li>Dedicated consultant*</li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What Our Customer Says */}
        <section className="testimonial_sec">
          <div className="container">
            <div className="testimonial_sec_in">
              <div className="heading_sec1">
                <h3>What Our Customer Says</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              {/* React slick slider */}
              <Slider {...settings} className="testimonial_sld">
                {/* <div className="testimonial_sld owl-carousel"> */}

                <div className="item">
                  <div className="testimonial_sld_itm">
                    <div className="testimonial_sld_itm_img">
                      <img src={quote} />
                    </div>
                    <div className="testimonial_sld_itm_para">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                    </div>
                    <div className="testimonial_sld_itm_meta">
                      <div className="testimonial_sld_itm_meta_img">
                        <img src={user_image} />
                      </div>
                      <div className="testimonial_sld_itm_meta_con">
                        <h5>Sala Ali</h5>
                        <span>It Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_sld_itm">
                    <div className="testimonial_sld_itm_img">
                      <img src={quote} />
                    </div>
                    <div className="testimonial_sld_itm_para">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                    </div>
                    <div className="testimonial_sld_itm_meta">
                      <div className="testimonial_sld_itm_meta_img">
                        <img src={user_image} />
                      </div>
                      <div className="testimonial_sld_itm_meta_con">
                        <h5>Sala Ali</h5>
                        <span>It Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_sld_itm">
                    <div className="testimonial_sld_itm_img">
                      <img src={quote} />
                    </div>
                    <div className="testimonial_sld_itm_para">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                    </div>
                    <div className="testimonial_sld_itm_meta">
                      <div className="testimonial_sld_itm_meta_img">
                        <img src={user_image} />
                      </div>
                      <div className="testimonial_sld_itm_meta_con">
                        <h5>Sala Ali</h5>
                        <span>It Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_sld_itm">
                    <div className="testimonial_sld_itm_img">
                      <img src={quote} />
                    </div>
                    <div className="testimonial_sld_itm_para">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                    </div>
                    <div className="testimonial_sld_itm_meta">
                      <div className="testimonial_sld_itm_meta_img">
                        <img src={user_image} />
                      </div>
                      <div className="testimonial_sld_itm_meta_con">
                        <h5>Sala Ali</h5>
                        <span>It Manager</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* </div> */}
              </Slider>
            </div>
          </div>
        </section>
        {/* Guide to Find Your Nanny */}
        <section className="home_blog bg_type1">
          <div className="container">
            <div className="home_blog_in">
              <div className="heading_sec1">
                <h3>Guide to Find Your Nanny</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="home_blog_itm">
                    <div className="home_blog_itm_img">
                      <img src={blog_1} />
                    </div>
                    <div className="home_blog_itm_con">
                      <h4>What to Do When You’re Unhappy with Your Maid</h4>
                      <p>
                        Hiring a maid in UAE can be a life-changing decision,
                        making your life easier and giving you more time to
                        focus on other things. However, there may be times when
                        you are dissatisfied with your maid’s performance or
                        behavior. This article will walk you through the steps
                        necessary to assess the situation, address the issue,
                        and potentially find a replacement if necessary. To
                        ensure a smooth transition
                      </p>
                      <Link to="/searchnannies" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home_blog_itm">
                    <div className="home_blog_itm_img">
                      <img src={blog_2} />
                    </div>
                    <div className="home_blog_itm_con">
                      <h4>How a Maid Service Can Help New Parents</h4>
                      <p>
                        Becoming a new parent is an exciting and life-changing
                        event, but it can also be incredibly overwhelming. With
                        so much to do and so little time
                      </p>
                      <Link to="/searchnannies" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                  <div className="home_blog_itm">
                    <div className="home_blog_itm_img">
                      <img src={blog_3} />
                    </div>
                    <div className="home_blog_itm_con">
                      <h4>Basic Infant Care Training For Your Nanny / Maid</h4>
                      <p>
                        Basic Infant Care Training For Your Nanny / Maid Hiring
                        full-time caregivers or nannies have become essential
                        for many families
                      </p>
                      <Link to="/" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq_sec">
          <div className="container">
            <div className="faq_sec_in">
              <div className="heading_sec1">
                <h3>FAQs</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="faq_sec_cn">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="faq_sec_img">
                      <img src={faq} />
                    </div>
                  </div>
                  {/* Accordion */}
                  <div className="col-lg-6">
                    <div className="faq_sec_itms">
                      <Accordion activeKey={activeKey}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            onClick={() => toggleAccordion("0")}
                          >
                            What to Do When You’re Unhappy with Your Maid?
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in felis dignissim, imperdiet nulla
                            vitae, condimentum nulla. Ut scelerisque a nisl sit
                            amet facilisis. Etiam blandit iaculis tellus, vitae
                            condimentum leo congue a. Vivamus in vehicula massa.
                            Pellentesque libero libero, commodo lacinia volutpat
                            non, tincidunt at lectus. Maecenas ipsum turpis,
                            viverra vitae lacus eu, fringilla ultricies erat.
                            Aenean hendrerit maximus sodales.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header
                            onClick={() => toggleAccordion("1")}
                          >
                            How a Maid Service Can Help New Parents?
                          </Accordion.Header>
                          <Accordion.Body>
                            Quisque sapien augue, ornare id leo a, tristique
                            elementum justo. Praesent non nulla sagittis,
                            sollicitudin justo id, varius erat. Nunc sed
                            pharetra nisl. Cras et suscipit felis, in lacinia
                            sapien. Integer venenatis sagittis massa, eu
                            eleifend nibh venenatis in. Pellentesque a aliquet
                            urna. Curabitur tortor metus, ultrices sed mi at,
                            sagittis imperdiet turpis. Suspendisse nec luctus
                            nunc. Fusce in arcu quis lacus mollis ultrices.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header
                            onClick={() => toggleAccordion("2")}
                          >
                            Basic Infant Care Training For Your Nanny / Maid
                          </Accordion.Header>
                          <Accordion.Body>
                            Praesent nec ipsum scelerisque dui condimentum
                            pellentesque eu at lectus. Vivamus purus purus,
                            bibendum in vestibulum ac, pharetra sit amet sapien.
                            Nunc luctus, orci vel luctus cursus, nibh nisl
                            ullamcorper ipsum, eu malesuada arcu augue id nisi.
                            In auctor mi ac ante tincidunt tincidunt.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header
                            onClick={() => toggleAccordion("3")}
                          >
                            How a Maid Service Can Help New Parents?
                          </Accordion.Header>
                          <Accordion.Body>
                            Praesent nec ipsum scelerisque dui condimentum
                            pellentesque eu at lectus. Vivamus purus purus,
                            bibendum in vestibulum ac, pharetra sit amet sapien.
                            Nunc luctus, orci vel luctus cursus, nibh nisl
                            ullamcorper ipsum, eu malesuada arcu augue id nisi.
                            In auctor mi ac ante tincidunt tincidunt.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header
                            onClick={() => toggleAccordion("4")}
                          >
                            Basic Infant Care Training For Your Nanny / Maid
                          </Accordion.Header>
                          <Accordion.Body>
                            Praesent nec ipsum scelerisque dui condimentum
                            pellentesque eu at lectus. Vivamus purus purus,
                            bibendum in vestibulum ac, pharetra sit amet sapien.
                            Nunc luctus, orci vel luctus cursus, nibh nisl
                            ullamcorper ipsum, eu malesuada arcu augue id nisi.
                            In auctor mi ac ante tincidunt tincidunt.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted by more than +100 companies */}
        <section className="trusted_sec">
          <div className="container">
            <div className="trusted_sec_in">
              <div className="row">
                <div className="col-md-4">
                  <div className="trusted_sec_head">
                    <div className="trusted_sec_head_shape">
                      <img src={shape_trusted} />
                    </div>
                    <h3>Trusted by more than +100 companies</h3>
                  </div>
                </div>
                <div className="col-md-8">
                  <Slider {...logos} className="testimonial_sld">
                    {/* <div className="trusted_sld owl-carousel"> */}
                    <div className="item">
                      <img src={logo1} />
                    </div>
                    <div className="item">
                      <img src={logo2} />
                    </div>
                    <div className="item">
                      <img src={logo3} />
                    </div>
                    <div className="item">
                      <img src={logo4} />
                    </div>
                    <div className="item">
                      <img src={logo5} />
                    </div>
                    <div className="item">
                      <img src={logo6} />
                    </div>
                    {/* </div> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
