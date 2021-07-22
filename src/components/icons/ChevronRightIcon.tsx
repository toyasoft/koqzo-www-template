type Props = {
  color: string;
  height: string;
  width: string;
};

const ChevronRightIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill={props.color}
    >
      <path
        d="
            M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z
            "
      />
    </svg>
  );
};

export default ChevronRightIcon;
