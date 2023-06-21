import React from "react";

import { Link } from "react-router-dom";

const LoginModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="login_modal"
        tabindex="-1"
        aria-labelledby="login_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="heading_sec1">
                <h3>Login</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="modal_content">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      {/* <!-- Nav tabs --> */}
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            data-bs-toggle="tab"
                            to="/"
                          >
                            Nanny
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            data-bs-toggle="tab"
                            to="/"
                          >
                            Employer
                          </Link>
                        </li>
                      </ul>

                      {/* <!-- Tab panes --> */}
                      <div className="tab-content">
                        <div className="tab-pane active" id="nanny">
                          <div className="modal_tab_content">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Login Name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Login Pin '1234'"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group text-center mb-0">
                                <label className="mb-3">
                                  <Link
                                    to="/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forgotpin_modal"
                                  >
                                    Forgot Pin?
                                  </Link>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mt-1 text-center">
                                <button type="button" className="btn btn-type1">
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group text-center mb-0">
                                <label className="mb-0">
                                  New User? <Link to="/">Register</Link>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="family">
                          <div className="modal_tab_content">
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
                              <div className="form-group">
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group text-center mb-0">
                                <label className="mb-3">
                                  <Link
                                    to="/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forgotpassword_modal"
                                  >
                                    Forgot Password?
                                  </Link>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mt-1 text-center">
                                <button type="button" className="btn btn-type1">
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group text-center mb-0">
                                <label className="mb-0">
                                  New User? <Link to="/">Register</Link>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModel;
