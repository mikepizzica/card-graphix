import React from "react";
import { motion } from 'framer-motion';
import './card2.css';

import CardBuilder from '../../components/CardBuilder';

const Card = () => {
  return (
    <main>
      <motion.div className="card-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      >
        <p className="header">"Create your Perfect Business Card"</p>
      </motion.div>

      <CardBuilder/>
    </main>
  );


};


export default Card;