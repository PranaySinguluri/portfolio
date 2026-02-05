# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
- Node.js (v18 or higher) installed
- Git installed
- Your resume PDF placed at `public/resume.pdf`

## Build the Project

Before deploying to any platform, build the project:

```bash
npm install
npm run build
```

The production build will be in the `dist` directory.

## Deployment Options

### 1. GitHub Pages (Recommended)

**Live URL**: [https://pranaysinguluri.github.io/portfolio/](https://pranaysinguluri.github.io/portfolio/)

#### Automatic Deployment (CI/CD) - ✅ Already Configured

The repository includes a **fully automated GitHub Actions workflow** that deploys to GitHub Pages on every push to the `main` branch.

**How It Works:**

1. **Workflow File**: `.github/workflows/deploy.yml` contains the complete CI/CD pipeline
2. **Trigger**: Automatically runs when you push commits to the `main` branch
3. **Build Process**:
   - Checks out code
   - Sets up Node.js 20 with dependency caching
   - Installs dependencies with `npm ci`
   - Runs `npm run build` to create production build
   - Uploads build artifacts
4. **Deployment**: Automatically deploys to GitHub Pages
5. **Result**: Site is live at `https://pranaysinguluri.github.io/portfolio/` within a few minutes

**Setup Instructions:**

1. Ensure GitHub Pages is enabled in repository Settings → Pages
2. Set "Build and deployment" source to "GitHub Actions"
3. Push your changes to the `main` branch
4. The workflow runs automatically - check the "Actions" tab to monitor progress
5. Once complete, your site is live!

**Configuration Details:**
- Base URL: `/portfolio/` (set in `vite.config.ts`)
- Build output: `dist` directory
- Node version: 20
- Dependencies: Cached for faster subsequent builds
- Jekyll: Disabled via `.nojekyll` file

#### Manual Deployment

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install -g gh-pages

# Build the project
npm run build

# Deploy to gh-pages branch
gh-pages -d dist
```

### 2. Vercel

Vercel offers seamless deployment with automatic HTTPS and global CDN.

**Setup Steps:**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy

For continuous deployment, connect your GitHub repository to Vercel through the [Vercel Dashboard](https://vercel.com).

### 3. Netlify

Netlify provides continuous deployment with automatic HTTPS.

**Setup Steps:**

#### Option A: Drag & Drop

1. Build your project: `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the `dist` folder

#### Option B: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# When prompted:
# - Build command: npm run build
# - Publish directory: dist
```

#### Option C: Continuous Deployment

1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### 4. AWS S3 + CloudFront

For AWS deployment with global CDN and custom domain support.

**Setup Steps:**

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://your-portfolio-bucket
```

2. **Configure bucket for static website hosting:**
```bash
aws s3 website s3://your-portfolio-bucket --index-document index.html
```

3. **Build and upload:**
```bash
npm run build
aws s3 sync dist/ s3://your-portfolio-bucket --acl public-read
```

4. **Create CloudFront Distribution:**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Enable HTTPS

5. **Configure DNS:**
   - Point your domain to the CloudFront distribution

### 5. Firebase Hosting

Google's Firebase offers fast, secure hosting with free SSL.

**Setup Steps:**

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase:**
```bash
firebase login
```

3. **Initialize Firebase:**
```bash
firebase init hosting
```

Configure:
- Public directory: `dist`
- Single-page app: `yes`
- GitHub deployment: `optional`

4. **Build and deploy:**
```bash
npm run build
firebase deploy
```

## Custom Domain Setup

### For GitHub Pages:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS:
   - Type: `CNAME`
   - Name: `www` (or `@` for apex domain)
   - Value: `[username].github.io`

### For Vercel/Netlify:

1. Go to domain settings in your dashboard
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificates are automatically provisioned

### For AWS:

1. Create Route 53 hosted zone
2. Point domain to CloudFront distribution
3. Configure ACM certificate for HTTPS

## Environment Variables

If you add environment variables in the future:

1. Create `.env` file (not committed to git)
2. Prefix variables with `VITE_`
3. Access in code: `import.meta.env.VITE_YOUR_VAR`
4. Set variables in your hosting platform's environment settings

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify dark mode toggle works
- [ ] Test contact form (if connected to backend)
- [ ] Check resume download functionality
- [ ] Test on mobile devices
- [ ] Verify all external links (LinkedIn, GitHub)
- [ ] Check SEO meta tags
- [ ] Test page load speed
- [ ] Verify HTTPS is enabled
- [ ] Test across different browsers

## Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check that the `base` path in `vite.config.ts` is correct for your deployment platform.

### Issue: 404 errors for routes

**Solution:** Configure your hosting to redirect all routes to `index.html` for SPA support.

### Issue: Images not loading

**Solution:** Ensure images are in the `public` directory and referenced with absolute paths.

## Performance Optimization

For better performance scores:

1. **Enable gzip/brotli compression** (usually automatic on modern hosts)
2. **Set cache headers** for static assets
3. **Enable HTTP/2** (automatic on Vercel, Netlify, CloudFront)
4. **Use a CDN** (included with most platforms)

## Monitoring

Consider adding:

- **Google Analytics** for visitor tracking
- **Sentry** for error monitoring
- **Lighthouse CI** for performance monitoring

## Support

For platform-specific issues, refer to:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/)
- [Firebase Docs](https://firebase.google.com/docs/hosting)
