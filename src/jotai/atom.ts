import { count } from 'console';
import { atom } from 'jotai';

export const countAtom = atom(0);

export const dabbleCountAtom = atom((get) => get(countAtom) * 2);

export const disCountAtom = atom(
  (get) => get(countAtom),
  (get, set, num) => {
    set(countAtom, get(countAtom) - 5);
  }
);

export const writeOnly = atom(null, (set, get, initial) => {});
export const writeAndReadOnly = atom(
  (get) => get(countAtom),
  (get, set, initial) => {}
);
