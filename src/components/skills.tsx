import { CustomSVG, icons } from '../components';

export function Skills() {
    return (
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
id="skills"
data-type="section"
>
<h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
  Skills
</h2>
<div className="flex flex-col gap-10">
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
      I already know
    </h3>
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center h-5 justify-between">
          <a
            href="https://reactjs.org/"
            className="flex gap-2 h-5"
            target="_blank"
            rel="noopener noreferrer"
            >
            <CustomSVG path={icons.icon1}/>
            <span
              className="font-medium text-gray-700 text-sm dark:text-gray-300"
              >React.js</span
            ></a
          >
          <div
            className="flex h-3.5 w-3.5"
            data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
            data-tooltip-placement="top"
          >
          <CustomSVG path={icons.icon1}/>
          </div>
        </div>
        <div className="flex gap-1">
          <div
            className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
          ></div>
          <div
            className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
          ></div>
          <div
            className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
          ></div>
          <div
            className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
          ></div>
          <div
            className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
      I want to learn
    </h3>
    <div className="flex gap-3 flex-wrap">
      <a
        href="https://www.apollographql.com/"
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
        target="_blank"
        rel="noopener noreferrer"
        ><CustomSVG path={icons.icon1}/>Apollo GraphQL</a
      >
    </div>
  </div>
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
      I speak
    </h3>
    <div className="flex gap-3 flex-wrap">
      <div
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
      ><CustomSVG path={icons.icon1}/>Polish - native
      </div>
    </div>
  </div>
</div>
</div>
    );}