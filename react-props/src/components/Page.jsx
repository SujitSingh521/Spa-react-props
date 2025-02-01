import React from "react";

const Page = ({ title, content,Image }) => {
  return (
    <div className="page">
      <h1>{title}</h1>
      <p>{content}</p>
      <h2>{Image}</h2>
    </div>
  );
};

export default Page;
