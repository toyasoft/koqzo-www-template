import styles from "src/styles/components/templates/Loading.module.scss";

type Props = {};

const Loading: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.loading}`}>
      <p>読み込み中</p>
    </div>
  );
};

export default Loading;
