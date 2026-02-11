import React from 'react';
import PostPfp from '../Assets/PostPfp.png';
import PostVid from '../Assets/PostVid.svg';
import PostPic from '../Assets/PostPic.svg';
import PostFeel from '../Assets/PostFeel.svg';
import './NewPost.css'

const NewPost = () => {
    return ( 
        <div className='NewPostSec'>
            <div className='TopSec'>
                <img className='PostPfp' src={PostPfp} alt="" />
                <p className='PostBox'>What's on our mind, jenny</p>
            </div>
            <div className='PostLine'></div>
            <div className='BottomSec'>
                <div className='BottomBtns'>
                    <div className='BottomBtn'>
                        <img src={PostVid} alt="" />
                        <p>Live video</p>
                    </div>
                    <div className='BottomBtn'>
                        <img src={PostPic} alt="" />
                        <p>Photo/video</p>
                    </div>
                    <div className='BottomBtn'>
                        <img src={PostFeel} alt="" />
                        <p>Feeling/activity</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewPost;