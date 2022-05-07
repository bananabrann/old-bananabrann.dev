export enum WorkType {
  WebNew = "WebNew",
  WebExisting = "WebExisting",
  Consultation = "Consultation",
  Other = "Other",
}

export enum EstimateNoticeType {
  Warning = "Warning",
  NotAble = "NotAble",
  GoodThing = "GoodThing"
}

export interface EstimateNotice {
  type: EstimateNoticeType;
  text: string;
}

export interface QuoteEstimate {
  smallLow: number;
  smallHigh: number;
  largeLow: number;
  largeHigh: number;
  enterpriseLow: number;
  enterpriseHigh: number;
}

export interface OrgAffiliationOptions {
  isRegisteredNonProfit: boolean | null;
  isGovernment: boolean | null;
  isProvidingTaxDocumentation: boolean | null;
  is508Required: boolean | null;
}

export interface ExistingSiteWorkOptions {
  seo: boolean;
  newFeature: boolean;
  bugfix: boolean;
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
  isBrandingExisting: boolean;
  existingSiteWork?: ExistingSiteWorkOptions;
  existingSiteUrl?: string;
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
