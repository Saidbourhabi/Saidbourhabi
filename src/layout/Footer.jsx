import React from 'react';
import logo from '../assets/svg/weblogoblack.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full bg-[#AEFE15]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                            draggable={false}
                            width={110}
                            height={24}
                        />
                    </div>

                    {/* All Rights Reserved */}
                    <div className="text-sm text-[#000000]">
                        © {currentYear} All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;