import React from "react";
import "./styles/index.css";
const customImg =
  "https://cdn-icons-png.flaticon.com/512/1151/1151733.png?w=740&t=st=1676606321~exp=1676606921~hmac=6f18b4f33defc5411880cbda1667fd766caa6a731aa9cb9e3dbd3e2ab67b6872";
const sizeParam = "xs" | "sm" | "md" | "lg";
const Avatar = ({ maxLength, size = sizeParam }) => {
  const avatarState = Array.from(Array(3));
  const name = "Tomi Budi";
  return (
    <div title="avatar-first-wrapper" className="avatar-group">
      {avatarState
        .filter((d, i) => i < maxLength) //check is index of avatar state more than maxLength props
        .map((d, i) => (
          <div className="img-wrapper" key={i}>
            <img
              aria-label="avatar-img"
              className={`avatar-img ${size}`}
              src={customImg}
              alt={name.length > 2 ? name.substring(0, 2) : name} //if name have length > 2 substring and render only the 2 first character
            />
          </div>
        ))}
      {avatarState.length < maxLength && (
        <div className="img-wrapper">
          <div title="count-wrapper" className={`avatar-img-max ${size}`}>
            <p title="count-max" className="count-max">
              +{maxLength - avatarState.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
