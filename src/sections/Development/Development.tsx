import { AnimatePresence, motion } from "framer-motion";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Section } from "../../components/section";
import classes from "./Development.module.css";
import clsx from "clsx";
import { isMobile } from "react-device-detect";

const Content = {
  Text: (
    <p>
      Our development team consists of three highly skilled individuals who are
      in their final year of studying computer science and automation at the
      Faculty of Technical Sciences in Novi Sad. During their academic journey,
      they have acquired invaluable knowledge and experience in state-of-the-art
      tech skills. Although their expertise mainly lies in web-based
      development, they are enthusiastically broadening their horizons to
      explore the captivating realm of game development.
      <br />
      <br />
      Our team possesses a solid background in computer science, providing the
      essential technical skills to address the intricacies of game development.
      The three of them bring an abundance of programming expertise, logic-based
      thinking, and problem-solving capabilities to the forefront, guaranteeing
      a resilient and efficient game design.
    </p>
  ),
};

export const Development = ({ color }: { color: string }) => {
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
            <MouseParallaxChild
              factorX={!isMobile ? 0.3 : 0}
              factorY={!isMobile ? 0.4 : 0}
            >
              <div className={classes.text}>
                <AnimatePresence>
                  <motion.div
                    initial={{ x: -220, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.02, 1.06, 0.76, 0.98],
                    }}
                  >
                    <span>{Content.Text}</span>
                    <span>&nbsp;</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </MouseParallaxChild>
          </div>
          <div className={classes.right}>
            <AnimatePresence>
              <motion.div
                className={classes.imageWrapper}
                initial={{ x: 320, opacity: 0 }}
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
        </div>
      </MouseParallaxContainer>
    </Section>
  );
};
