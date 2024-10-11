import { useState, useRef } from "react";
import useHoverImage from "@/hooks/use-hover-image";

export default function Link({ href, hoverImg, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useHoverImage(ref, isHovered);

  return (
    <a href={href} target="_blank" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="font-sans relative underline h-fit">
      <div className={isHovered ? 'opacity-0' : 'opacity-100'}>{children}</div>
      {isHovered && 
        <span ref={ref} className="absolute inset-0 z-[100]">
          <img className="z-1 scale-[300%] w-auto" src={hoverImg} alt="decorative hover image" />
        </span>
      }
    </a>
  )
};
