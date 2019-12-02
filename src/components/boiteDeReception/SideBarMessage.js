import React, { Component } from "react";
class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-body inbox-panel">
        <a
          href="app-compose.html"
          className="btn btn-danger m-b-20 p-10 btn-block waves-effect waves-light"
        >
          Compose
        </a>
        <ul className="list-group list-group-full">
          <li className="list-group-item active">
            {" "}
            <a href="javascript:void(0)">
              <i className="mdi mdi-gmail" /> Inbox{" "}
            </a>
            <span className="badge badge-success ml-auto">6</span>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">
              {" "}
              <i className="mdi mdi-star" /> Starred{" "}
            </a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">
              {" "}
              <i className="mdi mdi-send" /> Draft{" "}
            </a>
            <span className="badge badge-danger ml-auto">3</span>
          </li>
          <li className="list-group-item ">
            <a href="javascript:void(0)">
              {" "}
              <i className="mdi mdi-file-document-box" /> Sent Mail{" "}
            </a>
          </li>
          <li className="list-group-item">
            <a href="javascript:void(0)">
              {" "}
              <i className="mdi mdi-delete" /> Trash{" "}
            </a>
          </li>
        </ul>
        <h3 className="card-title m-t-40">Labels</h3>
        <div className="list-group b-0 mail-list">
          {" "}
          <a href="#" className="list-group-item">
            <span className="fa fa-circle text-info m-r-10" />
            Work
          </a>{" "}
          <a href="#" className="list-group-item">
            <span className="fa fa-circle text-warning m-r-10" />
            Family
          </a>{" "}
          <a href="#" className="list-group-item">
            <span className="fa fa-circle text-purple m-r-10" />
            Private
          </a>{" "}
          <a href="#" className="list-group-item">
            <span className="fa fa-circle text-danger m-r-10" />
            Friends
          </a>{" "}
          <a href="#" className="list-group-item">
            <span className="fa fa-circle text-success m-r-10" />
            Corporate
          </a>
        </div>
      </div>
    );
  }
}

export default LeftBar;
