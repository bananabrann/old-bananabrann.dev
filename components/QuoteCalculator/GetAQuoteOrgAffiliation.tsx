import { ChangeEvent } from "react";
import { OrgAffiliationOptions } from "../../lib/interfaces/GettingStartedQuestionnaire.interface";

export default function GetAQuoteOrgAffiliation({
  handleOrgAffiliation,
  currentOrgAffiliationOptions,
}: {
  handleOrgAffiliation: (x: OrgAffiliationOptions) => void;
  currentOrgAffiliationOptions: OrgAffiliationOptions;
}) {
  return (
    <div className="my-6">
      <label className="font-bold text-gray-700">
        Organization Affiliation
      </label>
      <p className="leading-5 text-gray-500">{`Do any of these describe your organization? Checkmark if 'yes'.`}</p>

      <fieldset className="space-y-5">
        <legend className="sr-only">Organization affiliation</legend>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="org-affiliation-nonprofit"
              aria-describedby="org-affiliation-nonprofit"
              name="org-affiliation-nonprofit"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: OrgAffiliationOptions = {
                  ...currentOrgAffiliationOptions,
                  isRegisteredNonProfit: e.currentTarget.checked,
                };
                handleOrgAffiliation(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="org-affiliation-nonprofit"
              className="font-medium text-gray-700"
            >
              Registered non-profit
            </label>
            <p id="org-affiliation-nonprofit" className="text-gray-500">
              {`Organization is a registered non-profit, such as 501(c)(3).`}
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="org-affiliation-gov"
              aria-describedby="org-affiliation-gov"
              name="org-affiliation-gov"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: OrgAffiliationOptions = {
                  ...currentOrgAffiliationOptions,
                  isGovernment: e.currentTarget.checked,
                };
                handleOrgAffiliation(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="org-affiliation-gov"
              className="font-medium text-gray-700"
            >
              Government
            </label>
            <p id="org-affiliation-gov" className="text-gray-500">
              Work is in support of state or federal government. Sub-contracting
              included.
            </p>
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="org-affiliation-tax-docs"
              aria-describedby="org-affiliation-tax-docs"
              name="org-affiliation-tax-docs"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: OrgAffiliationOptions = {
                  ...currentOrgAffiliationOptions,
                  isProvidingTaxDocumentation: e.currentTarget.checked,
                };
                handleOrgAffiliation(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="org-affiliation-tax-docs"
              className="font-medium text-gray-700"
            >
              Organization is to provide tax documentation
            </label>
            <p id="org-affiliation-tax-docs" className="text-gray-500">
              Includes 1099-E, 1098, or other tax documentation for prime and
              sub contractors. Your HR or Accounts Payable would know this info.
            </p>
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="org-affiliation-508"
              aria-describedby="org-affiliation-508"
              name="org-affiliation-508"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: OrgAffiliationOptions = {
                  ...currentOrgAffiliationOptions,
                  is508Required: e.currentTarget.checked,
                };
                handleOrgAffiliation(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="org-affiliation-508"
              className="font-medium text-gray-700"
            >
              508 compliance required
            </label>
            <p id="org-affiliation-508" className="text-gray-500">
              Must meet requirements for{" "}
              <a
                href="https://www.section508.gov/develop/software-websites/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-500 transition"
              >
                section 508.
              </a>
            </p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
