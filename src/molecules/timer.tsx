import { useAtom } from "jotai";
import { elapsedAtom, durationAtom, resetAtom } from "../jotai/atom";

const Timer = () => {
  const [{ elapsedTime, proportion }] = useAtom(elapsedAtom);
  const [duration, setDuration] = useAtom(durationAtom);
  const [, reset] = useAtom(resetAtom);

  return (
    <>
      <div>
        <span>Elapsed Time:</span>
        <div
          style={{
            width: "100%",
            height: "20px",
            border: "1px solid gray",
          }}
        >
          <div
            style={{
              width: `${proportion * 100}%`,
              height: "100%",
              backgroundColor: "lightblue",
            }}
          />
        </div>
        <span>{elapsedTime.toFixed(1)}s</span>
      </div>
      <div>
        <span>Duration:</span>
        <input
          type="range"
          value={duration}
          onChange={(e) => {
            setDuration(Number(e.target.value));
          }}
          min={0}
          max={30}
          step={0.1}
        />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
