import React from 'react';
import {motion} from 'framer-motion';

const FirstPage = () => {
    return (
        <motion.h1 initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth}}>
            First Page
        </motion.h1>
    );
};

export default FirstPage;