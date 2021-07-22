import styles from "src/styles/components/molecules/Breadcrumbs.module.scss";
import Link from "next/link";

type Props = {
  items: {
    href?: string;
    label: string;
  }[];
};

const Breadcrumbs: React.FC<Props> = (props) => {
  return (
    <ol className={styles.breadcrumbs}>
      {props.items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
