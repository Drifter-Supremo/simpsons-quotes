import React from 'react';
import { motion } from 'framer-motion';

const QuoteCard = ({ quote, character, episode, isFlipping, duration = 0.6 }) => (
  <motion.div
    style={{
      backgroundColor: '#fdd835', /* simpsonsYellow */
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backfaceVisibility: 'hidden'
    }}
    animate={{ rotateY: isFlipping ? 180 : 0 }}
    transition={{ duration: duration, ease: "easeInOut" }}
  >
    <blockquote style={{ color: '#1f2937', fontSize: '1.125rem', fontStyle: 'italic', fontFamily: 'Karla, sans-serif' }}>
      "{quote}"
    </blockquote>
    <footer style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ color: '#4b5563', fontSize: '0.875rem', fontFamily: 'Karla, sans-serif', fontWeight: 'bold' }}>
        — {character}
      </span>
      <span style={{ color: '#4b5563', fontSize: '0.875rem', fontFamily: 'Karla, sans-serif' }}>
        ({episode})
      </span>
    </footer>
  </motion.div>
);

export default QuoteCard;
