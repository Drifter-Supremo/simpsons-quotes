import React from 'react';

const QuoteCard = ({ quote, character, episode, flipping }) => (
  <div className={`quote-card${flipping ? ' flip' : ''}`}>
    <blockquote>“{quote}”</blockquote>
    <footer>
      <span className="character">— {character}</span>
      <span className="episode">({episode})</span>
    </footer>
  </div>
);

export default QuoteCard;
