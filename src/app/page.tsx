
import Hero from './sections/hero'
import PortfolioSection from "./sections/portfolioSection";
import {Metadata} from "next";
export const metadata:Metadata = {
    title: "Daniel Kadlec",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje."
};


export default function Home() {

  return (
      <>
          <Hero/>
          <PortfolioSection/>
      </>
  );
}
