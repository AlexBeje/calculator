import React, { useEffect, useState } from "react";

// Style
import "./App.scss";

// Icons
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

// Components
import CalculatorKeys from "./components/calculatorKeys/calculatorKeys.component";

function App() {
  const [portraitOperatorsList] = useState([
    "(",
    ")",
    "C",
    "AC",
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
  ]);

  const landscapeOperatorsList = [
    "C",
    "7",
    "8",
    "9",
    "/",
    "AC",
    "4",
    "5",
    "6",
    "*",
    "(",
    "1",
    "2",
    "3",
    "-",
    ")",
    "0",
    ".",
    "=",
    "+",
  ];

  const size = useWindowSize();

  if (size.height < 500) {
  }

  const [result, setResult] = useState<any>("");

  const resultHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedKeyValue = e.currentTarget.value;

    switch (clickedKeyValue) {
      case "=":
        try {
          /* eslint no-eval: 0 */
          setResult(String(eval(result)));
        } catch (error) {
          console.error(error);
        }
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
    <div className="app flex flex-col">
      <div className="app__header--background flex">
        <div className="app__header text-right">{result || "0"}</div>
      </div>
      <div className="app__body">
        <CalculatorKeys
          portraitOperatorsList={portraitOperatorsList}
          landscapeOperatorsList={landscapeOperatorsList}
          resultHandler={resultHandler}
        />
      </div>
      <div className="app__footer flex justify-between mt-5 items-center">
        <div className="flex items-center">
          <a href="https://alexbeje.github.io/calculator/">
            <AiFillGithub className="icon--hover mr-5" />
          </a>
          <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmNq6fZzUYHWq1aUmZP1jnk%2Fcalculator%3Fnode-id%3D0%253A1">
            <FiFigma className="icon--hover" />
          </a>
        </div>
        <a href="https://www.alexbejenaru.dev">
          <div className="app__author flex items-center">
            <AiOutlineCopyrightCircle />
            Alexandru Bejenaru
          </div>
        </a>
      </div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default App;
