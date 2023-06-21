import React from "react";
import Upload from "../../assets/img/upload.svg";
import Calender1 from "../../assets/img/calender1.svg";

const EmployerProfile = () => {
  return (
    <>
      <section className="profile_secc">
        <div className="container">
          <div className="profile_secc_in">
            <div className="sidebar_sec">
              <div className="sidebar_sec_in">
                <ul className="sidebar_sec_itms">
                  <li>
                    <Link to="employer_profile.html" className="active">
                      Profile <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="change_password.html">
                      Change Password <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="my_plans.html">
                      My Plans <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="My_shortlisted.html">
                      My Shortlisted <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="index.html">
                      Log Out <span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile_content">
              <div className="profile_form">
                <h4>Edit Profile</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Full Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Mobile Number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>WhatsApp Number</label>
                        <input
                          type="text"
                          name=""
                          placeholder="WhatsApp Number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Login Name</label>
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
                        <label>Your Bio</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Tell us about you"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Upload Your Profile Picture</label>
                        <div className="file_type_input">
                          <input type="file" />
                          <div className="file_type_btn form-control">
                            <i className="file_type_ic">
                              <img src={Upload} alt="" />
                            </i>
                            <span>Upload Profile Picture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <div className="custom_radio_itms">
                          <label className="custom_radio">
                            Male
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_radio">
                            Female
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Marital Status</label>
                        <div className="custom_radio_itms">
                          <label className="custom_radio">
                            Married
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_radio">
                            UnMarried
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Age</label>
                        <div className="input-group date" id="datepicker">
                          <input
                            type="text"
                            className="form-control"
                            id="date"
                            placeholder="Select Age"
                          />
                          <span className="input-group-append">
                            <span className="input-group-text bg-light d-block">
                              <img src={Calender1} alt="" />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Visa Status</label>
                        <select className="form-control">
                          <option>Select Visa Status</option>
                          <option>Visa</option>
                          <option>Visa</option>
                          <option>Visa</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Experience with Kids</label>
                        <div className="custom_checkbox_itms">
                          <label className="custom_checkbox">
                            Newborn (Below 1 year old)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Toddler (1-3 years)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Pre-school Kids (4-5 years)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Older Kids (6+ years)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Languages</label>
                        <div className="custom_checkbox_itms">
                          <label className="custom_checkbox">
                            English
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Arabic
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Hindi
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            French
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Other
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Specific Language</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter Your Language"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Your Skills</label>
                        <div className="custom_checkbox_itms">
                          <label className="custom_checkbox">
                            House Cleaning
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Babycare
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Cooking
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Prtcare
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="custom_checkbox">
                            Driver
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="button" className="btn btn-type1">
                          Save & Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerProfile;
