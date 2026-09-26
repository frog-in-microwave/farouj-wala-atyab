import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

/**
 * METADATA
 * This object configures the <head> of your HTML (like the title in the browser tab).
 * Next.js automatically injects this for SEO purposes.
 * KEYWORDS TO SEARCH: "Next.js Metadata API", "Next.js SEO"
 */
export const metadata: Metadata = {
  title: "Farouj Wala Atyab",
  description: "Farouj Wala Atyab - Lebanon",
};

/**
 * ROOT LAYOUT
 * This is the wrapper for your entire application. Every page you create will be 
 * rendered inside the 'children' prop here.
 * 
 * KEYWORDS TO SEARCH: "Next.js Root Layout", "React children prop"
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // We read the language cookie here as well.
  // This allows us to set the language (lang) and direction (dir - RTL/LTR) 
  // directly on the <html> tag so the browser knows how to render the text instantly.
  const cookieStore = await cookies();
  const lang = cookieStore.get("restaurant-language")?.value === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <head>
        {/* We load our Google Fonts and FontAwesome icons here so they apply globally */}
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Outfit:wght@300;600;700;800;900&family=Cairo:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {/* 'children' represents the page currently being viewed (like app/page.tsx) */}
        {children}
      </body>
    </html>
  );
}
