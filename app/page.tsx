import Brands from "@/Components/Brands/Brands";
import Company from "@/Components/Company/Company";
import Hero from "@/Components/Hero/Hero";
import Latest from "@/Components/LatestNews/Latest";
import NavBar from "@/Components/navBar/NavBar";
import OurService from "@/Components/OurServices/OurService";
import Pricing from "@/Components/Pricing/Pricing";
import { InfiniteMovingCardsDemo } from "@/Components/TestMonlise/InfiniteMoving";
import Touch from "@/Components/Touch/Touch";

export default function Home() {
  return (
    <div >
      <NavBar />
      <Hero />
      <OurService />
      <Company />
      <Pricing />
      <InfiniteMovingCardsDemo />
      <Brands />
      <Latest />
      <Touch />
    </div>
  );
}
