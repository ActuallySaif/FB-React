import React from 'react';
import WatchImg from '../Assets/WatchImg.svg';
import './WatchBtn.css'

const WatchBtn = () => {
    return ( 
        <div className='WatchBtn'>
            <img src={WatchImg} alt="" />
            <p>Watch</p>
        </div>
     );
}
 
export default WatchBtn;