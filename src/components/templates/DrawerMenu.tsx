import Link from "next/link";
import styles from "src/styles/components/templates/DrawerMenu.module.scss";
import ChevronRightIcon from "src/components/icons/ChevronRightIcon";
import CloseIcon from "src/components/icons/CloseIcon";

type Props = {
  isDrawerOpened: boolean;
  setDrawerOpened: (isDrawerOpened: boolean) => void;
};

const DrawerMenu: React.FC<Props> = (props) => {
  return (
    <div
      className={`${styles.drawerMenu} ${
        props.isDrawerOpened ? styles.drawerOpened : styles.drawerClosed
      }`}
    >
      <header className={styles.header}>
        <div className={styles.title}>
          mononobe<small>世の中を深掘りするデジタルモノメディア</small>
        </div>

        <div className={styles.closeButton}>
          <button
            onClick={() => {
              props.setDrawerOpened(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  props.setDrawerOpened(false);
                }}
              >
                ホーム
              </a>
            </Link>
            <span className={styles.icon}>
              <ChevronRightIcon width="16px" height="16px" color="#fafafa" />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DrawerMenu;
