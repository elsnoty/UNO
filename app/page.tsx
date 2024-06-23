import Company from "@/Components/Company/Company";
import Hero from "@/Components/Hero/Hero";
import NavBar from "@/Components/navBar/NavBar";
import OurService from "@/Components/OurServices/OurService";
import Pricing from "@/Components/Pricing/Pricing";

export default function Home() {
  return (
    <div >
      <NavBar />
      <Hero />
      <OurService />
      <Company />
      <Pricing />
    </div>
  );
}
