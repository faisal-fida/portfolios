
export function Profile() {
    return (
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="profile" data-type="section">
        <div className="flex flex-col gap-6 items-start sm:flex-row">
            <div className="flex items-center gap-4 sm:flex-col">
                <img alt="Mark Freeman" decoding="async" height="320" loading="lazy" src="/placeholder.svg?height=128&width=128" width="320" className="rounded-lg h-24 max-w-none md:h-52 md:w-52 sm:h-36 sm:w-36 w-24" />
                <a
                    href="/cv.pdf"
                    className="font-medium items-center active:translate-y-px bg-primary-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-10 hover:bg-primary-700 inline-flex px-4 rounded-md select-none shadow-sm text-base text-white"
                    download="CV-Mark_Freeman.pdf"
                >
                    Download CV
                </a>
            </div>
            <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col w-full gap-2 justify-between sm:flex-row">
                    <div className="w-full">
                        <h1 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl sm:text-4xl">Mark Freeman</h1>
                        <h2 className="font-medium text-gray-700 dark:text-gray-100 sm:text-lg text-base">Senior React Developer</h2>
                    </div>
                    <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                        <a
                            href="#"
                            className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank"
                            aria-label="Facebook"
                            data-tooltip="Facebook"
                            aria-describedby="tooltip-CbQ_7SKM"
                        >
                        </a>
                        <a
                            href="#"
                            className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank"
                            aria-label="GitHub"
                            data-tooltip="GitHub"
                            aria-describedby="tooltip-zN7Jzoh_"
                        >
                        </a>
                        <a
                            href="#"
                            className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank"
                            aria-label="LinkedIn"
                            data-tooltip="LinkedIn"
                            aria-describedby="tooltip-XfTwY1h-"
                        >
                         </a>
                        <a
                            href="#"
                            className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
                            target="_blank"
                            aria-label="Twitter"
                            data-tooltip="Twitter"
                            aria-describedby="tooltip-IjMNjWTb"
                        >
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="inline-grid xl:grid-cols-[auto_auto]">
                        <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Phone:</span>
                            <a href="tel:605 475 6961" className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base underline" target="_self">605 475 6961</a>
                        </div>
                        <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300 text-base">Email:</span>
                            <a href="mailto:mark.freeman.dev@gmail.com" className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base underline" target="_self">mark.freeman.dev@gmail.com</a>
                        </div>
                        <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">From:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">Warsaw, Poland</span></div>
                        <div><span className="font-medium text-gray-700 dark:text-gray-300 text-base">Salary range:</span> <span className="font-normal text-gray-500 dark:text-gray-400 text-base">18 000 - 25 000 PLN</span></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. In sodales ac dui at <em>vestibulum</em>. In condimentum metus id dui tincidunt, in blandit mi <a href="/">vehicula</a>. Nulla lacinia,
                                erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu
                                ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.
                            </p>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <div className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">Open for freelance</div>
                            <div className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">Available for mentoring</div>
                            <div className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit">Working on side project</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )}