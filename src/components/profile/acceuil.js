import React, { Component } from "react";
class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-body">
        <div className="profiletimeline">
          <div className="sl-item">
            <div className="sl-left">
              {" "}
              <img
                src="../assets/images/users/1.jpg"
                alt="user"
                className="img-circle"
              />{" "}
            </div>
            <div className="sl-right">
              <div>
                <a href="#" className="link">
                  John Doe
                </a>{" "}
                <span className="sl-date">5 minutes ago</span>
                <p>
                  assign a new task <a href="#"> Design weblayout</a>
                </p>
                <div className="row">
                  <div className="col-lg-3 col-md-6 m-b-20">
                    <img
                      src="../assets/images/big/img1.jpg"
                      className="img-responsive radius"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6 m-b-20">
                    <img
                      src="../assets/images/big/img2.jpg"
                      className="img-responsive radius"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6 m-b-20">
                    <img
                      src="../assets/images/big/img3.jpg"
                      className="img-responsive radius"
                    />
                  </div>
                  <div className="col-lg-3 col-md-6 m-b-20">
                    <img
                      src="../assets/images/big/img4.jpg"
                      className="img-responsive radius"
                    />
                  </div>
                </div>
                <div className="like-comm">
                  {" "}
                  <a href="javascript:void(0)" className="link m-r-10">
                    2 comment
                  </a>{" "}
                  <a href="javascript:void(0)" className="link m-r-10">
                    <i className="fa fa-heart text-danger" /> 5 Love
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="sl-item">
            <div className="sl-left">
              {" "}
              <img
                src="../assets/images/users/2.jpg"
                alt="user"
                className="img-circle"
              />{" "}
            </div>
            <div className="sl-right">
              <div>
                {" "}
                <a href="#" className="link">
                  John Doe
                </a>{" "}
                <span className="sl-date">5 minutes ago</span>
                <div className="m-t-20 row">
                  <div className="col-md-3 col-xs-12">
                    <img
                      src="../assets/images/big/img1.jpg"
                      alt="user"
                      className="img-responsive radius"
                    />
                  </div>
                  <div className="col-md-9 col-xs-12">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam.{" "}
                    </p>{" "}
                    <a href="#" className="btn btn-success">
                      {" "}
                      Design weblayout
                    </a>
                  </div>
                </div>
                <div className="like-comm m-t-20">
                  {" "}
                  <a href="javascript:void(0)" className="link m-r-10">
                    2 comment
                  </a>{" "}
                  <a href="javascript:void(0)" className="link m-r-10">
                    <i className="fa fa-heart text-danger" /> 5 Love
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="sl-item">
            <div className="sl-left">
              {" "}
              <img
                src="../assets/images/users/3.jpg"
                alt="user"
                className="img-circle"
              />{" "}
            </div>
            <div className="sl-right">
              <div>
                <a href="#" className="link">
                  John Doe
                </a>{" "}
                <span className="sl-date">5 minutes ago</span>
                <p className="m-t-10">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper{" "}
                </p>
              </div>
              <div className="like-comm m-t-20">
                {" "}
                <a href="javascript:void(0)" className="link m-r-10">
                  2 comment
                </a>{" "}
                <a href="javascript:void(0)" className="link m-r-10">
                  <i className="fa fa-heart text-danger" /> 5 Love
                </a>{" "}
              </div>
            </div>
          </div>
          <hr />
          <div className="sl-item">
            <div className="sl-left">
              {" "}
              <img
                src="../assets/images/users/4.jpg"
                alt="user"
                className="img-circle"
              />{" "}
            </div>
            <div className="sl-right">
              <div>
                <a href="#" className="link">
                  John Doe
                </a>{" "}
                <span className="sl-date">5 minutes ago</span>
                <blockquote className="m-t-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acceuil;
