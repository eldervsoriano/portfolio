import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <body className="bg-[#020616] text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
