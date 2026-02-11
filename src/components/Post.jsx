import React from 'react';
import PostProf from '../Assets/PostProf.png';
import Globe from '../Assets/Globre.svg';
import PostMenu from '../Assets/PostMenu.svg';
import PostImg from  '../Assets/PostImg.png';
import './Post.css'

const Post = () => {
    return ( 
        <div className='Post'>
            <div className='PostHeader'>
                <div className='PostProf'>
                    <img className='PostProfPic' src={PostProf} alt="" />
                    <div className='PostDeets'>
                        <p className='PostName'>Albert Flores</p>
                        <p className='PostDate'>2 d • <img src={Globe} alt="" /></p>
                    </div>
                </div>
                <img src={PostMenu} alt="" />
            </div>
            <img className='PostImg' src={PostImg} alt="" />
        </div>
     );
}
 
export default Post;