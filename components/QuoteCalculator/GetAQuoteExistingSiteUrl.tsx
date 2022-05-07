import React from "react";

export default function GetAQuoteExistingSiteUrl({
  handleExistingSiteUrl,
}: {
  handleExistingSiteUrl: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full my-4">
      <div className="flex justify-between w-full">
        <label htmlFor="existing-url" className="block font-bold text-gray-700">
          Site URL
        </label>
      </div>
      <p className="leading-5 text-gray-500">{`What's the URL of your site?`}</p>
      <div className="mt-1">
        <input
          type="text"
          name="existing-url"
          id="existing-url"
          className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="https://bananabrann.com"
          aria-describedby="existing-url"
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleExistingSiteUrl(e)} // prettier-ignore
        />
      </div>
    </div>
  );
}
