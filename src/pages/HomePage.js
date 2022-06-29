import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';

const HomePage = () => {
    return (
        <div>
            <Searchbar/>
            <ThisDayInfo/>
        </div>

    );
};

export default HomePage;