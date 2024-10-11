import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    gsap.set(ref.current, { autoAlpha: 0 });
    gsap.fromTo(ref.current, { autoAlpha: 0, x: 15 }, {
      autoAlpha: 1,
      x: 0,
      delay: 0.1,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => setIsLoaded(true),
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    });
  }, [children, isLoaded]);
    return <div className="w-full" ref={ref}>{children}</div>;
};

export default FadeIn;