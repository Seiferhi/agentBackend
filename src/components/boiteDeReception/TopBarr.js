import React, { Component } from "react";
class TopBarr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-body">
        <div
          className="btn-group m-b-10 m-r-10"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" className="btn btn-secondary font-18">
            <i className="mdi mdi-inbox-arrow-down" />
          </button>
          <button type="button" className="btn btn-secondary font-18">
            <i className="mdi mdi-alert-octagon" />
          </button>
          <button type="button" className="btn btn-secondary font-18">
            <i className="mdi mdi-delete" />
          </button>
        </div>
        <div
          className="btn-group m-b-10 m-r-10"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <i className="mdi mdi-folder font-18 " />{" "}
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              {" "}
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>{" "}
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>{" "}
            </div>
          </div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <i className="mdi mdi-label font-18" />{" "}
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              {" "}
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>{" "}
              <a className="dropdown-item" href="#">
                Dropdown link
              </a>{" "}
            </div>
          </div>
        </div>
        <button type="button " className="btn btn-secondary m-r-10 m-b-10">
          <i className="mdi mdi-reload font-18" />
        </button>
        <div className="btn-group m-b-10" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn m-b-10 btn-secondary font-18 dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            More{" "}
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            {" "}
            <a className="dropdown-item" href="#">
              Mark as all read
            </a>{" "}
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default TopBarr;
