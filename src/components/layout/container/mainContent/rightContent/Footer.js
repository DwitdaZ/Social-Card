import React, { Fragment } from "react";

const footer = props => {
  return (
    <Fragment>
      <div className="card-footer pb-0">
        <div className="d-flex flex-row justify-content-around">
          <p className="text-dark">
            <span className="far fa-comment-alt fa-lg pr-2" />
            56
          </p>
          <p className="text-success">
            <span className="fas fa-retweet fa-lg pr-2 " />
            56
          </p>
          <p className="text-danger">
            <span className="fas fa-heart fa-lg pr-2" />
            1000
          </p>
          <p className="text-dark">
            <span className="far fa-envelope fa-lg pr-2" />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default footer;
