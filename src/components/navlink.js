import { useState, useRef } from "react";
import useHoverImage from "@/hooks/use-hover-image";

export default function NavLink({ id, hoverItem, itemIsText=false, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  useHoverImage(ref, isHovered);

  return (
    <button onClick={()=>handleScrollTo(id)} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="font-sans relative h-fit">
      <div className={isHovered ? 'opacity-0' : 'opacity-100'}>{children}</div>
      {isHovered && !itemIsText && 
        <span ref={ref} className="absolute inset-0 z-[100]">
          <img className="z-1 scale-[300%] w-auto" src={hoverItem} alt="decorative hover image" />
        </span>
      }
      {isHovered && itemIsText && <span className="absolute inset-0 z-[100]">{hoverItem}</span>}
    </button>
  )
};
