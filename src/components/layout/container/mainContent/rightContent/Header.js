import React, { Fragment } from "react";

const header = props => {
  return (
    <Fragment>
      <div className="card-header p-2">
        <p>
          <strong>Zed Sled Coding </strong>
          <small className="text-muted"> @DwitdaZ - Mar 03</small>
        </p>
        <p>Controlled or Uncontrolled Reactions.</p>
        <p>
          author:
          <a
            className="cardLink"
            href="https://dwitdaz.github.io/profile/"
            style={{ textDecoration: "none" }}
          >
            {" "}
            @dcooper
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default header;
