// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.jessbidwell.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.jessbidwell.com/","title_tag":"Lifestyle Photographer Montrose | Jess Bidwell Photography","meta_description":"Lifestyle photographer in Montrose, CO capturing authentic family moments, seniors, and couples with adventure photo sessions across Western Colorado."},{"page_url":"https://www.jessbidwell.com/about","title_tag":"Adventure Photography Colorado | About Jess Bidwell","meta_description":"Meet Jess, a Montrose lifestyle photographer specializing in adventure photography across Colorado, capturing authentic family moments and couples’ sessions."},{"page_url":"https://www.jessbidwell.com/photography-services","title_tag":"Photography Packages Colorado | Jess Bidwell Studio","meta_description":"Explore photography packages in Colorado for lifestyle family, seniors, and couples. Adventure photo sessions and portrait sessions in Montrose and Western Colorado."},{"page_url":"https://www.jessbidwell.com/family-photos","title_tag":"Family Photography Montrose | Jess Bidwell Photography","meta_description":"Family photography in Montrose, CO with relaxed, lifestyle sessions that capture authentic family moments, vacations, and multi-generational portraits."},{"page_url":"https://www.jessbidwell.com/seniorpictures","title_tag":"Senior Pictures Colorado | Jess Bidwell Photography","meta_description":"Creative senior pictures in Colorado with adventure photo sessions that showcase your personality. Yearbook photos, graduation announcements, and portraits."},{"page_url":"https://www.jessbidwell.com/couplesphotography","title_tag":"Couples Photography Montrose | Jess Bidwell Studio","meta_description":"Couples photography in Montrose, CO capturing engagements, maternity, and anniversaries with authentic, adventure photo sessions across Western Colorado."},{"page_url":"https://www.jessbidwell.com/portfolio","title_tag":"Adventure Photo Sessions | Jess Bidwell Portfolio","meta_description":"View Jess Bidwell’s portfolio of lifestyle photography, including adventure photo sessions, family portraits, couples photography, and senior pictures in Colorado."},{"page_url":"https://www.jessbidwell.com/contact","title_tag":"Lifestyle Photographer Montrose | Contact Jess Bidwell","meta_description":"Contact a lifestyle photographer in Montrose, CO for family photography, senior pictures, and couples sessions. Capture authentic family moments and adventures."},{"page_url":"https://www.jessbidwell.com/book-online","title_tag":"Photography Packages Colorado | Book Jess Bidwell","meta_description":"Book photography packages in Colorado for lifestyle family photos, senior pictures, and couples photography. Schedule your adventure photo session in Montrose."}],"keywords":["lifestyle photographer montrose","family photography montrose","senior pictures colorado","couples photography montrose","authentic family moments","adventure photography colorado","portrait sessions montrose","photography packages colorado","adventure photo sessions","memorable moments montrose"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.jessbidwell.com/#localbusiness",
  "name": "Jess Bidwell Photography",
  "url": "https://www.jessbidwell.com/",
  "image": [
    "https://static.wixstatic.com/media/0c7416_927cf317302d4a6d9c2bfd7acb861f98~mv2.png/v1/fill/w_172,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0c7416_927cf317302d4a6d9c2bfd7acb861f98~mv2.png",
    "https://static.wixstatic.com/media/0c7416_013c79277ef04f8fb1bf344a655b2890~mv2.jpg/v1/fill/w_2500,h_1666,al_c/0c7416_013c79277ef04f8fb1bf344a655b2890~mv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/0c7416_3fb2356e24134d299d10568b79217424%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/0c7416_3fb2356e24134d299d10568b79217424%7Emv2.jpg",
  "description": "Jess Bidwell Photography is a Navy-veteran-owned lifestyle photography business based in Montrose, Colorado, offering adventurous family photos, senior pictures, couples photography, maternity sessions, and multi-generational family portraits across Western Colorado.",
  "priceRange": "$$$",
  "email": "mailto:jessica.bidwell@rocketmail.com",
  "telephone": "+1-315-552-4772",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "S 12th Street",
    "addressLocality": "Montrose",
    "addressRegion": "CO",
    "postalCode": "81401",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "Montrose, Colorado"
    },
    {
      "@type": "Place",
      "name": "Telluride, Colorado"
    },
    {
      "@type": "Place",
      "name": "Ouray, Colorado"
    },
    {
      "@type": "Place",
      "name": "Crested Butte, Colorado"
    },
    {
      "@type": "Place",
      "name": "Grand Mesa, Colorado"
    },
    {
      "@type": "Place",
      "name": "Western Colorado"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Jess Bidwell",
    "description": "Navy-vet-turned lifestyle photographer with 20 years of experience and a degree in portrait and commercial photography.",
    "jobTitle": "Owner & Lifestyle Photographer"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "The Adventure Shoot",
        "price": "500",
        "priceCurrency": "USD",
        "url": "https://www.jessbidwell.com/book-online",
        "category": [
          "Family Photography",
          "Couples Photography",
          "Maternity Photography",
          "Senior Pictures",
          "Brand Photography"
        ]
      },
      {
        "@type": "Offer",
        "name": "The Peak Experience",
        "price": "800",
        "priceCurrency": "USD",
        "url": "https://www.jessbidwell.com/book-online",
        "category": [
          "Extended Family Photography",
          "Multigenerational Family Photography",
          "Mountain Destination Photography"
        ]
      },
      {
        "@type": "Offer",
        "name": "Senior Session",
        "price": "300",
        "priceCurrency": "USD",
        "url": "https://www.jessbidwell.com/book-online",
        "category": [
          "Senior Pictures",
          "Senior Yearbook Photos",
          "Graduation Photography",
          "Headshots for College Applications"
        ]
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Family Photos",
      "description": "Low-stress, laid-back family portrait sessions designed to capture authentic, personality-filled moments for families, including newborn, multi-generational, and family vacation sessions.",
      "url": "https://www.jessbidwell.com/family-photos"
    },
    {
      "@type": "Offer",
      "name": "Senior Pictures",
      "description": "Adventure-focused senior photo sessions that capture each senior's unique interests and personality for yearbook photos, graduation announcements, and more.",
      "url": "https://www.jessbidwell.com/seniorpictures"
    },
    {
      "@type": "Offer",
      "name": "Couples Photography",
      "description": "Lifestyle photography for couples, including engagement sessions, elopements, anniversaries, and maternity photos, focused on telling each couple's unique love story.",
      "url": "https://www.jessbidwell.com/couplesphotography"
    }
  ],
  "knowsAbout": [
    "Lifestyle photography",
    "Family photography",
    "Newborn photography",
    "Multi-generational family portraits",
    "Senior pictures",
    "Senior yearbook photos",
    "Couples photography",
    "Engagement photos",
    "Elopement photography",
    "Maternity photography",
    "Adventure photography",
    "Outdoor photography in Western Colorado"
  ],
  "faqPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do you charge for your services as a photographer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer three different pricing options based on the time we spend together and the number of images you wish to receive after the session. To view my pricing in greater detail, visit my services page."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your photography packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each of my photographer packages includes a specified photo session duration, 1 or 2 location and outfit changes, a set number of edited images, and a private online gallery for viewing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have a portfolio I can review?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can visit the portfolio page of my website to see my unique approach as a lifestyle photographer."
        }
      },
      {
        "@type": "Question",
        "name": "What is your style as a photographer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I am a lifestyle photographer who enjoys capturing authentic moments. I believe each frame should tell its own story, and every session should be a unique adventure."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book a session with you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I have a booking calendar that makes it easy to view my availability directly on the website. You can also contact me for a list of available dates."
        }
      },
      {
        "@type": "Question",
        "name": "Can you recommend locations for our photo session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I am happy to recommend locations throughout the Western Slope that may be a good fit for you and your family. Although I am based in Montrose, I offer sessions in many locations, including Telluride, Ouray, Crested Butte, Grand Mesa, and more. I will send you a location guide once your photoshoot is scheduled, and we can discuss which places would be the best fit for what you envision."
        }
      },
      {
        "@type": "Question",
        "name": "What should we wear for our photo shoot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "What you wear will have a significant impact on the end result of your images. Once you’ve secured your reservation, I will send you a guide to help you select the best outfits for your shoot."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical photo session last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My photoshoots range from 30 minutes to 2 hours, depending on the package you select."
        }
      },
      {
        "@type": "Question",
        "name": "How long will it take to receive our edited photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will receive a link to your online gallery to view your edited photos within 2 weeks of our session."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer prints or albums?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can order professional prints directly from the online gallery. You also have the option to download the images and print them wherever you like."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any additional fees or expenses we should be aware of?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My photography packages include everything listed for the set price, including a specified number of edited photos."
        }
      },
      {
        "@type": "Question",
        "name": "Can we share our photos on social media, and do you have any restrictions on their use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you have paid your photography package in full, you will receive a worldwide perpetual license to use photos for personal representation, including use and publishing on social media without my watermark or attribution to me. I always appreciate being tagged on social media if you choose."
        }
      },
      {
        "@type": "Question",
        "name": "What is your cancellation and rescheduling policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Should you need to cancel, please do so at least 14 days prior to the shoot; this will ensure full refund of your deposit. If cancelation occurs within the 2-week window before the scheduled shoot date your deposit will be forfeited."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle inclement weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the event of inclement weather, I will contact you the day prior to discuss whether we should reschedule the session or select another location."
        }
      },
      {
        "@type": "Question",
        "name": "Can you accommodate special requests or unique photography ideas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My goal as a lifestyle photographer is to provide images that tell your family’s story in the way you desire. I enjoy working with you to incorporate anything you desire into our photo session."
        }
      },
      {
        "@type": "Question",
        "name": "What is your payment schedule and accepted payment methods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I require a $100 down payment upon booking, and the remaining balance is due in full on the day of your photography session. I accept credit card payments. Payment plans are available."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide a written contract outlining the terms of our agreement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I provide a written contract to each client who books with me. You will receive this contract once we schedule a session date."
        }
      }
    ]
  },
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.jessbidwell.com/book-online",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a Photography Session"
      }
    },
    {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.jessbidwell.com/contact",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
