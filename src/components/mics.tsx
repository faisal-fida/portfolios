import { CustomSVG, icons } from '../components';

export default function Misc() {
    return (
        <button
aria-label="Theme toggle"
className="dark:text-gray-200 bg-gray-100 dark:bg-gray-600 focus:ring-primary-500 items-center justify-center text-gray-400 bottom-3 fixed h-10 inline-flex left-3 rounded-lg shadow-xl transition w-10 z-10"
id="theme-toggle"
>
<CustomSVG path={icons.icon1}/>
<CustomSVG path={icons.icon1}/>
</button>
     );}