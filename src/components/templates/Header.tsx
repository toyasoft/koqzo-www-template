import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import MenuIcon from "src/components/icons/MenuIcon";
import DrawerMenu from "./DrawerMenu";
import styles from "src/styles/components/templates/Header.module.scss";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const [isDrawerOpened, setDrawerOpened] = useState(false);
  const [isHiddened, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
  }, [props]);

  useEffect(() => {
    let scrollPosition = 0;
    const pageHeight = document.body.offsetHeight;
    const viewportHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const newScrollPosition = window.scrollY;

      if (scrollTop < 76) {
        return;
      }
      if (newScrollPosition === scrollPosition) {
        return;
      }

      if (
        newScrollPosition < 0 ||
        newScrollPosition + viewportHeight > pageHeight
      ) {
        return;
      }

      const shouldShow = newScrollPosition < scrollPosition;
      setHidden(!shouldShow);

      scrollPosition = newScrollPosition;
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isHiddened ? styles.unpinned : ""}`}
      >
        <div className={styles.title}>
          <a
            href="/"
            onClick={() => {
              setDrawerOpened(false);
            }}
          >
            虚空蔵
            <small>koqzo</small>
          </a>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href={`/`}>
                <a>ホーム</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.menuButton}>
          <button
            onClick={() => {
              setDrawerOpened(!isDrawerOpened);
            }}
          >
            <MenuIcon width="30px" height="30px" color={`#000000`} />
          </button>
        </div>
      </header>
      <DrawerMenu
        isDrawerOpened={isDrawerOpened}
        setDrawerOpened={setDrawerOpened}
      />
    </>
  );
};

export default Header;
