import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import "./instruction.css"


export default function Instruction() {
    return (
        <div className="wrapper">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="inner-wrapper">
                <h2>Design your Business Cards</h2>
                <h3>Create your own business card in minutes</h3>
            </motion.div>
            <motion.div className="steps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            >
                <motion.div
        
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 1 </div>
                    <div className="numbered-step-txt1">
                        <p>Pick design</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 2 </div>
                    <div className="numbered-step-txt2">
                        <p>Choose fields</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 3 </div>
                    <div className="numbered-step-txt3">
                        <p>Export card</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="link-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            >
                <Link className="hover-underline-animation" to="/card">
                    <p className="link"> Click here to get started!  </p>
                </Link>
            </motion.div>
        </div>

    )
}
