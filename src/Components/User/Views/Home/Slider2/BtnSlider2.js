import React from "react";
import "./Slider2";
import leftArrow2 from "./icons/left-arrow.svg";
import rightArrow2 from "./icons/right-arrow.svg";

export default function BtnSlider2({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow2 : leftArrow2} />
    </button>
  );
}
