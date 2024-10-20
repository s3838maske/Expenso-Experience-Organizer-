import React, { useState } from "react";
import { useSelector } from "react-redux";

import ExperienceForm from "../Containers/ExperienceForm";
import Header from "../Layout/Header";
import ExperienceCard from "../Containers/ExperienceCard";
import Button from "../Components/Button";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const experienceData = useSelector((state) => state.exReducer.experienceData);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [card, setCard] = useState(2);
  const indexOfLastItems = currentPage * card
  const indexOfFirstItems = indexOfLastItems - card
  const totalPage = Math.ceil(experienceData.length/card)
  const currentData = experienceData.slice(indexOfFirstItems,indexOfLastItems)


  // Handle for Form open and close
  const handleFormOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  //Handle for Next And prev btn
  const handleNext = () => {
    setCurrentPage((prev)=>Math.min(prev+1,totalPage))
  }
  const handlePrev = () => {
    setCurrentPage((prev)=>Math.max(prev-1,1))
  }

  return (
    <>
      <div className="bg-slate-300 h-screen">

        <Header handleForm={handleFormOpen} />
        {/* Experience form */}
        <ExperienceForm formOpen={open} handleForm={handleFormOpen} />


        {/* Experience Details Card  */}
        <div className="m-5">
          {currentData?.map((data, index) => {
            return <ExperienceCard key={index} i={index} data={data} />;
          })}
        </div>



        {/* Next and Prev Btn  */}
        {experienceData.length === 0 ? (
          <>
            <h1 className="text-3xl text-center font-medium text-gray-500">
              No Experience Added
            </h1>
          </>
        ) : (
          <>
         
            <div className="flex justify-around p-10">
              <Button 
              disabled={currentPage===1}
              onClick={handlePrev}
              className="disabled:opacity-75 transition-transform duration-300 hover:translate-x-1 bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2">
                <ion-icon name="arrow-back-outline"></ion-icon>
                Previous
              </Button>

              <Button
              disabled={currentPage===totalPage}
              onClick={handleNext}
              className="disabled:opacity-75 transition-transform duration-300 hover:translate-x-1  bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2">
                Next
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
