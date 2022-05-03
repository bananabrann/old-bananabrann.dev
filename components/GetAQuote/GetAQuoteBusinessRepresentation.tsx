export default function GetAQuoteBusinessRepresentation({
  handleIsAnOrgRadioClick,
  isChecked
}: {
  handleIsAnOrgRadioClick: (b: boolean) => void;
  isChecked: boolean;
}) {
  return (
    <div className="my-4">
      <label className="font-bold text-gray-700">Business Representation</label>
      <p className="leading-5 text-gray-500">{`Are you representing or acting on behalf of an organization?`}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Business Representation</legend>
        <div className="space-y-4">
          <div key="is-organization-yes" className="flex items-center">
            <input
              id={"is-organization-yes"}
              name="business-affiliation"
              type="radio"
              checked={isChecked}
              onChange={() => handleIsAnOrgRadioClick(true)}
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
            />
            <label
              htmlFor={"is-organization-yes"}
              className="ml-3 block font-medium text-gray-700"
            >
              Yes
            </label>
          </div>
          <div key="is-organization-no" className="flex items-center">
            <input
              id={"is-organization-no"}
              name="business-affiliation"
              type="radio"
              checked={!isChecked}
              onChange={() => handleIsAnOrgRadioClick(false)}
              className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
            />
            <label
              htmlFor={"is-organization-no"}
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
