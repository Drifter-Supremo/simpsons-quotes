## System Patterns

### System Architecture
- Single-page web application.
- No backend.
- Data stored locally in a JSON file.

### Key Technical Decisions
- Using React with Vite for front-end development.
- Using Tailwind CSS for styling.
- Using CSS keyframes for animations.

### Design Patterns in Use
- Component-based architecture with React.
- Local data storage.

### Component Relationships
- `App.jsx` is the main container.
- `QuoteCard.jsx` displays the quote and handles the flip animation.
- `iconicQuotes.json` is imported and used by `QuoteCard.jsx`.
