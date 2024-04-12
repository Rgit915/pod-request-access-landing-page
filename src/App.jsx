import { useState } from "react";
import { useFormik } from "formik";

import hifi from "./assets/images/Hifi.png";
import spotify from "./assets/images/Spotify_logo_with_text.png";
import applePodcast from "./assets/images/Apple_Podcast.png";
import googlePodcast from "./assets/images/google_podcast.png";
import pocketCast from "./assets/images/pocket_cast.png";

// validation function to check the email field
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Oops! Please check your email."; // Error message if email is empty
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Oops! Please check your email."; // Error message if email format is invalid
  }
  return errors;
};

const App = () => {
  const [email, setEmail] = useState(""); //state variable to store email input
  //Initialize Formik with inital values, validation function and submit handler
  const formik = useFormik({
    initialValues: {
      email: "", // Initial value for the email field
    },
    validate, // validation function to validate form fields
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); //show form values in an alert
      setEmail(values.email); // Update email state with user input
    },
  });
  return (
    <>
      <main>
        <section className="flex flex-col min-h-screen justify-center items-center p-4 space-y-8">
          <div className="logo flex justify-center items-center space-x-2 my-8 ">
            <img src={hifi} alt="logo" />
            <p className="text-[35px] font-bold text-light-blueish-gray">pod</p>
          </div>
          <div className="content flex flex-col">
            <div className="text-center">
              <h1 className="text-[26px] uppercase text-light-green mb-8">
                Publish your podcasts{" "}
                <span className="text-light-blueish-gray">everywhere.</span>
              </h1>
              <p className="text-light-blueish-gray">
                Upload your audio to Pad with a single click. We'll then
                distribute your podcasts to spotify. Apple Podcasts, Google
                Podcasts, Pocket Casts and more!
              </p>
            </div>
            <div className="flex items-center justify-between my-8 md:order-last md:justify-normal md:space-x-14 ">
              <img src={spotify} alt="spotify icon" />
              <img src={applePodcast} alt="apple podcast icon" />
              <img src={googlePodcast} alt="google podcast icon" />
              <img src={pocketCast} alt="pocket cast icon" />
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission behavior
                  formik.handleSubmit(e); // Call the Formik handleSubmit function
                }}
                autoComplete="off"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`rounded-3xl border-none text-white font-normal text-[14px] leading-[28px] bg-dark-blueish-gray px-4 py-2 w-full outline-none focus:border-none ${
                      formik.touched.email && formik.errors.email
                        ? "border-red"
                        : ""
                    }`}
                  />
                  <div className="flex md:mr-auto">
                    {/* Display error message if email field is touched and has an error */}
                  {formik.touched.email && formik.errors.email && (
                    <span className=" text-[#FB3E3E] text-[12px] font-bold leading-[14.28px]">
                      {formik.errors.email}
                    </span>
                  )}
                  </div>


                  <button
                    type="submit"
                    className=" rounded-3xl bg-light-green p-2 w-full font-bold mb-10 hover:bg-[#B3FFE2] md:absolute md:top-0 md:right-0 md:left-[60%] md:w-[40%]"
                  >
                    Request Access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
