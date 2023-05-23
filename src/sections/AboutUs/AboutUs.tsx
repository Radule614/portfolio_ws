import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Section } from "../../components/section";
import classes from "./AboutUs.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "utility";
import { isMobile } from "react-device-detect";
import clsx from "clsx";
import { Github } from "components/github";

export const AboutUs = ({ color }: { color: string }) => {
  const Content = [
    {
      Text: (
        <div>
          We are a dedicated team of game developers and creative designers
          committed to delivering unforgettable gaming experiences. With
          expertise in gameplay mechanics and eye-catching visuals, we create
          games that leave a lasting impression. Our developers bring our ideas
          to life with seamless tech wizardry, ensuring smooth gameplay. Working
          hand-in-hand, our designers craft immersive and engaging gameplay that
          captivate players. Our crew consists of 5 members each bringing their
          own flavour <br />
          <br />
          <b style={{ color: "#9D75CB" }}>Nataša:</b> A talented game designer
          who possesses a unique skill set in both Japanese and Korean
          languages. With a deep understanding of these cultures, she brings a
          multicultural perspective to our team.
          <br />
          <br />
          <b style={{ color: COLORS[3] }}>Vasi:</b> A game designer with a
          proven talent for crafting captivating gaming experiences, she brings
          her creative vision and attention to detail to our team.
        </div>
      ),
    },
    {
      Text: (
        <div>
          <b style={{ color: COLORS[2] }}>Rade:</b> A passionate software
          engineer with a strong desire to make a mark in the game development
          industry. With a keen interest in computer graphics, he leverages his
          knowledge and enthusiasm to bring visually stunning worlds to life.
          <br />
          <Github link="https://github.com/Radule614" />
          <br />
          <b style={{ color: COLORS[1] }}>Nemanja:</b> Proved game developer who
          brings a wealth of experience and a track record of successful games.
          Through his dedication and talent, he has established himself as a
          valuable asset to our team.
          <br />
          <Github link="https://github.com/nemanja2106" />
          <br />
          <b style={{ color: COLORS[4] }}>Marko:</b> With a strong passion, he
          has turned his hobby of playing games into a creative pursuit by
          creating mods for a few of them. Take a closer look at his work as he
          showcases his technical skills and the projects he has undertaken in
          the gaming realm.
          <br />
          <Github link="https://github.com/Marko007205" />
        </div>
      ),
    },
  ];

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
                initial={{ x: -220, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.02, 1.06, 0.76, 0.98],
                }}
              >
                <MouseParallaxChild
                  factorX={!isMobile ? 0.3 : 0}
                  factorY={!isMobile ? 0.4 : 0}
                >
                  <div>{Content[0].Text}</div>
                </MouseParallaxChild>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={classes.right}>
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
                <MouseParallaxChild
                  factorX={!isMobile ? 0.4 : 0}
                  factorY={!isMobile ? 0.5 : 0}
                >
                  <div>{Content[1].Text}</div>
                </MouseParallaxChild>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </MouseParallaxContainer>
    </Section>
  );
};
