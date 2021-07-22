import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "src/styles/components/templates/Layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div className={styles.content}>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
