## **🛠️ Simpsons Quote Generator – Dev Brief**

### **🔹 Project Purpose**
A lightweight web app that displays a random *iconic* Simpsons quote (seasons 1 – 9) each time the user presses a button. No backend required; quotes are stored locally in a JSON file for maximum speed and zero configuration.

---

### **📚 Tech Stack**

| Layer          | Choice | Notes |
| -------------- | ------ | ----- |
| Front-end      | React + Vite | Fast dev server, instant HMR |
| Styling        | Tailwind CSS | Quick theming with Simpsons colors |
| Animations     | CSS keyframes | Flip-card effect on quote change |
| Data storage   | `iconicQuotes.json` | Hand-curated list (~10–30 lines) |
| Deployment     | Vercel / Netlify | One-click static deploy |

---

### **📁 Folder Structure (modular from start)**

src/ ├─ data/ │ └─ iconicQuotes.json ├─ components/ │ └─ QuoteCard.jsx ├─ App.jsx ├─ main.jsx └─ index.css


*Keep the repo small—no script files after preprocessing.*

---

### **🎨 UI / Theme**

* **Palette:** `#fdd835` (Simpsons yellow), `#ef5350` (Bart red), `#2196f3` (sky blue)
* **Fonts:** Google Fonts **Lilita One** (headers) + **Karla** (body)
* **Layout:** single-column, max-width 480 px, centered
* **Components:**  
  * **Header** – “D’OH! Quote Generator”  
  * **QuoteCard** – shows quote, character, episode  
  * **Button** – “New Quote” with wiggle hover  

---

### **⚙️ Core Logic**

* Import `iconicQuotes.json` directly in `QuoteCard.jsx`
* `randomQuote()` picks a quote with `Math.random()`
* On button click:  
  1. add `.flip` class (rotate Y 90° / 250 ms)  
  2. after 250 ms, replace quote & remove class  

---

### **🧠 Cline Workflow Strategy**

1. **Step-by-step prompts** – one task per prompt (create file, add code, etc.).
2. **Explicit file paths** – always specify target file.
3. **Use comments** like `// FILE: QuoteCard.jsx` and `// STEP:` for clarity.
4. **Keep dependencies minimal** – React, Tailwind, Vite only.

---

### **🛣️ Short-Term Roadmap**

1. **Init project** – `npm create vite@latest simpsons-quote-gen -- --template react`
2. **Configure Tailwind**
3. **Add `iconicQuotes.json`** (hand-curated list)
4. **Build `QuoteCard.jsx`** with flip animation
5. **Styling & fonts**
6. **Mobile check** (≤480 px looks good)
7. **Deploy to Vercel**
8. **Add season filter dropdown** (optional enhancement)

