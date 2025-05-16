import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // If not using this, you can just concatenate class names

const BackgroundBeams = ({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  ];

  return (
    <div
      className={
        cn
          ? cn(
              "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
              className
            )
          : `absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] ${
              className || ""
            }`
      }
    >
      <svg
        className="pointer-events-none absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          initial={{ d: paths[0] }}
          animate={{ d: paths }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default BackgroundBeams;
