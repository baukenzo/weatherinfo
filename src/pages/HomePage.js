import React from 'react';
import { Days } from '../components/Days/Days';
import Searchbar from '../components/Searchbar/Searchbar';
import ThisDay from '../components/ThisDay/ThisDay';
// import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';

const HomePage = () => {
    return (
        <div>
            <Searchbar/>
            <ThisDay/>
            <ThisDayInfo/>
        </div>

    );
};

export default HomePage;