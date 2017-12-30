import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home'
import PostDetails from './scenes/PostDetails'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:category/:id" component={PostDetails} />
        </Switch>
    </main>
);

export default Routes;