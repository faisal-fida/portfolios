import { CustomSVG, icons } from '../components';

export default function Navbar() {
    return ( 
        
        <nav
        className="flex-col gap-2 bg-white dark:bg-gray-800 h-fit hidden mt-20 p-2 rounded-lg shadow-md sticky top-8 w-max xl:flex"
id="sidebar"
>
<a
  href="#profile"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Profile section"
  data-tooltip="Profile"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#skills"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Skills section"
  data-tooltip="Skills"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#experience"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Work experience section"
  data-tooltip="Work experience"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#projects"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Projects section"
  data-tooltip="Projects"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#education"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Education section"
  data-tooltip="Education"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#testimonials"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="Testimonials section"
  data-tooltip="Testimonials"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a
><a
  href="#favorites"
  className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
  aria-label="My favorites section"
  data-tooltip="My favorites"
  data-tooltip-placement="left"
  ><CustomSVG path={icons.icon1}/></a>
</nav>

    );
}
