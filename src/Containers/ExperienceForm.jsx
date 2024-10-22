import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


import { useDispatch } from "react-redux";
import { addExperience } from "../Store/ExperienceData/experienceAction";

import Button from "../Components/Common/Button";
import Loading from "../Components/Common/Loading";
import Wrapper from "../Components/Wrapper";
import ErrorText from "../Components/Common/ErrorText";

function ExperienceForm(props) {
  const { formOpen, handleForm } = props;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [apiError, setApiError] = useState(null); // State for API error handling

  
  const onSubmitHandle = async (data) => {
    console.log(data);
    await new Promise((resolve) => {
      setTimeout(() => {
        dispatch(addExperience(data));
        resolve("Form submitted successfully!");
      }, 1000);
    });
    handleForm(); // handling from open close fn
    reset(); // Reset form data
  };

  // Fetch Cities From Api
  const fetchCities = async () => {
    try {
      let res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          country: "india",
          state: selectedState,
        }
      );
      setCities(res.data.data);
      setApiError("");
    } catch (error) {
      setApiError("Error fetching cities. Please try again.");
      console.log(error);
    }
  };

  // Fetch State From Api
  const fetchState = async () => {
    try {
      let stateData = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "india",
        }
      );
      setStates(stateData.data.data.states);
      setApiError("");
    } catch (error) {
      setApiError("Error fetching states. Please try again.");
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedState) {
      fetchCities();
    }
  }, [selectedState]); // Only fetch cities when a state is selected

  useEffect(() => {
    fetchState(); // Fetch states only once when the component is mounted
  }, []); // Empty dependency array

  return (
    <>
      <Wrapper formOpen={formOpen} />

      {formOpen && (
        <div
          className={
            "max-w-sm h-auto bg-white p-4 rounded-lg m-auto shadow-lg fixed right-0 left-0 top-20 z-40"
          }
        >
          <div className="text-right cursor-pointer text-lg absolute right-3 top-1">
            <button onClick={handleForm}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          {/* Display API errors if they exist */}
          {apiError && (
            <div className="mb-3 p-2 bg-red-200 text-red-800 rounded-lg">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmitHandle)}>
            <div>
              <label
                htmlFor="Pro_Experience"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
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
                    value: /^[1-9][0-9]*$/,
                    message: "Please enter a valid number",
                  },
                })}
              />
              {errors.yearOfExperience && (
                <ErrorText>{errors.yearOfExperience.message}</ErrorText>
              )}
            </div>

            <div>
              <label
                htmlFor="jobTitle"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
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
                    message: "Job title must be at least 2 characters",
                  },
                })}
              />
              {errors.jobTitle && (
                <ErrorText>{errors.jobTitle.message}</ErrorText>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
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
                    message: "Company name must be at least 2 characters",
                  },
                })}
              />
              {errors.companyName && (
                <ErrorText>{errors.companyName.message}</ErrorText>
              )}
            </div>

            <div className="flex mb-4">
              <input
                id="jobCheckBox"
                type="checkbox"
                {...register("isCurrentJob")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="jobCheckBox"
                className="block ml-3 mb-2 text-sm font-medium text-gray-900"
              >
                Is Current Job
              </label>
            </div>

            <div>
              <label
                htmlFor="locationState"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select Job Location
              </label>
              <div className="flex">
                <select
                  className="p-1 rounded-lg bg-transparent border-gray-300 w-full"
                  {...register("state", {
                    onChange: (e) => setSelectedState(e.target.value),
                    validate: (value) =>
                      value !== "NA" || "Please select a State",
                  })}
                  id="state"
                >
                  <option value="NA">Select State</option>
                  {states?.map((state, i) => (
                    <option key={i} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>

                <select
                  className="p-1 rounded-lg bg-transparent border-gray-300 w-full"
                  {...register("city", {
                    validate: (value) =>
                      value !== "NA" || "Please select a city",
                  })}
                  id="city"
                >
                  <option value="NA">Select City</option>
                  {cities?.map((city, i) => (
                    <option key={i} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              {errors.state && <ErrorText>{errors.state.message}</ErrorText>}
              {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="disabled:opacity-75 mt-1 w-full text-white hover:bg-blue-800 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center"
              >
                {isSubmitting ? <Loading /> : "Add"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ExperienceForm;
