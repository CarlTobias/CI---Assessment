import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const MotionBoxBase = motion(Box);

const AnimatedInfoCard = ({ children, ...props }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <MotionBoxBase
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      {...props}
    >
      {children}
    </MotionBoxBase>
  );
};

export default AnimatedInfoCard;