"use client";

import { Language } from "../types";
import { siteText } from "../constants";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-maps-wrapper">
          <div className="footer-map-container">
            <h4>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginInlineEnd: "8px", color: "var(--brand-white)" }}
              ></i>
              {lang === "en" ? "Ghazieh Branch" : "فرع الغازية"}
            </h4>
            <div className="map-frame">
              <iframe
                title="Farouj Wala Atyab - Ghazieh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.2784919797728!2d35.360842072908035!3d33.512901509958375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef1a77fb37f07%3A0x6fdf3627f6b45177!2s961%20FOOD!5e0!3m2!1sen!2slb!4v1787143468615!5m2!1sen!2slb"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="footer-map-container">
            <h4>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginInlineEnd: "8px", color: "var(--brand-white)" }}
              ></i>
              {lang === "en" ? "Adsheet Branch" : "فرع عدشيت"}
            </h4>
            <div className="map-frame">
              <iframe
                title="Farouj Wala Atyab - Adsheet"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.2784919797728!2d35.360842072908035!3d33.512901509958375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef1a77fb37f07%3A0x6fdf3627f6b45177!2s961%20FOOD!5e0!3m2!1sen!2slb!4v1787143468615!5m2!1sen!2slb"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <h3 id="footer-title">{siteText[lang].visitUs}</h3>
          <p id="footer-location">{siteText[lang].location}</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/farouj_wala_atyab?stkn=MWEwYTFtMXIwNnhydA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@farouj_wala_atyab?_r=1&_t=ZS-9A2arXLnYdm"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.facebook.com/share/19PTC2qi8D/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" id="footer-bottom">
        {siteText[lang].footerBottom}
      </div>
    </footer>
  );
}
