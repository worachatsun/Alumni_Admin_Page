import React, { Component } from 'react'

class SideNavBar extends Component {
    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: 0}}>
                        <a className="site_title"><i className="fa fa-cloud"></i> <span>Alumni_KMUTT</span></a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src={require("../styles/images/img.jpg")} alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>Admin_Pitty</h2>
                        </div>
                    </div>

                    <br />

                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>Live On</h3>
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-line-chart"></i> Dashboard <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="index.html">Info</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_section">
                            <h3>Manage</h3>
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-newspaper-o"></i> News <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="allnews.html">All News</a></li>
                                        <li><a href="addnews.html">Add News</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-calendar-o"></i> Events <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="allevents.html">All Events</a></li>
                                        <li><a href="addevents.html">Add Events</a></li>
                                    </ul>
                                </li> 
                                <li><a><i className="fa fa-heart"></i> Donate <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="alldonate.html">All Donate</a></li>
                                        <li><a href="addDonate.html">Add Donate</a></li>
                                    </ul>
                                </li> 
                                <li><a><i className="fa fa-group"></i> Career Opportunity <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="allcareer.html">All Career</a></li>
                                        <li><a href="addcareer.html">Add Career</a></li>
                                    </ul>
                                </li> 
                                <li><a><i className="fa fa-user"></i> Alumni Profile <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="allAlumni.html">All alumni</a></li>
                                    </ul>
                                </li> 
                                <li><a href="inboxmessage.html"><i className="fa fa-comments"></i> Inbox Message <span className="fa fa-chevron-down"></span></a>
                                </li> 
                            </ul>
                        </div>

                    </div>
                    {/*<div className="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default SideNavBar