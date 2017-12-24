import React, { Fragment } from 'react';
import PostList from './components/PostList';
import PostDetails from '../../components/PostDetails'

const Home = () => {
    return (
        <Fragment>
            <PostList key={"postList"} />
            <PostDetails key={"postDetails"} />
        </Fragment>
    )
}

export default Home;
