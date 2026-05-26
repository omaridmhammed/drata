'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-clinic-gold/15 last:border-0 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
      >
        <span className="font-serif font-bold text-base md:text-lg text-clinic-navy group-hover:text-clinic-gold transition-colors duration-200">
          {question}
        </span>
        <div className={`p-1 rounded-full border transition-all duration-300 ${isOpen ? 'bg-clinic-navy border-clinic-gold text-clinic-gold rotate-180' : 'bg-transparent border-clinic-navy/10 text-clinic-navy/60 group-hover:border-clinic-gold/40 group-hover:text-clinic-gold'}`}>
          <ChevronDown className="w-4 h-4 shrink-0" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-clinic-slate leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-clinic-cream border border-clinic-gold/10 p-6 sm:p-8 rounded-2xl shadow-premium">
      {items.map((item, idx) => (
        <FAQItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
