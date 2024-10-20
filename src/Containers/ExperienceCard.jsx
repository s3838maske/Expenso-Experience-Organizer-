import React from "react";
import Text from "../Components/Text";
import Button from "../Components/Button";


function ExperienceCard() {
  return (
    <>
      <div className="bg-white w-full shadow-md rounded-2xl p-6 max-w-md mx-auto mb-6 transition transform hover:scale-105 hover:shadow-lg">
        <div className="flex justify-between items-center">
          {/* <!-- Job Title and Company Info --> */}
          <div>
            <Text className="text-lg font-semibold text-gray-900 mb-1">
              Software Engineer
            </Text>

            <Text className="text-gray-500 text-sm mb-1">Tech Company Inc.</Text>

            <Text className="text-sm text-gray-400 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6M9 16h6M12 8v.01"
                />
              </svg>
              Mumbai
            </Text>

          </div>
          {/* <!-- Remove Button --> */}
          <Button className="bg-red-50 text-red-500 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-red-100 transition">
            Remove
          </Button>
        </div>

        {/* <!-- Job Duration or Current Job --> */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">Current Job: Present</p>
          <p className="text-sm text-gray-500">Professional Experience: 1 Year </p>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;