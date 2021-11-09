import { useEffect, useMemo, useState, useCallback } from "react";
import "./styles.css";

const Child = () => {
  console.log("child render");

  return <div>child</div>;
};

export default function App() {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const memoChild = useMemo(() => {
    return <Child />;
  }, []);

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <Child /> */}

      {memoChild}
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
