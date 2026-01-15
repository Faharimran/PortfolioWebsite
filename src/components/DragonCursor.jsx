import React, { useEffect, useState } from 'react';
import crayonNormal from '/src/assets/Crayon2.png';
import crayonHover from '/src/assets/Crayon.png';

const DragonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-transform duration-100"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img 
        src={isPointer ? crayonHover : crayonNormal} 
        alt="crayon cursor" 
        className={`w-12 h-12 transition-all ${isPointer ? 'scale-125 rotate-6' : 'scale-100 rotate-0'}`}
      />
    </div>
  );
};

export default DragonCursor;