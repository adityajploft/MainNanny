import React from "react";

import { Link } from "react-router-dom";
import Basic from "../../assets/img/basic.svg";
import Standard from "../../assets/img/standard.svg";
import Premium from "../../assets/img/premium.svg";
import Whatsapp_ic from "../../assets/img/whatsapp_ic.svg";

const ServicePlan = () => {
  return (
    <>
      <div className="main_sec">
        <section className="plan_sec">
          <div className="container">
            <div className="plan_sec_in">
              <div className="plan_sec_itms">
                <div className="row">
                  <div className="col-md-4">
                    <div className="plan_sec_itm">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={Basic} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Basic<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 200
                          <span className="plan_sec_prc_time">/ 2 Week</span>
                        </div>
                      </div>
                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 2 weeks</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li>Dedicated consultant*</li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan_sec_itm">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={Standard} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Standard<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 300
                          <span className="plan_sec_prc_time">/ 1 Month</span>
                        </div>
                        <div className="plan_sec_offer">
                          <span>Best Offer</span>
                        </div>
                      </div>

                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 1 month</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li className="text-decoration-line-through">
                            Dedicated consultant*
                          </li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="plan_sec_itm activated">
                      <div className="plan_sec_head">
                        <div className="plan_sec_ic">
                          <img src={Premium} />
                        </div>
                        <div className="plan_sec_heading">
                          <h3>
                            Premium<span>Plan</span>
                          </h3>
                        </div>
                        <div className="plan_sec_prc">
                          <span className="plan_sec_prc_currency">AED</span> 400
                          <span className="plan_sec_prc_time">/ 2 Month</span>
                        </div>
                      </div>
                      <div className="plan_sec_con">
                        <ul className="list_type1">
                          <li>Full database access - 2 months</li>
                          <li>New profiles every 24h</li>
                          <li>Personal space to manage your shortlist</li>
                          <li>100% refund if you are not satisfied</li>
                          <li>Dedicated consultant*</li>
                        </ul>
                        <div className="plan_sec_btn">
                          <Link to="/payment" className="btn btn-type1">
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ServicePlan;
