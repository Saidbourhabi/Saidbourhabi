import React from 'react';
import photoUrl from '../../assets/images/saidbourhabi.jpg';

const About = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-black text-white py-20 px-6">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Photo on the left */}
                    <div className="flex justify-center order-2 md:order-1">
                        <div className="relative w-full max-w-sm">
                            <img
                                src={photoUrl}
                                alt="Said Bourhabi"
                                className="w-full h-auto border-4 border-[#AEFE15]  object-cover"
                                loading="lazy"
                            />
                            {/* Optional accent overlay */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#AEFE15] rounded-lg opacity-20 -z-10"></div>
                        </div>
                    </div>

                    {/* Description on the right */}
                    <div className="order-1 md:order-2 flex flex-col gap-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                                About
                                <span className="text-[#AEFE15]"> Me</span>
                            </h1>
                        </div>

                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Welcome to my digital space. I'm a passionate developer and designer dedicated to creating 
                                beautiful, functional digital experiences that make an impact.
                            </p>
                            
                            <p>
                                With a strong foundation in both front-end and design, I specialize in crafting modern web 
                                applications that blend aesthetics with performance. I'm driven by the challenge of solving 
                                complex problems and bringing creative visions to life through code.
                            </p>

                            <p>
                                When I'm not coding or designing, you'll find me exploring new technologies, contributing to 
                                open-source projects, or collaborating with amazing teams to push the boundaries of what's possible 
                                on the web.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-[#AEFE15] text-black font-semibold  hover:bg-white "
                            >
                                Let's Connect
                            </a>
                        </div>

                        {/* Stats or Skills */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700">
                            <div>
                                <p className="text-3xl font-bold text-[#AEFE15]">50+</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#AEFE15]">5+</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Years</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#AEFE15]">100%</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Dedicated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;