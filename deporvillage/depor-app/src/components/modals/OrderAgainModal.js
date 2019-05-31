import React, { useState } from "react";
function OrderAgainModal() {
  // Declare a new state variable, which we'll call "count"
  let [count, setCount] = useState(1);
  return (
    <div>
      <div>Quantity: {count > 0 ? count : 1}</div>
      <div>
        {" "}
        <button
          type="button"
          className="btn btn-danger mr-3"
          onClick={() => setCount(count > 0 ? count - 1 : 1)}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-success mr-3"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default OrderAgainModal;
