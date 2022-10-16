import { atom } from 'jotai';

const baseDurationAtom = atom(15);
const elapsedTimeAtom = atom(0);
const timerAtom = atom<{ id: number; started: number } | null>(null);

export const startTimerAtom = atom(
  null,
  (get, set, action: 'start' | 'stop') => {
    if (action === 'start') {
      if (timerAtom !== null) {
        return;
      }
      if (get(elapsedTimeAtom) >= get(baseDurationAtom)) {
        return;
      }
    }
    const tick = () => {
      const now = performance.now();
      const timer = get(timerAtom);
      
    };

    if (action === 'stop') {
      const timer = get(timerAtom);
      if (timer) {
        clearTimeout(timer.id);
        set(timerAtom, null);
      }
    }
  }
);
