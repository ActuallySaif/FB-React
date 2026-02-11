import React from 'react';
import SideBtn from '../components/SideBtn';
import './SideMenu.css'
import WatchBtn from '../components/WatchBtn';
import SideGroupsTitle from '../components/SideGroupsHeader';
import SideGroup from '../components/SideGroup';

const SideMenu = () => {
    return ( 
        <div className='SideMenu'>
            <SideBtn />

            <div className='WatchBtns'>
                <WatchBtn />
                <WatchBtn />
                <WatchBtn />
                <WatchBtn />
            </div>

            <div className='SideGroups'>
                <SideGroupsTitle />
                <SideGroup />
                <SideGroup />
                <SideGroup />
                <SideGroup />
                <SideGroup />
                <SideGroup />
            </div>
        </div>
     );
}
 
export default SideMenu;
