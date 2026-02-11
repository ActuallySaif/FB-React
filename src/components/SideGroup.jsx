import React from 'react';
import GroupPfp from '../Assets/GroupPfp.png'
import './SideGroup.css';

const SideGroup = () => {
    return ( 
        <div className='SideGroup'>
            <img className='GroupPfp' src={GroupPfp} alt="" />   
            <p className='GroupName'>UI / UX Designers & Developers</p>
        </div>
     );
}
 
export default SideGroup;