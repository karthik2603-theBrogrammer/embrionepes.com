import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import PastEvents from "@/components/PastEvents";
import Footer from "@/components/Footer/Footer";
import Announcements from "@/components/Announcements/Announcements";
import PreviousPartners from "@/components/Previous-Partners/PreviousPartners";
import ContactUs from "@/components/ContactUs/ContactUs";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
export default function LandingPage() {
  return (
    <>
      <ScrollProgressComponent />
      <div className="relative flex justify-center items-center">
        <Navbar />
      </div>
      <Hero />
      <AboutUs />
      <Team />
      <PastEvents />
      <PreviousPartners />
      <Announcements />
      <ContactUs />
      <div className="relative flex justify-center items-center">
        <Footer />
      </div>
      <div className="flex flex-col items-center justify-center sticky bottom-4 bg-transparent">
        <BottomNavigationComponent />
      </div>
    </>
  );
}
