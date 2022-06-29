import React from 'react';
import { Days } from '../components/Days/Days';
import Searchbar from '../components/Searchbar/Searchbar';
import ThisDay from '../components/ThisDay/ThisDay';
<<<<<<< HEAD
// import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
=======
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
>>>>>>> 78b61076f6bc1f5a14bf5383193183830dba5aaf

const HomePage = () => {
    return (
        <div className={s.home}>
            <Searchbar/>
<<<<<<< HEAD
            <ThisDay/>
            <ThisDayInfo/>
=======
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo />
            </div>
>>>>>>> 78b61076f6bc1f5a14bf5383193183830dba5aaf
        </div>
    );
};

export default HomePage;