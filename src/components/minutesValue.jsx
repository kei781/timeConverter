import React from "react";

function minutesValue({ active, amount }) {
  if (active === 1) {
    return Math.floor(amount / 60);
  } else if (active === 2) {
    return amount;
  } else if (active === 3) {
    return amount * 60;
  }
}

export default minutesValue;
