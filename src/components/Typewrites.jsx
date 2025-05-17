import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const Typewriter = ({ text, delay = 50, ...props }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return <Text {...props}>{displayedText}</Text>;
};

export default Typewriter;