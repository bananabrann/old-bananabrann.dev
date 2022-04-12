import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { useState } from "react";

type TechList = {
  experienced: Array<string>;
  proficient: Array<string>;
  exposure: Array<string>;
};

interface SkillsPropsErrorObject {
  code: string;
  message: string;
}

export default function ExpandableSkillsList({
  techList,
  techListError,
}: {
  techList: TechList;
  techListError: SkillsPropsErrorObject;
}) {
  let content;

  if(techListError) {
    content = <div>Error</div>
  }



  return <div className="ExpandableSkillsList">
    {content}

    </div>;
}
