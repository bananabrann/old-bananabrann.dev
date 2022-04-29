/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, useEffect, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import CountrySelectComboBoxItem from "../../lib/interfaces/CountrySelectComboBox.interface";

// prettier-ignore
const countries = [
  {
    id: 1,
    name: "United States",
    imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-usa.png",
  },
// {
  //   id: 3,
  //   name: "Australia",
  //   imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-australia.png",
  // },
  {
    id: 4,
    name: "Canada",
    imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-canada.png",
  },
  {
    id: 5,
    name: "Mexico",
    imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-mexico.png",
  },
  // {
  //   id: 6,
  //   name: "Ireland",
  //   imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-ireland.png",
  // },
  {
    id: 2,
    name: "United Kingdom",
    imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/flag-sm-uk.png",
  },
  {
    id: 7,
    name: "Other",
    imageUrl: "https://bananabrann.blob.core.windows.net/countryflags/earth.png",
  }
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CountrySelectComboBox({
  subheaderText,
  handleCountrySelect,
}: {
  subheaderText: string;
  handleCountrySelect: (c: CountrySelectComboBoxItem) => void;
}) {
  const [query, setQuery] = useState<string>("");
  // NOTE - ComboBox.Input displayValue expects a value to be initialized.
  const [selectedCountry, setSelectedCountry] =
    useState<CountrySelectComboBoxItem>({} as CountrySelectComboBoxItem);
  const [selectedCountryOtherValue, setSelectedCountryOtherValue] =
    useState<string>();

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) => {
          return country.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    let response = selectedCountry;

    /**
     * If an 'other' country value is provided, and the selectedCountry is
     * 'other', send that instead.
     */
    if (
      selectedCountryOtherValue &&
      selectedCountry.name.toLocaleLowerCase() === "other"
    ) {
      response = {
        name: selectedCountryOtherValue,
        id: 0,
        url: "",
      };
    }

    handleCountrySelect(response);
  }, [selectedCountry, selectedCountryOtherValue]);

  return (
    <Fragment>
      <Combobox as="div" value={selectedCountry} onChange={setSelectedCountry}>
        <Combobox.Label className="block font-bold text-gray-700">
          Location
        </Combobox.Label>
        <p>{subheaderText}</p>
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full rounded-md border border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={() => selectedCountry.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredCountries.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCountries.map((country) => (
                <Combobox.Option
                  key={country.id}
                  value={country}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                      active ? "bg-pink-600 text-white" : "text-gray-900"
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <div className="flex items-center">
                        <img
                          src={country.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-sm"
                        />
                        {/* prettier-ignore */}
                        <span className={classNames("ml-3 truncate", selected && "font-bold")}> 
                          {country.name} 
                        </span>
                      </div>

                      {selected && (
                        <span
                          className={classNames(
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                            active ? "text-white" : "text-pink-600"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
      {selectedCountry.name?.toLocaleLowerCase() === "other" && (
        <div className="w-full">
          <input
            type="text"
            name="country-other"
            id="country-other"
            className="my-1 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Brazil, New Zealand, etc."
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setSelectedCountryOtherValue(e.currentTarget.value)
            }
          />
        </div>
      )}
    </Fragment>
  );
}
