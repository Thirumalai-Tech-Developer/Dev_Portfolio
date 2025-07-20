import React, { useState, useEffect } from 'react';

interface TypingProps {
  text: string;
  speed?: number;
  delay?: number;
}

const Typing: React.FC<TypingProps> = ({ text, speed = 300, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex(0);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentIndex, speed, delay, text]);

  return <span>{displayedText}</span>;
};

export default Typing;
