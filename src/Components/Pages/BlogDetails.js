import React from "react";
import category_ic from "../../assets/img/category_ic.svg";
import blog_big from "../../assets/img/blog_big.jpg";
import blg1 from "../../assets/img/blg1.jpg";
import blg2 from "../../assets/img/blg2.jpg";
import blg3 from "../../assets/img/blg3.jpg";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  
  return (
    <>
      <section className="blog_detail_s">
        <div className="container">
          <div className="blog_detail_in">
            <div className="blog_detail_con">
              <div className="blog_cat">
                <img src={category_ic} alt=""/>
                <span>Nanny</span>
              </div>
              <div className="blog_title">
                <h2>What to Do When You're Unhappy with Your Maid</h2>
              </div>
              <div className="blog_detail_img">
                <img src={blog_big} alt=""/>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <h4>Evaluating the Situation</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul>
                <li>
                  <h5>
                    <span>Communication issues</span>
                  </h5>
                  <p>
                    Miscommunication frequently leads to misunderstandings and
                    dissatisfaction. Consider whether there is a language
                    barrier, or if unclear instructions are causing the issue.
                  </p>
                </li>
                <li>
                  <h5>
                    <span>Job expectations</span>
                  </h5>
                  <p>
                    Ensure that both you and your maid understand the job
                    expectations. It’s possible that the maid is not aware of
                    specific tasks or responsibilities, leading to a disconnect
                    in expectations.
                  </p>
                </li>
                <li>
                  <h5>
                    <span>Cultural differences</span>
                  </h5>
                  <p>
                    Cultural differences can sometimes cause friction in the
                    employer-employee relationship. Make an effort to understand
                    and respect each other’s cultural background and practices.
                  </p>
                </li>
              </ul>
              <div className="conclution_sec">
                <h4>Conclusion</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div className="blog_sec_in">
                  <div className="heading_sec1">
                    <h3>Related Blogs</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Blogs */}
      <section className="blog_Sec bg_type1">
        <div className="container">
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
                      making your life easier and giving you more time to focus
                      on other things. However, there may be times
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
                      event, but it can also be incredibly overwhelming. With so
                      much to do and so little time
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
                      full-time caregivers or nannies have become essential for
                      many families
                    </p>
                    <Link to="/blogdetails" className="more_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
