<p align="center">
  <img src="src/assets/logo.png" alt="Allied Home Health Care Logo" width="120" />
</p>

<h1 align="center">Allied Home Health Care</h1>

<p align="center">
  <strong>Excellence in Home Health</strong>
</p>

<p align="center">
  Licensed & Medicare/Medicaid certified home health agency serving the Dallas-Fort Worth Metroplex.
</p>

<p align="center">
  <a href="https://allied-hhc.com"><strong>allied-hhc.com</strong></a>
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#project-structure">Project Structure</a> &bull;
  <a href="#customization">Customization</a> &bull;
  <a href="#deployment">Deployment</a> &bull;
  <a href="#license">License</a>
</p>

---

## Features

- **Single-Page Scrollable Layout** -- smooth scroll navigation between all sections
- **Apple-Inspired Design System** -- clean, modern UI with alternating dark/light sections, glass-effect navbar, and tight typography
- **Parallax Background** -- fixed background image on desktop with per-section fallback on mobile
- **Contact Form** -- integrated with [Formspree](https://formspree.io) for real email delivery
- **Fully Responsive** -- optimized layouts for mobile, tablet, and desktop breakpoints
- **Performance Monitoring** -- Vercel Speed Insights integration
- **Accessible** -- semantic HTML, keyboard-navigable, labeled form inputs, `tel:` and `mailto:` links

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [React 19](https://react.dev) |
| Build Tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Scroll | [React Scroll](https://github.com/fisshy/react-scroll) |
| Form Backend | [Formspree](https://formspree.io) |
| Analytics | [Vercel Speed Insights](https://vercel.com/docs/speed-insights) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/rohanthomas1202/allied-home-health.git
cd allied-home-health

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
allied-home-health/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images (logo, background photo)
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Glass-effect sticky navigation (desktop only)
│   │   ├── Hero.jsx         # Full-screen hero with parallax background
│   │   ├── About.jsx        # Company info & mission statement
│   │   ├── Services.jsx     # Medical services grid
│   │   ├── ServiceCard.jsx  # Reusable service card component
│   │   ├── Team.jsx         # Care team roles
│   │   ├── Advantages.jsx   # Why choose Allied
│   │   ├── ServiceAreas.jsx # Counties served
│   │   ├── Admissions.jsx   # Admission criteria & referral sources
│   │   ├── Contact.jsx      # Contact info & Formspree form
│   │   ├── Footer.jsx       # Site footer with links & contact
│   │   └── SectionHeading.jsx # Reusable section title component
│   ├── data/
│   │   ├── constants.js     # Business info (address, phone, hours, etc.)
│   │   ├── services.js      # Medical services data
│   │   └── team.js          # Team roles data
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind imports & theme configuration
├── index.html               # HTML template
├── vite.config.js           # Vite + Tailwind plugin config
└── package.json
```

## Customization

### Business Information

All business data is centralized in [`src/data/constants.js`](src/data/constants.js):

```js
export const PHONE = "972-620-2006";
export const FAX = "972-476-1093";
export const EMAIL = "alliedhomehealth284@gmail.com";
export const ADDRESS = "1925 E Belt Line Road, Suite 204, Carrollton, TX 75006";
export const FORMSPREE_ID = "mdaynnlk";
```

### Theme Colors

Brand colors are defined in [`src/index.css`](src/index.css) using Tailwind's `@theme` directive:

```css
@theme {
  --color-apple-blue: #0071e3;
  --color-near-black: #1d1d1f;
  --color-gray-light: #f5f5f7;
  --color-bright-blue: #2997ff;
  --color-dark-surface-1: #272729;
}
```

### Services & Team

Update the service offerings or team roles by editing:
- [`src/data/services.js`](src/data/services.js) -- grouped medical services with icons
- [`src/data/team.js`](src/data/team.js) -- care team roles with descriptions

### Contact Form

The form submits to Formspree. To use your own form endpoint, update `FORMSPREE_ID` in `constants.js`.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite -- no configuration needed
4. Deploy

### Manual Build

```bash
npm run build
```

Output is in the `dist/` directory, ready to serve from any static hosting provider (Netlify, Cloudflare Pages, AWS S3, etc.).

## Contact

**Allied Home Healthcare Services Inc**

- Phone: [972-620-2006](tel:972-620-2006)
- Fax: 972-476-1093
- Email: [alliedhomehealth284@gmail.com](mailto:alliedhomehealth284@gmail.com)
- Address: 1925 E Belt Line Road, Suite 204, Carrollton, TX 75006

## License

This project is proprietary software. All rights reserved.

---

<p align="center">
  &copy; 2026 Allied Home Healthcare Services Inc
</p>
