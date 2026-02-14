import React from 'react';
import StaggeredMenu from '../components/StaggeredMenu';
import logo from '../assets/svg/weblogowhite.svg';

const Navbar = () => {
const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Media', ariaLabel: 'View our media', link: '/media' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
];

const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/saidbourhabigraphics' },
    { label: 'GitHub', link: 'https://github.com/Saidbourhabi' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/saidbourhabi' },
    { label: 'Behance', link: 'https://www.behance.net/saidbourhabi' },
];

return (
    <header className="fixed top-0 left-0 w-full z-50">
    <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#FFFEF7', '#AEFE15']}
        logoUrl={logo}
        accentColor="#AEFE15"
        isFixed={true}
      />
    </header>
  );
};

export default Navbar;
