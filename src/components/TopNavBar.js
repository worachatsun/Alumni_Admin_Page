import React, { Component } from 'react'

class TopNavBar extends Component {
    render() {
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src={require("../styles/images/img.jpg")} alt=""/>Admin_Pitty
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li><a href="javascript:;"> Profile</a></li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="badge bg-red pull-right">50%</span>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li><a href="javascript:;">Help</a></li>
                                    <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                </ul>
                            </li>

                            <li role="presentation" className="dropdown">
                                <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-comment"></i>
                                    <span className="badge bg-red">6</span>
                                </a>
                                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                    <li>
                                        <a>
                                            <span className="image"><img src={require("../styles/images/img.jpg")} alt="Profile Image" /></span>
                                            <span>
                          <span>Admin_Pitty</span>
                                            <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src={require("../styles/images/img.jpg")} alt="Profile Image" /></span>
                                            <span>
                          <span>Admin_Pitty</span>
                                            <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src={require("../styles/images/img.jpg")} alt="Profile Image" /></span>
                                            <span>
                          <span>Admin_Pitty</span>
                                            <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src={require("../styles/images/img.jpg")} alt="Profile Image" /></span>
                                            <span>
                          <span>Admin_Pitty</span>
                                            <span className="time">3 mins ago</span>
                                            </span>
                                            <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="text-center">
                                            <a>
                                                <strong>See All Message</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default TopNavBar