import React, { Fragment } from "react";
import "./MainCard.css";

import LeftSection from "./mainContent/LeftSection";
import RightSection from "./mainContent/RightSection";

const cardContainer = props => {
  return (
    <Fragment>
      <div className="card shadow rounded">
        <div className="d-flex">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </Fragment>
  );
};

export default cardContainer;
