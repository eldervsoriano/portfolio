import HeroSection from "./components/HeroSection";
import Events_Participation from "./components/Events_Participation";
import WorkSection from "./components/WorkSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">
            <HeroSection />
            <WorkSection />
            <Events_Participation />
            <ServicesSection />
        </main>
    );
}
