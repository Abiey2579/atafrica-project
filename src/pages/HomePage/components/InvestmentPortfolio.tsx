import { useState } from "react";
import { Button, RangeSlider } from "flowbite-react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { StockData } from "../../../assets/data";

interface StockDataTypes {
  "Nigerian Stocks": number;
  "Foriegn Stocks": number;
  "Tech Stocks": number;
  "Emerging Stocks": number;
  "Nigerian Bonds": number;
  "Foriegn Bonds": number;
  Commodities: number;
  "Real Estate": number;
  "T-Bills": number;
  Alternative: number;
}

const bgc: Record<string, string> = {
  "Nigerian Stocks": "bg-transparent",
  "Foriegn Stocks": "bg-blue-100",
  "Tech Stocks": "bg-blue-300",
  "Emerging Stocks": "bg-cyan-300",
  "Nigerian Bonds": "bg-cyan-100",
  "Foriegn Bonds": "bg-yellow-800",
  Commodities: "bg-yellow-600",
  "Real Estate": "bg-yellow-300",
};

const Stocks = (props: { stockData: StockDataTypes }) => {
  const { stockData } = props;

  const PositiveStocks = Object.entries(stockData).filter(
    (entry) => entry[1] !== 0
  );
  const NegativeStocks = Object.entries(stockData).filter(
    (entry) => entry[1] === 0
  );

  return (
    <div>
      {PositiveStocks.map((stock: [string, number]) => {
        return (
          <div
            key={stock[0]}
            className={`grid grid-cols-3 lg:gap-0 md:gap-0 gap-5 w-full`}
          >
            <p className="font-medium text-white lg:col-span-1 md:col-span-1 col-span-3">
              {stock[0]}{" "}
              <QuestionMarkCircleIcon className="w-5 bg- inline-block cursor-pointer" />
            </p>
            <div
              style={{ width: `${stock[1] * 2}%`, minWidth: "50px" }}
              className={` border text-white lg:col-span-2 md:col-span-2 col-span-3 ${
                bgc[stock[0]]
              } flex items-stretch`}
            >
              <p className="p-3 ">{stock[1] + "%"}</p>
              <div className={`w-full ${bgc[stock[0]]}`} />
            </div>
          </div>
        );
      })}
      <div className="grid grid-cols-3 gap-3 items-center mt-10 text-sm">
        {NegativeStocks.map((stock: [string, number]) => (
          <div key={stock[0]} className="flex justify-between text-slate-300">
            <p>{stock[0]}</p>
            <p>{stock[1] + "%"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const InvestmentPortfolio = () => {
  const [riskTolerance, setRiskTolerance] = useState<number>(0);

  const handleRiskTolerance = (e: string) => {
    let index = Math.floor(parseInt(e) / 10);
    setRiskTolerance(index);
  };

  return (
    <div className="flex flex-col justify-center gap-5 items-center my-20 mx-auto  lg:w-3/4 w-full px-5">
      <div className="space-y-3 w-1/2 shadow-2xl rounded-lg bg-white p-5 border">
        <div className="flex justify-between">
          <h1 className="font-semibold text-blue-950">
            Risk score: {riskTolerance}
          </h1>
          <p className="text-sm">Example portfolio</p>
        </div>
        <RangeSlider
          onChange={(e) => handleRiskTolerance(e.target.value)}
          id="default-range"
        />
      </div>
      <div className="bg-cyan-800 p-10 relative rounded-xl w-full">
        <div className="">
          <Stocks stockData={StockData[riskTolerance]} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
