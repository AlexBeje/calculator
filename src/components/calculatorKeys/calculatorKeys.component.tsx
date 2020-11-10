import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  portraitOperatorsList: string[];
  landscapeOperatorsList: string[];
  resultHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const KeyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media (min-height: 500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Key = styled.button`
  background: var(--color-primary);
  border-radius: 50%;
  padding-top: 25%;
  padding-bottom: 25%;
  @media (min-height: 500px) {
    padding-top: 33%;
    padding-bottom: 33%;
  }
`;

function calculatorKeys({
  portraitOperatorsList,
  landscapeOperatorsList,
  resultHandler,
}: Props): ReactElement {
  const adjcentKey = (operator: string) => {
    switch (operator) {
      case "(":
      case ")":
      case "C":
      case "AC":
      case "/":
      case "*":
      case "-":
      case "+":
      case "=":
        return { background: "#17c6fe" };
    }
  };

  const portraitOperatorsRenderer = portraitOperatorsList.map((operator, i) => {
    return (
      <Key
        onClick={(e) => resultHandler(e)}
        value={operator}
        key={operator + i}
        style={adjcentKey(operator)}
      >
        {operator}
      </Key>
    );
  });

  const lanscapeOperatorsRenderer = landscapeOperatorsList.map(
    (operator, i) => {
      return (
        <Key
          onClick={(e) => resultHandler(e)}
          value={operator}
          key={operator + i}
          style={adjcentKey(operator)}
        >
          {operator}
        </Key>
      );
    }
  );

  return (
    <KeyWrapper className="calculatorKeys">
      {window.innerHeight > 500
        ? portraitOperatorsRenderer
        : lanscapeOperatorsRenderer}
    </KeyWrapper>
  );
}

export default calculatorKeys;
