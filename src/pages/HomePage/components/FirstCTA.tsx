import Dashboard from "../../../assets/images/FirstCTA.png";
import { Button } from "flowbite-react";
const FirstCTA = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 py-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-around items-center">
        <img
          src={Dashboard}
          alt="Dashboard"
          className="shadow-2xl border shadow-talento-gray bg-transparent rounded-[36px]"
        />
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-cyan-500 mb-4">
            Customizable Portforlio
          </h3>
          <h1 className="text-4xl font-montserrat font-semibold text-cyan-800 mb-4">
            You make it custom. We’ll do the rest.
          </h1>
          <p className="leading-loose">
            Choose from hundreds of funds in categories like clean energy, tech,
            and crypto and we’ll handle the trades and rebalance your portfolio
            for you. Or start with a portfolio designed around your values with
            our Socially Responsible portfolio.
          </p>

          <Button className="w-fit">Invest Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstCTA;
