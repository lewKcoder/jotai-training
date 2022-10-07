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

/**
 * Flight Booker
 *  **/
export const flightOptionAtom = atom<'one-way flight' | 'return flight'>(
  'one-way flight'
);

const parseBookingDay = (d: string) => {
  return /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(d);
};

const startedInitialDay = atom({ data: '', inValidStatus: false });
const returnedInitialDay = atom({ data: '', inValidStatus: false });
const bookingButtonAtom = atom(true);

export const startedDayAtom = atom(
  (get) => get(startedInitialDay),
  (get, set, value: string) => {
    let isValid = false;
    if (!parseBookingDay(value) || value.length !== 10) {
      isValid = true;
    }
    set(bookingButtonAtom, isValid);
    set(startedInitialDay, { data: value, inValidStatus: isValid });
  }
);

export const returnedDayAtom = atom(
  (get) => get(returnedInitialDay),
  (get, set, value: string) => {
    let isValid = false;
    const startedDayValue = get(startedInitialDay);
    const returnedDayValue = get(returnedInitialDay);
    if (!parseBookingDay(value) || value.length !== 10) {
      isValid = true;
    }
    if (!startedDayValue.inValidStatus && startedDayValue.data !== '') {
      set(bookingButtonAtom, isValid);
    }
    if (
      startedDayValue.data.replace('-', '') <
      returnedDayValue.data.replace('-', '')
    ) {
      set(bookingButtonAtom, true);
    }

    set(returnedInitialDay, { data: value, inValidStatus: isValid });
  }
);

export const bookingButton = atom(
  (get) => get(bookingButtonAtom),
  (get, set, value) => {
    const flightOption = get(flightOptionAtom);
    const startedDayValue = get(startedInitialDay);
    const returnedDayValue = get(returnedInitialDay);
    if (flightOption === 'one-way flight') {
      window.alert(
        `You have booked a one-way flight on ${startedDayValue.data}`
      );
      return;
    }
    if (flightOption === 'return flight') {
      window.alert(
        `You have booked a return flight from ${startedDayValue.data} to ${returnedDayValue.data}`
      );
      return;
    }
  }
);
