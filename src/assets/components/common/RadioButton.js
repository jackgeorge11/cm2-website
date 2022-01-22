import React from "react";

export default function RadioButton({isActive}) {
  return (
    <div
      className={isActive ? "radio-button is--active" : "radio-button"}
    />
  );
}
