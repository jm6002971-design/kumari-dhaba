# Kumari Dhaba — Big Flavours. Bigger Heart.

A responsive, high-performance static web application for **Kumari Dhaba**, celebrating authentic Andhra flavours, fragrant biryanis, tandoor specials, and soulful hospitality.

🌐 **Live Website:** [https://jm6002971-design.github.io/kumari-dhaba/](https://jm6002971-design.github.io/kumari-dhaba/)  
📦 **GitHub Repository:** [https://github.com/jm6002971-design/kumari-dhaba](https://github.com/jm6002971-design/kumari-dhaba)

---

## 🍽️ Features

- **Hero Experience:** Rich typography, splash intro sequence, and atmospheric visual storytelling.
- **Interactive Menu:**
  - Dynamic category filters (`All favourites`, `Biryani`, `Non-veg`, `Veg`, `Breads`, `Kebabs & starters`, `Curries`, `Drinks`).
  - Dish cards with pricing in ₹, veg/non-veg tags, pairings, and flavor badges.
  - Interactive Dish Detail Modal with dish overview, high-resolution imagery, and ingredient notes.
- **Location & Directions:** Embedded Google Maps integration and direct directions link to Pangidigudem, Andhra Pradesh.
- **Direct Contacts:** Direct dial (`tel:+919705143103`) and WhatsApp ordering button (`https://wa.me/919705143103`).
- **Responsive & Accessible:** Fully responsive across mobile, tablet, and desktop viewports with accessible ARIA tags and smooth navigation.

---

## 📂 Project Structure

```
kumari-dhaba/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Pages CI/CD workflow
├── assets/
│   ├── app.js              # Interactive filtering and modal logic
│   ├── custom.css          # Custom modal transitions & animations
│   ├── styles-JNcdZiT_.css # Core design system and layout styles
│   └── *.jpg               # High-resolution dish and ambiance photography
├── dishes.json             # Structured menu catalogue
├── favicon.svg             # Kumari Dhaba logo favicon
├── index.html              # Main application entry point
└── README.md               # Project documentation
```

---

## 🚀 Local Development

You can run the site locally using any static web server:

```bash
# Using Node.js
npx serve .

# Or using Python
python -m http.server 3000
```

Then open `http://localhost:3000` in your web browser.

---

© Kumari Dhaba · Pangidigudem, Andhra Pradesh.
