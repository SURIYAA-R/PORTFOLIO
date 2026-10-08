# Suriyaa R — Web Technology Consultant Portfolio

A personal portfolio built with **Glass Brutalism** using semantic HTML5, modern vanilla CSS3, and lightweight vanilla JavaScript (zero frameworks, zero runtime dependencies). Engineered for maximum performance, accessibility (WCAG AA), and instant hosting on **GitHub Pages** or **Netlify**.

---

## 🎨 Design Direction: Glass Brutalism

- **Brutalist Structure**:
  - `3px solid #000` borders on all core cards, buttons, and sections.
  - Hard `6px 6px 0 #000` offset shadows with zero blur (shifts to `9px 9px 0 #000` on hover, `2px 2px 0 #000` on active click).
  - Strict 12-column grid system (`display: grid; grid-template-columns: repeat(12, 1fr)`).
  - Sharp corners (`border-radius: 0px`).
  - Oversized typography with Google Font **Space Grotesk** for headings and **Inter** for readable body text.
- **Glass Accents (Strictly limited to 3 elements)**:
  1. **Floating Navbar** (`.glass-navbar`): Floats over the bold electric blue geometric hero block.
  2. **Featured Project Card** (`.glass-featured-card`): Highlights the **Health Risk Predictor System**, layered over a bold electric blue shape with `backdrop-filter: blur(14px)`.
  3. **Consultation Modal** (`.glass-modal`): Dialog confirming contact form submission.
- **Strict Readability Rule**: Never place paragraph text directly on bare glass. All paragraph text sits inside solid-colored inner containers (`--color-surface`) for high contrast.
- **Curated 3-Color Palette**:
  - Off-white base canvas: `#F5F5F0`
  - Deep black: `#000000`
  - Electric blue accent: `#2F5BFF`
  - Fallback provided via `@supports not (backdrop-filter: blur(14px))`.

---

## 📁 File Structure

```text
PORTFOLIO/
├── index.html          # Semantic HTML5 structure, SEO meta tags, and Open Graph cards
├── css/
│   └── style.css       # Complete Glass Brutalism design system tokens & responsive CSS
├── js/
│   └── main.js         # Mobile nav, Case Study modal data & rendering, form handler, copy tools
├── assets/
│   ├── favicon.svg     # Brutalist SVG icon
│   └── resume.pdf      # PDF resume downloaded by the "Download Resume" buttons
├── netlify.toml        # Netlify deployment configuration & caching headers
├── .gitignore          # Git exclusion rules
└── README.md           # Documentation & customization checklist
```

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio release in glass brutalism"
   git branch -M main
   git remote add origin https://github.com/SURIYAA-R/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**. Your site will be live at `https://suriyaa-r.github.io/<YOUR-REPO-NAME>/` within 1–2 minutes!

### Option 2: Netlify

#### Method A: Git Continuous Deployment
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** → **Import an existing project**.
3. Connect your GitHub account and select your portfolio repository.
4. Set **Publish directory** to `.` (root).
5. Click **Deploy**. Netlify automatically reads `netlify.toml`.

#### Method B: Drag and Drop (No Git required)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire `PORTFOLIO` folder onto the page.
3. Your site is live instantly with an SSL certificate.

---

## 📋 Customization Checklist (What to Replace)

Here is a short checklist of items to personalize with your own content:

- [ ] **Resume PDF**:
  - Replace `assets/resume.pdf` with your real resume file (keep the filename `assets/resume.pdf` or update links in `index.html`).
- [ ] **Project Case Study Details** in `js/main.js`:
  - Open `js/main.js` and locate the `caseStudies` object.
  - Review the items marked with `TODO:` comments:
    - **Health Risk Predictor System**: Update your specific clinical metrics (e.g. BMI, blood pressure thresholds) and planned web stack (e.g. Spring Boot + React).
    - **Inventory Management System**: Detail your specific implementation features (e.g. barcode support, PDF invoices, PDO security).
    - **Movie Ticket Booking Simulator**: Add your concurrency locking mechanisms or data structure benchmarks.
- [ ] **Screenshots / Demo Links** (Optional):
  - If you have live demo links or GitHub repository URLs for each project, add them to the project card footers in `index.html` or inside the case-study modal in `js/main.js`.
- [ ] **Contact Form Backend** (Optional):
  - The contact form currently validates inputs and opens the interactive Glass Success Modal on client submission.
  - If you want form submissions emailed directly to your inbox, connect a service like [Formspree](https://formspree.io/) or Netlify Forms by adding `data-netlify="true"` to `<form id="contactForm">` in `index.html`.
- [ ] **Open Graph Image**:
  - If you create a personal banner or screenshot, save it to `assets/og-image.png` and update `<meta property="og:image" content="...">` in `index.html`.

---

## 💻 Local Development

To run and preview the site locally:

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:3000` in any web browser.
