import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../components/section";

import classes from "./Design.module.css";
import { isMobile } from "react-device-detect";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const Content = {
  Text: (
    <p>
      Meet the art design team, Nataša and Vasi, two talented creatives who
      contribute their distinct artistic sensibility to our team. Nataša is a
      traditional artist who can conjure up feelings both on canvas with
      minimalistic style and work magic with threads through embroidery. Vasi, a
      creative animator and digital artist, on the other hand, gives characters
      life and mesmerizes us with her enthralling animations. She's a proven
      talent, creative mind and all-rounder.
      <br />
      <br />
      Together, they stand for a seamless fusion of traditional and digital
      craftsmanship, producing mesmerizing images that leave an impression. Get
      ready to be moved by these hardworking artists as they take you on a
      journey via their innovative works!
    </p>
  ),
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
        <div className={classes.backgroundWrapper}>
          <MouseParallaxChild
            className={classes.imageBorderContainer}
            factorX={!isMobile ? 0.2 : 0}
            factorY={!isMobile ? 0.2 : 0}
          >
            <div className={classes.background} />
          </MouseParallaxChild>
        </div>
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
                <Swiper
                  className={clsx(classes.carousel, classes.noselect)}
                  spaceBetween={5}
                  navigation={true}
                  slidesPerView={1}
                  modules={[Navigation]}
                >
                  <SwiperSlide className={classes.image}>
                    <img src={"assets/1.jpeg"} alt="1" />
                  </SwiperSlide>
                  <SwiperSlide className={classes.image}>
                    <img src={"assets/2.jpeg"} alt="2" />
                  </SwiperSlide>
                  <SwiperSlide className={classes.image}>
                    <img src={"assets/3.jpeg"} alt="3" />
                  </SwiperSlide>
                  <SwiperSlide className={classes.image}>
                    <img src={"assets/4.jpg"} alt="4" />
                  </SwiperSlide>
                  <SwiperSlide className={classes.image}>
                    <img src={"assets/5.jpeg"} alt="5" />
                  </SwiperSlide>
                </Swiper>
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
