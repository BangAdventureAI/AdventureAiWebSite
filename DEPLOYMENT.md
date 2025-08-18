# 🚀 Deployment Guide

## 📋 Prerequisites

### 1. Clean Project (Optional)
```bash
# Run the cleanup script
./clean-for-git.sh
```

### 2. Verify Project Structure
```
homepageReact5/
├── .gitignore          # Git ignore file ✅
├── README.md           # Project documentation ✅  
├── vercel.json         # Vercel configuration ✅
├── DOMAIN_SETUP.md     # Domain configuration guide ✅
├── package.json        # Dependencies configuration ✅
├── next.config.js      # Next.js configuration ✅
├── tailwind.config.js  # Tailwind configuration ✅
├── tsconfig.json       # TypeScript configuration ✅
├── app/               # Page files ✅
├── components/        # Component files ✅
├── lib/              # Utility functions ✅
├── types/            # Type definitions ✅
└── public/           # Static assets ✅
```

## 🐙 GitHub Upload Steps

### 1. Create GitHub Repository
1. Login to [GitHub](https://github.com)
2. Click "+" in top right → "New repository"
3. Repository name: `adventureai-website` (or your preferred name)
4. Description: `AdventureAI Official Website - Built with Next.js 14`
5. Choose **Public** or **Private**
6. **DO NOT** check "Add a README file" (we already have one)
7. Click "Create repository"

### 2. Upload Code to GitHub
```bash
# Execute in project directory
git init
git add .
git commit -m "Initial commit: AdventureAI website for www.adventureai.jp"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 🌐 Vercel Deployment Steps

### 1. Connect GitHub
1. Visit [Vercel](https://vercel.com)
2. Login with GitHub account
3. Click "New Project"
4. Select your uploaded GitHub repository

### 2. Configure Deployment
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

### 3. Environment Variables (if needed)
Currently the project doesn't require special environment variables, but for future needs:
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- Other API keys, etc.

### 4. Deploy
1. Click "Deploy"
2. Wait for build completion (about 1-2 minutes)
3. Get deployment URL: `https://your-project.vercel.app`

## 🌍 Custom Domain Configuration

### 1. Add Custom Domain in Vercel
1. Go to your project's "Settings" → "Domains"
2. Add domains:
   - `www.adventureai.jp` (primary)
   - `adventureai.jp` (will redirect to www)

### 2. DNS Configuration
At your domain registrar, set up DNS records:

**Option A: Using Vercel DNS (Recommended)**
```
Type    Name    Value
CNAME   www     cname.vercel-dns.com
CNAME   @       cname.vercel-dns.com
```

**Option B: Using A Records**
```
Type    Name    Value
A       www     76.76.21.21
A       @       76.76.21.21
AAAA    www     2606:4700:10::6816:4d15
AAAA    @       2606:4700:10::6816:4d15
```

### 3. SSL Certificate
- Vercel automatically provisions SSL certificates
- HTTPS will be available within minutes
- Auto-renewal is handled automatically

## 🔧 Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add custom domain in site settings

### AWS Amplify
1. Connect GitHub repository
2. Select Next.js framework
3. Auto-configure build settings
4. Add custom domain in app settings

### Railway
1. Connect GitHub repository
2. Select Next.js template
3. Deploy automatically
4. Configure custom domain

## 📊 Post-Deployment Checklist

### Functionality Testing
- [ ] Homepage loads correctly: `https://www.adventureai.jp`
- [ ] Language switching works: `?lang=en`
- [ ] All page navigation works:
  - [ ] `/company` - Company profile
  - [ ] `/cases` - Services
  - [ ] `/about` - About us
- [ ] Email links work: `team@adventureai.jp`
- [ ] Map links work: Google Maps integration
- [ ] Mobile responsive design
- [ ] Google Analytics tracking

### Performance Check
- [ ] Lighthouse score > 90
- [ ] Page load speed < 3 seconds
- [ ] Image optimization working
- [ ] CDN delivery active

### SEO Verification
- [ ] Meta tags correct
- [ ] Open Graph data present
- [ ] Canonical URLs set
- [ ] Sitemap accessible
- [ ] Robots.txt configured

## 🎯 Domain Redirect Configuration

The project is configured to:
- Redirect `adventureai.jp` → `www.adventureai.jp`
- Force HTTPS on all requests
- Maintain language parameters during redirects

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Run build tests before deployment
- Provide deployment previews for pull requests
- Rollback to previous version if needed

## 📈 Monitoring & Analytics

### Built-in Monitoring
- Vercel Analytics (automatic)
- Performance monitoring
- Error tracking
- Uptime monitoring

### Google Analytics
- Tracking ID: `G-PSYBVJ3787`
- Configured for `www.adventureai.jp`
- Page views and user behavior tracking

## 🌐 Internationalization

Current URL structure supports:
- `https://www.adventureai.jp/` (Japanese default)
- `https://www.adventureai.jp/?lang=en` (English)
- `https://www.adventureai.jp/company?lang=en` (English company page)

## 🆘 Troubleshooting

### Common Issues
1. **DNS not propagating**: Check [DNS Checker](https://dnschecker.org)
2. **Build failing**: Check build logs in Vercel dashboard
3. **Domain not working**: Verify DNS records at registrar
4. **SSL certificate issues**: Wait 24-48 hours for propagation

### Support Resources
1. Vercel Documentation: [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
2. Next.js Documentation: [Deployment](https://nextjs.org/docs/deployment)
3. GitHub Actions: [Vercel Integration](https://vercel.com/docs/concepts/git/vercel-for-github)

## 🎉 Expected Results

After successful deployment, you will have:

✅ **Professional Domain**: `https://www.adventureai.jp`  
✅ **Global CDN**: Fast worldwide access  
✅ **Automatic HTTPS**: SSL certificate auto-renewal  
✅ **Automatic Deployment**: Git push triggers updates  
✅ **High Availability**: 99.9% uptime guarantee  
✅ **Performance Optimized**: < 3s load times  
✅ **SEO Ready**: Search engine optimized  
✅ **Mobile Responsive**: Perfect on all devices  

---

✅ **Your AdventureAI website is ready to go live at www.adventureai.jp!**