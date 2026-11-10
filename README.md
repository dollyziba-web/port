# ZEE EATERY — Luxury Italian & International Fine Dining Website

An editorial, cinematic, five-page fine-dining restaurant website for **Zee Eatery**, located in **Italy**.

---

## Brand Identity & Direction
- **Brand Name**: ZEE EATERY
- **Category**: Italian & International Fine Dining
- **Location**: Italy
- **Brand Aesthetic**: Warm, Luxurious, Sophisticated, Contemporary, Timeless, Editorial

### Color System
- **Deep Espresso Black**: `#100A07`
- **Rich Dark Brown**: `#24130C`
- **Chocolate Brown**: `#3A2115`
- **Antique Gold**: `#C49A45`
- **Muted Champagne Gold**: `#D6B878`
- **Warm Ivory**: `#F3EBDD`

### Typography System
- **Headings**: `Cormorant Garamond` (Google Fonts, editorial serif)
- **Body & Navigation**: `Montserrat` & `Manrope` (clean modern sans-serif)

---

## The Five Developed Pages
1. **Home (`index.html`)**:
   - **Hero Section**: Reproduces the exact reference design specification. A single, full-width cinematic hero background image featuring the supplied dining scene with the woman and candlelit table on the right, integrated naturally into the background without any card or frame. Left-aligned headline, eyebrow, supporting text, and CTAs with a dark gradient overlay ensuring readability. All letter-level rising and subtle continuous floating animations are preserved.
   - **Introduction**: "An Italian Soul. A World of Flavours." with interior dining photography and story link.
   - **Signature Dishes**: Displays **strictly two** featured culinary items (Grilled Chicken Steak & Chicken Alfredo Pasta) with descriptions. **No prices, no cart.**
   - **The Dining Experience**: Sommelier wine service featurette.
   - **Exceptional Dining Services**: Curated 2-card luxury grid (Fine Dining & Private Dining) maintaining visual balance and alignment.
   - **Gallery Preview**: Displays **strictly two** preview photographs (Pan-Seared Sea Bass & Alfresco Terrace).
   - **Testimonials**: Warm Ivory contrast section with authentic guest reflection placeholders.
   - **Reservation CTA & Footer**: "Your Table Awaits."

2. **About Us (`about.html`)**:
   - **Hero**: "Behind the Experience."
   - **Meet the Owner**: High-resolution, photorealistic AI portrait of the fictional female owner (Elena V.) set within the restaurant, alongside her brand narrative and vision.
   - **Guiding Principles**: Clean, elegant text-only luxury layout presenting the three core pillars (Our Passion, Our Standards, Our Hospitality) with refined typography and delicate gold accent borders.
   - **Closing CTA**: Navigation to Our Services.

3. **Our Services (`services.html`)**:
   - Comprehensive editorial showcase of all 8 restaurant services with unique imagery and alternating layouts:
     1. Fine Dining
     2. Private Dining
     3. Birthday Celebrations
     4. Weddings and Special Occasions (Timeless Romance): Features an ultra-luxury editorial photograph of an opulent Italian palazzo wedding banquet with lavish white and blush rose floral runners, tall glowing taper candelabras, crystal stemware, and gold-rimmed china.
     5. Corporate Dining
     6. Event Hosting
     7. Catering Services
     8. Takeaway
   - Bespoke event planning and private reservation CTAs.

4. **Gallery (`gallery.html`)**:
   - 29 unique photographs showcasing dishes inspired by the reference menus:
     - Lasagna, Seafood Pasta, Penne all'Arrabbiata, Margherita & Truffle Pizza, Gnocchi, Beef Steaks, BBQ Chicken, Crispy Chicken, Biryanis, Lamb Chops, Momos, Sandwiches, King Prawns, Butter Garlic Prawns, Seafood Platter, Chocolate Lava Cake, Tiramisù, Cheesecake, Mocktails, Fresh Juices, and Artisanal Coffee.
   - Interactive working category filters (`All`, `Italian Cuisine`, `Main Courses`, `Pasta & Pizza`, `Seafood`, `Desserts`, `Beverages`, `Dining Atmosphere`).
   - Interactive Modal Lightbox with Next/Prev controls, keyboard arrows navigation, and image counter.
   - **Zero prices and zero shopping cart features.**

5. **Contact Us (`contact.html`)**:
   - Exact contact details:
     - **Phone**: `09129129572` (clickable `tel:+3909129129572`)
     - **Email**: `dollyziba@gmail.com` (clickable `mailto:dollyziba@gmail.com`)
     - **Location**: Italy
   - Functional General Enquiry Form with real-time validation.
   - Functional Table Reservation Enquiry Form with guest counts, date, and sitting selections.
   - Italy destination and private dining location placeholder.
   - **Persistent Floating WhatsApp Button** with tooltip opening `https://wa.me/3909129129572`.

---

## Strict Adherence Check
- [x] **No prices anywhere** on the website.
- [x] **No Add to Cart / Shopping Cart / Checkout** functionality.
- [x] **No image repetition**: Every single image across all five pages is unique.
- [x] **Supplied Hero Photograph**: Exact image of woman dining used as the visual anchor.
- [x] **AI-Generated Owner Portrait**: Realistic, professional, used exclusively on About Us.
- [x] **Visual Variation**: Sections alternate intentionally between deep espresso (`#100A07`), rich brown (`#24130C`), chocolate (`#3A2115`), and warm ivory (`#F3EBDD`).
- [x] **Floating WhatsApp Button**: Functional with verified international formatting.

---

## How to Run Locally

### Option 1: Native Node.js Server (Zero Dependencies)
```bash
npm start
# or
node server.js
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 2: Direct File Viewing
Double-click `index.html` in Windows Explorer to open directly in any modern browser.
