import { CustomSVG, icons } from '../components';

export function Education() {
    return (
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
id="education"
data-type="section"
>
<h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
  Education
</h2>
<div className="flex flex-col gap-3">
  <div className="flex gap-2 justify-between w-full">
    <div className="flex gap-4">
      <img
        alt="Wrocław University of Science and Technology logo"
        decoding="async"
        height="104"
        loading="lazy"
        src="../../MBbIYVtmB095.app/_astro/g8EsDoYisXof.webp"
        width="104"
        className="hidden rounded-md sm:block h-18 w-18 object-cover"
      />
      <div className="flex flex-col">
        <h3
          className="text-gray-900 dark:text-gray-100 font-extrabold text-xl"
        >
          Information Technology
        </h3>
        <p
          className="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"
        >
          Wrocław University of Science and Technology
        </p>
        <p className="font-medium text-gray-700 text-sm dark:text-gray-100">
          October 2014 - July 2016
        </p>
      </div>
    </div>
    <div className="flex gap-3 flex-wrap sm:flex-nowrap">
      <a
        href="#"
        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
        target="_blank"
        aria-label="Website"
        data-tooltip="Website"
        ><CustomSVG path={icons.icon1}/></a>
    </div>
  </div>
  <div
    className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description"
  >
    <p>Master degree. Specialization in software development.</p>
  </div>
</div>
<div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
</div>
    );}