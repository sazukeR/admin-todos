"use client";

import { useState } from "react";

interface Props {
 tabOptions?: number[];
 currentTab?: number;
}

export const TabBar = ({
 tabOptions = [1, 2, 3, 4, 5],
 currentTab = 1,
}: Props) => {
 const [selected, setSelected] = useState(currentTab);

 return (
  <div
   className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2  grid-cols-${tabOptions.length} `}
  >
   {tabOptions.map((tab) => (
    <div key={tab}>
     <input
      onChange={() => {}}
      checked={selected === tab}
      type="radio"
      id={tab.toString()}
      className="peer hidden"
     />
     <label
      onClick={() => setSelected(tab)}
      className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
     >
      {tab}
     </label>
    </div>
   ))}
  </div>
 );
};
