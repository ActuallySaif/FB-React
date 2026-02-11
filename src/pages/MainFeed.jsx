import React from 'react';
import './MainFeed.css'
import PeopleSec from '../components/PeopleSec';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

const MainFeed = () => {
    return ( 
        <div className='MainFeed'>
            <PeopleSec />
            <NewPost />
            <Post />
            <Post />
            <Post />
        </div>
     );
}
 
export default MainFeed;