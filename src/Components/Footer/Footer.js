import React from "react";
import logo_white from "../../assets/img/logo_white.svg";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";
import instagram from "../../assets/img/instagram.svg";
import whatsapp_ic from "../../assets/img/whatsapp_ic.svg";

import { Link } from "react-router-dom";

const Footer = () => {

return (
    <>
      <footer className="footer_sec">
        <div className="container">
          <div className="footer_sec_in">
            <div className="footer_top">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer_sec_itm">
                    <Link to="/" className="footer_sec_itm_logo">
                      <img src={logo_white}  alt=""/>
                    </Link>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="footer_sec_itm">
                        <div className="footer_sec_heading">
                          <h4>Quick Links</h4>
                        </div>
                        <div className="footer_itms">
                          <ul>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/">Search Nannies</Link>
                            </li>
                            <li>
                              <Link to="/">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/">Terms and Conditions</Link>
                            </li>
                            <li>
                              <Link to="/">Privacy Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="footer_sec_itm">
                        <div className="footer_sec_heading">
                          <h4>Find Workers</h4>
                        </div>
                        <div className="footer_itms">
                          <ul>
                            <li>
                              <Link to="/">Nanny</Link>
                            </li>
                            <li>
                              <Link to="/">Maid</Link>
                            </li>
                            <li>
                              <Link to="/">Housekeeper</Link>
                            </li>
                            <li>
                              <Link to="/">Babysitter</Link>
                            </li>
                            <li>
                              <Link to="/">Driver</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="footer_sec_itm">
                        <div className="footer_sec_heading">
                          <h4>Contact Us</h4>
                        </div>
                        <div className="footer_itms">
                          <ul>
                            <li>
                              <Link to="/">
                                Email:
                                <br />
                                info@maids_nanny.com
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                Mobile Number:
                                <br />
                                +971 00 000 0000
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bot">
              <div className="row">
                <div className="col-md-7">
                  <div className="footer_bot_cn">
                    Copyright © 2023 Maids & Nanny . All Rights Reserved
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="footer_social_itms">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src={facebook}  alt="" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src={twitter}  alt=""/>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src={linkedin} alt=""/>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src={instagram} alt=""/>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="wts_fixed">
        <Link to="/">
          <img src={whatsapp_ic} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
