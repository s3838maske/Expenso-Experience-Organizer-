import React from "react";

function ErrorText(props) {
  return (
    <>
      <span className="text-red-600 text-sm"> {props.children} </span>
    </>
  );
}

export default ErrorText;
