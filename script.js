const translations = {
  en: {
    "nav-about": "About Us",
    "nav-company-profile": "Company Profile", // Added
    "nav-team": "Representative",
    "nav-products": "Products",
    "nav-contact": "Contact",
    "about-title": "About Us",
    "about-content": "AdventureAI is a cutting-edge company specializing in artificial intelligence solutions. Our mission is to make AI accessible and impactful for everyone.",
    "company-profile-title": "Company Profile", // Added
    "company-name": "Company Name: AdventureAI Co., Ltd.", // Added
    "company-established": "Established: May 20, 2025", // Added
    "company-capital": "Capital: ¥1,000,000", // Added
    "company-representative": "Representative: Ryu Kato, Representative Director", // Added
    "company-head-office": "Head Office: 18-4 Sakuragaokacho, Shibuya-ku, Tokyo", // Added
    "company-business-activities-title": "Business Activities:", // Added
    "company-activity-software": "Software Development", // Added
    "company-activity-consulting": "AI Consulting", // Added
    "company-activity-export": "Export Business Support", // Added
    "company-activity-overseas": "Overseas Business Support", // Added
    // "company-main-bank": "Main Bank: SBI Sumishin Net Bank", // Added
    "team-title": "Our Team",
    "team-member-1-name": "Kato Ryu",
    "team-member-1-role": "CEO & Founder", // Updated to match original HTML
    "products-title": "Our Products",
    "product-1": "AI Product 1",
    "product-2": "AI Product 2",
    "contact-title": "Contact Us",
    "contact-email": "Email: ryu.kato@adventureai.jp", // Updated to match original HTML
    "contact-address": "Address: 18-4, Sakuragaokacho, Shibuya Ku, Tokyo To, 150-0031, Japan" // Updated to match original HTML
  },
  jp: {
    "nav-about": "私たちについて",
    "nav-company-profile": "会社概要", // Added
    "nav-team": "代表",
    "nav-products": "製品",
    "nav-contact": "お問い合わせ",
    "about-title": "私たちについて",
    "about-content": "AdventureAIは、人工知能ソリューションを専門とする最先端の会社です。私たちの使命は、AIを誰にでも利用可能で影響力のあるものにすることです。",
    "company-profile-title": "会社概要", // Added
    "company-name": "会社名: AdventureAI株式会社", // Added
    "company-established": "設立: 2025年5月20日", // Added
    "company-capital": "資本金: 1,000,000円", // Added
    "company-representative": "代表者: 代表取締役 加藤 瑠", // Added
    "company-head-office": "本社所在地: 東京都渋谷区桜丘町18-4", // Added
    "company-business-activities-title": "事業内容:", // Added
    "company-activity-software": "ソフトウェア開発", // Added
    "company-activity-consulting": "AIコンサルティング", // Added
    "company-activity-export": "輸出業務支援", // Added
    "company-activity-overseas": "海外事業支援", // Added
    // "company-main-bank": "主要取引銀行: 住信SBIネット銀行", // Added
    "team-title": "代表",
    "team-member-1-name": "加藤 瑠",
    "team-member-1-role": "CEO & 代表取締役", // Kept user's provided Japanese translation
    "products-title": "私たちの製品",
    "product-1": "AI製品1",
    "product-2": "AI製品2",
    "contact-title": "お問い合わせ",
    "contact-email": "メール: ryu.kato@adventureai.jp", // Kept user's provided Japanese translation
    "contact-address": "住所: 東京都渋谷区桜丘町18−4 二宮ビル" // Kept user's provided Japanese translation (includes "二宮ビル")
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) { // Check if key exists for the language
      // If you want to preserve HTML tags like <strong> inside translated elements, use innerHTML:
      // element.innerHTML = translations[lang][key];
      // If you only want plain text (current behavior), use textContent:
      element.textContent = translations[lang][key];
    }
  });
}

document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-jp").addEventListener("click", () => switchLanguage("jp"));

// Optional: Set initial language based on browser or a default
// For example, to default to English:
// document.addEventListener('DOMContentLoaded', () => {
//   switchLanguage('en');
// });

// 动态导航高亮
const navLinks = document.querySelectorAll('.figma-header-nav nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// 语言切换
// const langJp = document.querySelector('.lang-jp');
// const langEn = document.querySelector('.lang-en');
// langJp.addEventListener('click', function () {
//   langJp.classList.add('active');
//   langEn.classList.remove('active');
//   // 这里可扩展：切换到日文内容
// });
// langEn.addEventListener('click', function () {
//   langEn.classList.add('active');
//   langJp.classList.remove('active');
//   // 这里可扩展：切换到英文内容
// });

// 联系方式邮箱点击复制
const email = document.querySelector('.figma-contact-email');
if (email) {
  email.style.cursor = 'pointer';
  email.title = '点击复制邮箱';
  email.addEventListener('click', function () {
    const text = email.textContent.replace('Email: ', '').trim();
    navigator.clipboard.writeText(text);
    email.textContent = '已复制: ' + text;
    setTimeout(() => {
      email.textContent = 'Email: ' + text;
    }, 1500);
  });
}

// 响应式图片处理
document.addEventListener('DOMContentLoaded', function () {
  // 优化图片加载
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function () {
      this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
  });

  // 处理背景图片的响应式加载
  const backgroundElements = document.querySelectorAll('[style*="background"]');
  backgroundElements.forEach(element => {
    const style = window.getComputedStyle(element);
    const backgroundImage = style.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      // 确保背景图片正确显示
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
    }
  });

  // 平滑滚动
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 响应式导航菜单
  const navToggle = document.createElement('button');
  navToggle.className = 'nav-toggle';
  navToggle.innerHTML = '☰';
  navToggle.style.cssText = `
        display: none;
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1001;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0.5rem;
        cursor: pointer;
        font-size: 1.2rem;
    `;

  const header = document.querySelector('.figma-header');
  if (header) {
    header.appendChild(navToggle);

    // 移动端菜单切换
    navToggle.addEventListener('click', function () {
      const nav = header.querySelector('.figma-header-nav');
      if (nav) {
        nav.classList.toggle('show');
      }
    });

    // 响应式菜单显示
    function handleResize() {
      const nav = header.querySelector('.figma-header-nav');
      if (window.innerWidth <= 900) {
        navToggle.style.display = 'block';
        nav.classList.remove('show');
      } else {
        navToggle.style.display = 'none';
        nav.classList.add('show');
      }
    }

    // 初始化和监听窗口大小变化
    handleResize();
    window.addEventListener('resize', handleResize);
  }

  // 优化滚动性能
  let ticking = false;
  function updateOnScroll() {
    // 这里可以添加滚动时的优化逻辑
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
});

// 图片懒加载
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var logoLink = document.getElementById('logo-link');
  if (logoLink) {
    var isEnglish = document.documentElement.lang === 'en';
    logoLink.setAttribute('href', isEnglish ? 'index_en.html' : 'index.html');
  }
});
