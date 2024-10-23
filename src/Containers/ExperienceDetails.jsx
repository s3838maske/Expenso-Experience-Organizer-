import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeExperience } from "../Store/Experience/experience.Action";

import ExperienceCard from "../Components/ExperienceCard";
import Button from "../Components/Common/Button";
import Header from "../Components/Header";
import ExperienceForm from "../Components/ExperienceForm";

function ExperienceDetails() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const experienceData = useSelector((state) => state.exReducer.experience);

  const [currentPage, setCurrentPage] = useState(1);
  const [card, setCard] = useState(2); //number of card display
  const indexOfLastItems = currentPage * card; // index of last items
  const indexOfFirstItems = indexOfLastItems - card; // index of first items
  const totalPage = Math.ceil(experienceData.length / card); // total pages base on the data
  const cardData = experienceData.slice(indexOfFirstItems, indexOfLastItems);

  //Handle for Next And prev btn
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handle for Form open and close
  const handleFormOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };


  const handleExperience = (index) => {
    dispatch(removeExperience(index))
    if (cardData.length - 1 === 0) {
      handlePrev();
    }
  };

  return (
    <>
      <Header handleForm={handleFormOpen} />

      {/* Experience form */}
      <ExperienceForm formOpen={open} handleForm={handleFormOpen} />

      {/* displaying Experience Card  */}
      <div className="m-5 h-96">
        {cardData?.map((data, index) => {
          return (
            <ExperienceCard
              key={index}
              i={index}
              data={data}
              handleExperience={handleExperience}
            />
          );
        })}
      </div>

      {experienceData.length === 0 ? (
        <>
          <h1 className="text-3xl text-center relative -top-52 font-medium text-gray-500">
            No Experience Added
          </h1>
        </>
      ) : (
        <>
          <div className="flex justify-around p-10">
            <Button
              onClick={handlePrev}
              className={`${
                currentPage === 1 ? "invisible" : "visible"
              } transition-transform duration-300 hover:translate-x-1 bg-blue-600 p-2 hover:bg-blue-700 text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2`}
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className={`${
                currentPage === totalPage ? "invisible" : "visible"
              } transition-transform duration-300 hover:translate-x-1  bg-blue-600 p-2 hover:bg-blue-700 text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2`}
            >
              Next
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default ExperienceDetails;
