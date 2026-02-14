import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    // Form reference for EmailJS
    const formRef = useRef(null);
    
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    // State for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // EmailJS configuration
            // Replace these with your actual EmailJS credentials
            // You can get these from https://www.emailjs.com/
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';
            
            // Send email using EmailJS
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            
            // Success - reset form and show success message
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setSubmitStatus('success');
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            
        } catch (error) {
            // Error handling
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="min-h-screen w-full bg-transparent py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Big Contact Us Headline */}
                <div className="text-center mb-16">
                    <h1 className="uppercase text-6xl sm:text-7xl md:text-8xl font-bold text-[#AEFE15] mb-4 tracking-tight">
                        Contact Me
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                        Get in touch with us. We'd love to hear from you.
                    </p>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-sm  p-8 sm:p-10 border border-white/10">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Name <span className="text-[#AEFE15]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AEFE15] focus:border-transparent transition-all"
                                placeholder="Your full name"
                            />
                        </div>
                        
                        {/* Email Field */}
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Email <span className="text-[#AEFE15]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AEFE15] focus:border-transparent transition-all"
                                placeholder="Your email address"
                            />
                        </div>
                        
                        {/* Phone Field */}
                        <div>
                            <label 
                                htmlFor="phone" 
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AEFE15] focus:border-transparent transition-all"
                                placeholder="Your phone number (optional)"
                            />
                        </div>
                        
                        {/* Subject Field */}
                        <div>
                            <label 
                                htmlFor="subject" 
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Subject <span className="text-[#AEFE15]">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AEFE15] focus:border-transparent transition-all"
                                placeholder="What is this regarding?"
                            />
                        </div>
                        
                        {/* Message Field */}
                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Message <span className="text-[#AEFE15]">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#AEFE15] focus:border-transparent transition-all resize-none"
                                placeholder="Tell us more about your inquiry..."
                            />
                        </div>
                        
                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-[#AEFE15] text-[#1a1a1a] font-semibold  hover:bg-[#ffffff] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform "
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        
                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50  text-green-400">
                                ✓ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50  text-red-400">
                                ✗ Failed to send message. Please try again or contact us directly.
                            </div>
                        )}
                    </form>
                </div>
                
                {/* Additional Contact Info */}
                <div className="mt-12 text-center text-gray-400">
                    <p className="text-sm">
                        Or reach us directly at{' '}
                        <a 
                            href="mailto:abousaid11araqi@gmail.com" 
                            className="text-[#AEFE15] hover:text-white transition-colors"
                        >
                            saidbourhabi@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;