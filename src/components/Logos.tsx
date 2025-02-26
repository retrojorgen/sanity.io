import Image from 'next/image';

import PartnerLogoFigma from '../assets/partner-logos/1-figma.svg';
import PartnerLogoShopify from '../assets/partner-logos/2-shopify.svg';
import PartnerLogoLinear from '../assets/partner-logos/3-linear.svg';
import PartnerLogoArcteryx from '../assets/partner-logos/4-arcteryx.svg';
import PartnerLogoTecovas from '../assets/partner-logos/5-tecovas.svg';
import PartnerLogoMarimekko from '../assets/partner-logos/6-marimekko.svg';
import PartnerLogoBrex from '../assets/partner-logos/7-brex.svg';
import PartnerLogoLVHM from '../assets/partner-logos/8-lvmh.svg';
import PartnerLogoAbleton from '../assets/partner-logos/9-ableton.svg';
import PartnerLogoClerk from '../assets/partner-logos/10-clerk.svg';
import PartnerLogoLoom from '../assets/partner-logos/11-loom.svg';
import PartnerLogoTailScale from '../assets/partner-logos/12-tailscale.svg';
import PartnerLogoRetool from '../assets/partner-logos/13-retool.svg';
import PartnerLogoElastic from '../assets/partner-logos/14-elastic.svg';
import PartnerLogoPinecone from '../assets/partner-logos/15-pinecone.svg';
import PartnerLogoAnthropic from '../assets/partner-logos/16-anthropic.svg';
import PartnerLogoDBT from '../assets/partner-logos/17-dbt.svg';
import PartnerLogoReplit from '../assets/partner-logos/18-replit.svg';
import PartnerLogoMoma from '../assets/partner-logos/19-moma.svg';
import PartnerLogoSkims from '../assets/partner-logos/20-skims.svg';

const logoRows = [
  [
    PartnerLogoFigma,
    PartnerLogoShopify,
    PartnerLogoLinear,
    PartnerLogoSkims,
    PartnerLogoArcteryx,
    PartnerLogoTecovas,
    PartnerLogoMarimekko,
    PartnerLogoBrex,
    PartnerLogoLVHM,
    PartnerLogoAbleton,
  ],
  [
    PartnerLogoClerk,
    PartnerLogoLoom,
    PartnerLogoTailScale,
    PartnerLogoRetool,
    PartnerLogoElastic,
    PartnerLogoPinecone,
    PartnerLogoAnthropic,
    PartnerLogoDBT,
    PartnerLogoReplit,
    PartnerLogoMoma,
  ],
];

const Logos = () => (
  <section className="w-full max-w-screen-xl mx-auto pb-8">
    <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-4 w-full mb-4 lg:mb-0">
      <p className="pt-8 lg:pt-0 w-full lg:w-auto text-center lg:text-left text-nowrap uppercase -translate-y-2.5 text-sm text-black/60">
        Trusted by leaders and innovators
      </p>
      <div className="ruler w-full border border-slate-200" />
    </div>
    {logoRows.map((logos, id) => (
      <ul
        className="px-4 lg:px-0 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-8 lg:mt-8 items-center justify-between"
        key={id}
      >
        {logos.map((logo, id) => (
          <li key={id} className="w-2/12 lg:w-full">
            <Image
              src={logo}
              alt="Partner logo"
              className="max-w-full w-full"
            />
          </li>
        ))}
      </ul>
    ))}
  </section>
);

export default Logos;
