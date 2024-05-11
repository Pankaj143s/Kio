import React, { useState } from "react";
import becomeADealer from "../assets/wheretobuy/becomeADealer.png";

import { Fade } from "react-awesome-reveal";
import SuccessPopUp from "../components/common/SuccessPopUp";
import useFormSubmission from "../hooks/useFormSubmission";

const initialState = {
  firstname: "",
  lastname: "",
  businessName: "",
  email: "",
  contact: "",
  businessAddress: "",
  typesOfBusiness: "",
  noOfYearsInBusiness: "",
  whyYouWantToBecomeDealer: "",
  additionalMessage: "",
};
const BecomeDealer = () => {
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
    "https://docs.google.com/forms/d/1jm5ctERFRqEy_m93oP4_921k7DHbkXSpRAEZJ3agAOA/formResponse";

  // Define Google Form keys mapping with form data fields
  const googleFormFields = {
    "entry.1069941309": formData.firstname,
    "entry.27659284": formData.lastname,
    "entry.1281403678": formData.businessName,
    "entry.1531166622": formData.email,
    "entry.764821601": formData.contact,
    "entry.1592759350": formData.businessAddress,
    "entry.445342197": formData.typesOfBusiness,
    "entry.633191202": formData.noOfYearsInBusiness,
    "entry.2065788009": formData.whyYouWantToBecomeDealer,
    "entry.108109329": formData.additionalMessage,
  };

  // Handle form submission
  const handleSubmit = async (e) => {
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
    <>
      <div className="font-poppins">
        {/* -----------------------------------------Banner------------------------------------ */}
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={becomeADealer}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="min-h-[500px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <Fade direction="up" triggerOnce="true">
              <h2 className="sm:text-6xl text-2xl font-bold mb-6">
                Grow With Us!
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <p className="text-xl md:text-3xl text-center text-gray-200 font-semibold">
                Empower Your Business: Become A Dealer Today!
              </p>
            </Fade>

            <a
              href="javascript:void(0)"
              className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white hover:border-primary rounded hover:bg-primary hover:text-black transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* -----------------------------------------Banner------------------------------------ */}
        <div className="max-w-screen-md mx-auto p-5 ">
          <Fade direction="up" triggerOnce="true">
            <h1 className=" text-center text-2xl md:text-4xl font-semibold text-primary py-4">
              QUICK ENQUIRY
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <div className="grid grid-cols-1  border">
              <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder="Lastname"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="businessName"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Business Name
                  </label>
                  <textarea
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    rows={1} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contact"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="businessAddress"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    business Address
                  </label>
                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    required
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    placeholder="Please enter your full address [City, District,  State, Country]"
                    rows={5} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="typesOfBusiness"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Type of business
                  </label>
                  <textarea
                    id="typesOfBusiness"
                    name="typesOfBusiness"
                    value={formData.typesOfBusiness}
                    onChange={handleInputChange}
                    placeholder="e.g. Retail, Service"
                    rows={5} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="noOfYearsInBusiness"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Number of years in business
                  </label>
                  <input
                    type="num"
                    id="noOfYearsInBusiness"
                    name="noOfYearsInBusiness"
                    value={formData.noOfYearsInBusiness}
                    onChange={handleInputChange}
                    placeholder="Enter number of years in business"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="whyYouWantToBecomeDealer"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Why do you want to become a dealer for Emiko Battery?
                  </label>
                  <textarea
                    id="whyYouWantToBecomeDealer"
                    name="whyYouWantToBecomeDealer"
                    value={formData.whyYouWantToBecomeDealer}
                    onChange={handleInputChange}
                    placeholder=""
                    rows={5} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="additionalMessage"
                    >
                      Additional Message/Battery Requirement
                    </label>
                    <textarea
                      rows="8"
                      id="additionalMessage"
                      name="additionalMessage"
                      required
                      value={formData.additionalMessage}
                      onChange={handleInputChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-primary hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {showSuccessModal && (
                <SuccessPopUp handleCloseModal={handleCloseModal} />
              )}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default BecomeDealer;
