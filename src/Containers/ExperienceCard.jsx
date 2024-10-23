import React from "react";

import Text from "../Components/Common/Text";
import Button from "../Components/Common/Button";

import { useDispatch } from "react-redux";
import { removeExperience } from "../Store/Experience/experience.Action";

function ExperienceCard({ data, i }) {
  const dispatch = useDispatch();


  return (
    <>
      <div className="bg-white w-full shadow-md rounded-2xl p-6 max-w-md mx-auto mb-6 transition transform hover:scale-105 hover:shadow-lg">
        <div className="flex justify-between items-center">
          {/* <!-- Job Title and Company Info --> */}
          <div>
            <Text className="text-lg font-semibold text-gray-900 mb-1">
              {data.jobTitle}
            </Text>

            <Text className="text-gray-500 text-sm mb-1">
              <ion-icon name="business-outline"></ion-icon> {data.companyName}
            </Text>

            <Text className="text-sm text-gray-400 flex items-center">
              <ion-icon name="location-outline"></ion-icon>{data.state} ,{data.city}
            </Text>
          </div>
          {/* <!-- Remove Button --> */}
          <Button
            onClick={() => dispatch(removeExperience(i))}
            className="bg-red-50 text-red-500 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-red-100 transition"
          >
            Remove
          </Button>
        </div>

        {/* <!-- Job Duration or Current Job --> */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Current Job: {data.isCurrentJob ? "Present" : "NA"}
          </p>
          <p className="text-sm text-gray-500">
            Professional Experience: {data.yearOfExperience} Year
          </p>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
