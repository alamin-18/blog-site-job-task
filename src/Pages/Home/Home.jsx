import React from 'react';
import Banner from './Home/Banner/Banner';
import Navber from './Home/Navber/Navber';
import Post from './Home/Posts/Post';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Post></Post>
        </div>
    );
};

export default Home;