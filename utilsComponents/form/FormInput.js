import React from "react";

export default function FormInput(props) {
  const { lable, error, id, inputClassName, labelClassName, ...inputProps } =
    props;

  return (
    <div>
      <label className={labelClassName}>{lable}</label>
      <input className={inputClassName} {...inputProps} />
    </div>
  );
}
