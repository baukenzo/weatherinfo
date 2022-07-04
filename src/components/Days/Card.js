import React from 'react';
import s from './Days.module.scss';



export const Card = ({ day }) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.date}</div>
      <div className={s.day__info}>{day.date}</div>
      <div className={s.img}>
        <img src={day.day.condition.icon} alt="" />
      </div>
      <div className={s.temp__day}>{day.day.maxtemp_c} °C</div>
      <div className={s.temp__night}>{day.day.mintemp_c} °C</div>
      <div className={s.info}>{day.day.condition.text}</div>
    </div>
  );
};