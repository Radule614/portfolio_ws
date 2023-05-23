import clsx from "clsx";
import classes from "./Section.module.css";
import { isMobile } from "react-device-detect";

export const Section = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <section
      className={clsx(classes.section, isMobile ? classes.mobile : undefined)}
      style={{ backgroundColor: color }}
    >
      {children}
    </section>
  );
};
