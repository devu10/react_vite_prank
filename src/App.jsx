import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
const operators = ["%", "/", "*", "-", "+"];

const App = () => {
  const [strToDisplay, setStrToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");

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
    //displayElm.classList.remove("prank");
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
      // displayElm.classList.add("prank");
      //audio.play();
    }

    const calc = eval(strToDisplay) + prankVal;
    setStrToDisplay(calc.toString());
  };

  const rValue = () => {
    const n = Math.round(Math.random() * 10);
    return n < 5 ? n : 0;
  };

  const handleOnButtonClick = (value) => {
    console.log(value);
    btnAction(value);
  };
  return (
    <>
      <div className="wraper flex-center">
        <div className="calculator">
          <div className="d comic-neue-regular">{strToDisplay || "0.0"}</div>
          {btns.map((btn, i) => (
            <Button
              key={i}
              {...btn}
              handleOnButtonClick={handleOnButtonClick}
            />
            // <Button key={i} cls={btn.cls} label={btn.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
