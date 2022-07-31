import React, { useState } from "react";
// import hoursValue from "./components/hoursValue";
// import minutesValue from "./components/minutesValue";
// import secondValue from "./components/secondValue";

function App() {
  const [amount, setAmount] = useState(0);
  const [active, setActive] = useState(1);
  const count = active + 1;
  //   const count = 1;
  // 초기에 준 값
  const onChange = (event) => {
    console.log(event);

    setAmount(event.target.value);
  }; // 이게 체인지 누르면  값을 갱신시켜줌

  const reset = () => {
    setAmount(0);
  };

  const changeActive = () => {
    console.log("직전 count : ", count);
    console.log("직전 active : ", active);
    reset();
    setActive(count); // count = active+1; 아마 count를 호출하면 setActive가 active+1 구문자체를 불러오는듯
    if (active > 2) {
      // 이거왜이래?
      setActive(1);
    }

    console.log("직후 count : ", count);
    console.log("직후 active : ", active);
    console.log(" ");
  };

  return (
    <div>
      <div>Time Converter</div>
      <div>
        Second{" "}
        <input
          placeholder="secondValue"
          value={secondValue(active, amount)}
          //{<secondValue active={active} amount={amount} />}
          type="number"
          onChange={onChange}
          disabled={!(active === 1)}
        />
        <div>
          Minutes{" "}
          <input
            placeholder="Minutes"
            value={minutesValue(active, amount)}
            //{<minutesValue active={active} amount={amount} />}
            type="number"
            onChange={onChange}
            disabled={!(active === 2)}
          />
        </div>
        <div>
          Hours{" "}
          <input
            placeholder="Hours"
            value={hoursValue(active, amount)}
            //{<hoursValue active={active} amount={amount} />}
            type="number"
            onChange={onChange}
            disabled={!(active === 3)}
          />
        </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeActive}>active toggle</button>
      </div>
      <hr />
    </div>
  );
}

function secondValue(active, amount) {
  if (active === 1) {
    return amount;
  } else if (active === 2) {
    return amount * 60;
  } else if (active === 3) {
    return amount * 360;
  }
}
function minutesValue(active, amount) {
  if (active === 1) {
    return Math.floor(amount / 60);
  } else if (active === 2) {
    return amount;
  } else if (active === 3) {
    return amount * 60;
  }
}

function hoursValue(active, amount) {
  if (active === 1) {
    return Math.floor(amount / 3600);
  } else if (active === 2) {
    return Math.floor(amount / 60);
  } else if (active === 3) {
    return amount;
  }
}

export default App;
