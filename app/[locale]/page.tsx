import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Montieze from "@/components/Montieze";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import OurClients from "@/components/OurClients";
import HappyClients from "@/components/HappyClients";
import Gallery from "./about/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      {/* <Montieze /> */}
      <Gallery />
      <Services />
      <Stats />
      <HappyClients />
      <OurClients />
    </>
  );
}
