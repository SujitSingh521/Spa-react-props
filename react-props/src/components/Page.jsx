import React from "react";

const Page = ({ title, content }) => {
  return (
    <div className="page">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Page;
