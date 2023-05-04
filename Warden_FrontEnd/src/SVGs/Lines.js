import { useRef,useState,useEffect } from "react";

export const ConnectorLines = () => {
    return (
      <div>
        <svg width="100%" viewBox="0 0 100 100">
        {/* Draw the line */}
        <line x1="10" y1="50" x2="90" y2="50" fill="none" stroke="black" strokeWidth="1" />

        {/* Draw the circles at the ends of the line */}
        <circle cx="10" cy="50" r="2" fill="#0d6efd" stroke="black" strokeWidth="1"  />
        <circle cx="90" cy="50" r="2" fill="#0d6efd" stroke="black" strokeWidth="1" />
      </svg>
      </div>
    );
  }
  


export const QuestionLine = ({index}) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.getBBox().width);
    }
  }, [textRef]);

  const renderSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50">
      <line x1="0" y1="25" x2={`calc(50% - ${textWidth / 2}px - 5px)`} y2="25" stroke="#0d6efd" strokeWidth="2" />
      <text ref={textRef} x="50%" y="29" textAnchor="middle" fontFamily="Verdana" fontSize="14">Question {index+1}</text>
      <line x1={`calc(50% + ${textWidth / 2}px + 5px)`} y1="25" x2="100%" y2="25" stroke="#0d6efd" strokeWidth="2" />
    </svg>
  );

  return renderSVG();
};

export const SectionBreakLine = ({section_name}) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.getBBox().width);
    }
  }, [textRef]);

  const renderSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50">
      <line x1="0" y1="25" x2={`calc(50% - ${textWidth / 2}px - 5px)`} y2="25" stroke="#0d6efd" strokeWidth="2" />
      <text ref={textRef} x="50%" y="29" textAnchor="middle" fontFamily="Verdana" fontSize="24">{section_name}</text>
      <line x1={`calc(50% + ${textWidth / 2}px + 5px)`} y1="25" x2="100%" y2="25" stroke="#0d6efd" strokeWidth="2" />
    </svg>
  );

  return renderSVG();
};



  