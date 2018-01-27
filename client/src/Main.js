import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home'
import PostDetails from './scenes/PostDetails'
import Category from './scenes/Category'
import NoMatch from './scenes/NoMatch'

const Main = props => (
    <main id="main">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={NoMatch} />
            <Route exact path="/:category/:id" component={PostDetails} />
            <Route exact path="/:category" component={Category} />
            <Route component={NoMatch} />
        </Switch>

        {props.children}
    </main>
);

export default Main;