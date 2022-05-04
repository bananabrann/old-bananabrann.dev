import { ChangeEvent } from "react";
import { ExistingSiteWorkOptions } from "../../lib/interfaces/GettingStartedQuestionnaire.interface";

export default function QuoteCalculatorExistingSiteWorkItems({
  handleExistingSiteWork,
  currentExistingSiteWorkOptions,
}: {
  handleExistingSiteWork: (x: ExistingSiteWorkOptions) => void;
  currentExistingSiteWorkOptions: ExistingSiteWorkOptions;
}) {
  return (
    <div className="my-6">
      <label className="font-bold text-gray-700">
        Work Items
      </label>
      <p className="leading-5 text-gray-500">{`Do any of these describe your organization? Checkmark if 'yes'.`}</p>

      <fieldset className="space-y-5">
        <legend className="sr-only">Existing site work items</legend>



        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="existing-site-items-seo"
              aria-describedby="existing-site-items-seo"
              name="existing-site-items-seo"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: ExistingSiteWorkOptions = {
                  ...currentExistingSiteWorkOptions,
                  seo: e.currentTarget.checked,
                };
                handleExistingSiteWork(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="existing-site-items-seo"
              className="font-medium text-gray-700"
            >
              Improve search results
            </label>
            <p id="existing-site-items-seo" className="text-gray-500">
              {`See what can be improved in SEO (search engine optimization).`}
            </p>
          </div>
        </div>


        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="existing-site-items-new-feature"
              aria-describedby="existing-site-items-new-feature"
              name="existing-site-items-new-feature"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: ExistingSiteWorkOptions = {
                  ...currentExistingSiteWorkOptions,
                  newFeature: e.currentTarget.checked,
                };
                handleExistingSiteWork(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="existing-site-items-new-feature"
              className="font-medium text-gray-700"
            >
              New feature
            </label>
            <p id="existing-site-items-new-feature" className="text-gray-500">
              {`Add something new to your site.`}
            </p>
          </div>
        </div>



        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="existing-site-items-bugfix"
              aria-describedby="existing-site-items-bugfix"
              name="existing-site-items-bugfix"
              type="checkbox"
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const returnOptions: ExistingSiteWorkOptions = {
                  ...currentExistingSiteWorkOptions,
                  bugfix: e.currentTarget.checked,
                };
                handleExistingSiteWork(returnOptions);
              }}
            />
          </div>
          <div className="ml-3 -mt-1">
            <label
              htmlFor="existing-site-items-bugfix"
              className="font-medium text-gray-700"
            >
              Modify or fix feature
            </label>
            <p id="existing-site-items-bugfix" className="text-gray-500">
              {`Modify an existing feature, or fix a bug.`}
            </p>
          </div>
        </div>
        
      </fieldset>
    </div>
  );
}
