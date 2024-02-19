import { CustomSVG, icons } from '../components';

export function Favourites() {
    return (
        
        <div
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
id="favorites"
data-type="section"
>
<h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
  My favorites
</h2>
<div className="flex flex-col gap-16">
  <div className="flex flex-col gap-6 astro-BCKZLJ6K">
    <h3
      className="text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K"
    >
      Books I read
    </h3>
    <div
      className="gap-8 astro-BCKZLJ6K grid tile"
      style={{'--min-tile-width': '160px'} as React.CSSProperties}
    >
      <a
        href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer"
        className="flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition"
        target="_blank"
        ><img
          alt="The Pragmatic Programmer: From Journeyman to Master"
          decoding="async"
          height="400"
          loading="lazy"
          src="../../MBbIYVtmB095.app/_astro/KE3PKV5sfioW.webp"
          width="300"
          className="rounded-lg shadow-md object-cover aspect-[3/4] object-cover"
        />
        <div className="gap-1 w-full">
          <h4
            className="font-medium text-gray-700 text-sm dark:text-gray-200"
          >
            The Pragmatic Programmer: From Journeyman to Master
          </h4>
          <p
            className="dark:text-gray-300 text-sm font-normal text-gray-500"
          >
            Andy Hunt, Dave Thomas
          </p>
        </div></a
      >
      <a href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer" className="flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition" target="_blank">
        <img alt="The Pragmatic Programmer: From Journeyman to Master" decoding="async" height="400" loading="lazy" src="../../MBbIYVtmB095.app/_astro/KE3PKV5sfioW.webp" width="300" className="rounded-lg shadow-md object-cover aspect-[3/4] object-cover" />
        <div className="gap-1 w-full">
          <h4 className="font-medium text-gray-700 text-sm dark:text-gray-200">The Pragmatic Programmer: From Journeyman to Master</h4>
          <p className="dark:text-gray-300 text-sm font-normal text-gray-500">Andy Hunt, Dave Thomas</p>
        </div>
        </a>
    </div>
  </div>
  <div className="flex flex-col gap-6 astro-BCKZLJ6K">
    <h3
      className="text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K"
    >
      People I learn from
    </h3>
    <div
      className="gap-8 astro-BCKZLJ6K grid tile"
      style={{'--min-tile-width': '120px'} as React.CSSProperties}
    >
      <a
        href="https://kentcdodds.com/"
        className="flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition"
        target="_blank"
        ><img
          alt="Kent C. Dodds"
          decoding="async"
          height="200"
          loading="lazy"
          src="../../MBbIYVtmB095.app/_astro/Nsw1GT07ckYU.webp"
          width="200"
          className="rounded-lg shadow-md object-cover aspect-square duration-300 transition object-cover"
        />
        <h4
          className="font-medium text-gray-700 text-sm dark:text-gray-200"
        >
          Kent C. Dodds
        </h4></a
      >
    </div>
  </div>
  <div className="flex flex-col gap-6 astro-BCKZLJ6K">
    <h3
      className="text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K"
    >
      Videos I watched
    </h3>
    <div
      className="gap-8 astro-BCKZLJ6K grid tile"
    style={{'--min-tile-width': '204px'} as React.CSSProperties}
    >
      <a
        href="https://youtu.be/TqfbAXCCVwE"
        className="flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition"
        target="_blank"
        ><img
          alt="Building Resilient Frontend Architecture • Monica Lent • GOTO 2019"
          decoding="async"
          height="270"
          loading="lazy"
          src="../../MBbIYVtmB095.app/_astro/rhok8ImtSz2Q.webp"
          width="480"
          className="rounded-lg shadow-md object-cover aspect-video object-cover"
        />
        <h4
          className="font-medium text-gray-700 text-sm dark:text-gray-200"
        >
          Building Resilient Frontend Architecture • Monica Lent • GOTO
          2019
        </h4></a
      >
    </div>
  </div>
  <div className="flex flex-col gap-6 astro-BCKZLJ6K">
    <h3
      className="text-gray-900 dark:text-gray-100 font-extrabold text-lg astro-BCKZLJ6K"
    >
      Media I follow
    </h3>
    <div
      className="gap-8 astro-BCKZLJ6K grid tile"
    style={{'--min-tile-width': '120px'} as React.CSSProperties}
    >
      <a
        href="https://www.youtube.com/c/Fireship"
        className="flex flex-col w-full duration-300 gap-3 hover:translate-y-2 transition"
        target="_blank"
        ><img
          alt="Fireship.io"
          decoding="async"
          height="200"
          loading="lazy"
          src="../../MBbIYVtmB095.app/_astro/6TmD4qgVbfia.webp"
          width="200"
          className="rounded-lg shadow-md object-cover aspect-square object-cover"
        />
        <div className="gap-1">
          <h4
            className="font-medium text-gray-700 text-sm dark:text-gray-200"
          >
            Fireship.io
          </h4>
          <p
            className="dark:text-gray-300 text-sm font-normal text-gray-500"
          >
            YouTube channel
          </p>
        </div></a
      >
    </div>
  </div>
</div>
</div>

    )}