import React, { useState } from "react";
import "./App.scss";

function App() {
  const operatorsList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  const extraOperatorsList = ["(", ")", "C", "AC"];

  const [result, setResult] = useState<any>("");

  const operatorsRenderer = operatorsList.map((operator, i) => {
    return (
      <button
        className="app__button"
        onClick={(event) => resultHandler(event)}
        value={operator}
        key={operator + i}
      >
        {operator}
      </button>
    );
  });

  const extraOperatorsRenderer = extraOperatorsList.map((extraOperator, i) => {
    return (
      <button
        className="app__button"
        onClick={(event) => resultHandler(event)}
        value={extraOperator}
        key={extraOperator + i}
      >
        {extraOperator}
      </button>
    );
  });

  const resultHandler = (event: any) => {
    const clickedKeyValue = event.target.value;

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
      <div>RESULT: {result}</div>
      <div>{operatorsRenderer}</div>
      <div>{extraOperatorsRenderer}</div>
    </div>
  );
}

export default App;
