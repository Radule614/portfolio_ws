import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../components/section";
import classes from "./HeaderSection.module.css";
import { COLORS } from "../../utility";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import clsx from "clsx";
import { isMobile } from "react-device-detect";

export const HeaderSection = ({ color }: { color: string }) => {
  const Colors = [...COLORS.slice(1)];
  Colors.unshift("#ddd");
  const resolveColor = (index: number) => {
    const i = Math.floor(index / 2);

    return Colors[i];
  };
  const text =
    "Crafting Immersive Games and Stunning Visuals: Uniting Design and Development";
  return (
    <Section color={color}>
      <MouseParallaxContainer
        globalFactorX={!isMobile ? 0.1 : 0}
        globalFactorY={!isMobile ? 0.1 : 0}
        className={clsx(
          classes.parallaxContainer,
          isMobile ? classes.mobile : undefined
        )}
      >
        <div className={classes.container}>
          <div className={classes.left}>
            <AnimatePresence>
              <motion.div
                className={classes.imageWrapper}
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.02, 1.06, 0.76, 0.98],
                }}
              >
                <MouseParallaxChild
                  className={classes.imageBorderContainer}
                  factorX={!isMobile ? 0.3 : 0}
                  factorY={!isMobile ? 0.4 : 0}
                >
                  <div className={classes.imageBorder}></div>
                </MouseParallaxChild>
                <div className={classes.image}></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={classes.right}>
            <MouseParallaxChild
              factorX={!isMobile ? 0.3 : 0}
              factorY={!isMobile ? 0.4 : 0}
            >
              <div className={classes.text}>
                <AnimatePresence>
                  {text.split(" ").map((t, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: 220, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3 + 0.05 * index,
                          ease: [0.02, 1.06, 0.76, 0.98],
                        }}
                      >
                        <span style={{ color: resolveColor(index) }}>{t}</span>
                        <span>&nbsp;</span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </MouseParallaxChild>
          </div>
        </div>
      </MouseParallaxContainer>
    </Section>
  );
};
