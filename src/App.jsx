import "./App.css";
import { Button } from "./Button";

const App = () => {
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

  const handleOnButtonClick = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="wraper flex-center">
        <div className="calculator">
          <div className="d comic-neue-regular">0.0</div>
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
