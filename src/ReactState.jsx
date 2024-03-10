import { useState } from "react";
import { useRenderCount } from "./useRenderCount";

function ReactState() {
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount();
  console.log(renderCount);
  return (
    <div className="card">
      <p>React State</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
      <span style={{ marginLeft: 10 }}>Render count is {renderCount}</span>
    </div>
  );
}

export default ReactState;
