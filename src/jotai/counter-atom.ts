import { atom } from 'jotai';

/**
 * Counter
 *  **/
const initialCount = atom(0);
export const countAtom = atom(
  (get) => get(initialCount),
  (get, set) => {
    set(initialCount, get(initialCount) + 1);
  }
);
