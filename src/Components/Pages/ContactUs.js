import React from "react";
import { Link } from "react-router-dom";
import Call_red from "../../assets/img/call_red.svg";
import Wts_green from "../../assets/img/wts_green.svg";
import Email_blue from "../../assets/img/email_blue.svg";
import Whatsapp_ic from "../../assets/img/whatsapp_ic.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { contactUs } from "../../Utils/ValidatianSchema";





const ContactUs = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="main_sec">
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
  validationSchema={contactUs}
  onSubmit={handleSubmit}
  render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter Full Name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <Field
              type="text"
              name="mobileNumber"
              className="form-control"
              placeholder="Enter Mobile Number"
            />
            <ErrorMessage
              name="mobileNumber"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Field
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email Address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="lookingFor">Looking For</label>
            <Field
              as="select"
              name="lookingFor"
              className="form-control"
            >
              <option value="">Select Looking For</option>
              <option value="lookingFor1">Looking For 1</option>
              <option value="lookingFor2">Looking For 2</option>
            </Field>
            <ErrorMessage
              name="lookingFor"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <Field
              as="textarea"
              name="message"
              className="form-control"
              rows="4"
              placeholder="Tell us about you"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0">
            <button type="submit" className="btn btn-type1" disabled={isSubmitting}>
              Send Now
            </button>
          </div>
        </div>
      </div>
    </form>
  )}
/>

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
                            <span>Contact Number</span>
                            <p>+971 - 0213654789</p>
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
                            <span>Email Address</span>
                            <p>annabele_enobio@gmail.com</p>
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
            <img src={Whatsapp_ic} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
