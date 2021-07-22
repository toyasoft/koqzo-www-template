import dayjs from "dayjs";
import Link from "next/link";
import styles from "src/styles/components/templates/Footer.module.scss";

type Props = {};

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </li>
      </ul>
      <div className={styles.copyright}>
        <p>©︎{dayjs().format("YYYY")} KOQZO ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
