"use client";

import { ChevronDown } from "lucide-react";
import { useState, type CSSProperties } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            className={`faq-item${isOpen ? " is-open" : ""}`}
            key={item.question}
            data-reveal
            style={{ "--reveal-delay": `${index * 50}ms` } as CSSProperties}
          >
            <h3 className="faq-heading">
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="faq-number">0{index + 1}</span>
                <span>{item.question}</span>
                <span className="faq-icon">
                  <ChevronDown aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              className="faq-answer"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              aria-hidden={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
