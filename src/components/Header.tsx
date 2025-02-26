import Image from 'next/image';
import Logo from '../assets/sanity-monogram--red.svg';
import Search from '../assets/search.png';

// Simple interface for keeping track of the MenuItems structure
interface MenuItems {
  title: string;
  items: {
    title: string;
    items: {
      title: string;
      description?: string;
    }[];
  }[];
}

const Header = () => (
  <header className="w-full max-w-screen-xl mx-auto lg:px-4 lg:py-8 lg:flex items-center justify-between">
    <section className="flex flex-col lg:flex-row lg:gap-4 items-center border border-slate-200 lg:border-0">
      <a href="#" className="p-4 lg:p-0">
        <Image
          className="dark:invert"
          src={Logo}
          alt="Sanity.io logo"
          width={35}
          height={35}
          priority
        />
      </a>
      <nav id="main-navigation" className="w-full lg:w-auto ">
        <ul className="relative flex gap-4 justify-center lg:justify-start w-full lg:w-auto">
          {MenuItems.map((item, id) => (
            <li
              key={id}
              className="group lg:relative focus-within:bg-white"
            >
              <h2
                className="cursor-pointer rounded-md text-black hover:bg-white p-2 block text-sm group-hover:bg-white"
                tabIndex={0}
              >
                {item.title}
              </h2>
              {item.items?.length > 0 && (
                <div className="sub-menu w-full lg:w-auto bg-background absolute hidden group-hover:flex group-focus-within:flex top-full left-0 gap-8 shadow-lg p-8 rounded-lg">
                  {item.items.map((subItem, id) => (
                    <div className="sub-menu-row" key={id}>
                      <h3
                        className="uppercase text-sm mb-4 text-black/60"
                        tabIndex={0}
                      >
                        {subItem.title}
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {subItem.items.map((subSubItem, id) => (
                          <li key={id}>
                            <a href="#">
                              <h4
                                className="text-base lg:text-nowrap"
                                tabIndex={0}
                              >
                                {subSubItem.title}
                              </h4>
                              <p className="lg:text-nowrap text-black/60">
                                {subSubItem.description}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </section>
    <section className="border border-slate-200 lg:border-0">
      <nav>
        <ul className="flex gap-4 items-center justify-center lg:justify-end">
          <li>
            <button className="p-4 text-sm">
              <Image
                src={Search}
                alt="Search for content"
                width={21}
                height={21}
              />
            </button>
          </li>
          <li>
            <a href="#" className="p-2 lg:p-4 text-sm text-nowrap">
              Log in
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black lg:bg-white rounded-md p-2 lg:px-8 lg:py-2 lg:shadow-sm block text-sm text-nowrap"
            >
              Contact sales
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black lg:text-white lg:bg-black rounded-md p-2 lg:px-8 lg:py-2 block text-sm text-nowrap"
            >
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
);

export default Header;

// Mock data, should be moved to Sanity
const MenuItems: MenuItems[] = [
  {
    title: 'Product',
    items: [
      {
        title: 'Platform',
        items: [
          {
            title: 'Sanity Studio',
            description: 'Flexible editing environment',
          },
          {
            title: 'APIs',
            description: 'connect to anything',
          },
          {
            title: 'Content Lake',
            description: 'Fully decoupled back end',
          },
          {
            title: 'Sanity Create',
            description: 'Better writing experience',
          },
        ],
      },
      {
        title: 'Features',
        items: [
          {
            title: 'Real-time collaboration',
            description: 'Fearlessly work with content',
          },
          {
            title: 'Price content querying',
            description: 'Treat content as data with GROQ',
          },
          {
            title: 'Localization',
            description: 'Coherent messaging across territories',
          },
          {
            title: 'AI Assist',
            description: 'Built-in AI assistent',
          },
        ],
      },
    ],
  },
  {
    title: 'Developers',
    items: [
      {
        title: 'Platform',
        items: [
          {
            title: 'Documentation',
          },
          {
            title: 'Courses',
          },
          {
            title: 'Guides',
          },
          {
            title: 'API References',
          },
          {
            title: 'Sanity UI',
          },
          {
            title: 'GROQ cheat sheet',
          },
        ],
      },
      {
        title: 'Build and share',
        items: [
          {
            title: 'Templates',
          },
          {
            title: 'Tools and plugins',
          },
          {
            title: 'Schemas and snippets',
          },
          {
            title: 'Project showcase',
          },
          {
            title: 'Share your work',
          },
        ],
      },
    ],
  },
  {
    title: 'Enterprise',
    items: [],
  },
  {
    title: 'Pricing',
    items: [],
  },
];
