import { FC } from "react";
import { useAtom } from "jotai";
import { countCelsiusAtom, countFahrenheitAtom } from "../jotai/atom";

const Converter: FC = () => {
  const [c, setC] = useAtom(countCelsiusAtom);
  const [f, setF] = useAtom(countFahrenheitAtom);

  return (
    <div>
      <input value={c} onChange={(e) => setC(e.target.value)} />
      Celsius
      <span style={{ padding: "8px" }}>=</span>
      <input value={f} onChange={(e) => setF(e.target.value)} />
      Fahrenheit
    </div>
  );
};

export default Converter;
