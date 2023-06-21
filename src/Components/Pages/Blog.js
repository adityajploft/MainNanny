import React from "react";
import blg1 from "../../assets/img/blg1.jpg";
import blg2 from "../../assets/img/blg2.jpg";
import blg3 from "../../assets/img/blg3.jpg";
import search_ic2 from "../../assets/img/search_ic2.svg";

import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="blog_Sec">
        <div className="container">
          <div className="blog_sec_in">
            <div className="blog_itms">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg1} alt="" />
                    </div>
                    <div className="blog_itm_con">
                      <h4>What to Do When You're Unhappy with Your Maid</h4>
                      <p>
                        Hiring a maid in UAE can be a life-changing decision,
                        making your life easier and giving you more time to
                        focus on other things. However, there may be times
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg2} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>How a Maid Service Can Help New Parmanebt</h4>
                      <p>
                        Becoming a new parent is an exciting and life-changing
                        event, but it can also be incredibly overwhelming. With
                        so much to do and so little time
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg3} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>Basic Infant Care Training For Your Nanny</h4>
                      <p>
                        Basic Infant Care Training For Your Nanny / Maid Hiring
                        full-time caregivers or nannies have become essential
                        for many families
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg1}  alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>What to Do When You’re Unhappy with mad</h4>
                      <p>
                        Hiring a maid in UAE can be a life-changing decision,
                        making your life easier and giving you more time to
                        focus on other things. However, there may be times
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg2} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>How a Maid Service Can Help New Parmanebt</h4>
                      <p>
                        Becoming a new parent is an exciting and life-changing
                        event, but it can also be incredibly overwhelming. With
                        so much to do and so little time
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg3} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>Basic Infant Care Training For Your Nanny</h4>
                      <p>
                        Basic Infant Care Training For Your Nanny / Maid Hiring
                        full-time caregivers or nannies have become essential
                        for many families
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg1} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>What to Do When You’re Unhappy with mad</h4>
                      <p>
                        Hiring a maid in UAE can be a life-changing decision,
                        making your life easier and giving you more time to
                        focus on other things. However, there may be times
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg2} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>How a Maid Service Can Help New Parmanebt</h4>
                      <p>
                        Becoming a new parent is an exciting and life-changing
                        event, but it can also be incredibly overwhelming. With
                        so much to do and so little time
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="blog_itm">
                    <div className="blog_itm_img">
                      <img src={blg3} alt=""/>
                    </div>
                    <div className="blog_itm_con">
                      <h4>Basic Infant Care Training For Your Nanny</h4>
                      <p>
                        Basic Infant Care Training For Your Nanny / Maid Hiring
                        full-time caregivers or nannies have become essential
                        for many families
                      </p>
                      <Link to="/blogdetails" className="more_btn">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog_detail_form">
              <div className="blog_detail_form_in">
                <h4>Search</h4>
                <div className="blog_search">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Search here..."
                  />
                  <button type="button" className="blog_search_ic">
                    <img src={search_ic2} alt=""/>
                  </button>
                </div>
                <div className="blog_categories">
                  <h4>Categories</h4>
                  <ul className="blog_categories_itms">

                    <li className="blog_categories_itm">
                      <Link className="pp" to="#">Nanny</Link>
                    </li>
                    <li className="blog_categories_itm">
                      <Link className="pp" to="#">Maid</Link>
                    </li>
                    <li className="blog_categories_itm">
                      <Link className="pp" to="#">Housekeeper</Link>
                    </li>
                    <li className="blog_categories_itm">
                      <Link className="pp" to="#">Babysitter</Link>
                    </li>
                    <li className="blog_categories_itm">
                      <Link className="pp" to="#">Driver</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
