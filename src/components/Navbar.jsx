import React from "react";


function Navbar() {
  return (
    <div className="flex flex-row items-center justify-center text-3xl font-bold p-2 gap-2 bg-white m-4 rounded-lg max-h-20">
      <img src="/logo.svg" alt="" />
      <h1>Task Manager App</h1>
    </div>
  );
}

export default Navbar;
