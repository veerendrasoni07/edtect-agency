import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edtect Agency | Growth for EdTech Brands",
  description:
    "Edtect Agency helps education businesses scale with conversion-focused websites, paid acquisition, and funnel systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('theme');var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=saved||(systemDark?'dark':'light');var root=document.documentElement;root.setAttribute('data-theme',theme);root.classList.toggle('dark',theme==='dark');}catch(e){var root=document.documentElement;root.setAttribute('data-theme','light');root.classList.remove('dark');}})();`,
          }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
