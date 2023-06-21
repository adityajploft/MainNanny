import React from "react";

const ChangePassword = () => {
  return (
    <>
      <section className="profile_secc">
        <div className="container">
          <div className="profile_secc_in">
            <div className="sidebar_sec">
              <div className="sidebar_sec_in">
                <ul className="sidebar_sec_itms">
                  <li>
                    <Link to="employer_profile.html">
                      Profile <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="change_password.html" className="active">
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
                <h4>Change Password</h4>
                <form>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <label>Current password</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Current password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group">
                        <label>New password</label>
                        <input
                          type="text"
                          name=""
                          placeholder="New password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group">
                        <label>Confirm new password</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Confirm new password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group mb-0">
                        <button type="button" className="btn btn-type1">
                          Change Password
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

export default ChangePassword;
