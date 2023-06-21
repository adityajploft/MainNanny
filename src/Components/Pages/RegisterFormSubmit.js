import React from "react";
// Register For Nanny 1 &&  register_for_job1.html

import { Link } from "react-router-dom";

// image import
import Register from "../../assets/img/register_for_job.jpg";
import Upload from "../../assets/img/upload.svg";
import Calender1 from "../../assets/img/calender1.svg";
// validation formik & yup
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation
const validationSchema = Yup.object().shape({
  profilePicture: Yup.mixed().required("Profile picture is required"),
  video: Yup.mixed().required("Video is required"),
  passport: Yup.mixed().required("Passport is required"),
  visa: Yup.mixed().required("Visa is required"),
  nationality: Yup.string().required("Nationality is required"),
  religion: Yup.string().required("Religion is required"),
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  age: Yup.string().required("Age is required"),
  visaStatus: Yup.string().required("Visa status is required"),
  numberOfKids: Yup.string().required("Number of kids is required"),
  experience: Yup.string().required("Experience is required"),
  languages: Yup.array().min(1, "At least one language is required"),
  specificLanguage: Yup.string().required("Specific language is required"),
  skills: Yup.array().min(1, "At least one skill is required"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
const initialValues = {
  profilePicture: "",
  video: "",
  passport: "",
  visa: "",
  nationality: "",
  religion: "",
  gender: "",
  maritalStatus: "",
  age: "",
  visaStatus: "",
  numberOfKids: "",
  experience: "",
  languages: [],
  specificLanguage: "",
  skills: [],
  acceptTerms: false,
};

const onSubmit = (values) => {

  console.log(values);
};

const RegisterFormSubmit = () => {
  return (
    <>
      <section className="register_s">
        <div className="container">
          <div className="register_s_in">
            <div className="row">
              <div className="col-md-6">
                <div className="register_s_img">
                  <img src={Register} />
                </div>
                <div className="register_s_con mt-3">
                  <div className="heading_sec2">
                    <h3>Register For Nanny</h3>
                  </div>
                  <div className="register_s_pera">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.{" "}
                    </p>
                    <ul className="list_type2">
                      <li>Lorem Ipsum is simply dummy text of the printing</li>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>
                        Lorem Ipsum is simply dummy text of the printing Lorem
                        Ipsum is simply dummy
                      </li>
                      <li>
                        Lorem Ipsum is simply dummy text of the printing for
                        more
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="register_s_form">
                  <h4>Register to get contacted directtttly by families</h4>
                  <div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label>Upload Your Profile Picture</label>
                          <div className="file_type_input">
                            <input type="file" />
                            <div className="file_type_btn form-control">
                              <i className="file_type_ic">
                                <img src={Upload} />
                              </i>
                              <span>Upload Profile Picture</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="form-group">
                          <label>Upload Video</label>
                          <div className="file_type_input" />
                          <input type="file" />
                          <div className="file_type_btn form-control">
                            <i className="file_type_ic">
                              <img src={Upload} />
                            </i>
                            <span>Upload video</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group">
                        <label>Upload Your Passport</label>
                        <div className="file_type_input">
                          <input type="file" />
                          <div className="file_type_btn form-control">
                            <i className="file_type_ic">
                              <img src={Upload} />
                            </i>
                            <span>Upload Passport Copy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group">
                        <label>Upload Your Visa</label>
                        <div className="file_type_input">
                          <input type="file" />
                          <div className="file_type_btn form-control">
                            <i className="file_type_ic">
                              <img src={Upload} />
                            </i>
                            <span>Upload Your Visa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <label>Nationality</label>
                        <select className="form-control">
                          <option>Select Nationality</option>
                          <option>Nationality</option>
                          <option>Nationality</option>
                          <option>Nationality</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <label>Religion</label>
                        <select className="form-control">
                          <option>Select Religion</option>
                          <option>Religion</option>
                          <option>Religion</option>
                          <option>Religion</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6">
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
                    <div className="col-xl-6">
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
                    <div className="col-xl-6">
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
                              <img src={Calender1} />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
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
                    <div className="col-xl-6">
                      <div className="form-group">
                        <label>How Many Kids Do You Have</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter Kids"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <label>Years of experience as a nanny</label>
                        <input
                          type="text"
                          name=""
                          placeholder="Enter experience"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
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
                    <div className="col-xl-12">
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
                    <div className="col-xl-12">
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
                    <div className="col-xl-12">
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
                    <div className="col-xl-12">
                      <div className="form-group">
                        <div className="custom_checkbox_itms">
                          <label className="custom_checkbox">
                            I Accept <Link to="#">Terms and Conditions</Link>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mt-1">
                        <Link to="/" className="btn btn-type1">
                          Back
                        </Link>
                        <button
                          type="button"
                          className="btn btn-type1 ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#thankyouModal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <label className="mb-0">
                          If you already have an account?{" "}
                          <Link
                            to="/"
                            data-bs-toggle="modal"
                            data-bs-target="#login_modal"
                          >
                            Login
                          </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="register_s_form">
                  <h4>Register to get contacted directly by families</h4>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div>
                        {/* Profile Picture */}
                        <div className="form-group">
                          <label>Upload Your Profile Picture</label>
                          <Field type="file" name="profilePicture" />
                          <ErrorMessage
                            name="profilePicture"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Video */}
                        <div className="form-group">
                          <label>Upload Video</label>
                          <Field type="file" name="video" />
                          <ErrorMessage
                            name="video"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Passport */}
                        <div className="form-group">
                          <label>Upload Your Passport</label>
                          <Field type="file" name="passport" />
                          <ErrorMessage
                            name="passport"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Visa */}
                        <div className="form-group">
                          <label>Upload Your Visa</label>
                          <Field type="file" name="visa" />
                          <ErrorMessage
                            name="visa"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Nationality */}
                        <div className="form-group">
                          <label>Nationality</label>
                          <Field as="select" name="nationality">
                            <option value="">Select Nationality</option>
                            <option value="Nationality">Nationality</option>
                            {/* Add more options here */}
                          </Field>
                          <ErrorMessage
                            name="nationality"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Religion */}
                        <div className="form-group">
                          <label>Religion</label>
                          <Field as="select" name="religion">
                            <option value="">Select Religion</option>
                            <option value="Religion">Religion</option>
                            {/* Add more options here */}
                          </Field>
                          <ErrorMessage
                            name="religion"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Gender */}
                        <div className="form-group">
                          <label>Gender</label>
                          <div className="custom_radio_itms">
                            <label className="custom_radio">
                              Male
                              <Field type="radio" name="gender" value="male" />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_radio">
                              Female
                              <Field
                                type="radio"
                                name="gender"
                                value="female"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="gender"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Marital Status */}
                        <div className="form-group">
                          <label>Marital Status</label>
                          <div className="custom_radio_itms">
                            <label className="custom_radio">
                              Married
                              <Field
                                type="radio"
                                name="maritalStatus"
                                value="married"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_radio">
                              UnMarried
                              <Field
                                type="radio"
                                name="maritalStatus"
                                value="unmarried"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="maritalStatus"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Age */}
                        <div className="form-group">
                          <label>Age</label>
                          <div className="input-group date" id="datepicker">
                            <Field
                              type="text"
                              name="age"
                              className="form-control"
                              placeholder="Select Age"
                            />
                            <span className="input-group-append">
                              <span className="input-group-text bg-light d-block">
                                <img src={Calender1} alt="Calendar Icon" />
                              </span>
                            </span>
                          </div>
                          <ErrorMessage
                            name="age"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Visa Status */}
                        <div className="form-group">
                          <label>Visa Status</label>
                          <Field as="select" name="visaStatus">
                            <option value="">Select Visa Status</option>
                            <option value="Visa">Visa</option>
                            {/* Add more options here */}
                          </Field>
                          <ErrorMessage
                            name="visaStatus"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* How Many Kids Do You Have */}
                        <div className="form-group">
                          <label>How Many Kids Do You Have</label>
                          <Field
                            type="text"
                            name="numberOfKids"
                            placeholder="Enter Kids"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="numberOfKids"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Years of experience as a nanny */}
                        <div className="form-group">
                          <label>Years of experience as a nanny</label>
                          <Field
                            type="text"
                            name="experience"
                            placeholder="Enter experience"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Experience with Kids */}
                        <div className="form-group">
                          <label>Experience with Kids</label>
                          <div className="custom_checkbox_itms">
                            <label className="custom_checkbox">
                              Newborn (Below 1 year old)
                              <Field
                                type="checkbox"
                                name="experienceWithKids"
                                value="newborn"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Toddler (1-3 years)
                              <Field
                                type="checkbox"
                                name="experienceWithKids"
                                value="toddler"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Pre-school Kids (4-5 years)
                              <Field
                                type="checkbox"
                                name="experienceWithKids"
                                value="preSchoolKids"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Older Kids (6+ years)
                              <Field
                                type="checkbox"
                                name="experienceWithKids"
                                value="olderKids"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="experienceWithKids"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Languages */}
                        <div className="form-group">
                          <label>Languages</label>
                          <div className="custom_checkbox_itms">
                            <label className="custom_checkbox">
                              English
                              <Field
                                type="checkbox"
                                name="languages"
                                value="english"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Arabic
                              <Field
                                type="checkbox"
                                name="languages"
                                value="arabic"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Hindi
                              <Field
                                type="checkbox"
                                name="languages"
                                value="hindi"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              French
                              <Field
                                type="checkbox"
                                name="languages"
                                value="french"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Other
                              <Field
                                type="checkbox"
                                name="languages"
                                value="other"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="languages"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Specific Language */}
                        <div className="form-group">
                          <label>Specific Language</label>
                          <Field
                            type="text"
                            name="specificLanguage"
                            placeholder="Enter Your Language"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="specificLanguage"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Your Skills */}
                        <div className="form-group">
                          <label>Your Skills</label>
                          <div className="custom_checkbox_itms">
                            <label className="custom_checkbox">
                              House Cleaning
                              <Field
                                type="checkbox"
                                name="skills"
                                value="houseCleaning"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Babycare
                              <Field
                                type="checkbox"
                                name="skills"
                                value="babycare"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Cooking
                              <Field
                                type="checkbox"
                                name="skills"
                                value="cooking"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Tutoring
                              <Field
                                type="checkbox"
                                name="skills"
                                value="tutoring"
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="custom_checkbox">
                              Other
                              <Field
                                type="checkbox"
                                name="skills"
                                value="other"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="skills"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Accept Terms */}
                        <div className="form-group">
                          <div className="custom_checkbox">
                            <Field type="checkbox" name="acceptTerms" />
                            <span className="checkmark"></span>I accept the
                            terms and conditions
                          </div>
                          <ErrorMessage
                            name="acceptTerms"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn_register">
                        Register
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterFormSubmit;
