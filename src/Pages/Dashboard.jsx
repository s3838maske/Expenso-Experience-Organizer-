import React, { useState } from "react";

import ExperienceForm from "../Containers/ExperienceForm";
import Header from "../Components/Header";
import Pagination from "../Containers/Pagination";

function Dashboard() {
  const [open, setOpen] = useState(false);


  // Handle for Form open and close
  const handleFormOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };


  return (
    <>
      {/* < className="bg-slate-300 h-screen"> */}
        <Header handleForm={handleFormOpen} />

        {/* Experience form */}
        <ExperienceForm formOpen={open} handleForm={handleFormOpen} />

        <Pagination />

    </>
  );
}

export default Dashboard;
