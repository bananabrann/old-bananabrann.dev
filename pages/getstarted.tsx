import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import BananamanEngineerPng from "../res/png/bananaman-engineer.png";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import { useEffect, useState } from "react";
import GettingStartedQuestionnaire, { WorkType } from "../lib/interfaces/GettingStartedQuestionnaire.interface";

// Dev only
const devForm: GettingStartedQuestionnaire = {
  id: "abcd",
  mainContact: "hi@bananabrann.dev",
  workType: WorkType.WebDev,
  workDescription: "Description",
  workAdditionalInfo: "yesss"
}

export default function GetStarted() {
  const [questionnaireForm, setQuestionnaireForm] =
    useState<GettingStartedQuestionnaire>(devForm);

  // dev only
  useEffect(() => {
    submitQuestionnaire()
  },[])

  function submitQuestionnaire() {
    fetch("/api/questionnaires", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(questionnaireForm)
    })
    
  }

  return (
    <Layout home={false}>
      <Navbar />

      <ContentBlock>
        <div className="flex">
          <div>
            <h2>Get Started</h2>
            <p>{`Let's start looking at what what would be best for you. Don't fret these responses! This is just to get a rough idea of what you're you looking for.`}</p>
            <p>{`Fun fact:  on average, this form saves one hour of phone calls.`}</p>
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
      </ContentBlock>

      <Footer />
    </Layout>
  );
}
