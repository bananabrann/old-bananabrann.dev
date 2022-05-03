export enum WorkType {
  WebNew,
  WebExisting,
  Consultation,
  Other,
}

export interface OrgAffiliationOptions {
  isRegisteredNonProfit: boolean;
  isGovernment: boolean;
  isProvidingTaxDocumentation: boolean;
  is508Required: boolean;
}

export default interface GettingStartedQuestionnaire {
  id: string;
  mainContact: string;
  country: string;
  workType: WorkType;
  workDescription: string;
  contractRequired: boolean;
  orgAffiliation: OrgAffiliationOptions;
  isContractRequired: boolean;
  workAdditionalInfo?: string;
  businessName?: string;
  name?: string;
  budget?: string;
  orgName?: string;
}

export function isQuestionnaire(
  object: unknown
): object is GettingStartedQuestionnaire {
  return (
    Object.prototype.hasOwnProperty.call(object, "id") &&
    Object.prototype.hasOwnProperty.call(object, "mainContact") &&
    Object.prototype.hasOwnProperty.call(object, "workType") &&
    Object.prototype.hasOwnProperty.call(object, "workDescription") &&
    Object.prototype.hasOwnProperty.call(object, "country")
  );
}
