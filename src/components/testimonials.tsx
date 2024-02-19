import { CustomSVG, icons } from '../components';

export function Testimonials() {
    return (
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
        id="testimonials"
        data-type="section"
      >
        <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
          Testimonials
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4 sm:flex-row">
                <img
                  alt="Jean Richards"
                  decoding="async"
                  height="104"
                  loading="lazy"
                  src="../../MBbIYVtmB095.app/_astro/ebm3GzcY5wHa.webp"
                  width="104"
                  className="hidden rounded-md sm:block h-12 w-12 object-cover"
                />
                <div>
                  <h3
                    className="text-gray-900 dark:text-gray-100 font-extrabold text-xl"
                  >
                    Jean Richards
                  </h3>
                  <p
                    className="font-medium text-gray-700 text-sm dark:text-gray-100"
                  >
                    My project manager at GitLab
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                  target="_blank"
                  aria-label="LinkedIn"
                  data-tooltip="LinkedIn"
                  ><CustomSVG path={icons.icon1}/></a>
              </div>
            </div>
            <div
              className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description"
            >
              <p>
                Description
              </p>
            </div>
          </div>
          <div
            className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"
          ></div>
      
        </div>
      </div>  
    );}