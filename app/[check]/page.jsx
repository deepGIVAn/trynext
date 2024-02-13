import React from "react";

const page = ({ params }) => {
  console.log(params);
  alert("Helolo");
  return <div>Success</div>;
};

export default page;
