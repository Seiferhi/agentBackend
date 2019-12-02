import React, { Component } from 'react';
import LeftBar from './SideBarMessage';
import TopBarr from './TopBarr';
class BoiteRec extends Component {
  
  render() { 
    return (  
      
      <div className="page-wrapper">
        {/* Container fluid  */}
        <div className="container-fluid">
          {/* Bread crumb and right sidebar toggle */}
          <div className="row page-titles">
            <div className="col-md-5 align-self-center">
              <h3 className="text-themecolor">Mailbox</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                <li className="breadcrumb-item active">Mailbox</li>
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
                        <div className="inbox-center table-responsive">
                          <table className="table table-hover no-wrap">
                            <tbody>
                              <tr className="unread">
                                <td style={{width: '40px'}}>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox0" defaultValue="check" />
                                    <label htmlFor="checkbox0" />
                                  </div>
                                </td>
                                <td style={{width: '40px'}} className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Hritik Roshan</td>
                                <td className="max-texts"> <a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> 12:30 PM </td>
                              </tr>
                              <tr className="unread">
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox1" defaultValue="check" />
                                    <label htmlFor="checkbox1" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star text-warning" /></td>
                                <td className="hidden-xs-down">Genelia Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 13 </td>
                              </tr>
                              <tr className="unread">
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox2" defaultValue="check" />
                                    <label htmlFor="checkbox2" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 12 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox3" defaultValue="check" />
                                    <label htmlFor="checkbox3" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Akshay Kumar</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 12 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox4" defaultValue="check" />
                                    <label htmlFor="checkbox4" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Hritik Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 12 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox5" defaultValue="check" />
                                    <label htmlFor="checkbox5" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star text-warning" /></td>
                                <td className="hidden-xs-down">Genelia Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 11 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox6" defaultValue="check" />
                                    <label htmlFor="checkbox6" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 11 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox7" defaultValue="check" />
                                    <label htmlFor="checkbox7" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Akshay Kumar</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 11 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox8" defaultValue="check" />
                                    <label htmlFor="checkbox8" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Hritik Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 10 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox9" defaultValue="check" />
                                    <label htmlFor="checkbox9" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star text-warning" /></td>
                                <td className="hidden-xs-down">Genelia Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 10 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox10" defaultValue="check" />
                                    <label htmlFor="checkbox10" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 10 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox11" defaultValue="check" />
                                    <label htmlFor="checkbox11" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Akshay Kumar</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 09 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox m-t-0 m-b-0">
                                    <input type="checkbox" id="checkbox12" defaultValue="check" />
                                    <label htmlFor="checkbox12" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Hritik Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 09 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox13" defaultValue="check" />
                                    <label htmlFor="checkbox13" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star text-warning" /></td>
                                <td className="hidden-xs-down">Genelia Roshan</td>
                                <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 09 </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="checkbox">
                                    <input type="checkbox" id="checkbox14" defaultValue="check" />
                                    <label htmlFor="checkbox14" />
                                  </div>
                                </td>
                                <td className="hidden-xs-down"><i className="fa fa-star-o" /></td>
                                <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                <td className="hidden-xs-down"><i className="fa fa-paperclip" /></td>
                                <td className="text-right"> May 09 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End PAge Content */}
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
          {/* ============================================================== */}
          {/* End Right sidebar */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Container fluid  */}
      </div>
    
    
    );
  }
}
 
export default BoiteRec;