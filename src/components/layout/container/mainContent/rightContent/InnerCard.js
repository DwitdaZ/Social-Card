import React, { Fragment } from "react";

import cardPic from "../../../../../assets/Head.png";

const innerCard = props => {
  return (
    <Fragment>
      <div className="card-body p-2">
        <div className="d-flex flex-row">
          <div className="cardIcon">ZED</div>
        </div>
        <div className="jumbotron px-5 m-0">
          <h2 className="text-white">Learning React From the Ground Up.</h2>
        </div>
        <div className="d-flex flex-row-reverse">
          <img
            src={cardPic}
            alt="cardPic"
            width="50"
            height="60"
            className="border border-white border-left-0"
          />
          <div className="text-center signature">
            <span>Darris Cooper</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column bg-white px-3 pt-3">
        <p>
          <strong>Controlled or Uncontrolled Reactions.</strong>
        </p>
        <p>
          Breaking up monotony with a daily React app will aid in a firm control
          of this useful javaScript library.
        </p>
        <p className="text-muted">dwitdaz.github.io</p>
      </div>
    </Fragment>
  );
};

export default innerCard;
