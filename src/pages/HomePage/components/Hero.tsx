import { StarIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <>
      <div className="lg:px-20 md:px-10 px-3 bg-cyan-800 h-[80vh] flex flex-col items-center  justify-center">
        <div className="flex flex-col items-center justify-center lg:w-2/3 w-full space-y-5">
          <p className="uppercase text-cyan-500 font-inter font-semibold tracking-widest text-sm">
            INVEST LIKE A PRO
          </p>
          <h1 className="text-6xl text-white text-center font-black font-league-spartan">
            Smarter investing, brilliantly personalized
          </h1>
          <p className="text-white text-center lg:w-[70%] w-full">
            Even with the ups and downs of the market, our expert-built,
            globally-diversified Automated Investing Account makes it easy to
            start building long-term wealth
          </p>
          <div className="flex gap-5">
            <Button color="light">Start Investing</Button>
          </div>
        </div>
      </div>
      <div className="lg:px-20 md:px-10 px-3 bg-slate-50 py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-20 gap-20">
        <div className="text-center space-y-3">
          <h3 className="text-4xl text-cyan-800 font-bold">690K+</h3>
          <p className="text-black font-semibold">Trusted clients</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-4xl text-cyan-800 font-bold">$43B+</h3>
          <p className="text-black font-semibold">In assets managed</p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-4xl text-cyan-800 font-bold flex items-center justify-center gap-2">
            4.8 <StarIcon className="w-10 inline-block" />
          </h3>
          <p className="text-black font-semibold">
            Apple App Store<sup>2</sup>
          </p>
        </div>
        <div className="text-center space-y-3">
          <h3 className="text-4xl text-cyan-800 font-bold flex items-center justify-center gap-2">
            4.9 <StarIcon className="w-10 inline-block" />
          </h3>
          <p className="text-black font-semibold">
            Google Play Store<sup>2</sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
