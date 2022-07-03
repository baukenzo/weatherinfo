import React from 'react';
import m from "./main.module.css";
import {motion} from 'framer-motion';

const FirstPage = () => {
    return (
        <motion.div class="frst-p" initial={{width: 0, height: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth}}>
            <header id="header" class={m.header}>
                <div class={m.container1}>
                    <div class={m.nav}>
                        <img src="img/Group 1314.svg" alt="" />
                    </div>
                    <div class={m.offer}>
                        <p class={m.p1}>Our team of professionals can <br /> send you into space, but for now...</p>
                        <p class={m.p2}>We make a weather forecast, <br />show what the weather is like anywhere in the world</p>
                        <img src="./img/Group 1348.svg" alt="" class={m.ellipse} />
                    </div>
                    <div>sdf</div>
                </div>
            </header>
            <div class={m.main}>
                <div class={m.container1}>
                    <div class={m.w}><p>On our website we can:</p></div>
                    <div class={m.blocks}>
                        <div class={m.block}>
                            <div class={m.first}>
                                <h1>1</h1>
                                <p>Search cities</p>
                            </div>
                            <div class={m.part2}>
                                <div class={m.second}>
                                    <img src={"./img/image 66.svg"} alt={""} />
                                    <p class={m.s}>Real-time or current JSON weather and XML weather
                                        API provides access to near real-time weather information for millions
                                        of locations worldwide.</p>
                                </div>
                                <div class={m.butt}>
                                    <button class={m.aa}>See Weather
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class={m.block}>
                            <div class={m.first}>
                                <h1>2</h1>
                                <p>See the weather</p>
                            </div>
                            <div class={m.part2}>
                                <div class={m.second}>
                                    <img src="img/image 69.svg" alt="" />
                                    <p class={m.s}>14 day hour by hour weather forecast,<br />
                                        future weather and hourly historical<br class={m.br} />
                                        weather for millions of cities and towns around the
                                        world in JSON and XML format.</p>
                                </div>
                                <div class={m.butt}>
                                    <button>See Weather</button>
                                </div>
                            </div>
                        </div>
                        <div class={m.block}>
                            <div class={m.first}>
                                <h1>3</h1>
                                <p>See more information</p>
                            </div>
                            <div class={m.part2}>
                                <div class={m.second}>
                                    <img src={"./img/image70.svg"} alt="" />
                                    <p class={m.s}>We manage the infrastructure, hardware and network.<br class={m.br} />
                                        While you simply enjoy the weather forecast<br /> data and leave rest on us.</p>
                                </div>
                                <div class={m.butt}>
                                    <button id="btn">See Weather</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class={m.container3}>
                    <p>Our contacts</p>
                    <div class={m.ee}>
                        <div class={m.qq}><span class={m.i}></span><a href="#">+7 (700) 836 - 81 68</a><br /></div>
                        <div class={m.qq}><span class={m.o}></span><a href="#">seeweather.kz</a><br /></div>
                        <div class={m.qq}><span class={m.p}></span><a href="#">Alma-Ata city, st. Tole Bi, h. 69</a><br /></div>
                        <div class={m.qqq}><span class={m.q}></span><a href="#">с 10:00 до 20:00</a></div>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
};

export default FirstPage;