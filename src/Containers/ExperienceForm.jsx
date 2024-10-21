import React from "react";
import { useDispatch } from "react-redux";
import { addExperience } from "../Store/ExperienceData/experienceAction";
import { cities } from "../Shared/city";
import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import Loading from "../Components/Loading";

function ExperienceForm(props) {
  const { formOpen, handleForm } = props;
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch();

  const onSubmitHandle = async (data) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        dispatch(addExperience(data));
        resolve("Form submitted successfully!");
      }, 1000);
    });
    handleForm();  // Assuming this is for form state handling
    reset();       // Reset form
  };

  return (
    <>
      <div className={`bg-[rgba(0,0,0,0.38)] w-full h-full right-0 left-0 z-30 fixed ${formOpen ? "block" : "hidden"}`}></div>
      <div className={`${formOpen ? "block" : "hidden"} max-w-sm bg-white p-5 rounded-lg m-auto shadow-lg fixed right-0 left-0 top-20 z-40`}>
        <div className="text-right cursor-pointer text-lg">
          <button onClick={handleForm}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandle)}>
          <div>
            <label htmlFor="Pro_Experience" className="block mb-2 text-sm font-medium text-gray-900">
              Professional Experience
            </label>
            <input
              type="text"
              id="Pro_Experience"
              placeholder="Enter year of experience"
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              {...register("yearOfExperience", {
                required: "Year of experience is required",
                pattern: {
                  value: /^[1-9]+$/,
                  message: "Please enter a valid number"
                }
              })}
            />
            {errors.yearOfExperience && (
              <p className="text-red-600 text-sm">{errors.yearOfExperience.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter your job title"
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              {...register("jobTitle", {
                required: "Job title is required",
                minLength: {
                  value: 2,
                  message: "Job title must be at least 2 characters"
                }
              })}
            />
            {errors.jobTitle && (
              <p className="text-red-600 text-sm">{errors.jobTitle.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter your company name"
              className="border-gray-300 border w-full p-2 rounded-lg mb-2"
              {...register("companyName", {
                required: "Company name is required",
                minLength: {
                  value: 2,
                  message: "Company name must be at least 2 characters"
                }
              })}
            />
            {errors.companyName && (
              <p className="text-red-600 text-sm">{errors.companyName.message}</p>
            )}
          </div>

          <div className="flex mb-4">
            <input
              id="jobCheckBox"
              type="checkbox"
              {...register("isCurrentJob")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="jobCheckBox" className="block ml-3 mb-2 text-sm font-medium text-gray-900">
              Is Current Job
            </label>
          </div>

          <div>
            <label htmlFor="locationJob" className="block mb-2 text-sm font-medium text-gray-900">
              Job Location
            </label>
            <select
              className="p-1 rounded-lg bg-transparent border-gray-300"
              {...register("jobLocation", {
                validate: value => value !== "NA" || "Please select a job location"
              })}
              id="locationJob"
            >
              <option value="NA">Select Job Location</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.jobLocation && (
              <p className="text-red-600 text-sm">{errors.jobLocation.message}</p>
            )}
          </div>

          <br />
          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="disabled:opacity-75 w-full text-white hover:bg-blue-800 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center"
            >
              {isSubmitting?<Loading /> : "Add"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ExperienceForm;
