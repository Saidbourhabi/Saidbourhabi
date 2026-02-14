import React from 'react';
import { Link } from 'react-router-dom';
import LogoLoop from '../../components/LogoLoop';


// react-icons
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiVite,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobexd,
    SiWebflow,
    SiFramer,

} from 'react-icons/si';
import { FaBehance, FaLaravel, FaLinkedinIn, FaRedditAlien, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
  import {FaGithub, } from 'react-icons/fa';

// Import design images for preview
import lockerkitP1 from '../../assets/images/lockerkitP1.jpg';
import lockerkitP2 from '../../assets/images/lockerkitP2.jpg';
import lockerkitP3 from '../../assets/images/lockerkitP3.jpg';
import lockerkitP4 from '../../assets/images/lockerkitP4.jpg';
import { FaXTwitter } from 'react-icons/fa6';
import FAQ from '../../components/FAQ';

const Home = () => {
  const logos = [
    { node: <SiReact />, title: 'React' },
    { node: <FaLaravel />, title: 'Laravel' },
    { node: <SiNextdotjs />, title: 'Next.js' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS' },
    { node: <SiJavascript />, title: 'JavaScript' },
    { node: <SiTypescript />, title: 'TypeScript' },
    { node: <SiVite />, title: 'Vite' },
    { node: <SiAdobephotoshop />, title: 'Adobe Photoshop' },
    { node: <SiAdobeillustrator />, title: 'Adobe Illustrator' },
    { node: <SiAdobexd />, title: 'Adobe xd' },
    { node: <SiWebflow />, title: 'Webflow' },
    { node: <SiFramer />, title: 'Framer' },
  ];

  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that engage users and drive conversions',
    },
    {
      title: 'Branding',
      description: 'Complete brand identity systems from logos to style guides',
    },
    {
      title: 'UI/UX',
      description: 'User-centered design focused on experience and aesthetics',
    },
    {
      title: 'Development',
      description: 'Modern, scalable web applications built with latest technologies',
    }
  ];

  const recentWork = [
    { image: lockerkitP1, title: 'Sports Branding' },
    { image: lockerkitP2, title: 'Team Identity' },
    { image: lockerkitP3, title: 'Campaign Design' },
    { image: lockerkitP4, title: 'Brand Suite' }
  ];

  const socials = [
    { name: 'Reddit', href: 'https://reddit.com/yourhandle', icon: <FaRedditAlien /> },
    { name: 'telegram', href: 'https://telegram.com/yourhandle', icon: <FaTelegramPlane /> },
    { name: 'X', href: 'https://x.com/yourhandle', icon: <FaXTwitter /> },
    { name: 'Whatsapp', href: 'https://wa.me/2126190058', icon: <FaWhatsapp /> },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-tight leading-tight">
              Creative
              <br />
              <span className="text-[#AEFE15]">Designer</span>
              <br />
              & Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into beautiful digital experiences with code and creativity
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/media"
                className="px-8 py-4 bg-[#AEFE15] text-black font-bold  hover:bg-white transition-all duration-300"
              >
                View My Work 
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-[#AEFE15] text-[#AEFE15] font-bold  hover:bg-[#AEFE15] hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white mb-4 text-center">
            What I <span className="text-[#AEFE15]">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg text-center mb-16 max-w-2xl mx-auto">
            A complete range of design and development services to bring your vision to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-black  border border-white hover:border-[#AEFE15] transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* RECENT WORK PREVIEW */}
<section className="py-20 px-6 bg-black overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-12">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-white">
          Recent <span className="text-[#AEFE15]">Work</span>
        </h2>
      </div>

      <Link
        to="/media"
        className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#AEFE15] text-black font-bold hover:bg-white transition-all duration-300"
      >
        View All
      </Link>
    </div>

    {/* MOBILE: horizontal scroll | DESKTOP: grid */}
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth pb-4">
      
      {recentWork.map((work, index) => (
        <div
          key={index}
          className="group relative overflow-hidden h-64 min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-start cursor-pointer "
        >
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg text-center">
                {work.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile Button */}
    <Link
      to="/media"
      className="md:hidden w-full py-3 bg-[#AEFE15] text-black font-bold hover:bg-white transition-all duration-300 text-center flex items-center justify-center gap-2"
    >
      View All Projects
    </Link>
  </div>
</section>


      {/* TECH STACK SECTION */}
      <section className="relative w-full py-10 bg-[#AEFE15] text-black overflow-hidden">
        <LogoLoop
          logos={logos}
          speed={120}
          direction="right"
          logoHeight={50}
          gap={40}
          mobileLogoHeight={32}
          mobileGap={20}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </section>


      {/* FOLLOW ME SECTION */}
      <section className="py-12 px-6 bg-black border-t border-b border-[#AEFE15] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-3xl md:text-4xl font-bold">Follow me on</h3>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="p-3  border border-white hover:bg-[#AEFE15] hover:text-black transition-colors text-2xl"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#AEFE15] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold uppercase text-white mb-6">
            Let's Work <span className="text-[#AEFE15]">Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? Let's create something amazing
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#AEFE15] text-black font-bold text-lg  hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch 
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
