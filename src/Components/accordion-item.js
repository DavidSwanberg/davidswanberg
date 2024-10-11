import gsap from 'gsap';
import { useState, useEfect, useRef, useEffect } from 'react';
import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import FadeIn from './fadein';

const AccordionItem = ({ title, subtitle, children }) => {
    const ref = useRef(null);
    const innerRef = useRef(null);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          ref.current,
          { height: 0 },
          {
            duration: 0.3,
            height: 'auto',
            ease: 'power2.out',
          }
        );
        tl.fromTo(
         innerRef.current,
          { autoAlpha: 0, x: 10 },
          {
            duration: 0.5,
            x: 0,
            autoAlpha: 1,
            ease: 'power2.out',
          }
        );
    
        if (!isShown) {
          tl.reverse(0);
        }
    }, [isShown]);
    return (
      <li className="accordion-item w-full py-4 relative">
        <button className="w-full" onClick={() => setIsShown((current) => !current)}>
          <div className="flex w-full justify-between">
            <div className="block text-left">
              <h4 className="text-3xl">{title}</h4>
              <p className="pt-2">{subtitle}</p>
            </div>
            <div className="text-3xl items-center pr-2 flex">
              {isShown ? <PiMinusThin /> : <PiPlusThin />}
            </div>
          </div>
        </button>
        <div ref={ref} className="w-full text-left">
          <div ref={innerRef} className="pt-6">{children}</div>
        </div>
      </li>
    );

};

export default AccordionItem;