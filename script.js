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
    "company-main-bank": "Main Bank: SBI Sumishin Net Bank", // Added
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
    "company-main-bank": "主要取引銀行: 住信SBIネット銀行", // Added
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