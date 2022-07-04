import React from 'react';
import { useMemo } from 'react';
import { Days } from '../components/Days/Days';
import Searchbar from '../components/Searchbar/Searchbar';
import ThisDay from '../components/ThisDay/ThisDay';
import { ThisDayInfo } from '../components/ThisDayInfo/ThisDayInfo';
import { useDispatch, useSelector } from 'react-redux';
import s from './Home.module.scss';
import {motion} from 'framer-motion';

const HomePage = () => {
    const {today, error} = useSelector(state => state)
    console.log(today == true)

    // const RenderFunction = () => useMemo(() => {
    //     if (today) {
    //         <>
    //             <div className={s.wrapper}>
    //                 <ThisDay/>
    //                 <ThisDayInfo />
    //             </div>
    //         </>
    //     } 
    //     return 'pusto'
    // },[today])

    return (
        <motion.div className={s.home} initial={{width: 0, height: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth}}>
            <Searchbar/> 
            <br/>
            <br/>
            {error && (
                <h1>Error! Write a correct city.</h1>
            )}
            {today && !error ? 
                <>
                    <div className={s.wrapper}>
                        <ThisDay/>
                        <ThisDayInfo />
                    </div>
                    <br/>
                    <br/>
                    <Days/>
                </>
            : null}
        </motion.div>
    );
};

export default HomePage;