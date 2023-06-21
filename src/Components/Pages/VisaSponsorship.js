import React, { useState } from "react";

import { Accordion, Card } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {validationSchemaVisa} from "../../Utils/ValidatianSchema"





const VisaSponsorship = () => {
  const [activeKey, setActiveKey] = useState(null);
  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  // validation && form
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <section className="visa_sec">
        <div className="container">
          <div className="visa_sec_in">
            <div className="row">
              <div className="col-md-6">
                <div className="visa_form">
                  <div className="heading_sec2">
                    <h3>Visa & Sponsorship</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </div>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      nationality: "",
                      email: "",
                      comment: "",

                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchemaVisa}
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
                                <div className="error">{errors.firstName}</div>
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
                              <label htmlFor="nationality">
                                Nationality of Nanny / Maid
                              </label>
                              <input
                                type="text"
                                name="nationality"
                                className="form-control"
                                placeholder="Enter Nationality"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nationality}
                              />
                              {errors.nationality && touched.nationality && (
                                <div className="error">
                                  {errors.nationality}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="email">Your Email</label>
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
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
                              <label htmlFor="comment">
                                Comment / Question (if any)
                              </label>
                              <textarea
                                name="comment"
                                className="form-control"
                                rows="4"
                                placeholder="Tell us about you"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                              />
                              {errors.comment && touched.comment && (
                                <div className="error">{errors.comment}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <button type="submit" className="btn btn-type1">
                                Submit
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
                <div className="faq_sec_itms">
                  <Accordion activeKey={activeKey}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header onClick={() => toggleAccordion("0")}>
                        What to Do When You’re Unhappy with Your Maid?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in felis dignissim, imperdiet nulla vitae,
                        condimentum nulla. Ut scelerisque a nisl sit amet
                        facilisis. Etiam blandit iaculis tellus, vitae
                        condimentum leo congue a. Vivamus in vehicula massa.
                        Pellentesque libero libero, commodo lacinia volutpat
                        non, tincidunt at lectus. Maecenas ipsum turpis, viverra
                        vitae lacus eu, fringilla ultricies erat. Aenean
                        hendrerit maximus sodales.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header onClick={() => toggleAccordion("1")}>
                        How a Maid Service Can Help New Parents?
                      </Accordion.Header>
                      <Accordion.Body>
                        Quisque sapien augue, ornare id leo a, tristique
                        elementum justo. Praesent non nulla sagittis,
                        sollicitudin justo id, varius erat. Nunc sed pharetra
                        nisl. Cras et suscipit felis, in lacinia sapien. Integer
                        venenatis sagittis massa, eu eleifend nibh venenatis in.
                        Pellentesque a aliquet urna. Curabitur tortor metus,
                        ultrices sed mi at, sagittis imperdiet turpis.
                        Suspendisse nec luctus nunc. Fusce in arcu quis lacus
                        mollis ultrices.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header onClick={() => toggleAccordion("2")}>
                        Basic Infant Care Training For Your Nanny / Maid
                      </Accordion.Header>
                      <Accordion.Body>
                        Praesent nec ipsum scelerisque dui condimentum
                        pellentesque eu at lectus. Vivamus purus purus, bibendum
                        in vestibulum ac, pharetra sit amet sapien. Nunc luctus,
                        orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu
                        malesuada arcu augue id nisi. In auctor mi ac ante
                        tincidunt tincidunt.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header onClick={() => toggleAccordion("3")}>
                        How a Maid Service Can Help New Parents?
                      </Accordion.Header>
                      <Accordion.Body>
                        Praesent nec ipsum scelerisque dui condimentum
                        pellentesque eu at lectus. Vivamus purus purus, bibendum
                        in vestibulum ac, pharetra sit amet sapien. Nunc luctus,
                        orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu
                        malesuada arcu augue id nisi. In auctor mi ac ante
                        tincidunt tincidunt.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header onClick={() => toggleAccordion("4")}>
                        Basic Infant Care Training For Your Nanny / Maid
                      </Accordion.Header>
                      <Accordion.Body>
                        Praesent nec ipsum scelerisque dui condimentum
                        pellentesque eu at lectus. Vivamus purus purus, bibendum
                        in vestibulum ac, pharetra sit amet sapien. Nunc luctus,
                        orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu
                        malesuada arcu augue id nisi. In auctor mi ac ante
                        tincidunt tincidunt.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisaSponsorship;
