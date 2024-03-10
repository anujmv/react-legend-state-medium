import { useRenderCount } from "./useRenderCount";
import { useObservable, Computed } from "@legendapp/state/react";

const LegendState = () => {
  const renderCount = useRenderCount();
  const state$ = useObservable({ count: 0 });
  state$.count.onChange(({ value }) => console.log("Count is", value));

  const handleOnClick = () => {
    state$.count.set((v) => v + 1);
  };
  return (
    <div className="card">
      <p>Legend State</p>
      <button onClick={() => handleOnClick()}>
        Count: <Computed>{state$.count}</Computed>
      </button>
      <span style={{ marginLeft: 10 }}>Render count is {renderCount}</span>
    </div>
  );
};

export default LegendState;
