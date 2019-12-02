
import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
class TopBar extends Component {
  render() {
    const {user} = this.props;
    return (
<div className="TopBar">
<header className="topbar">
  <nav className="navbar top-navbar navbar-expand-md navbar-light">
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">
      <b>
          <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
          <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
        </b>
         <span>
          <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" /> 
          <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
    </div>
    <div className="navbar-collapse" style={{marginRight: "106px"}}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
           <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="javascript:void(0)"><i className="sl-icon-menu" /></a> </li>
        <li className="nav-item"> 
        <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" href="javascript:void(0)"><i className="sl-icon-menu" /></a> </li>
        <li className="nav-item hidden-xs-down search-box"> <a className="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:void(0)"><i className="icon-Magnifi-Glass2" /></a>
          <form className="app-search">
            <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a> </form>
        </li>
      </ul>
      <ul className="navbar-nav my-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-Bell" />
            <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
            <ul>
              <li>
                <div className="drop-title">Notifications</div>
              </li>
              <li>
                <div className="message-center">
                  {/* Message */}
                  <a href="#">
                    <div className="btn btn-danger btn-circle"><i className="fa fa-link" /></div>
                    <div className="mail-contnet">
                      <h5>Luanch Admin</h5> 
                      <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span>
                    </div>
                  </a>
                  {/* Message */}
                  <a href="#">
                    <div className="btn btn-success btn-circle"><i className="ti-calendar" /></div>
                    <div className="mail-contnet">
                      <h5>Event today</h5>
                      <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                  </a>
                  {/* Message */}
                  <a href="#">
                    <div className="btn btn-info btn-circle"><i className="ti-settings" /></div>
                    <div className="mail-contnet">
                      <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                  </a>
                  {/* Message */}
                  <a href="#">
                    <div className="btn btn-primary btn-circle"><i className="ti-user" /></div>
                    <div className="mail-contnet">
                      <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> 
                      <span className="time">9:02 AM</span> </div>
                  </a>
                </div>
              </li>
              <li>
                <a className="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-Mail" />
            <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
          </a>
          <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby={2}>
            <ul>
              <li>
                <div className="drop-title">You have 4 new messages</div>
              </li>
              <li>
                <div className="message-center">
                  <a href="#">
                    <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                    <div className="mail-contnet">
                      <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                  </a>
                  <a href="#">
                    <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                    <div className="mail-contnet">
                      <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                  </a>
                  <a href="#">
                    <div className="user-img"> <img src="../assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                    <div className="mail-contnet">
                      <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                  </a>
                  <a href="#">
                    <div className="user-img"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                    <div className="mail-contnet">
                      <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                  </a>
                </div>
              </li>
              <li>
                <a className="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right" /> </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item dropdown u-pro">
          <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className /> <span className="hidden-md-down">{user.nom} &nbsp;<i className="fa fa-angle-down" /></span> </a>
          <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <ul className="dropdown-user">
              <li>
                <div className="dw-user-box">
                  <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                  <div className="u-text">
                    <h4>{user.nom}</h4>
                    <p className="text-muted">{user.email}</p><Link to="/profil" class="btn btn-rounded btn-danger btn-sm">View Profile</Link>
                </div>
                </div>
              </li>
  
              <li role="separator" className="divider" />
              <li><Link to="/profil"><i className="ti-user" /> Mon Profil</Link></li>
              <li><Link to="/boiteReception"><i className="ti-email" /> Boite De Reception</Link></li>
              <li role="separator" className="divider" />
              <li><Link to="/parametre"><i className="ti-settings" /> paramétre du copmte</Link></li>
              <li role="separator" className="divider" />
              <li><a href="#"><i className="fa fa-power-off" /> déconnection</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</header>
</div>
);
}
};

const mapStatetToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStatetToProps, null)(TopBar);