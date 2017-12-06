import React from 'react';
import PostList from './components/PostList';
import PostDetails from '../../components/PostDetails'

const Home = () => [
    <PostList key={"postList"} />,
    <PostDetails />
];

export default Home;
