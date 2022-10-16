import { FC } from "react";
import { useAtom } from "jotai";
import {
  flightOptionAtom,
  startedDayAtom,
  returnedDayAtom,
  bookingButton,
} from "../jotai/atom";

const FlightBooker: FC = () => {
  const [flightOption, setFlightOption] = useAtom(flightOptionAtom);
  const [startedDay, setStartedDay] = useAtom(startedDayAtom);
  const [returnedDay, setReturnedDay] = useAtom(returnedDayAtom);
  const [buttonStatus, setButtonStatus] = useAtom(bookingButton);

  const startedStyles = startedDay.inValidStatus
    ? {
        backgroundColor: "red",
      }
    : {};
  const returnedStyles =
    returnedDay.inValidStatus && flightOption === "return flight"
      ? {
          backgroundColor: "red",
        }
      : {};

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        maxWidth: "200px",
        margin: "auto",
      }}
    >
      <select
        name="flight"
        id="flight"
        onChange={(e) =>
          setFlightOption(e.target.value as "one-way flight" | "return flight")
        }
      >
        <option value="one-way flight">one-way flight</option>
        <option value="return flight">return flight</option>
      </select>
      <input
        type="date"
        style={startedStyles}
        onChange={(e) => setStartedDay(e.target.value)}
      />
      <input
        type="date"
        style={returnedStyles}
        onChange={(e) => setReturnedDay(e.target.value)}
        disabled={flightOption !== "return flight"}
      />
      <button disabled={buttonStatus} onClick={setButtonStatus}>
        Booking
      </button>
    </section>
  );
};

export default FlightBooker;
