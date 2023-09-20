'use client'
import {useState, useEffect} from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResizeScreen = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResizeScreen();

    window.addEventListener('resize', handleResizeScreen);
  }, []);

  return isMobile;
};

export default useMobile;
