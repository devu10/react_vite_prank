import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "./Button";
import ad from "./assets/ad.mp3";
const operators = ["%", "/", "*", "-", "+"];
const audio = new Audio(ad);

const App = () => {
  const [strToDisplay, setStrToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isMouseDown, setIsMouseDown] = useState();
  const [isPrank, setIsPrank] = useState(false);

  const isEventAttached = useRef(false);

  useEffect(() => {
    !isEventAttached.current &&
      window.addEventListener("keypress", (e) => {
        const keyPress = e.key;
        console.log(e);
        if (e.code.includes("Key")) {
          return;
        }
        btnAction(keyPress);
      });

    isEventAttached.current = true;
  }, []);

  const btns = [
    {
      cls: "ac",
      label: "AC",
    },
    {
      cls: "c",
      label: "C",
    },
    {
      cls: "per",
      label: "%",
    },
    {
      cls: "divide",
      label: "/",
    },
    {
      cls: "seven",
      label: "7",
    },
    {
      cls: "eight",
      label: "8",
    },
    {
      cls: "nine",
      label: "9",
    },
    {
      cls: "mul",
      label: "*",
    },
    {
      cls: "four",
      label: "4",
    },
    {
      cls: "five",
      label: "5",
    },
    {
      cls: "six",
      label: "6",
    },
    {
      cls: "minus",
      label: "-",
    },
    {
      cls: "one",
      label: "1",
    },
    {
      cls: "two",
      label: "2",
    },
    {
      cls: "three",
      label: "3",
    },
    {
      cls: "plus",
      label: "+",
    },
    {
      cls: "zero",
      label: "0",
    },
    {
      cls: "dot",
      label: ".",
    },
    {
      cls: "equal",
      label: "=",
    },
  ];

  const btnAction = (value) => {
    console.log(value);
    isPrank && setIsPrank(false);
    if (value === "AC") {
      setStrToDisplay("");
      return;
    }

    if (value === "C") {
      setStrToDisplay(strToDisplay.slice(0, -1));
      return;
    }

    if (value === "=" || value === "Enter") {
      setLastOperator("");
      const lastCh = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastCh)) {
        setStrToDisplay(strToDisplay.slice(0, -1));
      }
      return calExp();
    }

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastCh = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastCh)) {
        setStrToDisplay(strToDisplay.slice(0, -1) + value);
        return;
      }
    }

    if (value === ".") {
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);

      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);

      if (lastNumberSet.includes(".")) {
        return;
      }

      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    setStrToDisplay(strToDisplay + value);
  };

  const calExp = () => {
    const prankVal = rValue();

    if (prankVal) {
      setIsPrank(true);
      audio.play();
    }

    const calc = eval(strToDisplay) + prankVal;
    setStrToDisplay(calc.toString());
  };

  const rValue = () => {
    const n = Math.round(Math.random() * 10);
    return n < 5 ? n : 0;
  };

  const handleOnMouseDown = (value) => {
    setIsMouseDown(value);
  };

  const handleOnButtonClick = (value) => {
    setIsMouseDown();
    btnAction(value);
  };

  const btnStyle = {
    transform: isMouseDown ? "scale(0.9)" : "scale(1)",
    transition: "transform 0.2s",
  };
  return (
    <>
      <div className="wraper flex-center">
        <div className="calculator">
          <div
            className={
              isPrank ? "d comic-neue-regular prank" : "d comic-neue-regular"
            }
          >
            {strToDisplay || "0.00"}
          </div>
          {btns.map((btn, i) => (
            <Button
              key={i}
              {...btn}
              handleOnButtonClick={handleOnButtonClick}
              handleOnMouseDown={handleOnMouseDown}
              btnStyle={btnStyle}
              isMouseDown={isMouseDown}
            />
            // <Button key={i} cls={btn.cls} label={btn.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
