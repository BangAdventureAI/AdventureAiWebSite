# 🌐 AdventureAI.jp Domain Configuration Guide

## 📋 Overview

Deploy the AdventureAI website to custom domain: `https://www.adventureai.jp/`

## 🎯 Domain Strategy

- **Primary Domain**: `www.adventureai.jp` (recommended)
- **Redirect**: `adventureai.jp` → `www.adventureai.jp`
- **SSL**: Automatic HTTPS certificates
- **CDN**: Global acceleration with Japan region optimization

## 🚀 Deployment Steps

### Step 1: Upload Code to GitHub
```bash
# Execute in project directory
git init
git add .
git commit -m "Initial commit: AdventureAI website for www.adventureai.jp"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adventureai-website.git
git push -u origin main
```

### Step 2: Vercel Deployment
1. Visit [Vercel](https://vercel.com)
2. Login with GitHub account
3. Click "New Project"
4. Select `adventureai-website` repository
5. Configuration:
   - **Framework**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

### Step 3: Add Custom Domain

#### Configure in Vercel
1. Go to project "Settings" → "Domains"
2. Add domains:
   - `www.adventureai.jp`
   - `adventureai.jp` (will auto-redirect to www)

#### DNS Settings (At Your Domain Registrar)

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

## 🔧 Project Configuration Updates

### Next.js Configuration (next.config.js)
```javascript
const nextConfig = {
    images: {
        domains: ['localhost', 'www.adventureai.jp', 'adventureai.jp'],
        formats: ['image/webp', 'image/avif'],
    },
    trailingSlash: true,
    async redirects() {
        return [
            // Redirect apex domain to www
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'adventureai.jp' }],
                destination: 'https://www.adventureai.jp/:path*',
                permanent: true,
            },
        ]
    },
}
```

### SEO Configuration
- ✅ `metadataBase`: `https://www.adventureai.jp`
- ✅ OpenGraph URL: `https://www.adventureai.jp`
- ✅ Canonical URLs configured
- ✅ Multi-language support ready

### Vercel Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["hnd1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

## 📊 Verification Checklist

### DNS Resolution Verification
```bash
# Check DNS resolution
nslookup www.adventureai.jp
nslookup adventureai.jp

# Check HTTPS certificates
curl -I https://www.adventureai.jp
curl -I https://adventureai.jp
```

### Functionality Testing
- [ ] `https://www.adventureai.jp` loads correctly
- [ ] `https://adventureai.jp` redirects to www
- [ ] SSL certificate valid (green lock icon)
- [ ] All page routes working:
  - [ ] `/` - Homepage
  - [ ] `/company` - Company profile
  - [ ] `/cases` - Services
  - [ ] `/about` - About us
- [ ] Language switching: `?lang=en`
- [ ] Email links: `team@adventureai.jp`
- [ ] Address links: Google Maps
- [ ] Mobile responsive design
- [ ] Google Analytics working

### Performance Testing
- [ ] PageSpeed Insights > 90 score
- [ ] First Contentful Paint < 3 seconds
- [ ] Image optimization working
- [ ] CDN delivery active

## 🌏 Internationalization URL Structure

Current configuration supports:
- `https://www.adventureai.jp/` (Japanese default)
- `https://www.adventureai.jp/?lang=en` (English)
- `https://www.adventureai.jp/company?lang=en` (English company page)

## 🔄 Post-Deployment Actions

### 1. Update Google Analytics
Confirm GA tracking code domain settings:
```javascript
gtag('config', 'G-PSYBVJ3787', {
  page_title: document.title,
  page_location: 'https://www.adventureai.jp' + window.location.pathname
});
```

### 2. Search Engine Optimization
- Submit sitemap to Google Search Console
- Add domain to Bing Webmaster Tools
- Update social media links
- Set up Google My Business (if applicable)

### 3. Monitoring Setup
- Vercel Analytics automatically enabled
- Set up uptime monitoring
- Configure error reporting
- Monitor Core Web Vitals

## 🎉 Expected Results

After deployment completion, you will have:

✅ **Professional Domain**: `https://www.adventureai.jp`  
✅ **Global CDN**: Fast access speeds worldwide  
✅ **Automatic HTTPS**: SSL certificates with auto-renewal  
✅ **Automatic Deployment**: Git push triggers updates  
✅ **High Availability**: 99.9% uptime  
✅ **Japan Region Optimized**: Fast loading in Asia-Pacific  
✅ **SEO Optimized**: Search engine friendly  
✅ **Mobile Responsive**: Perfect on all devices  

## 🛡️ Security Features

- **HSTS Headers**: Force HTTPS connections
- **Content Security Policy**: XSS protection
- **X-Frame-Options**: Clickjacking protection
- **Automatic SSL**: Certificate management
- **DDoS Protection**: Built-in security

## 📞 Technical Support

If you encounter issues:
1. Check DNS propagation: [DNS Checker](https://dnschecker.org)
2. Vercel Documentation: [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
3. Contact domain registrar to confirm DNS settings
4. Check Vercel deployment logs for errors

## 📈 Performance Optimization

The configuration includes:
- **Image Optimization**: WebP/AVIF formats
- **Code Splitting**: Automatic by Next.js
- **Static Generation**: Pre-rendered pages
- **Edge Caching**: Global CDN distribution
- **Compression**: Gzip/Brotli compression

---

🚀 **Ready to launch! Your AdventureAI website will be live at www.adventureai.jp!**