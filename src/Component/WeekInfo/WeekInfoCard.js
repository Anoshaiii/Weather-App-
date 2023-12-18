import React, { useEffect, useState } from 'react'
import { UseWeatherAppContext } from '../../Context/Context';
import SingalCard from '../SingalCard/SingalCard';
function WeekInfoCard() {
    let {state:{daily}, dispatch} = UseWeatherAppContext();

    const [SelectedCard,setSelectedCaed]=useState(0);
    //console.log('daily' , daily);
const updateCurrent=()=>{
  return(
    dispatch({
      type:'SET_CURRENT',
      payload:daily[SelectedCard]
    })
  )
}

useEffect(()=>{
updateCurrent();
},(daily,SelectedCard));

  return (
   <>
   <div className='cardWrap'>
    <ul className='cardList'>
      {
        daily && daily.length >0 ? daily.map((item , index)=>{
          if(index<7){
            return <SingalCard key={index} item={item} className={index === SelectedCard ?'active':''} onClick={()=>{
              setSelectedCaed(index);
              updateCurrent();
            }}/>
          }}):""
      }
    </ul>
   </div>
   </>
  )
}

export default WeekInfoCard
