import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home'
import PostDetails from './scenes/PostDetails'
import Category from './scenes/Category'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:category/:id" component={PostDetails} />
            <Route path="/:category" component={Category} />
        </Switch>
    </main>
);

export default Routes;