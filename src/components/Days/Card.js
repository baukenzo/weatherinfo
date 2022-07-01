import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

import s from './Days.module.scss';



export const Card = ({ day }) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.date}</div>
      <div className={s.day__info}>{day.date}</div>
      <div className={s.img}>
        {/* <GlobalSvgSelector id={day.icon_id} /> */}
        <img src={day.day.condition.icon} alt="" />
      </div>
      <div className={s.temp__day}>{day.day.maxtemp_c}</div>
      <div className={s.temp__night}>{day.day.mintemp_c}</div>
      <div className={s.info}>{day.day.condition.text}</div>
    </div>
  );
};