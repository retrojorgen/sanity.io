import Image from 'next/image';
import Logo from '../assets/sanity-monogram--red.png';

const Header = () => (
  <header>
    <Image
      className="dark:invert"
      src={Logo}
      alt="Sanity.io logo"
      width={35}
      height={35}
      priority
    />
    <nav>
      <ul>
        {MenuItems.map((item, id) => (
          <li key={id}>
            <h2>{item.title}</h2>
            <div className="sub-menu">
              {item.items.map((subItem, id) => (
                <div className="sub-menu-row" key={id}>
                  <h3>{subItem.title}</h3>
                  <ul>
                    {subItem.items.map((subSubItem, id) => (
                      <li key={id}>
                        <h4>{subSubItem.title}</h4>
                        <p>{subSubItem.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </nav>
  </header>
);

export default Header;

// should be put in Sanity datastore
const MenuItems = [
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
];
