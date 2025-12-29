import LinePattern from '../patterns/LinePattern.jsx'
import './Landing.css'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

function Landing() {

    return (
        <>
        <div className='landing-container'>
            <LinePattern className={'side-pattern'}/>
            <div className='title-container flex flex-col justify-center items-center'>
                <h1>Luca Mazzotta</h1>
                <h2 className='text-3xl flex flex-col justify-center items-center'>Computer Science student at York Univserity
                    <motion.hr
                            className='h-1'
                            initial={{ width: 0 }}
                            whileInView={{ width: "105%" }}
                            viewport={{ once: true, amount: 0.5 }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }} />
                </h2>
                <div className='h-14'/>
                <motion.h2 className='text-2xl w-150 text-center'
                initial={{scale: 0}}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1 }}
                >Check out my personal portfolio with my projects, info, and more</motion.h2>
            </div>
            <LinePattern className={'side-pattern'}/>
        </div>
        </>
    )
}

export default Landing