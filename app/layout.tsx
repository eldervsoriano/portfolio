import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script"; // ✅ add this import

export const metadata = {
    title: "Elder Soriano Portfolio",
    description: "Portfolio website of Elder Soriano",
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
