import React from 'react';
// import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import s from './ThisDayInfo.module.scss';
import cloud from '../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';




export const ThisDayInfo = (props) => {
  const current = useSelector(state => state.today.current)

  console.log(current)
  const items = current ? [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${current.temp_c}° - feels like ${current.feelslike_c}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${current.pressure_mb} millimeters of mercury`,
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: `${current.condition.text}`,
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${current.wind_kph} km/h ${current.wind_dir}`,
    },
  ] : [];

  if (!current) {
      return null
  }
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item) => (
          <ThisDayItem  item={item} key={item.icon_id} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};