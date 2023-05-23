import clsx from "clsx";
import classes from "./Github.module.css";
import { isMobile } from "react-device-detect";

export const Github = ({ link }: { link: string }) => {
  return (
    <a href={link} className={clsx(classes.link, isMobile ? classes.mobile : undefined)}>
      <img src={"assets/github.png"} alt="github"/>
      <div>github</div>
    </a>
  );
};
