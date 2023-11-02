import React from "react";

export default function CreateProjectFormInput(props) {
  const {
    lable,
    error,
    id,
    boxClassName,
    inputClassName,
    labelClassName,
    ...inputProps
  } = props;

  return (
    <div className={boxClassName}>
      <label className={labelClassName}>{lable}</label>
      <input className={inputClassName} {...inputProps} />
    </div>
  );
}
