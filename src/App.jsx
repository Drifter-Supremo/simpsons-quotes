import { useState } from 'react';

function App() {
  // Set up state variables (no logic yet)
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

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

        {/* Placeholder div for QuoteCard */}
        <div style={{
          backgroundColor: '#fdd835', /* simpsonsYellow */
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          {/* Placeholder text */}
          <p style={{ color: '#1f2937', fontSize: '1.125rem', fontStyle: 'italic', fontFamily: 'Karla, sans-serif' }}>
            "This is a placeholder quote."
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.875rem', marginTop: '1rem', fontFamily: 'Karla, sans-serif', fontWeight: 'bold' }}>
            - [Character Name]
          </p>
          <p style={{ color: '#4b5563', fontSize: '0.75rem', marginTop: '0.25rem', fontFamily: 'Karla, sans-serif' }}>
            Episode: [Episode Title]
          </p>
        </div>

        {/* Button */}
        <button style={{
          backgroundColor: '#F8659F', /* donutPink - Homer's donut pink */
          color: 'white',
          fontFamily: '"Lilita One", cursive',
          fontSize: '1.125rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.375rem',
          marginTop: '2rem',
          transition: 'all 0.2s',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onMouseOver={(e) => {
          e.target.style.animation = 'wiggle 0.5s ease-in-out infinite';
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
