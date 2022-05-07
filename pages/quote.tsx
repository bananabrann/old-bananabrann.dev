import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import BananamanEngineerPng from "../res/png/bananaman-engineer.png";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import React, { useEffect, useState } from "react";
import GettingStartedQuestionnaire, {
  EstimateNotice,
  EstimateNoticeType,
  ExistingSiteWorkOptions,
  OrgAffiliationOptions,
  QuoteEstimate,
  WorkType,
} from "../lib/interfaces/GettingStartedQuestionnaire.interface";
import ContentBlockOutline from "../components/ContentBlockOutline/ContentBlockOutline";
import GetAQuoteCountrySelect from "../components/GetAQuote/GetAQuoteCountrySelect";
import GetAQuoteCountrySelectItem from "../lib/interfaces/GetAQuoteCountrySelectItem.interface";
import GetAQuoteName from "../components/GetAQuote/GetAQuoteName";
import GetAQuoteContact from "../components/GetAQuote/GetAQuoteContact";
import GetAQuoteBusinessRepresentation from "../components/GetAQuote/GetAQuoteBusinessRepresentation";
import GetAQuoteOrgAffiliation from "../components/GetAQuote/GetAQuoteOrgAffiliation";
import GetAQuoteBusinessName from "../components/GetAQuote/GetAQuoteBusinessName";
import GetAQuoteBudget from "../components/GetAQuote/GetAQuoteBudget";
import GetAQuoteContractRequired from "../components/GetAQuote/GetAQuoteContractRequired";
import GetAQuoteWorkType from "../components/GetAQuote/GetAQuoteWorkType";
import GetAQuoteExistingSiteUrl from "../components/GetAQuote/GetAQuoteExistingSiteUrl";
import QuoteCalculatorBranding from "../components/GetAQuote/QuoteCalculatorBranding";
import QuoteCalculatorExistingSiteWorkItems from "../components/GetAQuote/QuoteCalculatorExistingSiteWorkItems";
import {
  CashIcon,
  ExclamationCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-yellow-500 my-2 text-sm font-bold flex items-center gap-2">
      <ExclamationCircleIcon className="basis-8 flex-none" />
      {children}
    </div>
  );
}

function NotAble({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-red-500 my-2 text-sm font-bold flex items-center gap-2">
      <ShieldExclamationIcon className="basis-8 flex-none" />
      {children}
    </div>
  );
}

function GoodThing({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-green-600 my-2 text-sm font-bold flex items-center gap-2">
      <CashIcon className="basis-8 flex-none" />
      {children}
    </div>
  );
}

