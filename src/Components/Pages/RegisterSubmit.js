// Register For Nanny

import React from "react";
import Register_For_Job from "../../assets/img/register_for_job.jpg";
import Upload from "../../assets/img/upload.svg";
import Calender1 from "../../assets/img/calender1.svg";
import { Link } from "react-router-dom";
import nanny from "../../assets/img/nanny.jpg";
import Register_For_Nanny from "../../assets/img/register_for_nanny.jpg";
// validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registersubmit } from "../../Utils/ValidatianSchema";

const RegisterSubmit = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
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
                  <img src={Register_For_Nanny} />
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
                {/* <div className="register_s_form">
                    <h4>Register to get contacted directly by families</h4>
                    
                    <div>  */}
                <div className="col-md-12">
                  <div className="register_s_form">
                    <h4>Register to get access to contact details</h4>
                    <Formik
                      initialValues={{
                        salary: "",
                        preference: "",
                        requirements: "",
                        referralSource: "",
                        acceptTerms: false,
                      }}
                      validationSchema={registersubmit}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Offered Salary (Monthly – AED)</label>
                              <Field
                                type="text"
                                name="salary"
                                placeholder="Enter Offered Salary"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="salary"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>
                                Any preference in terms of nationality?
                              </label>
                              <Field
                                type="text"
                                name="preference"
                                placeholder="Enter Preference"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="preference"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Other requirements</label>
                              <Field
                                as="textarea"
                                name="requirements"
                                placeholder="Write"
                                className="form-control"
                                rows="4"
                              />
                              <ErrorMessage
                                name="requirements"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>How did you hear about us?</label>
                              <Field
                                type="text"
                                name="referralSource"
                                placeholder="Enter Name"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="referralSource"
                                component="div"
                                className="error"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="custom_checkbox_itms">
                                <label className="custom_checkbox">
                                  I Accept <a href="/">Terms and Conditions</a>
                                  <Field type="checkbox" name="acceptTerms" />
                                  <span className="checkmark"></span>
                                </label>
                                <ErrorMessage
                                  name="acceptTerms"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mt-1">
                              <a href="/" className="btn btn-type1">
                                Back
                              </a>
                              <button
                                type="submit"
                                className="btn btn-type1 ms-2"
                                data-bs-toggle="modal"
                                data-bs-target="#thankyouModal"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <label className="mb-0">
                                If you already have an account?{" "}
                                <a
                                  href="/"
                                  data-bs-toggle="modal"
                                  data-bs-target="#login_modal"
                                >
                                  Login
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </Formik>
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

export default RegisterSubmit;
