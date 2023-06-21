import React from "react";
import calender1 from "../../assets/img/calender1.svg";
// import { Link } from "react-router-dom";

const SearchModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="heading_sec1">
                <h3>Advance Search</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <div className="modal_content">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Looking For</option>
                          <option>Nanny</option>
                          <option>Maid</option>
                          <option>Driver</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Location</option>
                          <option>Location</option>
                          <option>Location</option>
                          <option>Location</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Nationality</option>
                          <option>Nationality</option>
                          <option>Nationality</option>
                          <option>Nationality</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Religion</option>
                          <option>Religion</option>
                          <option>Religion</option>
                          <option>Religion</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
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
                        <div className="input-group date" id="datepicker">
                          <input
                            type="text"
                            className="form-control"
                            id="date"
                            placeholder="Age"
                          />
                          <span className="input-group-append">
                            <span className="input-group-text bg-light d-block">
                              <img src={calender1} />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group date" id="datepicker1">
                          <input
                            type="text"
                            className="form-control"
                            id="date"
                            placeholder="Last Updated"
                          />
                          <span className="input-group-append">
                            <span className="input-group-text bg-light d-block">
                              <img src={calender1} />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Skills</option>
                          <option>Skills</option>
                          <option>Skills</option>
                          <option>Skills</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Post Status</option>
                          <option>Post Status</option>
                          <option>Post Status</option>
                          <option>Post Status</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0 mt-1 text-center">
                        <button type="button" className="btn btn-type1">
                          Search
                        </button>
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

export default SearchModel;
