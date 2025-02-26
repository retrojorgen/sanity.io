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
  <header className="w-full max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-between">
    <section className="flex gap-8 items-center">
      <a href="#">
        <Image
          className="dark:invert"
          src={Logo}
          alt="Sanity.io logo"
          width={35}
          height={35}
          priority
        />
      </a>
      <nav id="main-navigation">
        <ul className="flex gap-2">
          {MenuItems.map((item, id) => (
            <li key={id} className="group relative">
              <h2 className="cursor-pointer text-black hover:bg-white rounded-lg p-4 block text-base group-hover:bg-white">
                {item.title}
              </h2>
              {item.items?.length > 0 && (
                <div className="sub-menu bg-background absolute hidden group-hover:flex top-full left-0 gap-8 shadow-lg p-8 rounded-lg">
                  {item.items.map((subItem, id) => (
                    <div className="sub-menu-row" key={id}>
                      <h3 className="uppercase text-sm mb-4 text-black/60">
                        {subItem.title}
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {subItem.items.map((subSubItem, id) => (
                          <li key={id}>
                            <a href="#">
                              <h4 className="text-lg text-nowrap">
                                {subSubItem.title}
                              </h4>
                              <p className="text-nowrap text-black/60">
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
    <section>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <button className="p-4">
              <Image
                src={Search}
                alt="Search for content"
                width={21}
                height={21}
              />
            </button>
          </li>
          <li>
            <button className="p-4">Log in</button>
          </li>
          <li>
            <a
              href="#"
              className="text-black bg-white rounded-lg px-8 py-2 shadow-sm block"
            >
              Contact sales
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white bg-black rounded-lg px-8 py-2 block"
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
