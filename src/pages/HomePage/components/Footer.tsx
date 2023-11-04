import Twitter from "../../../assets/images/footer-twitter.svg";
import Facebook from "../../../assets/images/footer-facebook-f.svg";
import Instagram from "../../../assets/images/footer-instagram.svg";
import Discord from "../../../assets/images/footer-discord.svg";

import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ContactFooter = () => {
  return (
    <footer className="lg:px-24 md:px-10 px-3 bg-cyan-800 py-20 flex lg:flex-row md:flex-col flex-col md:gap-10 gap-8 justify-between">
      <div>
        <h1
          className="font-league-spartan text-4xl text-white font-semibold mb-10"
          style={{ letterSpacing: "-2px" }}
        >
          RoboAdvisor
        </h1>
        <p className="max-w-[280px] mb-8 text-white">
          Even with the ups and downs of the market, our expert-built,
          globally-diversified Automated Investing Account makes it easy to
          start building long-term wealth
        </p>
        <div className="flex gap-5">
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-14 h-14 rounded-full grid place-items-center"
          >
            <img src={Twitter} alt="Twitter" className="w-6" />
          </div>
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-14 h-14 rounded-full grid place-items-center"
          >
            <img src={Facebook} alt="Facebook" className="h-6" />
          </div>
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-14 h-14 rounded-full grid place-items-center"
          >
            <img src={Instagram} alt="Instagram" className="w-6" />
          </div>
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-14 h-14 rounded-full bg-talento-blue grid place-items-center"
          >
            <img src={Discord} alt="Discord" className="w-6" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-2xl font-bold mb-10 font-league-spartan">
          Sections
        </h3>
        <div className="flex mb-3">
          <ArrowRightIcon className="mr-5 w-6 text-white" />
          <a href={"/"} className="text-white text-base">
            Cash
          </a>
        </div>
        <div className="flex mb-3">
          <ArrowRightIcon className="mr-5 w-6 text-white" />
          <a href={"/"} className="text-white text-base">
            Bonds
          </a>
        </div>
        <div className="flex mb-3">
          <ArrowRightIcon className="mr-5 w-6 text-white" />
          <a href={"/"} className="text-white text-base">
            Automated Investing
          </a>
        </div>
        <div className="flex mb-3">
          <ArrowRightIcon className="mr-5 w-6 text-white" />
          <a href={"/"} className="text-white text-base">
            Stocks
          </a>
        </div>
        <div className="flex mb-3">
          <ArrowRightIcon className="mr-5 w-6 text-white" />
          <a href={"/"} className="text-white text-base">
            Learn
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-white text-2xl font-bold mb-10 font-league-spartan">
          Have a question?
        </h3>
        <div className="flex mb-8">
          <EnvelopeIcon className="mr-5 w-6 text-white" />
          <a
            href="mailto:support@designgrid.com.ng"
            className="text-white text-base"
          >
            support@roboadvisor.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
