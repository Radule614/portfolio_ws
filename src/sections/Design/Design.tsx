import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../components/section";

import classes from "./Design.module.css";
import { isMobile } from "react-device-detect";
import clsx from "clsx";

const Content = {
  Text: `
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
    sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
    aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
    nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  `,
};

export const Design = ({ color }: { color: string }) => {
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
                  <motion.div
                    initial={{ x: 220, opacity: 0 }}
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
        </div>
      </MouseParallaxContainer>
    </Section>
  );
};
