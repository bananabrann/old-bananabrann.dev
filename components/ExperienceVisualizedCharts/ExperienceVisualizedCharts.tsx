import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";
import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * NOTE -- Parent elements should control size of this component. Keep <svg>
 * `width` property empty so that sizing can be handled by parent.
 */

const languagesDataCareer: DataEntry[] = [
  { title: "JavaScript", value: 40, color: "#E8D44C" },
  { title: "TypeScript", value: 25, color: "#0076C6" },
  { title: "CSS", value: 15, color: "#C76394" },
  { title: "SQL", value: 12, color: "#ed8709" },
  { title: "Python", value: 10, color: "#0c6091" },
  { title: "Bash", value: 5, color: "#71db6e" },
  { title: "GDScript", value: 5, color: "#324e5e" },
  { title: "Java", value: 2, color: "#6e533c" },
  { title: "Others", value: 5, color: "#555555" },
];

const languagesDataCurrently: DataEntry[] = [
  { title: "JavaScript", value: 4, color: "#E8D44C" },
  { title: "C#", value: 2, color: "#019404" },
  { title: "TypeScript", value: 1, color: "#0076C6" },
  { title: "CSS", value: 1, color: "#C76394" },
  // { title: "Others", value: 1, color: "#555555" },
];

const toolsDataCareer: DataEntry[] = [
  { title: "Web development", value: 75, color: "#E8D44C" },
  { title: "Qlik Sense plugins", value: 25, color: "#039849" },
  { title: "Scripting", value: 20, color: "#0c6091" },
  { title: "Power Apps", value: 15, color: "#8A2D84" },
  { title: "Game dev", value: 10, color: "#4488B9" },
  { title: "Desktop apps", value: 5, color: "#6e533c" },
  { title: "Other", value: 10, color: "#555555" },
];

const toolsDataCurrently: DataEntry[] = [
  { title: "Power Apps", value: 5, color: "#8A2D84" },
  { title: "Web development", value: 3, color: "#E8D44C" },
  { title: "Game dev", value: 2, color: "#4488B9" },
];

const hostingCareer: DataEntry[] = [
  { title: "Azure Gov", value: 10, color: "#3688BF" },
  { title: "Azure", value: 4, color: "#449ED0" },
  { title: "Vercel", value: 4, color: "#000000" },
  { title: "Host Gator", value: 1, color: "#2CB24E" },
  { title: "AWS", value: 1, color: "#F4962B" },
];

const hostingCurrently: DataEntry[] = [
  { title: "Azure Gov", value: 10, color: "#3688BF" },
  // { title: "Azure", value: 1, color: "#449ED0" },
  { title: "Vercel", value: 2, color: "#000000" },
];

const cicdCareer: DataEntry[] = [
  { title: "Azure DevOps", value: 7, color: "#449ED0" },
  { title: "GitHub", value: 2, color: "#333333" },
  { title: "GitLab", value: 1, color: "#E24329" },
];

const cicdCurrently: DataEntry[] = [
  { title: "Azure DevOps", value: 14, color: "#449ED0" },
  { title: "GitHub", value: 1, color: "#333333" },
  // { title: "GitLab", value: 1, color: "#E24329" },
];

export default function ExperienceVisualizedCharts() {
  // prettier-ignore
  const [enabled, setEnabled] = useState(false);
  const [languagesData, setLanguagesData] =
    useState<DataEntry[]>(languagesDataCareer);
  const [toolsData, setToolsData] = useState<DataEntry[]>(toolsDataCareer);
  const [hostingProvidersData, setHostingProvidersData] =
    useState<DataEntry[]>(hostingCareer);
  const [cicdData, setCicdData] = useState<DataEntry[]>(cicdCareer);

  useEffect(() => {
    // NOTE -- Save performance by evaluating once instead of doing ternaries.
    if (enabled) {
      setLanguagesData(languagesDataCurrently);
      setToolsData(toolsDataCurrently);
      setHostingProvidersData(hostingCurrently);
      setCicdData(cicdCurrently);
    } else {
      setLanguagesData(languagesDataCareer);
      setToolsData(toolsDataCareer);
      setHostingProvidersData(hostingCareer);
      setCicdData(cicdCareer);
    }
  }, [enabled]);

  return (
    <div className="flex flex-col">
      <Switch.Group as="div" className="flex items-center mt-5">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? "bg-yellow-400" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3 hover:cursor-pointer">
          <span className="text-sm font-medium text-gray-900">
            {`Show only recent `}
          </span>
          <span className="text-sm text-gray-500">{`(within 1 year)`}</span>
        </Switch.Label>
      </Switch.Group>

      <div className="flex flex-col md:flex-row">
        <div className="py-6 flex-grow">
          <h4 className="mx-auto text-center -mb-8">Time in languages</h4>
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
              fontWeight: "700",
            })}
            radius={30}
            labelPosition={112}
            animate={true}
          />
        </div>

        <div className="py-6 text-center flex-grow">
          <h4 className="mx-auto text-center -mb-8">Time in work category</h4>
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
              fontWeight: "700",
            })}
            radius={30}
            labelPosition={112}
            animate={true}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="py-6 flex-grow">
          <h4 className="mx-auto text-center -mb-8">
            Usage of hosting providers
          </h4>
          <PieChart
            data={hostingProvidersData}
            startAngle={180}
            lengthAngle={180}
            viewBoxSize={[100, 50]}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
              fill: hostingProvidersData[index].color,
              fontSize: "2.5px",
              fontFamily: "Comic Code",
              fontWeight: "700",
            })}
            radius={30}
            labelPosition={112}
            animate={true}
          />
        </div>

        <div className="py-6 flex-grow">
          <h4 className="mx-auto text-center -mb-8">
            Time using platforms for CI/CD
          </h4>
          <PieChart
            data={cicdData}
            startAngle={180}
            lengthAngle={180}
            viewBoxSize={[100, 50]}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
              fill: cicdData[index].color,
              fontSize: "2.5px",
              fontFamily: "Comic Code",
              fontWeight: "700",
            })}
            radius={30}
            labelPosition={112}
            animate={true}
          />
        </div>
      </div>
    </div>
  );
}
