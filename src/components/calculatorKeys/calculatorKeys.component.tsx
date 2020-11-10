import React, { ReactElement } from "react";

type Props = {
  operatorsList: string[];
  extraOperatorsList: string[];
  resultHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function calculatorKeys({
  operatorsList,
  extraOperatorsList,
  resultHandler,
}: Props): ReactElement {
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

  return (
    <div>
      <div>{operatorsRenderer}</div>
      <div>{extraOperatorsRenderer}</div>
    </div>
  );
}

export default calculatorKeys;
