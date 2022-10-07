import { atom } from 'jotai';

/**
 * Converter
 *  **/
const c2f = (x: number) => x * (9 / 5) + 32;
const f2c = (x: number) => (x - 32) * (5 / 9);
const basicCelsius = atom('');
const basicFahrenheitAtom = atom('');

export const countCelsiusAtom = atom(
  (get) => get(basicCelsius),
  (_get, set, value: string) => {
    set(basicCelsius, value);
    const temp = Number(value);
    if (value && Number.isFinite(temp)) {
      set(basicFahrenheitAtom, c2f(temp).toFixed(0));
    }
  }
);

export const countFahrenheitAtom = atom(
  (get) => get(basicFahrenheitAtom),
  (_get, set, value: string) => {
    set(basicFahrenheitAtom, value);
    const temp = Number(value);
    if (value && Number.isFinite(temp)) {
      set(basicCelsius, f2c(temp).toFixed(0));
    }
  }
);
