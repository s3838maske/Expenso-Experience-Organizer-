import React, { useState } from "react";
import ExperienceForm from "../Containers/ExperienceForm";
import Header from "../Layout/Header";
import ExperienceCard from "../Containers/ExperienceCard";
import Button from "../Components/Button";

function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleFormOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div className="bg-slate-300 h-screen">
        <Header handleForm={handleFormOpen} />
        <ExperienceForm formOpen={open} handleForm={handleFormOpen} />

        {/* Experience Details Card  */}
        <div className="m-5">
          <ExperienceCard />
          <ExperienceCard />
        </div>

        {/* Next and Prev Btn  */}
        <div className="flex justify-around p-10">
          <Button className="transition-transform duration-300 hover:translate-x-1 bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Previous
          </Button>

          <Button className="transition-transform duration-300 hover:translate-x-1  bg-black text-white px-4 py-1 rounded-lg hover:shadow-lg flex items-center gap-2">
            Next
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
