import React from "react";
import Error404 from "../Assets/Images/Error404.svg";

const ErrorPage = ({ error }) => {
  console.log(error);
  return (
    <div>
      <img src={Error404} alt={error.message} width="100%" height="500px" />
      <h3>{error.message}</h3>
    </div>
  );
};

export default ErrorPage;
