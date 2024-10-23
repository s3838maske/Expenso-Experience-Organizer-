import React, { useState } from "react";
import { useSelector } from "react-redux";

import ExperienceCard from "../Containers/ExperienceCard";
import Button from "../Components/Common/Button";

function Pagination() {
  const experienceData = useSelector((state) => state.exReducer.experienceData);

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

  return (
    <>
   <section className=" bg-slate-400">

      {/* displaying Experience Card  */}
      <div className="m-5 h-96">
        {cardData?.map((data, index) => {
          return <ExperienceCard key={index} i={index} data={data} />;
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
              disabled={currentPage === 1}
              onClick={handlePrev}
              className="disabled:opacity-75 transition-transform duration-300 hover:translate-x-1 bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2"
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
              Previous
            </Button>

            <Button
              disabled={currentPage === totalPage}
              onClick={handleNext}
              className="disabled:opacity-75 transition-transform duration-300 hover:translate-x-1  bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2"
            >
              Next
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Button>
          </div>
        </>
      )}

   </section>

    </>
  );
}

export default Pagination;
