export function Favourites() {
    return (
        <div className=" flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md" id="favorites" data-type="section">
    <h2 className=" text-gray-900 dark:text-gray-100 font-extrabold text-3xl">My favorites</h2>
    <div className=" flex flex-col gap-16">
        <div className=" flex flex-col gap-6 astro-BCKZLJ6K">
            <h3 className=" text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K">Books I read</h3>
            <div className=" gap-8 astro-BCKZLJ6K grid tile">
                <a href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="The Pragmatic Programmer: From Journeyman to Master"
                        decoding="async"
                        
                        height="400"
                        loading="lazy"
                        src="/_astro/book-1.fa4278b4_Z1xCp1r.webp"
                        width="300"
                        className=" rounded-lg shadow-md object-cover aspect-[3/4]"
                    />
                    <div className=" gap-1 w-full">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">The Pragmatic Programmer: From Journeyman to Master</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Andy Hunt, Dave Thomas</p>
                    </div>
                </a>
                <a href="https://www.goodreads.com/book/show/179133.Domain_Driven_Design" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Domain-Driven Design: Tackling Complexity in the Heart of Software"
                        decoding="async"
                        
                        height="400"
                        loading="lazy"
                        src="/_astro/book-2.0d857ee1_Z1fqTYj.webp"
                        width="300"
                        className=" rounded-lg shadow-md object-cover aspect-[3/4]"
                    />
                    <div className=" gap-1 w-full">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Domain-Driven Design: Tackling Complexity in the Heart of Software</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Eric Evans</p>
                    </div>
                </a>
                <a href="https://www.goodreads.com/book/show/3735293-clean-code" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Clean Code: A Handbook of Agile Software Craftsmanship"
                        decoding="async"
                        
                        height="400"
                        loading="lazy"
                        src="/_astro/book-3.24e0c155_Z1dc4Wc.webp"
                        width="300"
                        className=" rounded-lg shadow-md object-cover aspect-[3/4]"
                    />
                    <div className=" gap-1 w-full">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Clean Code: A Handbook of Agile Software Craftsmanship</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Robert C. Martin</p>
                    </div>
                </a>
                <a href="https://www.goodreads.com/book/show/10284614-the-clean-coder" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="The Clean Coder: A Code of Conduct for Professional Programmers"
                        decoding="async"
                        
                        height="400"
                        loading="lazy"
                        src="/_astro/book-4.e5a63b33_wFXWu.webp"
                        width="300"
                        className=" rounded-lg shadow-md object-cover aspect-[3/4]"
                    />
                    <div className=" gap-1 w-full">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">The Clean Coder: A Code of Conduct for Professional Programmers</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Robert C. Martin</p>
                    </div>
                </a>
            </div>
        </div>
        <div className=" flex flex-col gap-6 astro-BCKZLJ6K">
            <h3 className=" text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K">People I learn from</h3>
            <div className=" gap-8 astro-BCKZLJ6K grid tile">
                <a href="https://kentcdodds.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Kent C. Dodds" decoding="async"  height="200" loading="lazy" src="/_astro/person-1.50354293_19IHa1.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition" />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Kent C. Dodds</h4>
                </a>
                <a href="https://www.kentbeck.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Kent Beck" decoding="async"  height="200" loading="lazy" src="/_astro/person-2.d5e40665_suFB2.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition" />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Kent Beck</h4>
                </a>
                <a href="https://www.domainlanguage.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Eric Evans" decoding="async"  height="200" loading="lazy" src="/_astro/person-3.b4acc9c0_Z1kp64P.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition" />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Eric Evans</h4>
                </a>
                <a href="https://martinfowler.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Martin Fowler" decoding="async"  height="200" loading="lazy" src="/_astro/person-4.ff8da04e_1FXfbu.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition" />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Martin Fowler</h4>
                </a>
                <a href="http://cleancoder.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Robert C. Martin"
                        decoding="async"
                        
                        height="200"
                        loading="lazy"
                        src="/_astro/person-5.079f8f93_tlxi2.webp"
                        width="200"
                        className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition"
                    />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Robert C. Martin</h4>
                </a>
                <a href="https://eventmodeling.org/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Adam Dymitruk" decoding="async"  height="200" loading="lazy" src="/_astro/person-6.5eebea5e_mHMj2.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square duration-300 transition" />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Adam Dymitruk</h4>
                </a>
            </div>
        </div>
        <div className=" flex flex-col gap-6 astro-BCKZLJ6K">
            <h3 className=" text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K">Videos I watched</h3>
            <div className=" gap-8 astro-BCKZLJ6K grid tile">
                <a href="https://youtu.be/TqfbAXCCVwE" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Building Resilient Frontend Architecture • Monica Lent • GOTO 2019"
                        decoding="async"
                        
                        height="270"
                        loading="lazy"
                        src="/_astro/video-1.5fd1c2c4_Z14ws01.webp"
                        width="480"
                        className=" rounded-lg shadow-md object-cover aspect-video"
                    />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Building Resilient Frontend Architecture • Monica Lent • GOTO 2019</h4>
                </a>
                <a href="https://youtu.be/FS1mnISoG7U" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Scaling Yourself • Scott Hanselman • GOTO 2012"
                        decoding="async"
                        
                        height="270"
                        loading="lazy"
                        src="/_astro/video-2.d5d518e8_qJsNb.webp"
                        width="480"
                        className=" rounded-lg shadow-md object-cover aspect-video"
                    />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Scaling Yourself • Scott Hanselman • GOTO 2012</h4>
                </a>
                <a href="https://youtu.be/QyJZzq0v7Z4" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img
                        alt="Why Isn't Functional Programming the Norm? - Richard Feldman"
                        decoding="async"
                        
                        height="270"
                        loading="lazy"
                        src="/_astro/video-3.87a0ef3b_1ELGDH.webp"
                        width="480"
                        className=" rounded-lg shadow-md object-cover aspect-video"
                    />
                    <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Why Isn't Functional Programming the Norm? - Richard Feldman</h4>
                </a>
            </div>
        </div>
        <div className=" flex flex-col gap-6 astro-BCKZLJ6K">
            <h3 className=" text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K">Media I follow</h3>
            <div className=" gap-8 astro-BCKZLJ6K grid tile">
                <a href="https://www.youtube.com/c/Fireship" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Fireship.io" decoding="async"  height="200" loading="lazy" src="/_astro/media-1.2e3fd6f7_26UCLc.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Fireship.io</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">YouTube channel</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Healthy Software Developer" decoding="async"  height="200" loading="lazy" src="/_astro/media-2.95ac4153_1n04Os.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Healthy Software Developer</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">YouTube channel</p>
                    </div>
                </a>
                <a href="https://bytes.dev/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Bytes" decoding="async"  height="200" loading="lazy" src="/_astro/media-3.5f5bde3a_jxzDO.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Bytes</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Newsletter</p>
                    </div>
                </a>
                <a href="https://typescript-weekly.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="TypeScript Weekly" decoding="async"  height="200" loading="lazy" src="/_astro/media-4.8b28adf9_1dQgga.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">TypeScript Weekly</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Newsletter</p>
                    </div>
                </a>
                <a href="https://www.frontendhappyhour.com/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt="Front End Happy Hour" decoding="async"  height="200" loading="lazy" src="/_astro/media-5.c86a043e_Z1beuqK.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">Front End Happy Hour</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Podcast</p>
                    </div>
                </a>
                <a href="https://cult.honeypot.io/" className=" flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
                    <img alt=".cult by Honeypot" decoding="async"  height="200" loading="lazy" src="/_astro/media-6.8a9f3dd2_Z1mkzHB.webp" width="200" className=" rounded-lg shadow-md object-cover aspect-square" />
                    <div className=" gap-1">
                        <h4 className=" font-medium text-gray-700 text-sm dark:text-gray-200">.cult by Honeypot</h4>
                        <p className=" dark:text-gray-300 text-sm font-normal text-gray-500">Blog</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

    )}