import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';
import weather1 from '../../images/weather1.gif';



export const Days = (props) => {
  const {today, days3} = useSelector(state => state);
  return (
    <> 
      {today.current ? 
      <>
        <Tabs />
        {!days3.forecast ? <div style={{height: '400px', display: 'flex', justifyContent: 'center' }}>
            <img style={{width: '100%', objectFit: 'cover'}} src={weather1} alt="" />
           </div> : null}
      </>
      :
        null
      }
      {days3.forecast ? 
      <div className={s.days}>
          {
            days3.forecast.forecastday.map((day) => (
              <Card day={day} key={day.date} />
            ))
          }
      </div> :
      null}
    </>
  );
};