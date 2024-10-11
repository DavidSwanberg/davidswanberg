import { useEffect, useRef, useState } from 'react';
import useHoverImage from '@/hooks/use-hover-image';

const Cta = ({ children, href, imgSrcs }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrcs.length);
    };

    const intervalId = setInterval(updateIndex, 4000);

    return () => clearInterval(intervalId);
  }, [imgSrcs.length]);


  useHoverImage(ref, isHovered);

  return (
    <a href={href} target="_blank" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="relative h-full flex justify-center items-center">
      <div className={isHovered ? 'opacity-0' : 'opacity-100'}>{children}</div>
      {isHovered &&(
        <span ref={ref} className="absolute inset-0 z-[100] flex justify-center">
          <img className="z-1 scale-[100%] w-auto" src={imgSrcs[currentIndex]} alt="cta image" />
        </span>
      )}
    </a>
  )
};

export default Cta;
