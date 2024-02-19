export default function Navbar() {
    return ( 
        <nav className="flex-col gap-2 bg-white dark:bg-gray-800 h-fit hidden mt-20 p-2 rounded-lg shadow-md sticky top-8 w-max xl:flex" id="sidebar">
    <a href="#profile" className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5" aria-label="Profile section" data-tooltip="Profile" data-tooltip-placement="left" aria-describedby="tooltip-xPZFzo6-">
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a href="#skills" className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5" aria-label="Skills section" data-tooltip="Skills" data-tooltip-placement="left" aria-describedby="tooltip-Nhdfr1dC">
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a
        href="#experience"
        className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
        aria-label="Work experience section"
        data-tooltip="Work experience"
        data-tooltip-placement="left"
        aria-describedby="tooltip-koqWE1sh"
    >
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a href="#projects" className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5" aria-label="Projects section" data-tooltip="Projects" data-tooltip-placement="left" aria-describedby="tooltip-iGwUdZGh">
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a
        href="#education"
        className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
        aria-label="Education section"
        data-tooltip="Education"
        data-tooltip-placement="left"
        aria-describedby="tooltip-E9V_0dDw"
        aria-current="page"
    >
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a
        href="#testimonials"
        className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
        aria-label="Testimonials section"
        data-tooltip="Testimonials"
        data-tooltip-placement="left"
        aria-describedby="tooltip-1-qdWKZt"
    >
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
    <a
        href="#favorites"
        className="rounded-lg transition h-10 inline-flex items-center justify-center w-10 astro-5QZLS6E5"
        aria-label="My favorites section"
        data-tooltip="My favorites"
        data-tooltip-placement="left"
        aria-describedby="tooltip-abeypNuR"
    >
        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>
    </a>
</nav>

    );
}
