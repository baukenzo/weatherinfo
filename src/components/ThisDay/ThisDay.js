import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import weather2 from '../../images/weather2.gif';

const ThisDay = () => {

    const {today} = useSelector(state => state);
    // display: 'flex' , justifyContent: 'center'
    if (!today.current) {
        return  (
            <div style={{height: '400px', width: '100%', margin: '0 auto', backgroundColor: 'grey'  }}>
                <img src={weather2} style={{width: '100%', height: '100%', objectFit: 'contain'}} alt="" />
            </div>
        )
    }
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{today.current.temp_c}°</div>
                    <div className={s.this__day_name}>Today</div>
                </div>
                {/* <GlobalSvgSelector id="sun" /> */}
                <img src={today.current.condition.icon} width='100' height='100' alt="" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Time: <span>{today.location.localtime.substr(-5)}</span>
                </div>
                <div className={s.this__city}>
                    City: <span>{today.location.name}</span>
                </div>
            </div>
        </div>
    );
}

export default ThisDay;