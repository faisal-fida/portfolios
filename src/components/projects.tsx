export function Projects() {
    return (
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="projects" data-type="section">
    <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">Projects</h2>
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4">
                            <img alt="Golden Bulls project thumbnail" decoding="async"height="104" loading="lazy" src="/_astro/project-1.29613236_Z26jz3b.webp" width="104" className="hidden rounded-md sm:block h-12 w-12" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">Golden Bulls</h3>
                                    <p className="font-medium text-gray-700 text-sm dark:text-gray-100">March 2020 - now</p>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="Mockups"
                                        data-tooltip="Mockups"
                                        aria-describedby="tooltip-2aPhzSqx"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="App demo"
                                        data-tooltip="App demo"
                                        aria-describedby="tooltip-CG_sC0vU"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                    <button
                                        aria-label="Screenshots"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        data-gallery="uJB-S1NH"
                                        data-tooltip="Screenshots"
                                        aria-describedby="tooltip-HTeXgJtk"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="inline-grid xl:grid-cols-[auto_auto] w-full">
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Team size:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">1 person</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">My role:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Front-end Developer, Designer</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Company:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">None</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Category:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Web app, Open source</span></div>
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description col-span-3 col-start-1">
                    <p>
                        In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc
                        malesuada leo et est iaculis facilisis.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Technologies:</span>
                <div className="flex gap-3 flex-wrap">
                    <a
                        href="https://nextjs.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Next.js
                    </a>
                    <a
                        href="https://sass-lang.com/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>SASS
                    </a>
                    <a
                        href="https://pnpm.io/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>pnpm
                    </a>
                    <a
                        href="https://eslint.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>ESLint
                    </a>
                    <a
                        href="https://prettier.io/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Prettier
                    </a>
                </div>
            </div>
            <div className="hidden" id="uJB-S1NH">
                <img alt="First screenshot" decoding="async"height="1097" loading="lazy" src="/_astro/project-1-screenshot-1.ce8809b9_19QEbh.webp" width="1920" />
                <img alt="Second screenshot" decoding="async"height="720" loading="lazy" src="/_astro/project-1-screenshot-2.24dd48f2_ZB0Dvl.webp" width="1080" />
                <img alt="Third screenshot" decoding="async"height="1536" loading="lazy" src="/_astro/project-1-screenshot-3.c0ea49b8_bXMkS.webp" width="1920" />
            </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4">
                            <img alt="TruQuest project thumbnail" decoding="async"height="104" loading="lazy" src="/_astro/project-2.784b8c24_Z1sSSDb.webp" width="104" className="hidden rounded-md sm:block h-12 w-12" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">TruQuest</h3>
                                    <p className="font-medium text-gray-700 text-sm dark:text-gray-100">June 2019 - February 2020</p>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="Mockups"
                                        data-tooltip="Mockups"
                                        aria-describedby="tooltip-T-P-sv8R"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="App demo"
                                        data-tooltip="App demo"
                                        aria-describedby="tooltip-hrPEMifd"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="inline-grid xl:grid-cols-[auto_auto] w-full">
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Team size:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">7 people</span></div>
                            <div>
                                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">My role:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Front-end Developer, Mobile Developer, Designer</span>
                            </div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Company:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Facebook</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Category:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Web app, Mobile app</span></div>
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description col-span-3 col-start-1">
                    <p>
                        Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat
                        dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Technologies:</span>
                <div className="flex gap-3 flex-wrap">
                    <a
                        href="https://reactjs.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>React.js
                    </a>
                    <a
                        href="https://tailwindcss.com/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Tailwind CSS
                    </a>
                    <a
                        href="https://nestjs.com/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>NestJS
                    </a>
                    <a
                        href="https://www.postgresql.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>PostgreSQL
                    </a>
                </div>
            </div>
            <div className="hidden" id="sRX_in2d"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4">
                            <img alt="Software Chasers project thumbnail" decoding="async"height="104" loading="lazy" src="/_astro/project-3.cc70f684_ZapfbK.webp" width="104" className="hidden rounded-md sm:block h-12 w-12" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">Software Chasers</h3>
                                    <p className="font-medium text-gray-700 text-sm dark:text-gray-100">January 2018 - December 2020</p>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="Website"
                                        data-tooltip="Website"
                                        aria-describedby="tooltip-tngxlR6p"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="GitHub"
                                        data-tooltip="GitHub"
                                        aria-describedby="tooltip-aIn-XtBQ"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="inline-grid xl:grid-cols-[auto_auto] w-full">
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Team size:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">3 people</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">My role:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Front-end Developer, Designer</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Company:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">None</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Category:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Web app, Open source</span></div>
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description col-span-3 col-start-1">
                    <p>Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.</p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Technologies:</span>
                <div className="flex gap-3 flex-wrap">
                    <a
                        href="https://reactjs.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>React.js
                    </a>
                    <a
                        href="https://chakra-ui.com/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Chakra UI
                    </a>
                    <a
                        href="https://www.typescriptlang.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>TypeScript
                    </a>
                    <a
                        href="https://nx.dev/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Nx
                    </a>
                    <a
                        href="https://pnpm.io/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>pnpm
                    </a>
                </div>
            </div>
            <div className="hidden" id="-Bgmet6c"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex gap-6">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4">
                            <img alt="Disco Ninjas project thumbnail" decoding="async"height="104" loading="lazy" src="/_astro/project-4.da196f11_a4WN1.webp" width="104" className="hidden rounded-md sm:block h-12 w-12" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">Disco Ninjas</h3>
                                    <p className="font-medium text-gray-700 text-sm dark:text-gray-100">May 2016 - July 2018</p>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="Mockups"
                                        data-tooltip="Mockups"
                                        aria-describedby="tooltip-p58Rxw6D"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                                        target="_blank"
                                        aria-label="GitHub"
                                        data-tooltip="GitHub"
                                        aria-describedby="tooltip-_QmsTkCJ"
                                    >
                                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="inline-grid xl:grid-cols-[auto_auto] w-full">
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Team size:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">11 people</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">My role:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Front-end Developer</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Company:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Google</span></div>
                            <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Category:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Mobile app, Open source</span></div>
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description col-span-3 col-start-1">
                    <p>Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut.</p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Technologies:</span>
                <div className="flex gap-3 flex-wrap">
                    <a
                        href="https://www.typescriptlang.org/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>TypeScript
                    </a>
                    <a
                        href="https://jestjs.io/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Jest
                    </a>
                    <a
                        href="https://firebase.google.com/"
                        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>Firebase
                    </a>
                </div>
            </div>
            <div className="hidden" id="cxgi-Bdb"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
    </div>
</div>

    )}