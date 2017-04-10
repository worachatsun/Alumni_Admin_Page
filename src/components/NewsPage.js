import React, { Component } from 'react'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import NewsPageContent from './NewsPageContent'

class NewsPage extends Component {

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <SideNavBar />
                    <TopNavBar />
                    <NewsPageContent />
                </div>
            </div>
        )
    }
}

export default NewsPage