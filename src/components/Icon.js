import React from "react";
import sprite from "../images/sprite.svg";
export function Icon({ iconId, iconColor, width, height, iconClassName }) {
  return (
    <>
      {iconId && (
        <svg
          fill={iconColor}
          width={width}
          height={height}
          className={`icon icon-${iconClassName}`}
        >
          <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
      )}
    </>
  );
}
Icon.defaultProps = {
  iconColor: "pink",
  width: "24px",
  height: "24px",
};
