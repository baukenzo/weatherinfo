import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ThisDay from '../components/ThisDay/Thisday';
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