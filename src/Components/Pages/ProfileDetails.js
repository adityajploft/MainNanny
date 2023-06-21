// nannies details
import React from "react";

const ProfileDetails = () => {
  return (
    // <div>ProfileDetails</div>
    <>
      <section className="nannydetail_sec">
        <div className="container">
          <div className="nannydetail_sec_in">
            <div className="row">
              <div className="col-md-12">
                <div className="nannydetail_sec_head nannydetail_box">
                  <div className="nannydetail_sec_img">
                    <img src="img/nanny_profile.jpg" />
                  </div>
                  <div className="nannydetail_sec_con">
                    <div className="profile_itm_head">
                      <h4>Annabele Enobio</h4>
                      <div className="profile_mts">
                        <div className="profile_mt">
                          Posted On: <span>22-05-2023</span> | Location:{" "}
                          <span>Saudi Arabia</span> | Desired monthly salary:{" "}
                          <span>AED 2500-3200</span>
                        </div>
                        <div className="profile_mts_meta">
                          <div className="profile_itm_heart">
                            <img src="img/heart_ic.svg" />
                          </div>
                          <div className="profile_itm_share">
                            <img src="img/share.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nannydetail_bio">
                      <h5>Bio:</h5>
                      <p>
                        I have been working in the UAE for 4 years as a
                        nanny/maid with 2 employers. My first employer is a
                        local family, they have 4 kids ages 7, 10, 14 and 16. My
                        second employer is also a local family, I took care of
                        their grandchildren, 5 year old twins and 3 years old. I
                        can cook basic food, but I can follow recipes and I am
                        willing to learn. I am available to start anytime.
                      </p>
                    </div>
                    <div className="profile_itm_meta">
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src="img/calendar_ic.svg" />
                        </i>
                        <span>38 Year Old</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src="img/location_ic.svg" />
                        </i>
                        <span>Filipino</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src="img/category_ic.svg" />
                        </i>
                        <span>Nanny</span>
                      </div>
                      <div className="profile_itm_meta_itm">
                        <i>
                          <img src="img/flag_ic.svg" />
                        </i>
                        <span>Full time live out</span>
                      </div>
                    </div>
                    <div className="nannydetail_sec_btn">
                      <Link
                        to="/"
                        data-bs-toggle="modal"
                        data-bs-target="#contact_modal"
                        className="btn btn-type2"
                      >
                        <span>Contact to Nanny</span>
                        <i>
                          <img src="img/right_arrow.svg" />
                        </i>
                      </Link>
                      <Link to="/" className="btn btn-type1 ms-2">
                        Watch Video
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nannydetail_box">
                  <h4>Personal Info</h4>
                  <ul className="nannydetail_box_itms">
                    <li>
                      <span>Candidate ID:</span>{" "}
                      <span className="nannydetail_box_itm_value">CN7864</span>
                    </li>
                    <li>
                      <span>Registered Date:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        12/05/2023
                      </span>
                    </li>
                    <li>
                      <span>Religion:</span>{" "}
                      <span className="nannydetail_box_itm_value">Others</span>
                    </li>
                    <li>
                      <span>Nationality:</span>{" "}
                      <span className="nannydetail_box_itm_value">Nepal</span>
                    </li>
                    <li>
                      <span>Current Location:</span>{" "}
                      <span className="nannydetail_box_itm_value">Dubai</span>
                    </li>
                    <li>
                      <span>Recommendation:</span>{" "}
                      <span className="nannydetail_box_itm_value">No</span>
                    </li>
                    <li>
                      <span>Preferred Location:</span>{" "}
                      <span className="nannydetail_box_itm_value">N/A</span>
                    </li>
                    <li>
                      <span>Visa Status:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Company Visa
                      </span>
                    </li>
                    <li>
                      <span>Age:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        39 years, 5 months
                      </span>
                    </li>
                    <li>
                      <span>Date Of Birth:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        06/12/1983
                      </span>
                    </li>
                    <li>
                      <span>Languages:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        English, Hindi, Urdu, Nepali
                      </span>
                    </li>
                    <li>
                      <span>Marital Status:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Married (2Kids)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nannydetail_box">
                  <h4>Salary & Experience</h4>
                  <ul className="nannydetail_box_itms">
                    <li>
                      <span>Position:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Full time live in
                      </span>
                    </li>
                    <li>
                      <span>Expected Salary:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        AED 2500-3200
                      </span>
                    </li>
                    <li>
                      <span>Available From:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        05/12/2023
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - UAE:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        Beginner
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - GCC:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        9-12 years
                      </span>
                    </li>
                    <li>
                      <span>Years of Experience - Others:</span>{" "}
                      <span className="nannydetail_box_itm_value">
                        9-12 years
                      </span>
                    </li>
                  </ul>
                  <div className="nannydetail_experties">
                    <h4>Experties</h4>
                    <ul className="experties_itms">
                      <li>Babycare</li>
                      <li>Housecleaning</li>
                      <li>Petcare</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nannydetail_video" id="video_sec">
            <div className="heading_sec1">
              <h3>About Nanny</h3>
            </div>
            <div className="nannydetail_video_in">
              <div className="nannydetail_video_img">
                <img src="img/vid_image.jpg" />
              </div>
              <div className="nannydetail_video_btn">
                <Link to="#">
                  <img src="img/video_play.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
