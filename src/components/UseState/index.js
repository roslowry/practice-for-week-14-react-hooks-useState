import "./UseState.css";
import { useState } from "react";

const UseState = (props) => {
  // console.log("trying useSTate", useState("light"));

  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const callDarkTheme = (theme) => {
    setTheme("dark");
  };

  const toggleTheme = () => {
    return function () {
      setTheme((prevTheme) => {
        setTheme(prevTheme === "light" ? "dark" : "light");
      });
    };
  };

  const callLightTheme = (theme) => {
    setTheme("light");
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const changeTheme = (theme) => {
    return function () {
      return setTheme(theme);
    };
  };

  return (
    <div className="state">
      <div className={theme}>
        {/* <h3>{theme}</h3> */}
        <h1>UseState Component</h1>
        {/* <button onClick={changeTheme("dark")}>Dark</button> */}

        <button onClick={toggleTheme("dark")}>Toggle Theme</button>

        <h2>{count}</h2>
        <button onClick={incrementCount}>Increment</button>

        {/* <button onClick={changeTheme("light")}>Light</button> */}
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
};

export default UseState;
