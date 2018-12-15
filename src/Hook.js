import React, { useState } from "react";

export default function Hook() {
  const [count, incrementCounter] = useState(0);
  const [enabled, toggleFeature] = useState(false);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => incrementCounter(count => count + 1)}>
        Count it 👆
      </button>

      <p>{enabled ? "It's on!" : "It's off."}</p>
      <button onClick={() => toggleFeature(enabled => !enabled)}>
        Toggle it 🎚
      </button>
    </>
  );
}
