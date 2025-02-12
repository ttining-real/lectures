import { useState } from "react";
import "./App.css";
import CurrenyInput from "./components/CurrenyInput";

const EXCHANGE_RATE = 1400;

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (current, value) => {
    console.log(current, value);

    if (current === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <div>
        <CurrenyInput current={"krw"} value={state.krw} onChange={onChange} />
        <CurrenyInput current={"usd"} value={state.usd} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
