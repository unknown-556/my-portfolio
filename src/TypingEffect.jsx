import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', color: '#FFF' }}>
      {displayedText}
      <span className="typing-cursor">|</span> {/* Cursor effect */}
    </p>
  );
};

export default TypingEffect;
