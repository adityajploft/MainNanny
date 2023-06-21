import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/stylesheet.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Blog from "./Components/Pages/Blog";
import SearchNannies from "./Components/Pages/SearchNannoies";
import ServicePlan from "./Components/Pages/ServicePlan";
import ContactUs from "./Components/Pages/ContactUs";
import OtherService from "./Components/Pages/OtherService";
import Register from "./Components/Pages/Register";
import coreui from '@coreui/coreui'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterForJob from "./Components/Pages/RegisterForJob";
import RegisterFormSubmit from "./Components/Pages/RegisterFormSubmit";
import Payment from "./Components/Pages/Payment";
import NannyDetails from "./Components/Pages/NannyDetails";
import BlogDetails from "./Components/Pages/BlogDetails";
import VisaSponsorship from "./Components/Pages/VisaSponsorship";
import RegisterFormNanny from "./Components/Pages/RegisterFormNanny";
import RegisterSubmit from "./Components/Pages/RegisterSubmit";
import ForgotPassword from "./Components/Pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/searchnannies" element={<SearchNannies />} />
            <Route exact path="/serviceplan" element={<ServicePlan />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contactUs" element={<ContactUs />} />
            <Route exact path="/otherservice" element={<OtherService />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/registerformnanny" element={<RegisterFormNanny />} />
            <Route exact path="/registerforjob" element={<RegisterForJob />} />
            <Route exact path="/registerformsubmit" element={<RegisterFormSubmit />} />
            <Route exact path="/registersubmit" element={<RegisterSubmit />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/nannydetails" element={<NannyDetails />} />
            <Route exact path="/blogdetails" element={<BlogDetails />} />
            <Route exact path="/visa" element={<VisaSponsorship />} />
            <Route exact path="/forgetpassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
