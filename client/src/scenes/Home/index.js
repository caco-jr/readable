import React from 'react';
import Categories from './components/Categories'
import PostList from './components/PostList'

const Home = () => [
    <Categories key={"categorie"} />,
    <PostList key={"postList"} />
];

export default Home;
