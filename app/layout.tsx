import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
    title: "Elder Soriano Portfolio",
    description: "Portfolio website of Elder Soriano",

    // ✅ Add Open Graph metadata for link previews
    openGraph: {
        title: "Elder Soriano Portfolio",
        description: "Explore my works, skills, and game projects.",
        url: "https://elder-soriano.vercel.app/",
        siteName: "Elder Soriano Portfolio",
        images: [
            {
                url: "/Images/Icons/profile-pic-about.jpg", // ✅ path inside public folder
                width: 1200,
                height: 630,
                alt: "Elder Soriano Portfolio Preview",
            },
        ],
        type: "website",
    },

    // Optional: Twitter Card support (for X / Twitter)
    twitter: {
        card: "summary_large_image",
        title: "Elder Soriano Portfolio",
        description: "Explore my works, skills, and game projects.",
        images: ["/Images/Icons/profile-pic-about.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            {/* ✅ Load model-viewer script ONCE globally */}
            <Script
                type="module"
                src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
                strategy="beforeInteractive"
            />
        </head>
        <body className="bg-[#020616] text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
