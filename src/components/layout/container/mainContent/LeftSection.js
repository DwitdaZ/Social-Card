import React, { Fragment } from "react";

import logo from "../../../../assets/logoProfile.PNG";

const leftSection = props => {
  return (
    <Fragment>
      <div className="p-3">
        <img src={logo} width={75} alt="cardIcon" />
      </div>
    </Fragment>
  );
};

export default leftSection;
