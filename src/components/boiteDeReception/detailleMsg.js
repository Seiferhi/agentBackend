import React, { Component } from "react";
import LeftBar from "./SideBarMessage";
import TopBarr from './TopBarr';
class DetaillesMgs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <div className="page-wrapper">
    {/* ============================================================== */}
    {/* Container fluid  */}
    {/* ============================================================== */}
    <div className="container-fluid">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h3 className="text-themecolor">Email Details</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
            <li className="breadcrumb-item active">Email Details</li>
          </ol>
        </div>
        <div className="col-md-7 align-self-center text-right d-none d-md-block">
          <button type="button" className="btn btn-info"><i className="fa fa-plus-circle" /> Create New</button>
        </div>
        <div className>
          <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white" /></button>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Start Page Content */}
      {/* ============================================================== */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="row">
              <div className="col-xlg-2 col-lg-3 col-md-4">
              <LeftBar/>
              </div>
              <div className="col-xlg-10 col-lg-9 col-md-8 bg-light-part b-l">
            <TopBarr/>
                <div className="card-body p-t-0">
                  <div className="card b-all shadow-none">
                    <div className="card-body">
                      <h3 className="card-title m-b-0">Your message title goes here</h3>
                    </div>
                    <div>
                      <hr className="m-t-0" />
                    </div>
                    <div className="card-body">
                      <div className="d-flex m-b-40">
                        <div>
                          <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user" width={40} className="img-circle" /></a>
                        </div>
                        <div className="p-l-10">
                          <h4 className="m-b-0">Pavan kumar</h4>
                          <small className="text-muted">From: jonathan@domain.com</small>
                        </div>
                      </div>
                      <p><b>Dear USer</b></p>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                      <p>enean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,</p>
                    </div>
                    <div>
                      <hr className="m-t-0" />
                    </div>
                    <div className="card-body">
                      <h4><i className="fa fa-paperclip m-r-10 m-b-10" /> Attachments <span>(3)</span></h4>
                      <div className="row">
                        <div className="col-md-2">
                          <a href="#"> <img className="img-thumbnail img-responsive" alt="attachment" src="../assets/images/big/img1.jpg" /> </a>
                        </div>
                        <div className="col-md-2">
                          <a href="#"> <img className="img-thumbnail img-responsive" alt="attachment" src="../assets/images/big/img2.jpg" /> </a>
                        </div>
                        <div className="col-md-2">
                          <a href="#"> <img className="img-thumbnail img-responsive" alt="attachment" src="../assets/images/big/img3.jpg" /> </a>
                        </div>
                      </div>
                      <div className="b-all m-t-20 p-20">
                        <p className="p-b-20">click here to <a href="#">Reply</a> or <a href="#">Forward</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Page Content */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Right sidebar */}
      {/* ============================================================== */}
      {/* .right-sidebar */}
      <div className="right-sidebar">
        <div className="slimscrollright">
          <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
          <div className="r-panel-body">
            <ul id="themecolors" className="m-t-20">
              <li><b>With Light sidebar</b></li>
              <li><a href="javascript:void(0)" data-theme="default" className="default-theme">1</a></li>
              <li><a href="javascript:void(0)" data-theme="green" className="green-theme">2</a></li>
              <li><a href="javascript:void(0)" data-theme="red" className="red-theme">3</a></li>
              <li><a href="javascript:void(0)" data-theme="blue" className="blue-theme">4</a></li>
              <li><a href="javascript:void(0)" data-theme="purple" className="purple-theme">5</a></li>
              <li><a href="javascript:void(0)" data-theme="megna" className="megna-theme">6</a></li>
              <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
              <li><a href="javascript:void(0)" data-theme="default-dark" className="default-dark-theme working">7</a></li>
              <li><a href="javascript:void(0)" data-theme="green-dark" className="green-dark-theme">8</a></li>
              <li><a href="javascript:void(0)" data-theme="red-dark" className="red-dark-theme">9</a></li>
              <li><a href="javascript:void(0)" data-theme="blue-dark" className="blue-dark-theme">10</a></li>
              <li><a href="javascript:void(0)" data-theme="purple-dark" className="purple-dark-theme">11</a></li>
              <li><a href="javascript:void(0)" data-theme="megna-dark" className="megna-dark-theme ">12</a></li>
            </ul>
            <ul className="m-t-20 chatonline">
              <li><b>Chat option</b></li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
              </li>
              <li>
                <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Right sidebar */}
    </div>
    {/* End Container fluid  */}
  </div>
 

  
    );
  }
}

export default DetaillesMgs;
