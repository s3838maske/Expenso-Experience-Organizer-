import React, { useState } from "react";
import { cities } from "../Shared/city";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";

function ExperienceForm(props) {
  const { formOpen, handleForm } = props;
  const { register, handleSubmit, reset } = useForm();

  const onSubmitHandle = (d) => {
    console.log(d);
    handleForm();
  };

  return (
    <>
    <div className={`bg-[rgba(0,0,0,0.38)] w-full h-full right-0 left-0  z-30 fixed ${ formOpen ? "block" : "hidden"}`}></div>
      <div
        className={`${
          formOpen ? "block" : "hidden"
        } max-w-sm bg-white p-5 rounded-lg m-auto shadow-lg fixed right-0 left-0 top-20 z-40`}
      >
        
        <div className="text-right cursor-pointer text-lg ">
          <button onClick={handleForm}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandle)}>
          <div>
            <label
              htmlFor="Pro_Experience"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Professional Experience
            </label>
            <input
              type="text"
              id="Pro_Experience"
              placeholder="Enter year of experience"
              required
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              {...register("yearOfExperience")}
            />
          </div>

          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter your job title"
              required
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              {...register("jobTitle")}
            />
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              {...register("companyName")}
              placeholder="Enter your Company Name"
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              required
            />
          </div>

          <br />

          <div>
            <div className="flex mb-4">
              <input
                id="jobCheckBox"
                type="checkbox"
                {...register("isCurrentJob")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="last_name"
                className="block ml-3 mb-2 text-sm font-medium text-gray-900 "
              >
                Is Current Job
              </label>
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Job Location
              </label>
              <select
                className="p-1 rounded-lg bg-transparent"
                name="location"
                {...register("jobLocation")}
                id="locationJob"
              >
                <option value="NA">Select Job Location</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <br />
          <div>
            <Button
              type="submit"
              className="w-full text-white hover:bg-blue-800 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ExperienceForm;
