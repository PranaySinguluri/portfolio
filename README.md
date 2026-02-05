# Portfolio Website - Pranay Singuluri

A professional portfolio website showcasing the skills and experience of Pranay Singuluri, a Full Stack Developer with 6 years of experience in React.js, Spring Boot, and AI/ML integration.

## 🚀 Features

- **Modern Tech Stack**: Built with React.js, TypeScript, and Material UI
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion for elegant transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Fast loading with code splitting and optimization
- **Accessibility**: WCAG compliant and keyboard navigable

## 📋 Sections

1. **Hero/Home** - Introduction with contact information and CTAs
2. **About** - Professional summary and key highlights
3. **Skills** - Categorized technical skills display
4. **Experience** - Timeline of professional positions
5. **Education** - Academic credentials
6. **Projects** - Featured work and achievements
7. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Frontend**: React.js 19.2.0 + TypeScript
- **UI Framework**: Material UI (MUI)
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/PranaySinguluri/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume:
   - Place your resume PDF file as `public/resume.pdf`
   - This enables the "Download Resume" functionality

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy to GitHub Pages:
```bash
npm install -g gh-pages
gh-pages -d dist
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

Or simply drag and drop the `dist` folder to [Netlify's web interface](https://app.netlify.com/).

### AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create an S3 bucket and enable static website hosting

3. Upload the contents of the `dist` folder to the S3 bucket

4. Create a CloudFront distribution pointing to the S3 bucket

5. Update DNS records to point to the CloudFront distribution

## 🎨 Customization

### Updating Content

All content is defined in the component files:

- **Personal Info**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Education**: `src/components/Education.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact**: `src/components/Contact.tsx`

### Changing Theme Colors

Edit `src/theme.ts` to customize colors, typography, and component styles.

### Adding Your Resume

Place your resume PDF file as `public/resume.pdf` to enable the download functionality.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance

The website is optimized for performance with:
- Code splitting
- Lazy loading
- Optimized assets
- Minimal dependencies
- Efficient rendering

Target Lighthouse scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 📧 Contact

For any questions or feedback:

- **Email**: singuluripranay@gmail.com
- **Phone**: +1 573-466-3525
- **LinkedIn**: [linkedin.com/in/pranay-singuluri](https://www.linkedin.com/in/pranay-singuluri)
- **GitHub**: [github.com/PranaySinguluri](https://github.com/PranaySinguluri)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Material UI for the component library
- Framer Motion for animations
- Vite for the build tool
- React.js and TypeScript communities

---

**Built with ❤️ by Pranay Singuluri**
