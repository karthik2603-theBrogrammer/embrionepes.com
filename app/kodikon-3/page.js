import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
import HeroComponent from "@/components/Kodikon-3/HeroComponent";
export default function LandingPage() {
  return (
    <>
      <ScrollProgressComponent />
      <div className="relative flex justify-center items-center">
        <Navbar />
      </div>
      <HeroComponent/>

      <div className="flex flex-col items-center justify-center sticky bottom-4 bg-transparent">
        <BottomNavigationComponent />
      </div>
    </>
  );
}
