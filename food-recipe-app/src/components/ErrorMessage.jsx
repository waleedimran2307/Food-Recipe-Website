import React from "react";

function ErrorMessage() {
  return (
    <div className="container bg-success text-center my-3">
      <p className="fs-5 m-2 p-2">No items available for the current search!</p>
    </div>
  );
}

export default ErrorMessage;
