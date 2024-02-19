import MainSection from "@/components/main";
import Misc from "@/components/mics";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <body className="flex justify-center bg-gray-50 dark:bg-gray-900 overflow-x-hidden xl:left-7 xl:relative">
     <button aria-label="Theme toggle" className="dark:text-gray-200 bg-gray-100 dark:bg-gray-600 focus:ring-primary-500 items-center justify-center text-gray-400 bottom-3 fixed h-10 inline-flex left-3 rounded-lg shadow-xl transition w-10 z-10" id="theme-toggle"><svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg><svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg></button>
      <MainSection />
      <Navbar />
      <Misc />
       </body>

  );
}
