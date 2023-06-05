import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import PastEvents from "@/components/PastEvents";
import Footer from "@/components/Footer/Footer";
import Announcements from "@/components/Announcements/Announcements";
import PreviousPartners from "@/components/Previous-Partners/PreviousPartners";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <PastEvents />
      <PreviousPartners/>
      <Announcements/>
      <Footer/>
    </>
  );
}
