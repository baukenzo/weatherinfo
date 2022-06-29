import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ThisDay from '../components/ThisDay/ThisDay';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.home}>
            <Searchbar/>
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo />
            </div>
        </div>
    );
};

export default HomePage;