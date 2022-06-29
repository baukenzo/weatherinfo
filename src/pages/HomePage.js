import React from 'react';
import { Days } from '../components/Days/Days';
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
            <Days/>
        </div>
    );
};

export default HomePage;