import { CustomSVG, icons } from '../components';

export function Projects() {
    return (
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
id="projects"
data-type="section"
>
<h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
  Projects
</h2>
<div className="flex flex-col gap-8">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-4">
            <img
              alt="Golden Bulls project thumbnail"
              decoding="async"
              height="104"
              loading="lazy"
              src="../../MBbIYVtmB095.app/_astro/YPHyFbOp413z.webp"
              width="104"
              className="hidden rounded-md sm:block h-12 w-12 object-cover"
            />
            <div className="flex justify-between w-full">
              <div>
                <h3
                  className="text-gray-900 dark:text-gray-100 font-extrabold text-xl"
                >
                  Golden Bulls
                </h3>
                <p
                  className="font-medium text-gray-700 text-sm dark:text-gray-100"
                >
                  March 2020 - now
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                  target="_blank"
                  aria-label="Mockups"
                  data-tooltip="Mockups"
                  ><CustomSVG path={icons.icon1}/></a
                ><button
                  aria-label="Screenshots"
                  className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                  data-gallery="uJB-S1NH"
                  data-tooltip="Screenshots"
                >
                <CustomSVG path={icons.icon1}/>
                </button>
              </div>
            </div>
          </div>
          <div className="inline-grid xl:grid-cols-[auto_auto] w-full">
            <div>
              <span
                className="font-medium text-gray-700 dark:text-gray-300 text-base"
                >Team size:</span
              >
              <span
                className="font-normal text-gray-500 dark:text-gray-400 text-base"
                >1 person</span
              >
            </div>
            <div>
              <span
                className="font-medium text-gray-700 dark:text-gray-300 text-base"
                >My role:</span
              >
              <span
                className="font-normal text-gray-500 dark:text-gray-400 text-base"
                >Front-end Developer, Designer</span
              >
            </div>
            <div>
              <span
                className="font-medium text-gray-700 dark:text-gray-300 text-base"
                >Company:</span
              >
              <span
                className="font-normal text-gray-500 dark:text-gray-400 text-base"
                >None</span
              >
            </div>
            <div>
              <span
                className="font-medium text-gray-700 dark:text-gray-300 text-base"
                >Category:</span
              >
              <span
                className="font-normal text-gray-500 dark:text-gray-400 text-base"
                >Web app, Open source</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description col-span-3 col-start-1"
      >
        <p>
          Description
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-1.5">
      <span
        className="font-medium text-gray-700 dark:text-gray-300 text-base"
        >Technologies:</span
      >
      <div className="flex gap-3 flex-wrap">
        <a
          href="https://nextjs.org/"
          className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
          target="_blank"
          rel="noopener noreferrer"
          ><CustomSVG path={icons.icon1}/>Next.js</a
        >
      </div>
    </div>
    <div className="hidden" id="uJB-S1NH">
      <img
        alt="First screenshot"
        decoding="async"
        height="1097"
        loading="lazy"
        src="../../MBbIYVtmB095.app/_astro/aXC5v6s9izaD.webp"
        width="1920"
        className="object-cover"
      /><img
        alt="Second screenshot"
        decoding="async"
        className="object-cover"
        height="720"
        loading="lazy"
        src="../../MBbIYVtmB095.app/_astro/EWTzhPQXnnoc.webp"
        width="1080"
      /><img
        alt="Third screenshot"
        decoding="async"
        className="object-cover"
        height="1536"
        loading="lazy"
        src="../../MBbIYVtmB095.app/_astro/3d2tO8fTYRwK.webp"
        width="1920"
      />
    </div>
  </div>
  <div
    className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"
  ></div>
 
</div>
</div>
    )}