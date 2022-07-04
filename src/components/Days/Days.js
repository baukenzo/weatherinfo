import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';
import weather1 from '../../images/weather1.gif';
import loader from '../../images/loading.gif';



export const Days = (props) => {
  const {today, days3, secondLoading} = useSelector(state => state);
  return (
    <> 

    {today.current ? 
      <>
        <Tabs />
        {secondLoading ? 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 25px'}}><img style={{width: '150px'}} src={loader} alt="" /></div>
        :
        days3.forecast ? 
      <div className={s.days}>
          {
            days3.forecast.forecastday.map((day) => (
              <Card d day={day} key={day.date} />
            ))
          }
      </div> :
       !days3.forecast ? <div style={{height: '800px', display: 'flex', justifyContent: 'center' }}>
            <img style={{width: '100%', objectFit: 'cover'}} src={weather1} alt="" />
           </div> : null}
      </>
      :
        null
      }
    </>
  );
};