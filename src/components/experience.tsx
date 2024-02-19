import { CustomSVG, icons } from '../components';

export function Experience() {
    return (
        
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
        id="experience"
        data-type="section"
      >
        <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
          Work experience
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-4">
                <img
                  alt="Google logo"
                  decoding="async"
                  height="104"
                  loading="lazy"
                  src="../../MBbIYVtmB095.app/_astro/aVNt0D05MaCB.webp"
                  width="104"
                  className="hidden rounded-md sm:block h-18 w-18 object-cover"
                />
                <div className="flex flex-col">
                  <h3
                    className="text-gray-900 dark:text-gray-100 font-extrabold text-xl"
                  >
                    Senior front-end developer
                  </h3>
                  <p
                    className="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base"
                  >
                    Google
                  </p>
                  <p
                    className="font-medium text-gray-700 text-sm dark:text-gray-100"
                  >
                    February 2020 - now
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                <a
                  href="#"
                  className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                  target="_blank"
                  aria-label="Facebook"
                  data-tooltip="Facebook"
                  ><CustomSVG path={icons.icon1}/></a
                >
              </div>
            </div>
            <div
              className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description mb-3"
            >
              <ul>
                <li>In tristique vulputate augue vel egestas.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1.5">
              <span
                className="font-medium text-gray-700 dark:text-gray-300 text-base"
                >Technologies:</span
              >
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://reactjs.org/"
                  className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><CustomSVG path={icons.icon1}/>React.js</a
                >
              </div>
            </div>
          </div>
          <div
            className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"
          ></div>
        </div>
      </div>

    )}