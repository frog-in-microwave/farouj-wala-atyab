"use client";

import { useState, useEffect } from "react";
import { Language, Product } from "../types";
import { siteText } from "../constants";

interface ItemModalProps {
  product: Product | null;
  lang: Language;
  onClose: () => void;
}

export default function ItemModal({ product, lang, onClose }: ItemModalProps) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  // When product changes, reset loading state
  useEffect(() => {
    setIsImgLoaded(false);
  }, [product]);

  const getText = (textObj: any) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  return (
    <div id="item-modal" className={`modal ${product ? "active" : ""}`} aria-hidden={!product}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="close-btn" type="button" aria-label="Close modal" onClick={onClose}>×</button>
        
        {product && (
          <>
            <div className={`modal-img-container ${isImgLoaded ? "loaded" : ""}`}>
              {!isImgLoaded && <div className="chicken-loader"></div>}
              <img 
                src={product.image} 
                alt="" 
                id="modal-img" 
                onLoad={() => setIsImgLoaded(true)} 
              />
            </div>
            <div className="modal-text">
              <h2 id="modal-title">{getText(product.name)}</h2>
              <p id="modal-price" className="modal-price">
                {product.price && product.price.trim() ? product.price : siteText[lang].offer}
              </p>
              <p id="modal-desc">
                {product.description ? getText(product.description) : siteText[lang].defaultDescription}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
