import Navbar from "@/components/Navbar";
import { NavbarKodikon3 } from "@/components/Kodikon-3/NavbarKodikon3";
import ScrollProgressComponent from "@/components/ScrollProgress/ScrollProgressComponent";
import BottomNavigationComponent from "@/components/BottomNavigation/BottomNavigationComponent";
import HeroComponent from "@/components/Kodikon-3/HeroComponent";
import AboutTheEvent from "@/components/Kodikon-3/AboutTheEvent/AboutTheEvent";
import PreviousEditionComponent from "@/components/Kodikon-3/PreviousEditions/PreviousEditionComponent";
import HackathonThemes from "@/components/Kodikon-3/HackathonThemes/HackathonThemes";
import EventTimeline from "@/components/Kodikon-3/Timeline/EventTimeline";
import SponsorsComponent from "@/components/Kodikon-3/Sponsors/SponsorsComponent";
import PrizesComponent from "@/components/Kodikon-3/Prizes/PrizesComponent";
import Footer from "@/components/Footer/Footer";
import EventCountdown  from "@/components/Kodikon-3/Countdown/EventCountdown";
import FAQ from "@/components/Kodikon-3/FAQComponent";
import Map from "@/components/Kodikon-3/MapComponent";
export default function LandingPage() {
  return (
    <>
      
      <div className="relative flex justify-center items-center">
        <NavbarKodikon3/>
      </div>
      <ScrollProgressComponent />
      <div className=" relative flex justify-center items-center flex-col md:px-32 gap-y-9">
        <HeroComponent />
        <AboutTheEvent />
        <EventCountdown/>
        {/* <PreviousEditionComponent /> */}
        <HackathonThemes/>
        <EventTimeline/>
        <SponsorsComponent/>
        <PrizesComponent/>
        <FAQ />
        <Map />
        <Footer/>

      </div>

    </>
  );
}
