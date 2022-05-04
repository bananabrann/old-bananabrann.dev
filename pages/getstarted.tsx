import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import BananamanEngineerPng from "../res/png/bananaman-engineer.png";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import React, { useEffect, useState } from "react";
import GettingStartedQuestionnaire, {
  OrgAffiliationOptions,
  WorkType,
} from "../lib/interfaces/GettingStartedQuestionnaire.interface";
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

export default function GetStarted() {
  const [isAnOrganization, setIsAnOrganization] = useState<boolean>(false);
  const [contractRequired, setContractRequired] = useState<boolean>(false);
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
  }, [questionnaireForm]);

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

  return (
    <Layout home={false}>
      <Navbar />

      <ContentBlock>
        <div className="flex">
          <div>
            <h2>Request a Quote</h2>
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

        <section>
          <div className="flex justify-between gap-6 flex-col md:flex-row">
            <GetAQuoteName handleName={handleName} />
            <GetAQuoteContact handleMainContact={handleMainContact} />
          </div>

          <div className="flex">
            <GetAQuoteBusinessRepresentation
              handleIsAnOrgRadioClick={handleIsAnOrgRadioClick}
              isChecked={isAnOrganization}
            />
          </div>

          {isAnOrganization && (
            <div>
              <GetAQuoteOrgAffiliation
                currentOrgAffiliationOptions={questionnaireForm.orgAffiliation}
                handleOrgAffiliation={handleOrgAffiliation}
              />

              <GetAQuoteBusinessName handleBusinessName={handleBusinessName} />
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

            <GetAQuoteBudget handleBudget={handleBudget} />
          </div>

          <GetAQuoteContractRequired
            handleContractRequired={handleContractRequired}
            isChecked={contractRequired}
          />
        </section>
      </ContentBlock>

      <ContentBlock>
        <GetAQuoteWorkType handleWorkType={handleWorkType} />
      </ContentBlock>

      <Footer />
    </Layout>
  );
}
