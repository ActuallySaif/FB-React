import React from 'react';
import './People.css'
import PeopleImg from '../Assets/peopleImg.png';
import PeoplePfp from '../Assets/peoplePfp.png';

 const People = () => {
    return ( 
        <div className='PeopleCard'>
            <img className='PeopleImg' src={PeopleImg} alt="" />
            <div className='PeopleProf'>
                <img className='PeoplePfp' src={PeoplePfp} alt="" />
                <p className='PeopleName' >Islam Ali</p>
            </div>
        </div>
     );
 }
  
 export default People;