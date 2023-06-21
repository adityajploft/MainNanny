import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div
        className="modal fade"
        id="forgotpassword_modal"
   
        aria-labelledby="forgotpassword_modalLabel"
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
                <h3>Forgot Password</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                        <button type="button" className="btn btn-type1">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-center mb-0">
                        <label className="mb-0">
                          <Link
                            to="#;"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
