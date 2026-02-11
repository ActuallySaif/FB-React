import React from 'react';
import PostProf from '../Assets/PostProf.png'
import Globe from '../Assets/Globre.svg'

const Post = () => {
    return ( 
        <div className='Post'>
            <div className='PostHeader'>
                <div className='PostProf'>
                    <img src={PostProf} alt="" />
                    <div className='PostDeets'>
                        <p className='PostName'>Albert Flores</p>
                        <p className='PostDate'>2 d • <img src={Globe} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Post;