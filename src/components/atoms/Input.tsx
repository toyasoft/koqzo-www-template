import { FormikValues } from "formik";
import React, { MutableRefObject } from "react";
import styles from "src/styles/components/atoms/Input.module.scss";

type Props = {
  formik: FormikValues;
  name: string;
  placeholder: string;
  type: string;
  firstRef: MutableRefObject<any>;
  setFocus: (isFocused: boolean) => void;
  disabled?: boolean;
  value?: string;
};

// テキスト入力
const Input: React.FC<Props> = React.memo(
  ({ formik, name, placeholder, firstRef, setFocus, disabled, value }) => (
    <input
      ref={firstRef}
      className={styles.input}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value ? value : formik.values[name]}
      disabled={disabled}
      onChange={formik.handleChange}
      onFocus={(e) => {
        setFocus(true);
      }}
      onBlur={(e) => {
        setFocus(false);
      }}
    />
  ),
  (prevProps, nextProps) =>
    prevProps.formik.values[prevProps.name] ===
      nextProps.formik.values[nextProps.name] &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.value === nextProps.value
);

export default Input;
