import React, { useState } from "react";

export default function Faq({ question, answer }) {

    const [answerActive, setAnswer] = useState(false)

  return (
    <div className={`border border-black rounded-xl ${answerActive ? 'mb-[15px]' : ''}`}>
      <button onClick={() => setAnswer(!answerActive)} className="font-semibold flex justify-between items-center w-full p-4">
        <h2>{question}</h2>
        <svg
          data-accordion-icon
          class="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {answerActive ? (
          <p className="p-4 border-t border-black">{answer}</p>
      ) : <></>}
    </div>
  );
}
