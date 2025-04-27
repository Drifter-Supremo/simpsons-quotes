import { useState, useEffect, useCallback } from 'react';
import QuoteCard from './components/QuoteCard';
import quotesData from './data/iconicQuotes.json';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  // Animation duration constant (in seconds)
  const FLIP_DURATION = 0.6;
  
  // State variables
  const [shuffledQuotes, setShuffledQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  // Function to get next quote from shuffled array
  const getNextQuote = useCallback(() => {
    if (shuffledQuotes.length === 0) return null;
    
    let nextIndex = currentIndex + 1;
    let nextShuffledQuotes = shuffledQuotes;
    
    // If we've reached the end, reshuffle and reset index
    if (nextIndex >= shuffledQuotes.length) {
      nextShuffledQuotes = shuffleArray(shuffledQuotes);
      setShuffledQuotes(nextShuffledQuotes);
      nextIndex = 0;
    }
    
    // Ensure we don't show the same quote consecutively
    if (nextShuffledQuotes[nextIndex]?.quote === currentQuote?.quote) {
      nextIndex = (nextIndex + 1) % nextShuffledQuotes.length;
    }
    
    setCurrentIndex(nextIndex);
    return nextShuffledQuotes[nextIndex];
  }, [shuffledQuotes, currentIndex, currentQuote]);

  // Initialize shuffled quotes and load first quote
  useEffect(() => {
    const initialShuffled = shuffleArray(quotesData);
    setShuffledQuotes(initialShuffled);
    setCurrentQuote(initialShuffled[0]);
  }, []);

  // Reshuffle when quotes data changes
  useEffect(() => {
    const newShuffled = shuffleArray(quotesData);
    setShuffledQuotes(newShuffled);
    setCurrentIndex(0);
    setCurrentQuote(newShuffled[0]);
  }, [quotesData]);

  // Handle button click to get a new quote with animation
  const handleNewQuoteClick = () => {
    // Prevent multiple clicks during animation
    if (isFlipping) return;
    
    // Start the flip animation
    setIsFlipping(true);
    
    // Update the quote halfway through the animation
    setTimeout(() => {
      setCurrentQuote(getNextQuote());
    }, 250); // 250ms delay as specified
    
    // Reset the flipping state after the animation completes
    setTimeout(() => {
      setIsFlipping(false);
    }, FLIP_DURATION * 1000);
  };

  return (
    // Main container div
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: '#2196f3' /* simpsonsSky */
    }}>
      {/* Content wrapper div */}
      <div style={{ maxWidth: '28rem', width: '100%', textAlign: 'center' }}>
        {/* Header */}
        <h1 style={{
          fontFamily: '"Lilita One", cursive',
          color: '#F8659F', /* donutPink - Homer's donut pink */
          fontSize: '2.25rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          D'OH! Quote Generator
        </h1>

        {/* QuoteCard Component */}
        {currentQuote ? (
          <QuoteCard
            quote={currentQuote.quote}
            character={currentQuote.character}
            episode={currentQuote.episode}
            isFlipping={isFlipping}
            duration={FLIP_DURATION}
          />
        ) : (
          <div style={{
            backgroundColor: '#fdd835', /* simpsonsYellow */
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ color: '#1f2937', fontSize: '1.125rem', fontStyle: 'italic', fontFamily: 'Karla, sans-serif' }}>
              Loading quotes...
            </p>
          </div>
        )}

        {/* Button */}
        <button
          style={{
            backgroundColor: '#F8659F', /* donutPink - Homer's donut pink */
            color: 'white',
            fontFamily: '"Lilita One", cursive',
            fontSize: '1.125rem',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.375rem',
            marginTop: '2rem',
            transition: 'all 0.2s',
            cursor: isFlipping ? 'not-allowed' : 'pointer',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            opacity: isFlipping ? 0.7 : 1
          }}
          onClick={handleNewQuoteClick}
          disabled={isFlipping}
          onMouseOver={(e) => {
            if (!isFlipping) {
              e.target.style.animation = 'wiggle 0.5s ease-in-out infinite';
            }
          }}
          onMouseOut={(e) => {
            e.target.style.animation = '';
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
