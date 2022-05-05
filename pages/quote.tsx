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
  ExclamationCircleIcon,
  ShieldExclamationIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

// const defaultFormQuestionnaireForm: GettingStartedQuestionnaire = {
//   id: "",
//   mainContact: "",

// }

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

export default function GetStarted() {
  const [estimate, setEstimate] = useState<QuoteEstimate>();
  const [estimateNotices, setEstimateNotices] = useState<EstimateNotice[]>([]);
  const [isAnOrganization, setIsAnOrganization] = useState<boolean>(false);
  const [contractRequired, setContractRequired] = useState<boolean>(false);
  const [isBrandingRequired, setIsBrandingRequired] = useState<boolean>(true);
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

  useEffect(() => {
    console.log(questionnaireForm);

    let newNotices: EstimateNotice[] = [];

    // Reset array of notices.
    setEstimateNotices([]);

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

    if (!isBrandingRequired) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "Not having branding adds serious variability to actual hours.",
      });
    }

    if (questionnaireForm.workType === WorkType.WebExisting) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "Actual hours will greatly depend on existing website.",
      });
    }

    if (
      !isAnOrganization &&
      !(
        questionnaireForm.country === "United States" ||
        questionnaireForm.country === "Canada"
      )
    ) {
      newNotices.push({
        type: EstimateNoticeType.Warning,
        text: "There may be restrictions based on your location.",
      });
    }

    setEstimateNotices(newNotices);
  }, [questionnaireForm, isAnOrganization, isBrandingRequired]);

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
    setIsBrandingRequired(b);
    setQuestionnaireForm({ ...questionnaireForm, isBrandingRequired: b });
  }

  function handleExistingSiteWork(x: ExistingSiteWorkOptions) {
    setQuestionnaireForm({ ...questionnaireForm, existingSiteWork: x });
  }

  return (
    <Layout home={false}>
      <Navbar />

      <ContentBlock>
        <div className="flex">
          <div>
            <h2>Quote Calculator</h2>
            <p>{`Let's start looking at what what would be best for you. Don't fret these responses! This is your chance to share some information about you, and what you're looking for.`}</p>
            <p>{`If you are seeking consultation, do not fill this form out. Email me directly.`}</p>
            <p>{`Fun fact:  on average, this saves up to two hours of phone calls!`}</p>
          </div>

          <div className="max-w-sm">
            <Image
              src={BananamanEngineerPng}
              alt=""
              quality={25}
              priority={true}
            />
          </div>
        </div>

        <section className="flex flex-col md:flex-row">
          <div className="md:max-w-[210px] mb-12">
            {estimateNotices.map((notice) => {
              if (notice.type === EstimateNoticeType.NotAble) {
                return <NotAble><p>{notice.text}</p></NotAble> // prettier-ignore
              }
              if (notice.type === EstimateNoticeType.Warning) {
                return <Warning><p>{notice.text}</p></Warning> // prettier-ignore
              }
            })}

            <h3>Hours</h3>
            <h4>Small project</h4>
            <p className="text-sm">
              {`1 to 6 page websites, typically detached from the business's work flow.`}
            </p>
            <p>
              {estimate?.smallLow} - {estimate?.smallHigh}
            </p>

            <h4>Large project</h4>
            <p className="text-sm">
              {`Websites that are large, or whose business has considerable operational dependency for the website.`}
            </p>
            <p>
              {estimate?.largeLow} - {estimate?.largeHigh}
            </p>

            <h4>Enterprise project</h4>
            <p className="text-sm">
              {`Complex, highly scalable and globally available web apps.`}
            </p>
            <p>
              {estimate?.enterpriseLow} - {estimate?.enterpriseHigh}
            </p>

            <p className="text-sm mt-5 text-gray-400">{`These numbers neither represent the minimum nor the maximum  your project may require. You should always consult me for an actual quote when planning your budget.`}</p>
          </div>

          <div className="min-h-full w-1 bg-gray-200 mx-8" />

          <div>
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
                isChecked={isBrandingRequired}
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

            <div className="flex flex-col sm:flex-row sm:gap-6">
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

            <GetAQuoteContractRequired
              handleContractRequired={handleContractRequired}
              isChecked={contractRequired}
            />
          </div>
        </section>
      </ContentBlock>

      <Footer />
    </Layout>
  );
}
