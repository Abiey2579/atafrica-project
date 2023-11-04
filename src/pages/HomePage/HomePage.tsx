import CallToAction from "./components/CTA";
import CopyrightFooter from "./components/Copyrights";
import FirstCTA from "./components/FirstCTA";
import ContactFooter from "./components/Footer";
import Hero from "./components/Hero";
import InvestmentPortfolio from "./components/InvestmentPortfolio";
import HomagePageNavbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div>
      <HomagePageNavbar />
      <Hero />
      <InvestmentPortfolio />
      <FirstCTA />
      <CallToAction />
      <ContactFooter />
      <CopyrightFooter />
    </div>
  );
};

export default HomePage;
