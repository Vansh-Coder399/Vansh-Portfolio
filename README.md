# Vansh Tiwari — Personal Portfolio

A modern, interactive 3D developer portfolio built with React, Three.js, and Tailwind CSS. Features smooth animations, a 3D skills keyboard, an achievement timeline, and a contact form.

---

## Live Demo

🔗 [vansh-portfolio.vercel.app](https://vansh-portfolio.vercel.app)

---

## Sections

- **Hero** — Animated introduction with a 3D PC setup
- **About** — Brief intro and service cards
- **Skills** — Interactive 3D keyboard with tech stack icons
- **Achievements** — Timeline of certifications and courses
- **Contact** — Contact form with 3D globe animation

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 18, Vite |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Contact Form | EmailJS |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Vansh-Coder399/Vansh-Portfolio.git

# Navigate into the project
cd Vansh-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory for the contact form:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://emailjs.com) — free plan is enough.

---

## Project Structure

```
src/
├── assets/          # Images, logos, icons
├── components/
│   ├── canvas/      # Three.js 3D components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Achievement.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── constants/
│   └── index.js     # All site data (name, achievements, services)
├── App.jsx
└── main.jsx
```

---

## Customization

All site content is centralized in `src/constants/index.js`:

- **Name / Tagline** → `src/components/Hero.jsx`
- **Services** → `services` array in `constants/index.js`
- **Achievements / Certifications** → `achievements` array
- **Projects** → `projects` array (currently commented out, add when ready)
- **Skills** → `technologies` array

---

## Deployment

Deployed on **Vercel** with automatic CI/CD — every push to `main` triggers a new deployment.

To deploy your own:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Add environment variables
5. Deploy

<!-- ---

## Roadmap

- [ ] Add projects section once projects are ready for showcase
- [ ] Add GitHub activity graph
- [ ] Add blog section
- [ ] Optimize 3D performance on mobile -->

---

## Acknowledgements

- 3D models from Sketchfab
- Icons from various open-source icon packs

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built by Vansh Tiwari*