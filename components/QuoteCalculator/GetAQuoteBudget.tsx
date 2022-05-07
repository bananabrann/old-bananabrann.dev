import React from "react";

export default function GetAQuoteBudget({
  handleBudget,
}: {
  handleBudget: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="my-3 w-full">
      <div className="flex justify-between w-full">
        <label htmlFor="price" className="block font-bold text-gray-700">
          Budget
        </label>
        <span className="text-sm text-gray-500" id="email-optional">
          Optional
        </span>
      </div>

      <p className="text-gray-500">{`What's your budget?`}</p>

      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          aria-describedby="price-currency"
          onChange={(e) => handleBudget(e)}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
        </div>
      </div>

      <p className="leading-5 my-2 text-gray-500">{`I understand your budget ceiling may be private. If you choose to share this info with me, it will allow me to provide greatly more accurate expectations with your quote.`}</p>
    </div>
  );
}
