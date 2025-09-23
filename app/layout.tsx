import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "Weekly Meal Planner | Food Planner",
  description: "Plan your weekly meals with ease using our interactive meal planner. Organize recipes, generate shopping lists, and streamline your meal prep.",
  keywords: "meal planner, food planning, weekly meals, recipe organizer, grocery list",
  authors: [{ name: "Orriss" }],
  openGraph: {
    title: "Weekly Meal Planner | Food Planner",
    description: "Simplify your meal planning with our interactive tool. Plan meals, organize recipes, and create shopping lists effortlessly.",
    url: "https://foodplanner.orriss.dev",
    siteName: "Food Planner",
    images: [
      {
        url: "https://foodplanner.orriss.dev/og-image.jpg", // You'll need to create and host this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Meal Planner | Food Planner",
    description: "Streamline your meal planning with our interactive tool. Organize recipes and create shopping lists with ease.",
    images: ["https://foodplanner.orriss.dev/twitter-image.jpg"], // You'll need to create and host this image
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico", // Make sure to create and add a favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="ldo.dev" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <body>{children}</body>
    </html>
  );
}
