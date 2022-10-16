import { atom } from "jotai";

const baseDurationAtom = atom(15);
const elapsedTimeAtom = atom(0);
const timerAtom = atom<{ id: number | any; started: number } | null>(null);

const startTimerAtom = atom(null, (get, set, action: "start" | "stop") => {
  if (action === "start") {
    if (get(timerAtom) !== null) {
      // timer is already started
      return;
    }
    if (get(elapsedTimeAtom) >= get(baseDurationAtom)) {
      // already elapsed
      return;
    }
    const tick = () => {
      const now = performance.now() / 1000;
      const timer = get(timerAtom);
      if (timer) {
        set(elapsedTimeAtom, now - timer.started);
      }
      const elapsedTime = get(elapsedTimeAtom);
      if (elapsedTime >= get(baseDurationAtom)) {
        set(timerAtom, null); // stop timer
      } else {
        set(timerAtom, {
          id: setTimeout(tick, 100),
          started: timer ? timer.started : now - elapsedTime,
        });
      }
    };
    tick(); // start timer
  }
  if (action === "stop") {
    const timer = get(timerAtom);
    if (timer) {
      clearTimeout(timer.id);
      set(timerAtom, null);
    }
  }
});
startTimerAtom.onMount = (dispatch) => {
  dispatch("start");
  return () => dispatch("stop");
};

export const elapsedAtom = atom((get) => {
  get(startTimerAtom); // add dependency
  const duration = get(baseDurationAtom);
  const elapsedTime = get(elapsedTimeAtom);
  let proportion = elapsedTime / duration;
  if (proportion > 1) {
    proportion = 1;
  }
  return {
    elapsedTime: Math.min(elapsedTime, duration),
    proportion,
  };
});

export const durationAtom = atom(
  (get) => get(baseDurationAtom),
  (_get, set, duration: number) => {
    set(baseDurationAtom, duration);
    set(startTimerAtom, "start");
  }
);

export const resetAtom = atom(null, (get, set) => {
  set(startTimerAtom, "stop");
  set(elapsedTimeAtom, 0);
  set(startTimerAtom, "start");
});
