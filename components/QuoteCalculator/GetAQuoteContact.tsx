import React from "react";

export default function GetAQuoteContact({
  handleMainContact,
}: {
  handleMainContact: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <label htmlFor="email" className="block font-bold text-gray-700">
        Main Contact
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="my-1 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="bob@initech.com, bolton#1234"
        onChange={(e: React.FormEvent<HTMLInputElement>) => handleMainContact(e)} // prettier-ignore
      />
      <p className="text-sm text-gray-400">{`Email, Discord, or any other preferred method of communication.`}</p>
    </div>
  );
}
