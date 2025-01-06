import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Example icon library

const FAQs = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  const faqs = [
    {
      id: "item-1",
      question: "What is FITNEXUS?",
      answer: "FITNEXUS is a platform for accessing gym memberships and fitness solutions.",
    },
    {
      id: "item-2",
      question: "What is FITNEXUS Monthly + PASS?",
      answer: "The Monthly + PASS gives you unlimited access to participating gyms for a month.",
    },
    {
      id: "item-3",
      question: "What gyms are near me?",
      answer: "Use our location-based search to find gyms near you.",
    },
    {
      id: "item-4",
      question: "What is a good price for a monthly membership?",
      answer: "Prices vary by gym, but we ensure competitive pricing through our platform.",
    },
    {
      id: "item-5",
      question: "What is the FITNEXUS gym day pass?",
      answer: "The gym day pass provides one-time access to a participating gym.",
    },
  ];

  return (
    <div className="m-10 space-y-8">
      <h1 className="text-left text-text-primary text-4xl font-extrabold mb-6">
        FAQs
      </h1>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger
              className="py-4  text-lg font-medium text-text-secondary transition items-start"
              onClick={() => handleToggle(item.id)}
            >
              <span
                className={`mr-2 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                  openItem === item.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {openItem === item.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
             <div className = "mr-auto">
             {item.question}
             </div>
            </AccordionTrigger>
            <AccordionContent
              className={`px-4 py-4 text-gray-800 shadow-lg rounded-md text-[17px] bg-primary  text-left ${
                openItem === item.id ? "block" : "hidden"
              }`}
              style={{
                transition: "all 0.3s ease",
              }}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
