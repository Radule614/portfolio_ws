import clsx from "clsx";
import classes from "./Header.module.css";
import { BOOKMARKS } from "../../utility";
import { isMobile } from "react-device-detect";

export const Header = ({ activeSection }: { activeSection: number }) => {
  return (
    <header
      className={clsx(
        classes.header,
        isMobile ? classes.mobile : undefined
      )}
    >
      {BOOKMARKS.map((link, index) => (
        <a
          className={clsx(
            classes.link,
            activeSection === index ? classes.active : undefined
          )}
          key={link.value}
          href={`#${link.value}`}
        >
          {link.text}
        </a>
      ))}
    </header>
  );
};
