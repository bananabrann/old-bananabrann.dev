export default function GetAQuoteContractRequired({
  handleContractRequired,
  isChecked,
}: {
  handleContractRequired: (b: boolean) => void;
  isChecked: boolean;
}) {
  return (
    <div className="my-4">
      <label className="font-bold text-gray-700">Contract Requirement</label>
      <p className="leading-5 text-gray-500 mb-2">{`Would you like a service agreement / contract?`}</p>
      <legend className="sr-only">Contract Requirement</legend>
      <fieldset>
        <legend className="sr-only">Contract Required</legend>

        <div className="space-y-2">
          <div
            key="contract-requirement-yes"
            className="relative flex items-start"
          >
            <div className="flex items-center h-5">
              <input
                id="contract-requirement-yes"
                aria-describedby={`contract-requirement-yes-description`}
                name="plan"
                type="radio"
                checked={isChecked}
                onChange={() => handleContractRequired(true)}
                className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="contract-requirement-yes"
                className="font-medium text-gray-700"
              >
                Yes
              </label>
              <p
                id={`contract-requirement-yes-description`}
                className="text-gray-500 text-sm"
              >
                {`Enter into a service agreement. Details are negotiated between parties.`}
              </p>
            </div>
          </div>

          <div
            key="contract-requirement-no"
            className="relative flex items-start"
          >
            <div className="flex items-center h-5">
              <input
                id="contract-requirement-no"
                aria-describedby={`contract-requirement-no-description`}
                name="plan"
                type="radio"
                checked={!isChecked}
                onChange={() => handleContractRequired(false)}
                className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="contract-requirement-no"
                className="font-medium text-gray-700"
              >
                No
              </label>
              <p
                id={`contract-requirement-no-description`}
                className="text-gray-500 text-sm"
              >
                {`"At will" agreement. Either party can cancel at any time for any reason. Most common.`}
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
