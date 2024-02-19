import { Skills } from '@/components/skills';
import { Profile } from '../components/profile';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Testimonials } from '@/components/testimonials';
import { Favourites } from '@/components/favorites';

export default function MainSection() {
    return (
        <main className="lg:py-20 lg:space-y-8 max-w-5xl px-2 py-3 sm:px-8 sm:py-12 sm:space-y-6 space-y-4 w-full">
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Favourites />
      </main>
    )}