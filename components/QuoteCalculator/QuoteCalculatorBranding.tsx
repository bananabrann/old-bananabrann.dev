export default function QuoteCalculatorBranding({
  handleBranding,
  isChecked,
}: {
  handleBranding: (b: boolean) => void;
  isChecked: boolean;
}) {
  return (
    <div className="my-4">
      <label className="font-bold text-gray-700">Branding</label>
      <p className="leading-5 text-gray-500">{`Do you or your organization have existing branding materials? (Logos, colors, etc.)`}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Branding Requirement</legend>
        <div className="space-y-4">
          <div key="branding-required-yes" className="flex items-center">
            <input
              id={"branding-required-yes"}
              name="branding-required"
              type="radio"
              checked={isChecked}
              onChange={() => handleBranding(true)}
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
            />
            <label
              htmlFor={"branding-required-yes"}
              className="ml-3 block font-medium text-gray-700"
            >
              Yes
            </label>
          </div>
          <div key="branding-required-no" className="flex items-center">
            <input
              id={"branding-required-no"}
              name="branding-required"
              type="radio"
              checked={!isChecked}
              onChange={() => handleBranding(false)}
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
            />
            <label
              htmlFor={"branding-required-no"}
              className="ml-3 block font-medium text-gray-700"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
