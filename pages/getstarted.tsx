import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import BananamanEngineerPng from "../res/png/bananaman-engineer.png";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import React, { useEffect, useState } from "react";
import GettingStartedQuestionnaire, {
  WorkType,
} from "../lib/interfaces/GettingStartedQuestionnaire.interface";
import { getRandomSixDigitNumber } from "../lib/utils";
import Link from "next/link";
import CountrySelectComboBox from "../components/CountrySelectComboBox/CountrySelectComboBox";
import CountrySelectComboBoxItem from "../lib/interfaces/CountrySelectComboBox.interface";

// Dev only
// const devForm: GettingStartedQuestionnaire = {
//   id: getRandomSixDigitNumber().toString(),
//   mainContact: "hi@bananabrann.dev",
//   orgName: "MegaCorps, Inc.",
//   workType: WorkType.WebDev,
//   workDescription: "Description",
//   workAdditionalInfo: "yesss"
// }

export default function GetStarted() {
  const [isAnOrganization, setIsAnOrganization] = useState<boolean>(false);
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

  function handleCountrySelect(c: CountrySelectComboBoxItem): void {
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
            {/* 
              SECTION -- Name
            */}
            <div className="w-full">
              <div className="flex justify-between w-full">
                <label htmlFor="name" className="block font-bold text-gray-700">
                  Name
                </label>
                <span className="text-sm text-gray-500" id="email-optional">
                  Optional
                </span>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Peter Gibbons"
                  aria-describedby="name-optional"
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleName(e)} // prettier-ignore
                />
              </div>
            </div>

            {/* 
              SECTION -- Main Contact
            */}
            <div className="w-full">
              <label htmlFor="email" className="block font-bold text-gray-700">
                Main Contact
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="my-1 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="bob@initech.com, bolton#1234"
                onChange={(e: React.FormEvent<HTMLInputElement>) => handleMainContact(e)} // prettier-ignore
              />
              <p className="text-sm text-gray-400">{`Email, Discord, or any other preferred method of communication.`}</p>
            </div>
          </div>

          <div className="flex">
            {/* 
              SECTION -- Business Representation
            */}
            <div className="my-4">
              <label className="font-bold text-gray-700">
                Business Representation
              </label>
              <p className="leading-5 text-gray-500">{`Are you representing or acting on behalf of an organization?`}</p>
              <fieldset className="mt-4">
                <legend className="sr-only">Business Representation</legend>
                <div className="space-y-4">
                  <div key="is-organization-yes" className="flex items-center">
                    <input
                      id={"is-organization-yes"}
                      name="business-affiliation"
                      type="radio"
                      checked={isAnOrganization}
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
                      checked={!isAnOrganization}
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
          </div>

          {/* 
            SECTION -- Organization Affiliation
          */}
          {isAnOrganization && (
            <div>
              <div className="my-6">
                <label className="font-bold text-gray-700">
                  Organization Affiliation
                </label>
                <p className="leading-5 text-gray-500">{`Do any of these describe your organization? Checkmark if 'yes'.`}</p>

                <fieldset className="space-y-5">
                  <legend className="sr-only">Organization affiliation</legend>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="org-affiliation-nonprofit"
                        aria-describedby="org-affiliation-nonprofit"
                        name="org-affiliation-nonprofit"
                        type="checkbox"
                        className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 -mt-1">
                      <label
                        htmlFor="org-affiliation-nonprofit"
                        className="font-medium text-gray-700"
                      >
                        Registered non-profit
                      </label>
                      <p
                        id="org-affiliation-nonprofit"
                        className="text-gray-500"
                      >
                        {`Organization is a registered non-profit, such as 501(c)(3).`}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="org-affiliation-gov"
                        aria-describedby="org-affiliation-gov"
                        name="org-affiliation-gov"
                        type="checkbox"
                        className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 -mt-1">
                      <label
                        htmlFor="org-affiliation-gov"
                        className="font-medium text-gray-700"
                      >
                        Government
                      </label>
                      <p id="org-affiliation-gov" className="text-gray-500">
                        Work is in support of state or federal government.
                        Sub-contracting included.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="org-affiliation-tax-docs"
                        aria-describedby="org-affiliation-tax-docs"
                        name="org-affiliation-tax-docs"
                        type="checkbox"
                        className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 -mt-1">
                      <label
                        htmlFor="org-affiliation-tax-docs"
                        className="font-medium text-gray-700"
                      >
                        Organization is to provide tax documentation
                      </label>
                      <p
                        id="org-affiliation-tax-docs"
                        className="text-gray-500"
                      >
                        Includes 1099-E, 1098, or other tax documentation for
                        prime and sub contractors. Your HR or Accounts Payable
                        would know this info.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="org-affiliation-508"
                        aria-describedby="org-affiliation-508"
                        name="org-affiliation-508"
                        type="checkbox"
                        className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 -mt-1">
                      <label
                        htmlFor="org-affiliation-508"
                        className="font-medium text-gray-700"
                      >
                        508 compliance required
                      </label>
                      <p id="org-affiliation-508" className="text-gray-500">
                        Must meet requirements for{" "}
                        <a
                          href="https://www.section508.gov/develop/software-websites/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-pink-500 transition"
                        >
                          section 508.
                        </a>
                      </p>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="w-full my-6">
                <label
                  htmlFor="business-name"
                  className="block font-bold text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  name="business-name"
                  id="business-name"
                  className="my-1 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="IniTech, Inc."
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleBusinessName(e)} // prettier-ignore
                />
              </div>
            </div>
          )}

          {/* 
            SECTION -- Country
          */}
          <div className="my-6">
            <CountrySelectComboBox
              handleCountrySelect={handleCountrySelect}
              subheaderText={
                isAnOrganization
                  ? "Where is your organization headquartered?"
                  : "What country do you live in?"
              }
            />
          </div>

          {/* NOTE - Don't include budget. Just tell them the hours, and let them figure it out. */}
          {/* 
            SECTION -- Budget 
          */}
          <div className="my-6">
            <label htmlFor="price" className="block font-bold text-gray-700">
              Budget
            </label>
            <p className="leading-5 mb-2 text-gray-500">{`I understand your budget may be private. Sharing that information is not a requirement.`}</p>
            <p className="leading-5 text-gray-500">{`However, if you or your project has a ceiling, I recommend, but not require, you share that with me so that I can set accurate expectations.`}</p>
            
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>


            {/* 
              SECTION -- Contract
            */}
            <div className="my-6">
              <label htmlFor="price" className="block font-bold text-gray-700">
                Contract
              </label>
              <p className="leading-5 text-gray-500">{``}</p>

            </div>

            {/* 
            NOTE - Scratchpaper

            Left side:
              At Will
              - No contract.
              - Upfront payment required, then monthly invoices.
              - Either party can cancel at any time for any reason.

              - Recommended for smaller projects with a budget ceiling below $500

            Right side:
              Service agreement
              - Signed, binding contract
              - No upfront 

              - Recommended for larger projects with a budget ceiling over $5,000
          
          */}

            
          </div>
        </section>
      </ContentBlock>

      <Footer />
    </Layout>
  );
}
