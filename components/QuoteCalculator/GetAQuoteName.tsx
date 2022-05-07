import React from "react";

export default function GetAQuoteName({
  handleName,
}: {
  handleName: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <label htmlFor="name" className="block font-bold text-gray-700">
          Name
        </label>
        <span className="text-sm text-gray-500" id="email-optional">
          Optional
        </span>
      </div>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Peter Gibbons"
          aria-describedby="name-optional"
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleName(e)} // prettier-ignore
        />
      </div>
    </div>
  );
}
