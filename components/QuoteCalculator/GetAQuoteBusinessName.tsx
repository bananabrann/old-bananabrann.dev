import React from "react";

export default function GetAQuoteBusinessName({
  handleBusinessName,
}: {
  handleBusinessName: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full my-6">
      <label htmlFor="business-name" className="block font-bold text-gray-700">
        Business Name
      </label>
      <input
        type="text"
        name="business-name"
        id="business-name"
        className="my-1 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="IniTech, Inc."
        onChange={(e: React.FormEvent<HTMLInputElement>) => handleBusinessName(e)} // prettier-ignore
      />
    </div>
  );
}
