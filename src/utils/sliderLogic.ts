export const nextIndex = (current: number, length: number): number => {
   return current + 1 >= length - 1 ? 0 : current + 1;
};

export const prevIndex = (current: number, length: number): number => {
  return current - 1 < 0 ? length - 2 : current - 1;
};