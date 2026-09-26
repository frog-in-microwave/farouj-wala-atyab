"use client";

import { Language } from "../types";
import { siteText } from "../constants";

interface HeaderProps {
  lang: Language;
  changeLanguage: (newLang: Language) => void;
}

export default function Header({ lang, changeLanguage }: HeaderProps) {
  return (
    <header className="brand-hero">
      <div className="language-toggle" aria-label="Language selector">
        <button
          id="lang-en"
          className={`lang-btn ${lang === "en" ? "active" : ""}`}
          type="button"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          id="lang-ar"
          className={`lang-btn ${lang === "ar" ? "active" : ""}`}
          type="button"
          onClick={() => changeLanguage("ar")}
        >
          عربي
        </button>
      </div>

      <div className="brand-content">
        <div className="logo">
          <img
            src="/data/layout_images/logo_pic.avif"
            alt="froooooooooooooooooooooooooooooooooooooooooooooooooogzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
            className="restaurant-logo"
          />
        </div>

        <div className="phone-container">
          <a className="phone-number" href="tel:03805267">
            <span className="phone-loc">
              {lang === "en" ? "Ghazieh" : "الغازية"}
            </span>
            <span className="phone-val" dir="ltr">
              03 / 805 267
            </span>
          </a>
          <a className="phone-number" href="tel:76855147">
            <span className="phone-loc">
              {lang === "en" ? "Adsheet" : "عدشيت"}
            </span>
            <span className="phone-val" dir="ltr">
              76 / 855 147
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
