import React, { useState } from "react";
import premium_icon from "../../assets/img/premium-icon.svg";
import MasterCard from "../../assets/img/MasterCard.svg";
import stripe from "../../assets/img/stripe.svg";
import visa from "../../assets/img/visa.svg";
import thankyou from "../../assets/img/thankyou.svg";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation formik
const initialValues = {
  nameOnCard: "",
  expiryDate: "",
  cardNumber: "",
  cvv: "",
};

const validationSchema = Yup.object({
  nameOnCard: Yup.string().required("Name on Card is required"),
  expiryDate: Yup.string().required("Expiry Date is required"),
  cardNumber: Yup.string().required("Card Number is required"),
  cvv: Yup.string().required("CVV is required"),
});

const Payment = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [couponCode, setCouponCode] = useState("");
  const applyCoupon = () => {
    console.log("Coupon code:", couponCode);
  };

  // formik && form
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <section className="payment_sec">
        <div className="container">
          <div className="payment_sec_in">
            <div className="row">
              <div className="col-md-6">
                <div className="plan_detail">
                  <div className="plan_selected">
                    <div className="plan_selected_img">
                      <img src={premium_icon} />
                    </div>
                    <div className="plan_selected_con">
                      <h4>Premium</h4>
                      <div className="plan_sec_prc">
                        <span className="plan_sec_prc_currency">AED</span> 200
                        <span className="plan_sec_prc_time">/ 2 Week</span>
                      </div>
                    </div>
                  </div>

                  <div className="service_plan_itms">
                    <h4>Service Plan Specifications</h4>
                    <ul className="list_type1">
                      <li>Full database access - 2 months</li>
                      <li>New profiles every 24h</li>
                      <li>Personal space to manage your shortlist</li>
                      <li>100% refund if you are not satisfied</li>
                      <li>Dedicated consultant*</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment_detail">
                  <div className="payment_head">
                    <h4>Payable Amount</h4>
                    <div className="plan_sec_prc">
                      <span className="plan_sec_prc_currency">AED</span> 200
                    </div>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="custom_checkbox_itms">
                            <label className="custom_checkbox">
                              Avail Discount of 10%
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="price_specification form-group">
                          <label>Price Specification:</label>
                          <ul className="price_specification_itms">
                            <li>
                              <span>Price</span>
                              <span className="span_value">AED 400</span>
                            </li>
                            <li>
                              <span>Discount</span>
                              <span className="span_value">AED 40</span>
                            </li>
                            <li>
                              <span>Total Price</span>
                              <span className="span_value">AED 360</span>
                            </li>
                            {/* Coupon */}
                            <label>Enter Your Coupan Code if you have one..</label>
                            <div className="coupon_input">
                              <input
                                type="text"
                                placeholder="Enter Coupon Code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                
                              />
                                 <button onClick={applyCoupon}>Apply</button>
                            </div>
                       
                          </ul>
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="payment_method form-group">
                          <label>Payment Method:</label>
                          <div className="custom_radio_itms">
                            <label className="custom_radio">
                              <div className="payment_method_meta">
                                <span>Credit Card</span>
                                <i>
                                  <img src={visa} /> <img src={MasterCard} />
                                </i>
                              </div>
                              <input
                                type="radio"
                                checked="checked"
                                name="radio"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_radio">
                              <div className="payment_method_meta">
                                <span>Online</span>
                                <i>
                                  <img src={stripe} />
                                </i>
                              </div>
                              <input type="radio" name="radio" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div> */}
                      {/* <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        <Form>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <label>Enter Card Details</label>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <Field
                                      type="text"
                                      name="nameOnCard"
                                      placeholder="Name on Card"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="nameOnCard"
                                      component="div"
                                      className="error"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <Field
                                      type="text"
                                      name="expiryDate"
                                      placeholder="Expiry Date"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="expiryDate"
                                      component="div"
                                      className="error"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="form-group">
                                    <Field
                                      type="text"
                                      name="cardNumber"
                                      placeholder="Card No."
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="cardNumber"
                                      component="div"
                                      className="error"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <Field
                                      type="text"
                                      name="cvv"
                                      placeholder="CVV"
                                      className="form-control"
                                    />
                                    <ErrorMessage
                                      name="cvv"
                                      component="div"
                                      className="error"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Formik> */}
                      <div className="col-md-12">
                        <div className="form-group mb-0 mt-1 text-center">
                          <button
                            type="button"
                            className="btn btn-type1"
                            onClick={handleShow}
                          >
                            Pay Now
                          </button>
                        </div>
                        {/* <Modal
                          className="search-modal"
                          show={show}
                          onHide={handleClose}
                        >
                          <Modal.Header closeButton></Modal.Header>
                          <Modal.Body>
                            <div className="modal-body">
                              <div className="thank_you_image">
                                <img src={thankyou} />
                              </div>
                              <div className="heading_sec1">
                                <h3>Thank You!</h3>
                                <p>
                                  Your service plan has been successfully
                                  activated with us. Now you can hire nannies
                                  any time.
                                </p>
                              </div>
                              <div className="modal_content">
                                <div className="plan_modal_detail">
                                  <p>Plan Detail:</p>
                                  <div className="plan_modal_detail_in">
                                    <img src={premium_icon} />
                                    <span>Premium</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="col-md-12">
                                    <div className="form-group mb-0 mt-1 text-center">
                                      <Link to="/" className="btn btn-type1">
                                        Back to Home
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
