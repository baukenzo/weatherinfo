import React from 'react';
import {motion} from 'framer-motion';
import add from '../images/add.jpg';

const SecondPage = () => {
    return (
        <motion.div  initial={{width: 0, height: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth}}>
            <img style={{width: '100%'}}  src={add} alt="" />
        </motion.div>
    );
};

export default SecondPage;