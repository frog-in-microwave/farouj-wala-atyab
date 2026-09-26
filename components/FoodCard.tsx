"use client";

import { KeyboardEvent, useState } from "react";
import { Product, Language } from "../types";

/**
 * INTERFACES (TypeScript)
 * Interfaces define the strict "shape" of the data this component expects to receive.
 * This prevents bugs (e.g., trying to access product.title when it's actually product.name).
 * KEYWORDS TO SEARCH: "TypeScript Interfaces", "React Component Props"
 */
interface FoodCardProps {
  product: Product;
  lang: Language;
  offerText: string;
  fallbackImage: string;
  onSelect: (product: Product) => void;
}

/**
 * REUSABLE COMPONENT
 * By extracting this HTML out of the main page, we keep the main page clean.
 * We pass 'props' (properties) into the function so it knows what to display.
 */
export default function FoodCard({ product, lang, offerText, fallbackImage, onSelect }: FoodCardProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);

  // Helper to extract the correct string based on the current language
  const getText = (textObj: any) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  // Accessibility: Allows users navigating with a keyboard to press Enter/Space to open the modal
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(product);
    }
  };

  return (
    <article
      className="card"
      tabIndex={0} // Makes the card focusable with the Tab key
      role="button"
      aria-label={getText(product.name)}
      onClick={() => onSelect(product)} // Triggers the modal popup!
      onKeyDown={handleKeyDown}
    >
      <div className={`card-img-container ${isLoaded ? "loaded" : ""}`}>
        {!isLoaded && <div className="chicken-loader"></div>}
        <img 
          src={product.image} 
          alt="" 
          loading="lazy" 
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="card-info">
        <h3 className="card-title">{getText(product.name)}</h3>
        <p className="card-price">
          {product.price && product.price.trim() ? product.price : offerText}
        </p>
      </div>
    </article>
  );
}
