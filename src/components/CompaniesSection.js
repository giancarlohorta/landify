import React from "react";
import Companies from "./Companies";
import airbnb from "../assets/airbnb.svg";
import hubspot from "../assets/hubspot.svg";
import google from "../assets/google-logo.svg";
import microsoft from "../assets/microsoft.svg";
import walmart from "../assets/walmart.svg";
import fedex from "../assets/fedex.svg";

import styles from "./CompaniesSection.module.css";

const CompaniesSection = () => {
  return (
    <section>
      <div className={`container ${styles.companiesContainer}`}>
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={airbnb}
          alt="Airbnb"
        />
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={hubspot}
          alt="HubSpot"
        />
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={google}
          alt="Airbnb"
        />
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={microsoft}
          alt="Airbnb"
        />
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={walmart}
          alt="Airbnb"
        />
        <Companies
          linkCompany="https://www.airbnb.com.br/"
          linkImage={fedex}
          alt="Airbnb"
        />
      </div>
    </section>
  );
};

export default CompaniesSection;
