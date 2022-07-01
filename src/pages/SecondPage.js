import React from 'react';
import {motion} from 'framer-motion';

const SecondPage = () => {
    return (
        <motion.h1 initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth}}>
            Second Page
        </motion.h1>
    );
};

export default SecondPage;