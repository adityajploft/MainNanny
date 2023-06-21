import React, { useState } from "react";
import Family from "../../assets/img/family.jpg";
import Right_Arrow from "../../assets/img/right_arrow.svg";
import Nanny from "../../assets/img/nanny.jpg";
import Whatsapp_ic from "../../assets/img/whatsapp_ic.svg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main_sec">
        <section className="register_s">
          <div className="container">
            <div className="register_s_in">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="register_s_img">
                    <img src={Family} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="register_s_con">
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
                      <Link
                        to="/registerformnanny"
                        className="btn btn-type2 mt-2"
                      >
                        <span>Register Now</span>
                        <i>
                          <img src={Right_Arrow} />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register_s_in">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="register_s_img">
                    <img src={Nanny} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="register_s_con">
                    <div className="heading_sec2">
                      <h3>Register For a Job</h3>
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
                      <Link to="/registerforjob" className="btn btn-type2 mt-2">
                        <span>Register Now</span>
                        <i>
                          <img src={Right_Arrow} />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="registration_prb bg_type1">
          <div className="container">
            <div className="registration_prb_in">
              <div className="heading_sec1">
                <h3>Register For Nanny</h3>
              </div>
              <div className="registration_prb_con">
                <p>
                  If you are facing any problem in registration then you can
                  contact with us
                </p>
                <button className="btn btn-type2 mt-2" onClick={handleShow}>
                  <span>Register Now</span>
                  <i>
                    <img src={Right_Arrow} />
                  </i>
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
                    <div className="modal-body">
                      <div className="heading_sec1">
                        <h3>Contact Now</h3>
                        <p>
                          If you are facing any problem in registration then you
                          can contact with us
                        </p>
                      </div>
                      <div className="modal_content">
                        <form>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <select className="form-control">
                                  <option>Looking For</option>
                                  <option>Nanny</option>
                                  <option>Maid</option>
                                  <option>Driver</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mobile Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="WhatsApp Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  placeholder="Message"
                                  className="form-control"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mb-0 mt-1 text-center">
                                <button type="button" className="btn btn-type1">
                                  Send Message
                                </button>
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
          </div>
        </section>
        <div className="wts_fixed">
          <Link to="/">
            <img src={Whatsapp_ic} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
