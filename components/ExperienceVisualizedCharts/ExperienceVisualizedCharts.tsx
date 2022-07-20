import TechBarTimePng from "../../res/png/tech-bar-time.png";
import TechBarLangsPng from "../../res/png/tech-bar-langs.png";
import TechBarToolsPng from "../../res/png/tech-bar-tools.png";
import Image from "next/image";
import { Fragment, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";


/**
 * NOTE -- Parent elements should control size of this component. Keep <svg>
 * `width` property empty so that sizing can be handled by parent.
 * 
 * NOTE -- This file is ignored by Prettier.
 */

const languagesDataCareer: DataEntry[] = [
  { title: "JavaScript", value: 40, color: "#E8D44C" },
  { title: "TypeScript", value: 25, color: "#0076C6" },
  { title: "CSS", value: 15, color: "#C76394" },
  { title: "GDScript", value: 10, color: "#324e5e" },
  { title: "Python", value: 10, color: "#0c6091" },
  { title: "SQL", value: 5, color: "#ed8709" },
  { title: "Bash", value: 5, color: "#71db6e" },
  { title: "Java", value: 2, color: "#6e533c" },
  { title: "Others", value: 5, color: "#555555" },
];

const languagesDataCurrently: DataEntry[] = [
  { title: "JavaScript", value: 3, color: "#E8D44C" },
  { title: "TypeScript", value: 3, color: "#0076C6" },
  { title: "GDScript", value: 3, color: "#324e5e" },
  { title: "CSS", value: 1, color: "#db88cf" },
  { title: "Bash", value: 1, color: "#71db6e" },
  { title: "Others", value: 1, color: "#555555" },
];

const toolsDataCareer: DataEntry[] = [
  { title: "Web development", value: 75, color: "#E8D44C" },
  { title: "Qlik Sense plugins", value: 25, color: "#039849" },
  { title: "Scripting", value: 20, color: "#0c6091" },
  { title: "Power Apps", value: 15, color: "#8A2D84" },
  { title: "Game development", value: 10, color: "#4488B9" },
  { title: "Desktop apps", value: 5, color: "#6e533c" },
  { title: "Other stuff", value: 10, color: "#555555" },
];

const toolsDataCurrently: DataEntry[] = [
  { title: "Web development", value: 3, color: "#E8D44C" },
  { title: "Power Apps", value: 3, color: "#8A2D84" },
  { title: "Game development", value: 3, color: "#4488B9" },


]

export default function ExperienceVisualizedCharts() {
  const [languagesData, setLanguagesData] = useState<DataEntry[]>(languagesDataCurrently);
  const [toolsData, setToolsData] = useState<DataEntry[]>(toolsDataCurrently)

  return (
    <div className="flex flex-col">
      <div className="py-6">
        <h4 className="mx-auto text-center">Languages</h4>
        <PieChart
          data={languagesData}
          startAngle={180}
          lengthAngle={180}
          viewBoxSize={[100, 50]}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={(index) => ({
            fill: languagesData[index].color,
            fontSize: "2.5px",
            fontFamily: "Comic Code",
            fontWeight: "700"
          })}
          radius={25}
          labelPosition={112}
          animate={true}
        />
      </div>

      <div className="py-6">
        <h4 className="mx-auto text-center">Work Type</h4>
        <PieChart
          data={toolsData}
          startAngle={180}
          lengthAngle={180}
          viewBoxSize={[100, 50]}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={(index) => ({
            fill: toolsData[index].color,
            fontSize: "2.5px",
            fontFamily: "Comic Code",
            fontWeight: "700"
          })}
          radius={25}
          labelPosition={112}
          animate={true}
        />
      </div>

    </div>
  )
}
