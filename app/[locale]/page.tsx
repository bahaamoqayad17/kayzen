import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Montieze from "@/components/Montieze";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import OurClients from "@/components/OurClients";
import HappyClients from "@/components/HappyClients";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Montieze />
      <Services />
      <Stats />
      <HappyClients />
      <OurClients />
    </>
  );
}
