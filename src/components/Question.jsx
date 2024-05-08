import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";

const data = [
  {
    question: "Do you offer freelancers?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question:
      "What's the gurantee that I will be satisfied with the hired talent?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
];

const Question = () => {
  const [show, setShow] = useState(-1);

  // Function to show the answer on click
  const handleClick = (index) => {
    setShow(index);
  };

  return (
    <div className="relative flex flex-col md:w-1/2 w-full h-full">
      {data.map((item, index) => {
        return (
          <Accordion
            question={item.question}
            answer={item.answer}
            id={index}
            handleClick={handleClick}
            show={show}
          />
        );
      })}
    </div>
  );
};

export default Question;
