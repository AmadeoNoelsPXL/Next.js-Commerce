import { useEffect, useState } from "react";

export default function FilterBar({ onButtonSelect }) {
  const buttons = ["aardappelen", "fruit", "appel"];
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    onButtonSelect(selected);
  }, [selected, onButtonSelect]);

  const handleButtonClick = (buttonName) => {
    if (buttonName === selected) {
      setSelected(undefined);
    } else {
      setSelected(buttonName);
    }
  };
  return (
    <div className="flex mx-36 p-4 ">
      {buttons.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => handleButtonClick(buttonName)}
          className={`p-2 ${
            buttonName === selected ? "bg-green-500" : "bg-white"
          } shadow-2xl border border-green-500 rounded-lg mr-4`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