export default function GetStarted() {
  const [estimate, setEstimate] = useState<QuoteEstimate>();
  const [estimateNotices, setEstimateNotices] = useState<EstimateNotice[]>([]);
  const [isAnOrganization, setIsAnOrganization] = useState<boolean>(false);
  const [contractRequired, setContractRequired] = useState<boolean>(false);
  const [isBrandingExisting, setIsBrandingExisting] = useState<boolean>(true);
  const [questionnaireForm, setQuestionnaireForm] =
    useState<GettingStartedQuestionnaire>({} as GettingStartedQuestionnaire);

  // Not implemented, but API works.
  /*
  function submitQuestionnaire() {
    fetch("/api/questionnaires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionnaireForm),
    });
  }
  */

  /**
   * Manage the estimate numbers provided by the quote calculator.
   *
   * Estimates are provided by adding to the base number and then adjusting for
   * variance depending on the input from the input.
   */
  function calculateEstimate() {
    let variance: number = 0.1;
    let newEstimate: QuoteEstimate;
    let small: number = NaN;
    let large: number = NaN;
    let enterprise: number = NaN;

    if (questionnaireForm.workType === WorkType.WebNew) {
      small = 40;
      large = 140;
      enterprise = 480;
      variance += 0.05;

      if (!isBrandingExisting) variance += 1.0;
    } else if (questionnaireForm.workType === WorkType.WebExisting) {
      if (contractRequired) variance += 0.5;
      small = 10;
      large = 40;
      enterprise = 40;
      variance += 0.25;

      if (questionnaireForm.existingSiteWork?.bugfix) {
        variance += 2;
        small -= 2;
        large -= 25;
        enterprise -= 25;
      }

      if (questionnaireForm.existingSiteWork?.seo) {
        small += 8;
        large += 16;
        enterprise += 40;
      }

      if (questionnaireForm.existingSiteWork?.newFeature) {
        variance += 0.5;
        small += 20;
        large += 40;
        enterprise += 160;
      }
    }

    if (isAnOrganization) {
      small += 60;
      large += 120;
      variance += 0.25;

      if (questionnaireForm.orgAffiliation?.is508Required) {
        variance += 0.1;
      }
    }

    if (!isAnOrganization) enterprise = NaN;

    newEstimate = {
      smallLow: small,
      smallHigh: Math.ceil(small + small * variance),
      largeLow: large,
      largeHigh: Math.ceil(large + large * variance),
      enterpriseLow: Math.floor(enterprise + (enterprise * variance) / (5 / 6)),
      enterpriseHigh: Math.ceil(enterprise + enterprise * (variance * 2)),
    };

    setEstimate(newEstimate);
  }

  /**
   * Manages the notices provided from info in the form.
   */
  function calculateNotices() {
    // Reset array of notices.
    setEstimateNotices([]);
    let newNotices: EstimateNotice[] = [];

    if (
      questionnaireForm.orgAffiliation?.isGovernment &&
      isAnOrganization &&
      questionnaireForm.country?.toLowerCase() !== "united states"
    ) {
      newNotices.push({
        type: EstimateNoticeType.NotAble,
        text: "I cannot work for non-U.S. government entities.",
      });
    }

    // If branding work is required.
    // TODO - Check that isBrandingExisting is as expected. The values may be
    // inverted.
    if (!isBrandingExisting) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "Not having branding adds considerable variability to actual hours.",
      });
    }

    if (questionnaireForm.workType === WorkType.WebExisting) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "Actual hours will greatly depend on existing website.",
      });
    }

    // If the country is not U.S. or Canada, OR is an organization and not the
    // U.S.
    if (
      // If is government and not U.S. or Canada, the NotAble badge for no gov
      // work takes priority.
      !questionnaireForm.orgAffiliation?.isGovernment &&
      (!(
        questionnaireForm.country === "United States" ||
        questionnaireForm.country === "Canada"
      ) ||
        (isAnOrganization && questionnaireForm.country !== "United States"))
    ) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "There may be restrictions on what services I can provide.",
      });
    }

    // Discount for non-profits.
    if (questionnaireForm.orgAffiliation?.isRegisteredNonProfit) {
      newNotices.push({
        type: EstimateNoticeType.GoodThing,
        text: "You qualify for an hourly discount.",
      });
    }

    setEstimateNotices(newNotices);
  }

  useEffect(() => {
    calculateEstimate();
    calculateNotices();
  }, [questionnaireForm, isAnOrganization, isBrandingExisting]);

  useEffect(() => {
    // On the first load, set the work type to "WebNew" so that the branding
    // section displays.
    setQuestionnaireForm({ ...questionnaireForm, workType: WorkType.WebNew });
  }, []);

  function handleCountrySelect(c: GetAQuoteCountrySelectItem): void {
    setQuestionnaireForm({ ...questionnaireForm, country: c.name });
  }

  function handleName(event: React.FormEvent<HTMLInputElement>) {
    setQuestionnaireForm({
      ...questionnaireForm,
      name: event.currentTarget.value,
    });
  }

  function handleMainContact(event: React.FormEvent<HTMLInputElement>) {
    setQuestionnaireForm({
      ...questionnaireForm,
      mainContact: event.currentTarget.value,
    });
  }

  function handleBusinessName(event: React.FormEvent<HTMLInputElement>) {
    setQuestionnaireForm({
      ...questionnaireForm,
      businessName: event.currentTarget.value,
    });
  }

  function handleIsAnOrgRadioClick(v: boolean) {
    // Reset org affiliation.
    setQuestionnaireForm({
      ...questionnaireForm,
      orgAffiliation: {
        is508Required: null,
        isGovernment: null,
        isProvidingTaxDocumentation: null,
        isRegisteredNonProfit: null,
      },
    });

    setIsAnOrganization(v);
  }

  function handleContractRequired(x: boolean) {
    setContractRequired(x);
    setQuestionnaireForm({ ...questionnaireForm, contractRequired: x });
  }

  function handleOrgAffiliation(x: OrgAffiliationOptions) {
    setQuestionnaireForm({ ...questionnaireForm, orgAffiliation: { ...x } });
  }

  function handleBudget(event: React.FormEvent<HTMLInputElement>) {
    setQuestionnaireForm({
      ...questionnaireForm,
      budget: event.currentTarget.value,
    });
  }

  function handleWorkType(w: WorkType) {
    setQuestionnaireForm({ ...questionnaireForm, workType: w });
  }

  function handleExistingSiteUrl(event: React.FormEvent<HTMLInputElement>) {
    setQuestionnaireForm({
      ...questionnaireForm,
      existingSiteUrl: event.currentTarget.value,
    });
  }

  function handleBrandingRequired(b: boolean) {
    setIsBrandingExisting(b);
    setQuestionnaireForm({ ...questionnaireForm, isBrandingExisting: b });
  }

  function handleExistingSiteWork(x: ExistingSiteWorkOptions) {
    setQuestionnaireForm({ ...questionnaireForm, existingSiteWork: x });
  }

  return (
    <Layout home={false}>
      <Navbar />

      <ContentBlock>
        <div className="flex flex-col mb-10 sm:flex-row">
          <div className="max-w-[200px] m-auto sm:m-4">
            <Image
              src={BananamanEngineerPng}
              alt=""
              quality={25}
              priority={true}
            />
          </div>

          <div>
            <h2>Quote Calculator</h2>
            <p>{`Get a rough idea of how many hours your project may take to complete.`}</p>
            <br />
            <p>{`Note: All information on this web page neither represent the minimum nor the maximum number of hours your project may require. You should always consult me for an actual quote when planning for your project.`}</p>
          </div>
        </div>

        <section className="flex flex-col-reverse md:flex-row">
          <section className="md:max-w-[210px] mb-12">
            {estimateNotices.length > 0 && (
              <section className="top-0 mb-7">
                {estimateNotices.map((notice) => {
                  if (notice.type === EstimateNoticeType.NotAble) {
                    return <NotAble><p>{notice.text}</p></NotAble> // prettier-ignore
                  }
                  if (notice.type === EstimateNoticeType.Warning) {
                    return <Warning><p>{notice.text}</p></Warning> // prettier-ignore
                  }
                  if (notice.type === EstimateNoticeType.GoodThing) {
                    return <GoodThing><p>{notice.text}</p></GoodThing> // prettier-ignore
                  }
                })}
              </section>
            )}

            <section className="flex flex-col gap-5 mt-4">
              <h3 className="text-center">Hours</h3>
              <div>
                <h4>Small project</h4>
                <p className="text-sm">
                  {`1 to 6 page websites, typically detached from the business's work flow.`}
                </p>
                <p className="text-xl my-2">
                  {estimate?.smallLow} to {estimate?.smallHigh} hours
                </p>
              </div>

              <div>
                <h4>Large project</h4>
                <p className="text-sm">
                  {`Websites that are large, or whose business has considerable operational dependency for the website.`}
                </p>
                <p className="text-xl my-2">
                  {estimate?.largeLow} to {estimate?.largeHigh} hours
                </p>
              </div>

              <div>
                <h4>Enterprise project</h4>
                <p className="text-sm">
                  {`Complex, highly scalable and globally available web apps.`}
                </p>
                <p className="text-xl my-2">
                  {estimate?.enterpriseLow} to {estimate?.enterpriseHigh} hours
                </p>
              </div>
            </section>
            <p className="text-sm mt-5 text-gray-400">{`These numbers neither represent the minimum nor the maximum  your project may require. You should always consult me for an actual quote when planning your budget.`}</p>
          </section>

          <div className="min-h-full w-1 bg-gray-200 mx-8" />

          <section>
            <div className="flex flex-col sm:flex-row sm:gap-6 mb-4">
              <div className="my-3 w-full">
                <GetAQuoteCountrySelect
                  handleCountrySelect={handleCountrySelect}
                  subheaderText={
                    isAnOrganization
                      ? "Where is your organization headquartered?"
                      : "What country do you live in?"
                  }
                />
              </div>
            </div>

            <GetAQuoteWorkType handleWorkType={handleWorkType} />
            {questionnaireForm.workType === WorkType.WebExisting && (
              <QuoteCalculatorExistingSiteWorkItems
                handleExistingSiteWork={handleExistingSiteWork}
                currentExistingSiteWorkOptions={
                  questionnaireForm.existingSiteWork!
                }
              />
            )}

            {questionnaireForm.workType === WorkType.WebNew && (
              <QuoteCalculatorBranding
                isChecked={isBrandingExisting}
                handleBranding={handleBrandingRequired}
              />
            )}

            <div className="flex">
              <GetAQuoteBusinessRepresentation
                handleIsAnOrgRadioClick={handleIsAnOrgRadioClick}
                isChecked={isAnOrganization}
              />
            </div>

            {isAnOrganization && (
              <div>
                <GetAQuoteOrgAffiliation
                  currentOrgAffiliationOptions={
                    questionnaireForm.orgAffiliation
                  }
                  handleOrgAffiliation={handleOrgAffiliation}
                />
              </div>
            )}

            <GetAQuoteContractRequired
              handleContractRequired={handleContractRequired}
              isChecked={contractRequired}
            />
          </section>
        </section>
      </ContentBlock>

      <Footer />
    </Layout>
  );
}
