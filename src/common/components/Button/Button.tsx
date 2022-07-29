import React from "react";
import classes from "./Button.module.scss";

type ButtonPropsType = {
  title?: string;
  disabled: boolean;
};

export const Button: React.FC<ButtonPropsType> = ({ title, disabled }) => {
  return (
    <div className={classes.centeredButton}>
      <button
        className={
          disabled ? `${classes.btn} ${classes.btn_disabled} ` : classes.btn
        }
        type={"submit"}
      >
        message me
      </button>
    </div>
  );
};
