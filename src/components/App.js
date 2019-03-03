import React, { Component, Fragment } from "react";
import "./App.css";

import CardContainer from "./layout/container/MainCard";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <div className="d-flex flex-row justify-content-center content">
            <div className="d-flex flex-column col-md-6">
              <CardContainer />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
