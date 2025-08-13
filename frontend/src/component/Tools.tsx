import { extractImageName } from "../utils/tools/toolsFormatter";
import { ICONS } from "../utils/icons/icons";

interface ToolIconsProps {
  sortIcons: string[];
  toolIcon: string;
}

export function Tools({ sortIcons, toolIcon }: ToolIconsProps) {
  return (
    <>
      <div className="px-15 mt-10 ">
        <div className="flex">
          <ul className="flex items-center ml-2 space-x-4 mt-4">
            {sortIcons?.map((icon, index) => (
              <li key={index}>
                <button className="h-6 w-6">
                  <img
                    src={`${icon}`}
                    alt={extractImageName(icon)}
                    className="h-6 w-6"
                  />
                </button>
              </li>
            ))}

            <li className="flex items-center">
              <div className="h-6 w-[1px] bg-[#BDBDBD]"></div>
            </li>
            <li>
              <button className="h-6 w-6">
                <img src={ICONS.FILTER} alt="Filter" className="h-6 w-6" />
              </button>
            </li>
          </ul>

          <div className="flex items-center ml-auto py-1">
            <img
              src={toolIcon}
              alt={extractImageName(toolIcon)}
              className="h-12 w-12"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#BDBDBD] "></div>
      </div>
    </>
  );
}
