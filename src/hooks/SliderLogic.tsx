import { useState } from "react";

export const useSlider = (length: number) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  return { index, prev, next };
};