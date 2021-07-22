import { FormikValues } from "formik";
import React, { MutableRefObject } from "react";
import styles from "src/styles/components/atoms/Textarea.module.scss";

type Props = {
  formik: FormikValues;
  name: string;
  placeholder: string;
  firstRef: MutableRefObject<any>;
  setFocus: (isFocused: boolean) => void;
  height?: string;
  value?: string;
};

// テキストエリア
const Textarea: React.FC<Props> = React.memo(
  ({ formik, name, placeholder, firstRef, setFocus, height, value }) => (
    <textarea
      ref={firstRef}
      className={styles.textarea}
      name={name}
      placeholder={placeholder}
      value={value ? value : formik.values[name]}
      style={{ height: height }}
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
    prevProps.value === nextProps.value
);

export default Textarea;
