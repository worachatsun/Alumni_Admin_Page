import React, { Component, PropTypes } from 'react'

import { 
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import NewsPage from '../components/NewsPage'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={NewsPage} />
            </Router>
        )
    }
}

export default Routes