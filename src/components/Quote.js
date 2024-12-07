import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import pricing from "../assets/pricing.jpg"

const Quote = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then(() => {
        alert("Quote request sent successfully!");
        reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <section
      id="quote"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >


      <h2 className="text-4xl font-bold mb-6 text-center">Get a Quote</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* SVG Animation Section */}
        <div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <img
            src={pricing}
            alt="Illustration"
            className=" rounded-lg shadow-lg "
          />
        </div>

        {/* Quote Form Section */}
        <div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-700 p-8 text-center rounded-lg "
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="input-field bg-gray-100 border-4 "
                required
              />
            </div>
            <div>
              <label htmlFor="projectName" className="block mb-2 font-semibold">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                {...register("projectName")}
                className="input-field bg-gray-100 border-4"
                required
              />
            </div>
        
            <div>
              <label htmlFor="budget" className="block mb-2 font-semibold">
                Estimated Budget
              </label>
              <select
                id="budget"
                {...register("budget")}
                className="input-field bg-gray-100 border-4"
                required
              >
                <option value="">Select Your Budget</option>
                <option value="500-1000">Kshs15,000 - Kshs39,999</option>
                <option value="1000-5000">Kshs40,000 - Kshs69,999</option>
                <option value="5000+">Kshs70,000+</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="functionality"
                className="block mb-2 font-semibold"
              >
                Important Functionality You Want
              </label>
              <textarea
                id="functionality"
                {...register("functionality")}
                className="input-field bg-gray-100 shadow-lg"
                rows="4"
                required
              />
            </div>
     
            <button
              type="submit"
              className="btn-primary w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Quote;
