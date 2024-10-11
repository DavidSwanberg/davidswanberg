import { useEffect } from "react";
import gsap from "gsap";

export default function useHoverImage(ref, isHovered) {

  useEffect(() => {
    if (!ref.current) return;
    const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    if(isHovered) {  
    const createRandomMovement = () => {
      const randomWithExclusion = (min, max, avoidMin, avoidMax) => {
        let rand;
        do {
          rand = gsap.utils.random(min, max, true);
        } while (rand > avoidMin && rand < avoidMax);
        return rand;
      };

      floatTimeline.to(ref.current, {
        x: randomWithExclusion(-20, 20, -10, 10),  // Excludes the range between -10 and 10 for x
        y: randomWithExclusion(-20, 20, -10, 10), 
        duration: gsap.utils.random(2, 3),  // Random duration between 1-3 seconds
        ease: 'none',
      });
    };

    // Create an infinite loop for random movement
    floatTimeline.call(createRandomMovement);
    floatTimeline.add(createRandomMovement(), "+=0");
  }

  if(!isHovered) {
    floatTimeline.kill();
  }

    return () => {
      floatTimeline.kill();  // Cleanup the timeline on unmount
    };
  }, [isHovered, ref]);
};
