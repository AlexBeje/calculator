import React, { useState } from "react";
import "./App.scss";

import CalculatorKeys from "./components/calculatorKeys/calculatorKeys.component";

function App() {
  const operatorsList = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  const extraOperatorsList = ["(", ")", "C", "AC"];

  const [result, setResult] = useState<any>("");

  const resultHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedKeyValue = e.currentTarget.value;

    switch (clickedKeyValue) {
      case "=":
        /* eslint no-eval: 0 */
        setResult(String(eval(result)));
        break;
      case "C":
        if (result !== "") {
          setResult(result.substring(0, result.length - 1));
        }
        break;
      case "AC":
        setResult("");
        break;
      default:
        setResult(result + clickedKeyValue);
    }
  };

  return (
    <div className="app">
      <div>{result}</div>
      <CalculatorKeys
        operatorsList={operatorsList}
        extraOperatorsList={extraOperatorsList}
        resultHandler={resultHandler}
      />
      <div>Alexandru Bejenaru</div>
    </div>
  );
}

export default App;
