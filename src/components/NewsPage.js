import React, { Component } from 'react'
import SideNavBar from './SideNavBar'

class NewsPage extends Component {

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <SideNavBar />
                </div>
            </div>
        )
    }
}

export default NewsPage