import React from 'react'
import ChooseStateCard from './ChooseState/ChooseStateCard';
import WeekInfoCard from './WeekInfo/WeekInfoCard';
import HUMIDITY from './Humidity/HUMIDITY';
import LCARDCOMPONENT from './Left/LCARDCOMPONENT';

function Home() {
  return (
    <div className='homeWrap'>
    <div className='weatherSection'>
      <LCARDCOMPONENT/>
        <div className='rightSide'>
            <ChooseStateCard/> <br/>
            <WeekInfoCard/><br/> 
            <HUMIDITY/>
        </div>
    </div>
</div>
  )
}

export default Home;

