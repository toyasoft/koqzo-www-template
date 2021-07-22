import { FormikValues } from "formik";
import React, { MutableRefObject } from "react";
import styles from "src/styles/components/atoms/Select.module.scss";

type Props = {
  formik: FormikValues;
  name: string;
  firstRef: MutableRefObject<any>;
  setFocus: (isFocused: boolean) => void;
  options: {
    key: string;
    value: string;
  }[];
  multiple: boolean;
};

// セレクトボックス
const Select: React.FC<Props> = React.memo(
  ({ formik, name, firstRef, setFocus, multiple, options }) => (
    <>
      <select
        ref={firstRef}
        className={`${styles.select} ${multiple ? styles.multiple : ""}`}
        name={name}
        value={formik.values && formik.values[name]}
        onChange={formik.handleChange}
        multiple={multiple}
        onFocus={(e) => {
          setFocus(true);
        }}
        onBlur={(e) => {
          setFocus(false);
        }}
      >
        <option value="">選択してください</option>
        {options &&
          options.map((option) => (
            <option value={option.key} key={option.key}>
              {option.value}
            </option>
          ))}
      </select>
      <span
        className={styles.carat}
        style={{ display: multiple ? "none" : "block" }}
      ></span>
    </>
  ),
  (prevProps, nextProps) =>
    prevProps.formik.values[prevProps.name] ===
      nextProps.formik.values[nextProps.name] &&
    prevProps.options === nextProps.options
);

export default Select;
