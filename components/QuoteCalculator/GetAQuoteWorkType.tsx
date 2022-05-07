/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { WorkType } from "../../lib/interfaces/GettingStartedQuestionnaire.interface";

const optionsList = [
  {
    id: 1,
    title: "New website",
    description: "A new website or app from scratch. Includes complete overhauls of existing websites.",
    workType: WorkType.WebNew,
  },
  {
    id: 2,
    title: "Work on existing website",
    description: "Edits to my existing website, improve listing on Google searches, etc. ",
    workType: WorkType.WebExisting,
  },
  {
    id: 3,
    title: "Something else",
    description:
      "Discord/Slack bots, email on custom domains, etc. Anything else!",
    workType: WorkType.Other,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GetAQuoteWorkType({
  handleWorkType,
}: {
  handleWorkType: (w: WorkType) => void;
}) {
  const [selectedOptionsList, setSelectedOptionsList] = useState<WorkType>(
    optionsList[0].workType
  );

  useEffect(() => {
    handleWorkType(selectedOptionsList);
  }, [selectedOptionsList]);

  return (
    <RadioGroup
      value={selectedOptionsList}
      onChange={(e) => setSelectedOptionsList(e)}
    >
      <RadioGroup.Label className="text-base font-bold text-gray-900">
        Work Type
      </RadioGroup.Label>
      <p className="leading-5 text-gray-500 mb-2">{`What are you wanting to do?`}</p>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {optionsList.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={WorkType[mailingList.workType]}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "border-pink-500 ring-2 ring-pink-500" : "",
                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <React.Fragment>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block font-medium text-gray-900"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-pink-600"
                  )}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-pink-500" : "border-transparent",
                    "absolute -inset-px rounded-lg pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </React.Fragment>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
