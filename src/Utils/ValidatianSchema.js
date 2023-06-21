import * as Yup from "yup";
// register for nannay  || register form sumbmit

// export const registertogetdirectfamiles = Yup.object({
//   profilePicture: Yup.mixed().required("Profile Picture is required"),
//   video: Yup.mixed().required("Video is required"),
//   passport: Yup.mixed().required("Passport is required"),
//   visa: Yup.mixed().required("Visa is required"),
//   nationality: Yup.string().required("Nationality is required"),
//   religion: Yup.string().required("Religion is required"),
//   gender: Yup.string().required("Gender is required"),
//   maritalStatus: Yup.string().required("Marital Status is required"),
//   age: Yup.string().required("Age is required"),
//   visaStatus: Yup.string().required("Visa Status is required"),
//   numberOfKids: Yup.string().required("Number of Kids is required"),
//   experience: Yup.string().required("Years of experience is required"),
//   experienceWithKids: Yup.array().required("Experience with Kids is required"),
//   languages: Yup.array().required("Languages is required"),
//   specificLanguage: Yup.string().when("languages", {
//     is: (languages) => languages && languages.includes("other"),
//     then: Yup.string().required("Specific Language is required"),
//     otherwise: Yup.string(),
//   }),
//   skills: Yup.array().required("Skills is required"),
//   acceptTerms: Yup.boolean()
//     .oneOf([true], "Accepting the terms and conditions is required")
//     .required("Accepting the terms and conditions is required"),
// });
export const registertogetdirectfamiles = Yup.object({
  profilePicture: Yup.mixed().required("Profile Picture is required"),
  video: Yup.mixed().required("Video is required"),
  passport: Yup.mixed().required("Passport is required"),
  visa: Yup.mixed().required("Visa is required"),
  nationality: Yup.string().required("Nationality is required"),
  religion: Yup.string().required("Religion is required"),
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string().required("Marital Status is required"),
  age: Yup.string().required("Age is required"),
  visaStatus: Yup.string().required("Visa Status is required"),
  numberOfKids: Yup.string().required("Number of Kids is required"),
  experience: Yup.string().required("Years of experience is required"),
  experienceWithKids: Yup.array().required("Experience with Kids is required"),
  languages: Yup.array().required("Languages is required"),
  specificLanguage: Yup.string().when("languages", {
    is: (languages) => languages && languages.includes("other"),
    then: Yup.string().required("Specific Language is required"),
    otherwise: Yup.string(),
  }),
  skills: Yup.array().required("Skills is required"),
  acceptTerms: Yup.boolean()
    .oneOf([true], "Accepting the terms and conditions is required")
    .required("Accepting the terms and conditions is required"),
});



// register for nannay 2 || registersubmit 
export const registerjob = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  whatsappNumber: Yup.string().required("WhatsApp Number is required"),
  loginName: Yup.string().required("Login Name is required"),
  loginPin: Yup.string().required("Login Pin is required"),
  bio: Yup.string().required("Your Bio is required"),
});


// register for nannay 1 || registersubmit 
export const registersubmit = Yup.object({
  salary: Yup.string().required("Offered Salary is required"),
  preference: Yup.string().required("Preference is required"),
  requirements: Yup.string().required("Requirements is required"),
  referralSource: Yup.string().required("Referral Source is required"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the Terms and Conditions"
  ),
});

// regiter page 1 
export const registerformnanny = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  whatsAppNumber: Yup.string().required("WhatsApp Number is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  password: Yup.string().required("Password is required"),
  position: Yup.string().required("Position is required"),
  location: Yup.string().required("Location is required"),
});


// contactUs
export const contactUs = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  lookingFor: Yup.string().required("Looking For is required"),
  message: Yup.string().required("Your Message is required"),
});


// aboutus
export const aboutUs = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  lookingFor: Yup.string().required("Looking For is required"),
  message: Yup.string().required("Your Message is required"),
});
// searchnannaies
export const searchNannoies = Yup.object({
  nanny: Yup.string().required("Nanny is required"),
  liveIn: Yup.string().required("Live In is required"),
  location: Yup.string().required("Location is required"),
  nationality: Yup.string().required("Nationality is required"),
  religion: Yup.string().required("Religion is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.string().required("Age is required"),
  lastUpdated: Yup.string().required("Last Updated is required"),
  skills: Yup.string().required("Skills is required"),
  postStatus: Yup.string().required("Post Status is required"),
  experience: Yup.string().required("Experience is required"),
});

// visaSponsorship 

export const validationSchemaVisa = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    nationality: Yup.string().required("Nationality is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    comment: Yup.string().required("Comment is required"),
  });
  


