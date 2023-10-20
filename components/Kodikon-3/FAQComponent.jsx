"use client";
import faqData from "./FAQData";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import TitleComponent from "./HelperComponents/TitleComponent";
const FAQ = () => {
  const initialOpenState = {};
  faqData.forEach((ele) => {
    initialOpenState[ele.id] = false;
  });

  const [isOpen, setIsOpen] = useState(initialOpenState);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typingIntervals, setTypingIntervals] = useState({});

  const toggleOpen = (id) => {
    setIsOpen((prevState) => {
      const updatedState = {};
      for (const key in prevState) {
        updatedState[key] = key === id ? !prevState[key] : false;
      }
      return updatedState;
    });
    if (!isOpen[id]) {
        clearInterval(typingIntervals[id]);
        const newTypingIntervals = { ...typingIntervals };
        delete newTypingIntervals[id];
        setTypingIntervals(newTypingIntervals);
      }
  };

  useEffect(() => {
    const initialDisplayedAnswer = {};
    faqData.forEach((ele) => {
      initialDisplayedAnswer[ele.id] = "";
    });
    setDisplayedAnswer(initialDisplayedAnswer);
    faqData.forEach((ele) => {
        if (isOpen[ele.id]) {
          if (!typingIntervals[ele.id]) {
            const answerLength = ele.answer.length;
            let currentIndex = 0;
            const timer = setInterval(() => {
              setDisplayedAnswer((prevDisplayedAnswer) => ({
                ...prevDisplayedAnswer,
                [ele.id]: ele.answer.slice(0, currentIndex + 1),
              }));
              currentIndex++;
              if (currentIndex === answerLength) {
                clearInterval(timer);
              }
            }, 30);
  
            setTypingIntervals((prevTypingIntervals) => ({
              ...prevTypingIntervals,
              [ele.id]: timer,
            }));
          }
        }
      });
  }, [isOpen, faqData, typingIntervals]);

  return (
    <div className="flex flex-col w-full h-fit gap-6" id="faq">
      <TitleComponent titleData={"FAQ"} />
      <div className="flex flex-col gap-3 divide-y-2 divide-dashed px-2 pt-5 md:px-0 text-white">
        {faqData.map((ele, index) => {
          return (
            <div key={index}>
              <div

                className=" flex w-[100%] justify-between items-center text-xl md:text-2xl px-10 pt-3 cursor-pointer "
                onClick={() => toggleOpen(ele.id)}
              >
                <span className="w-[80%] ">~$ {ele.question}</span>
                {isOpen[ele.id] ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isOpen[ele.id] && (
                <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 my-4 flex w-[100%] justify-between items-center md:text-xl px-12 p-3  text-justify">
                  {" "}
                  {">>"} {displayedAnswer[ele.id]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
