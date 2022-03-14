import React from "react";

const Companies = ({ linkCompany, linkImage, alt }) => {
  return (
    <a href={linkCompany}>
      <img src={linkImage} alt={alt} />
    </a>
  );
};

export default Companies;
