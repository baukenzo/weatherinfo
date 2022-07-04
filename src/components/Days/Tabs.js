import React from 'react';
import s from './Days.module.scss';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { onClick3days, secondLoadingOn, secondLoadingOff } from '../../store/actions';

export const Tabs = (props) => {
  const {query} = useSelector(state => state);
  const dispatch = useDispatch();


  const tabs = [
    {
      value: '3 days',
      disabled: false
    },
    {
      value: '10 days',
      disabled: true
    },
    {
      value: 'Month',
      disabled: true
    },
  ];

  const click3days = () => {
    dispatch(secondLoadingOn())

      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d79239169e7340be9c083833222406&q=${query}&days=3&aqi=yes&alerts=yes`).then(res => dispatch(onClick3days(res.data)))

    setTimeout(() => {
      dispatch(secondLoadingOff())
    }, 700);
  }

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
          <div disabled={tab.disabled} onClick={() => click3days()} className={s.tab}  key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  );
};