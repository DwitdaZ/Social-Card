import React, { Fragment } from "react";

import Header from "./rightContent/Header";
import InnerCard from "./rightContent/InnerCard";
import Footer from "./rightContent/Footer";

const rightSection = props => {
  return (
    <Fragment>
      <div className="flex-grow-1 p-0">
        <Header />
        <InnerCard />
        <Footer />
      </div>
    </Fragment>
  );
};

export default rightSection;
