import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3l font-bold">Hello World</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Count this
      </button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;
