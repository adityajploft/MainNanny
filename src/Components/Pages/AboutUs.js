import React from "react";
import { Link } from "react-router-dom";
import About_us from "../../assets/img/about_us.png";
import Shape_trusted from "../../assets/img/shape_trusted.svg";
import Logo1 from "../../assets/img/logo1.png";
import Logo2 from "../../assets/img/logo2.png";
import Logo3 from "../../assets/img/logo3.png";
import Logo4 from "../../assets/img/logo4.png";
import Logo5 from "../../assets/img/logo5.png";
import Logo6 from "../../assets/img/logo6.png";

import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import icon4 from "../../assets/img/icon4.png";

import whatsapp_ic from "../../assets/img/whatsapp_ic.svg";
import create_account from "../../assets/img/create_account.svg";
import search_jobs from "../../assets/img/search_jobs.svg";
import save from "../../assets/img/save.svg";

import Call_red from "../../assets/img/call_red.svg";
import Wts_green from "../../assets/img/wts_green.svg";
import Email_blue from "../../assets/img/email_blue.svg";
// validation
import { Formik} from "formik";
import { aboutUs } from "../../Utils/ValidatianSchema";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, //For  Set the number of items to show in a row
    slidesToScroll: 1,
    prevArrow: <button className="slick-arrow slick-prev">Previous</button>,
    // Custom previous arrow button
    nextArrow: <button className="slick-arrow slick-next">Next</button>,
    // Custom next arrow button
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

  return (
    <>
      <div className="main_sec">
        <section className="about_sec">
          <div className="container">
            <div className="about_sec_in">
              <div className="row">
                <div className="col-md-6">
                  <div className="about_sec_img">
                    <img src={About_us} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_sec_con">
                    <div className="heading_sec2">
                      <h3>About Us</h3>
                    </div>
                    <div className="about_sec_para">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                      </p>

                      <div className="chat_sec_head">
                        <span>1000+</span>Available Profiles
                      </div>
                      <div className="btn_sec">
                        <Link to="/registerforjob" className="btn btn-type1">
                          Register as a Nanny
                        </Link>
                        <Link
                          to="/searchnannies"
                          className="btn btn-type1 ms-3"
                        >
                          View Profiles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusted_sec about_trusted_sec">
          <div className="container">
            <div className="trusted_sec_in">
              <div className="row">
                <div className="col-md-4">
                  <div className="trusted_sec_head">
                    <div className="trusted_sec_head_shape">
                      <img src={Shape_trusted} />
                    </div>
                    <h3>Trusted by more than +100 companies</h3>
                  </div>
                </div>
                <div className="col-md-8">
                  <Slider {...settings} className="testimonial_sld">
                    {/* <div className="trusted_sld owl-carousel"> */}
                    <div className="item">
                      <img src={Logo1} alt="" />
                    </div>
                    <div className="item">
                      <img src={Logo2} alt="" />
                    </div>
                    <div className="item">
                      <img src={Logo3} alt="" />
                    </div>
                    <div className="item">
                      <img src={Logo4} alt="" />
                    </div>
                    <div className="item">
                      <img src={Logo5} alt="" />
                    </div>
                    <div className="item">
                      <img src={Logo6} alt="" />
                    </div>
                    {/* </div> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process_sec1">
          <div className="container">
            <div className="process_sec1_in">
              <div className="heading_sec1">
                <h3>How It Works</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </div>
              <div className="process_sec1_itms">
                <div className="row">
                  <div className="col-md-4">
                    <div className="process_sec1_itm">
                      <div className="process_sec1_itm_ic">
                        <img src={create_account} alt="" />
                      </div>
                      <div className="process_sec1_itm_con">
                        <h4>Create an Account</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="process_sec1_itm">
                      <div className="process_sec1_itm_ic">
                        <img src={search_jobs} alt="" />
                      </div>
                      <div className="process_sec1_itm_con">
                        <h4>Search Jobs</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="process_sec1_itm">
                      <div className="process_sec1_itm_ic">
                        <img src={save} alt="" />
                      </div>
                      <div className="process_sec1_itm_con">
                        <h4>Save and Apply</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
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
                            <img src={icon1} alt="" />
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
                            <img src={icon2} alt="" />
                          </div>
                          <div className="steps_con_itm_con">
                            <div className="contant">
                              <h4>
                                Search
                                <br /> Your Profiles
                              </h4>
                              <p>
                                You need to create an account to find the best
                                and preferred job.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="steps_con_itm">
                          <span className="steps_con_itm_n">03</span>
                          <div className="steps_con_itm_ic">
                            <img src={icon3} alt="" />
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
                            <img src={icon4} alt="" />
                          </div>
                          <div className="steps_con_itm_con">
                            <div className="contant">
                              <h4>
                                Find Contact
                                <br /> Details
                              </h4>
                              <p>
                                You need to create an account to find the best
                                and preferred job.
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

        <section className="contact_sec">
          <div className="container">
            <div className="contact_sec_in">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact_sec_form">
                    <div className="heading_sec2">
                      <h3>Send Us a Message</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                    </div>
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        mobileNumber: "",
                        email: "",
                        lookingFor: "",
                        message: "",
                      }}
                      validationSchema={aboutUs}
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
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                  type="text"
                                  name="firstName"
                                  className="form-control"
                                  placeholder="Enter Full Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.firstName}
                                />
                                {errors.firstName && touched.firstName && (
                                  <div className="error">
                                    {errors.firstName}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                  type="text"
                                  name="lastName"
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.lastName}
                                />
                                {errors.lastName && touched.lastName && (
                                  <div className="error">{errors.lastName}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="mobileNumber">
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  name="mobileNumber"
                                  className="form-control"
                                  placeholder="Enter Mobile Number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.mobileNumber}
                                />
                                {errors.mobileNumber &&
                                  touched.mobileNumber && (
                                    <div className="error">
                                      {errors.mobileNumber}
                                    </div>
                                  )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  placeholder="Enter Email Address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                {errors.email && touched.email && (
                                  <div className="error">{errors.email}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="lookingFor">Looking For</label>
                                <select
                                  name="lookingFor"
                                  className="form-control"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.lookingFor}
                                >
                                  <option value="">Select Looking For</option>
                                  <option value="option1">Looking For 1</option>
                                  <option value="option2">Looking For 2</option>
                                </select>
                                {errors.lookingFor && touched.lookingFor && (
                                  <div className="error">
                                    {errors.lookingFor}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  rows="4"
                                  placeholder="Tell us about you"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.message}
                                ></textarea>
                                {errors.message && touched.message && (
                                  <div className="error">{errors.message}</div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mb-0">
                                <button
                                  type="submit"
                                  className="btn btn-type1"
                                  disabled={isSubmitting}
                                >
                                  Send Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_info">
                    <div className="contact_info_in">
                      <div className="heading_sec2">
                        <h3>Contact Info</h3>
                      </div>
                      <div className="contact_info_itms">
                        <Link to="/" className="contact_info_itm">
                          <div className="contact_info_itm_ic">
                            <img src={Call_red} alt="" />
                          </div>
                          <div className="contact_info_itm_con">
                            <div className="iteem">
                            <span>Contact Number</span>
                            <p>+971 - 0213654789</p>
                          </div>
                          </div>
                        </Link>
                        <Link to="/" className="contact_info_itm">
                          <div className="contact_info_itm_ic">
                            <img src={Wts_green} alt="" />
                          </div>
                          <div className="contact_info_itm_con">
                        
                            <span>WhatsApp Number</span>
                            <p>+971 - 0213654789</p>
                    
                          </div>
                        </Link>
                        <Link to="/" className="contact_info_itm">
                          <div className="contact_info_itm_ic">
                            <img src={Email_blue} alt="" />
                          </div>
                          <div className="contact_info_itm_con">
                          <div className="iteem">
                            <span>Email Address</span>
                            <p>annabele_enobio@gmail.com</p>
                          </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wts_fixed">
          <Link to="/">
            <img src={whatsapp_ic} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
