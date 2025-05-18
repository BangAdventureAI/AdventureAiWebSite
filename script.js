const translations = {
    en: {
      "nav-about": "About Us",
      "nav-team": "Team",
      "nav-products": "Products",
      "nav-contact": "Contact",
      "about-title": "About Us",
      "about-content": "AdventureAI is a cutting-edge company specializing in artificial intelligence solutions. Our mission is to make AI accessible and impactful for everyone.",
      "team-title": "Our Team",
      "team-member-1-name": "Kato Ryu",
      "team-member-1-role": "CMO & Representative Director",
      "products-title": "Our Products",
      "product-1": "AI Product 1",
      "product-2": "AI Product 2",
      "contact-title": "Contact Us",
      "contact-email": "Email: contact@adventureai.com",
      "contact-address": "Address: 123 AI Street, Tokyo, Japan"
    },
    jp: {
      "nav-about": "私たちについて",
      "nav-team": "チーム",
      "nav-products": "製品",
      "nav-contact": "お問い合わせ",
      "about-title": "私たちについて",
      "about-content": "AdventureAIは、人工知能ソリューションを専門とする最先端の会社です。私たちの使命は、AIを誰にでも利用可能で影響力のあるものにすることです。",
      "team-title": "私たちのチーム",
      "team-member-1-name": "加藤 瑠",
      "team-member-1-role": "CMO & 代表取締役",
      "products-title": "私たちの製品",
      "product-1": "AI製品1",
      "product-2": "AI製品2",
      "contact-title": "お問い合わせ",
      "contact-email": "メール: ryu.kato@adventureai.jp",
      "contact-address": "住所: 東京都渋谷区桜丘町18−4 二宮ビル"
    }
  };
  
  function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      element.textContent = translations[lang][key];
    });
  }
  
  document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
  document.getElementById("lang-jp").addEventListener("click", () => switchLanguage("jp"));
  