import React, { useEffect, useState } from 'react'
import "./AboutCV.css"
import "../../../styles.css"
import { text } from "./aboutText"

const AboutCV = () => {

  const [balancedText1, setBalancedText1] = useState("");
  const [balancedText2, setBalancedText2] = useState("");

  useEffect(() => {
    const redistributeWords = () => {
      const words = text.split(' ');
      const totalWords = words.length;
      const targetWords1 = Math.ceil(totalWords / 2);
      const targetWords2 = totalWords - targetWords1;
  
      const part1 = words.slice(0, targetWords1).join(' ');
      const part2 = words.slice(targetWords1).join(' ');
  
      setBalancedText1(part1);
      setBalancedText2(part2);
    };

    redistributeWords();
  }, []);

  return (
    <div className="about main-container">
      <div className='about__text--1 text3 mb-3'>{balancedText1}</div>
      <div className='about__text--2 text3'>{balancedText2}</div>
    </div>

  )
}

export default AboutCV