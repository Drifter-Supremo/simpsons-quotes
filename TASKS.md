# TASKS.md — Simpsons Quote Generator

A lightweight web app that displays random iconic Simpsons quotes from seasons 1 to 9, with a flip animation on quote change. Deployed as a static site on Vercel or Netlify.

---

## 🛠️ PHASE 1: PROJECT SETUP

### 1.1 Initialize Vite + React Project
- [x] Run `npm create vite@latest simpsons -- --template react`
- [x] Navigate to the project folder and install dependencies
- [x] Merge Vite + React scaffold into existing project, preserving memory bank and custom files

### 1.2 Set Up Folder Structure
- [x] Create `src/data/` and add `iconicQuotes.json` (now using curated quotes from the root iconicQuotes.json file)
- [x] Create `src/components/` and add `QuoteCard.jsx`
- [x] Ensure `App.jsx`, `main.jsx`, and `index.css` are in `src/`

### 1.3 Configure Tailwind CSS
- [x] Install Tailwind CSS and initialize with `npx tailwindcss init`
- [x] Configure `tailwind.config.js` to include the necessary paths
- [x] Add Tailwind directives to `index.css`

### 1.4 Prepare Quote Data
- [x] Create `iconicQuotes.json` with at least 10 quotes, each including quote, character, episode, and season (already present and curated)

---

## 🎨 PHASE 2: FRONTEND DEVELOPMENT

### 2.1 Develop App Component
- [x] In `App.jsx`, add the header "D’OH! Quote Generator"
- [x] Manage state for the current quote and flipping state
- [x] Add a button to trigger the quote change

### 2.2 Create QuoteCard Component
- [x] In `QuoteCard.jsx`, display the quote, character, and episode
- [x] Apply the flip class based on the flipping prop

### 2.3 Implement Quote Logic
- [x] Create a function to select a random quote from `iconicQuotes.json`
- [x] On button click: set flipping to true, wait 250ms, select new quote, update state, set flipping to false

---

## 🎨 PHASE 3: STYLING AND ANIMATION

### 3.1 Apply Theme
- [x] Import Google Fonts: Lilita One and Karla (configured in tailwind.config.js)
- [x] Set up the color palette: `#fdd835`, `#ef5350`, `#2196f3` (partially done in tailwind.config.js)
- [x] Style the layout to be single-column, max-width 480px, centered (implemented in App.jsx and index.css)

### 3.2 Style Components
- [x] Style the header with Lilita One font (implemented in App.jsx)
- [x] Style the QuoteCard with appropriate padding and background
- [x] Style the button with wiggle hover effect using CSS (implemented in index.css)

### 3.3 Implement Flip Animation
- [x] Define CSS keyframes for the flip animation (rotate Y 90°)
- [ ] Add CSS class to apply the animation when flipping is true

---

## 🌐 PHASE 4: DEPLOYMENT

### 4.1 Prepare for Production
- [ ] Run `npm run build` to create the production build
- [ ] Verify that the build works locally with `npm run preview`

### 4.2 Deploy to Vercel or Netlify
- [ ] Set up a new project on Vercel or Netlify
- [ ] Connect the GitHub repository and deploy
- [ ] Test the deployed application to ensure it functions correctly

---

## 🧼 PHASE 5: TESTING AND POLISH

### 5.1 Responsive Testing
- [ ] Test the application on different screen sizes (desktop, tablet, mobile)
- [ ] Ensure the layout adapts properly and looks good on all devices

### 5.2 Animation Verification
- [ ] Verify that the flip animation works smoothly when changing quotes
- [ ] Check that the quote updates correctly after the animation

### 5.3 Final Checks
- [ ] Ensure all quotes are displayed correctly
- [ ] Confirm that the fonts and styles are applied properly in production

---

## ✅ DONE WHEN…

- [ ] The application displays random Simpsons quotes with character and episode
- [ ] The quote changes with a flip animation when the button is clicked
- [ ] The app is responsive and looks good on mobile devices
- [ ] The project is deployed and accessible online

---

## 🧠 OPTIONAL ENHANCEMENTS

- [ ] Add a dropdown to filter quotes by season
- [ ] Implement season filtering in the quote selection logic

---