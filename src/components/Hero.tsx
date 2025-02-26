import Image from 'next/image';
import HeroImage from '../assets/hero-image.png';
import FrameIcon from '../assets/frame-icon.svg';

const Hero = () => (
  <section className="w-full mt-20 max-w-screen-xl mx-auto flex justify-between items-stretch">
    <div className="w-1/2 pb-40 pt-10">
      <h1 className="text-7xl mb-8">The Content Operating System</h1>
      <p className="text-2xl mb-8">
        A fully customizable all-code backend for content-driven
        websites and apps—their builders and creators.
      </p>
      <nav>
        <ul className="flex flex-wrap gap-4 w-3/4">
          <li>
            <a
              href="#"
              className="text-white bg-black hover:bg-slate-800 rounded-lg px-8 py-3 block transition duration-150 ease-in-out"
            >
              Start building
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black bg-white hover:bg-black/5 rounded-lg px-8 py-3 shadow-sm block font-semibold transition duration-150 ease-in-out"
            >
              Book a demo
            </a>
          </li>
          <li>
            <button className="pl-8 pr-6 py-3 rounded-lg border border-slate-300 flex gap-4">
              npm create sanity@latest{' '}
              <Image src={FrameIcon} alt="Icon illustrates copying" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div className="w-1/2 flex gap-8 items-center relative">
      <Image
        className="absolute top-0 left-0 h-full w-auto max-w-none"
        src={HeroImage}
        alt="Sanity hero illustration, shows Sanity Studio"
        priority
      />
    </div>
  </section>
);

export default Hero;
