import React from 'react';

const QuoteCard = ({ quote, character, episode, flipping }) => (
  <div className={`quote-card p-6 bg-simpsonsYellow rounded-lg shadow-md ${flipping ? 'flip' : ''}`}>
    <blockquote className="text-gray-800 text-lg italic">“{quote}”</blockquote>
    <footer className="mt-4 flex justify-between text-gray-700 text-sm font-bold">
      <span>— {character}</span>
      <span>({episode})</span>
    </footer>
  </div>
);

export default QuoteCard;
