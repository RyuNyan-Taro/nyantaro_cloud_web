'use client'

import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

interface HeaderProps {
  title?: string;
  animationSpeed?: number; // Controls the speed of animation
  animationRange?: number; // Controls how far the image moves
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Nyantaro Cloud",
  animationSpeed = 0.02,
  animationRange = 50,
}) => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 'center', y: '50%' });
  const animationRef = useRef<{ 
    direction: 'up' | 'down', 
    progress: number,
    currentY: number
  }>({ 
    direction: 'up', 
    progress: 50, // Start in the middle
    currentY: 50
  });
  
  useEffect(() => {
    const midPoint = 50;
    const min = midPoint - animationRange;
    const max = midPoint + animationRange;

    const animateBackground = () => {
      const currentY = animationRef.current.currentY;
      let newY;

      if (currentY <= min && animationRef.current.direction === 'up') {
        animationRef.current.direction = 'down';
      } else if (currentY >= max && animationRef.current.direction === 'down') {
        animationRef.current.direction = 'up';
      }

      if (animationRef.current.direction === 'up') {
        newY = Math.max(min, currentY - animationSpeed);
      } else {
        newY = Math.min(max, currentY + animationSpeed);
      }

      animationRef.current.progress = newY;
      animationRef.current.currentY = newY;

      setBackgroundPosition(prev => ({ ...prev, y: `${newY}%` }));
    };

    const intervalId = setInterval(animateBackground, 50);

    return () => clearInterval(intervalId);
  }, [animationSpeed, animationRange]);

  return (
    <header
      className="header-section"
      style={{
        backgroundImage: "url('/top.jpg')",
        backgroundSize: "cover",
        backgroundPosition: `${backgroundPosition.x} ${backgroundPosition.y}`,
        minHeight: "300px", // Increased height to better show background movement
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        transition: "background-position 0.2s ease-out" // Shorter transition for smoother animation
      }}
    >
      <h1 className="header-title">
        {title}
      </h1>
    </header>
  );
};

export default Header;
