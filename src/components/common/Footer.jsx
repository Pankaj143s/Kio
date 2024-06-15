import React, { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import SuccessPopUp from "./SuccessPopUp";
import useFormSubmission from "../../hooks/useFormSubmission";
import logo from "../../assets/kio-logo.png";

const initialState = {
  fullname: "",
  email: "",
  contact: "",
  message: "",
};

const Footer = () => {
  const [formData, setFormData] = useState(initialState);
  const { submitForm, showSuccessModal, setShowSuccessModal } =
    useFormSubmission();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // URL of the Google Form endpoint where the form data will be submitted
  const googleFormUrl =
    "https://docs.google.com/forms/d/1TI7RBbchWEYAACK2ty54WOKtxk6U9G2roIdZi7hQnL0/formResponse";

  // Define Google Form keys mapping with form data fields
  const googleFormFields = {
    "entry.1853065925": formData.fullname,
    "entry.340068155": formData.email,
    "entry.1492073197": formData.contact,
    "entry.1732616744": formData.message,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();

    // Call the submitForm function with necessary parameters
    submitForm(
      formData, // Form data to be submitted
      googleFormUrl, // URL of the Google Form
      googleFormFields, // Mapping of form fields to Google Form keys
      setFormData, // Function to clear form data after submission
      initialState // Initial state of the form data
    );
  };
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <footer
      id="footer-section"
      className="bg-[#052954] text-white px-8 py-8 font-poppins"
    >
      <div className="">
        <div className="flex flex-col md:flex-row gap-y-6">
          <div className="md:w-1/4">
            <div className="">
              <img src={logo} alt="kio-logo" className="w-2/4 ml-7" />
              <p className=" uppercase ml-12 text-primary text-xl font-semibold">
                About Us
              </p>
            </div>
            <div className="flex flex-col">
              <p className="mt-4 max-w-xs ml-12">
                JPG Batteries Pvt. Ltd., a subsidiary of a prominent 700 crore
                group, has been a key player in the lead acid battery industry
                since 1988. Introducing the Kio brand, the company aims to
                revolutionize the energy sector by providing cutting-edge
                solutions in power backup, solar energy, e-rickshaws,
                automotive, and two-wheeler batteries
              </p>

              <ul className="mt-8 flex gap-6 flex-col">
                <li>
                  <div className="flex   gap-x-4 items-center">
                    <div>
                      <FaLocationArrow
                        size={30}
                        color="white"
                        className="mt-2"
                      />
                    </div>
                    <p>
                      Ground & 1st Floor, Gera Emporia, behind Phoenix Boundary
                      Road, off Nagar Road, Clover Park, Viman Nagar, Pune,
                      Maharashtra 411014
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <FaPhone size={30} color="white" className="mt-1" />
                    </div>
                    <a href="tel:18001204954">1800 120 4954</a>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <MdEmail size={30} color="white" className="mt-1" />
                    </div>
                    <a href="mailto:connect@kio.co.in">connect@kio.co.in</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row gap-y-4 justify-around">
            <div className="flex ">
              <div>
                <p className=" uppercase text-primary text-xl font-semibold">
                  Quick Links
                </p>

                <ul className="mt-6 space-y-4 text-xl uppercase">
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      className="text-white transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="products"
                      className="text-white transition hover:opacity-75"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="carrers"
                      className="text-white transition hover:opacity-75"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <p className=" uppercase text-primary text-xl font-semibold">
                Products
              </p>

              <ul className="mt-6 space-y-4 text-xl ">
                <li>
                  <Link
                    to="/products/0"
                    className="text-white transition hover:opacity-75"
                  >
                    Automotive battery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/1"
                    className="text-white transition hover:opacity-75"
                  >
                    Inverter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/2"
                    className="text-white transition hover:opacity-75"
                  >
                    Marine Battery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/3"
                    className="text-white transition hover:opacity-75"
                  >
                    E-Rickshaw
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4">
            <h1 className="text-primary text-xl font-semibold pb-4">
              QUICK ENQUIRY
            </h1>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Name*"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                id="contact"
                placeholder="Contact*"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                required
              />
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                name="message"
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-primary hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Send
              </button>
            </form>
            {showSuccessModal && (
              <SuccessPopUp handleCloseModal={handleCloseModal} />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
