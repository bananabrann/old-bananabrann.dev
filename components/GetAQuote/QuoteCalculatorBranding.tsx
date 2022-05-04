export default function QuoteCalculatorBranding({
  handleBranding,
  isChecked,
}: {
  handleBranding: (b: boolean) => void;
  isChecked: boolean;
}) {
  return (
    <div className="my-4">
      <label className="font-bold text-gray-700">Existing Branding</label>
      <p className="leading-5 text-gray-500 mb-2">{`Do you or your company have existing branding materials? (Colors, logos, etc.)`}</p>
      <legend className="sr-only">Branding Requirement</legend>
      <fieldset>
        <legend className="sr-only">Branding Required</legend>

        <div className="space-y-2">
          <div
            key="branding-required-yes"
            className="relative flex items-start"
          >
            <div className="flex items-center h-5">
              <input
                id="branding-required-yes"
                aria-describedby={`branding-required-yes-description`}
                name="plan"
                type="radio"
                checked={isChecked}
                onChange={() => handleBranding(true)}
                className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="branding-required-yes"
                className="font-medium text-gray-700"
              >
                Yes
              </label>
              {/*
              <p
                id={`branding-required-yes-description`}
                className="text-gray-500 text-sm"
              >
                {`Enter into a service agreement. Details are negotiated between parties.`}
              </p>
              */}
            </div>
          </div>

          <div
            key="branding-required-no"
            className="relative flex items-start"
          >
            <div className="flex items-center h-5">
              <input
                id="branding-required-no"
                aria-describedby={`branding-required-no-description`}
                name="plan"
                type="radio"
                checked={!isChecked}
                onChange={() => handleBranding(false)}
                className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="branding-required-no"
                className="font-medium text-gray-700"
              >
                No
              </label>
              {/*
              <p
                id={`branding-required-no-description`}
                className="text-gray-500 text-sm"
              >
                {`"At will" agreement. Either party can cancel at any time for any reason. Most common.`}
              </p>
              */}
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
