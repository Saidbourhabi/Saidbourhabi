import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
{
    question: "What services do you offer?",
    answer:
    "I specialize in web design, branding, UI/UX, and frontend development using modern technologies like React and Tailwind.",
},
{
    question: "How long does a project usually take?",
    answer:
    "Most projects take between 2–4 weeks depending on scope, features, and feedback cycles.",
},
{
    question: "Do you work with international clients?",
    answer:
    "Yes, I work remotely with clients worldwide and communicate via email, chat, and video calls.",
},
{
    question: "Do you offer ongoing support?",
    answer:
    "Absolutely. I provide post-launch support, updates, and maintenance when needed.",
},
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Headline */}
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-10 text-center leading-tight">
          Frequently <span className="text-[#AEFE15]">Asked</span> Questions
        </h2>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden hover:border-[#AEFE15] transition"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex cursor-pointer justify-between items-center px-6 py-5 font-semibold text-lg md:text-xl text-left bg-black transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`h-5 w-5 text-[#AEFE15] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 pb-5 text-[#AEFE15] overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
