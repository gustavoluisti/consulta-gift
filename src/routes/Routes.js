import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Favorites from '../pages/Favorites'
import Home from '../pages/Home'

function Routes() {
    return (
        <Router>
                <Route exact path={`/`} component={Home} />
                <Route exact path={`/favorites`} component={Favorites} />
        </Router>
    )
}

export default Routes