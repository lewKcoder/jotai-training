import { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";
import Counter from "./page/counter";
import Converter from "./page/converter";
import FlightBooker from "./page/flightBooker";
import Timer from "./page/timer";
import CRUD from "./page/crud";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routerListType } from "./type/type";

const routerList: routerListType[] = [
  {
    path: "/counter",
    element: <Counter />,
    linkText: "Counter",
  },
  {
    path: "/converter",
    element: <Converter />,
    linkText: "Converter",
  },
  {
    path: "/flightBooker",
    element: <FlightBooker />,
    linkText: "FlightBooker",
  },
  {
    path: "/timer",
    element: <Timer />,
    linkText: "Timer",
  },
  {
    path: "/crud",
    element: <CRUD />,
    linkText: "CRUD",
  },
];

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to={"/"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <section style={{ padding: "24px 0" }}>
          <Routes>
            <Route path={"/"} element={<Home routerList={routerList} />} />
            {routerList.map((item) => (
              <Route
                key={item.linkText}
                path={item.path}
                element={item.element}
              />
            ))}
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default App;
