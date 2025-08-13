import { Suspense } from "react";
import { ICONS } from "../utils/icons/icons";

export function TaskContainer() {
  return (
    <Suspense>
      <div className="px-30 py-12">
        <div className="flex space-x-6 items-center">
          <div className="mt-4">
            <img src={ICONS.WARNING} alt="Warning" className="h-12 w-12" />
          </div>

          <div className="mr-20 flex-1 flex flex-col text-white">
            <ul className="flex flex-row space-x-2">
              <li>3:00 PM</li>
              <li>|</li>
              <li>8/ 11 /25</li>
              <li>|</li>
              <li>Tomorrow</li>
              <li className="ml-auto">High</li>
            </ul>

            <div className="h-20 w-full bg-[#4c4c4c] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
