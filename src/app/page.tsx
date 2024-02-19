import Navbar from "@/components/navbar";
import { Skills } from '@/components/skills';
import { Profile } from '../components/profile';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Testimonials } from '@/components/testimonials';
import { Favourites } from '@/components/favorites';

export default function Home() {
  return (
    <div
    className="flex justify-center bg-gray-50 dark:bg-gray-900 overflow-x-hidden xl:left-7 xl:relative"
  >

    <main
      className="lg:py-12 lg:space-y-6 max-w-6xl px-2 py-3 sm:px-8 sm:py-12 sm:space-y-6 space-y-4 w-full"
    >
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Favourites />
      </main>
      <Navbar />
       </div>

  );
}
