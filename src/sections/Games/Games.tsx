import { Tabs, Tab, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Section } from "../../components/section";
import classes from "./Games.module.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { isMobile } from "react-device-detect";
import clsx from "clsx";

const Content = [
  {
    title: "Crypt Theft",
    media: "assets/cryptTheft.webm",
    text: `
      This is a first-person game designed and implemented using Unreal Engine 5 and C++. Players will experience the use of Lumen, 
      which creates various lighting effects and enhances the game's visual quality. Additionally, line tracing enables players to interact 
      with and pick up objects within the game environment.  Moreover, the game features a trigger component that adds an additional challenge 
      to the gameplay. For instance, when players pick up the mysterious statue from the temple, the trigger component activates and closes 
      the gate, making it harder to escape. Players will need to use their problem-solving skills to figure out how to solve this issue and 
      successfully navigate the obstacles to complete the game's objective.
    `,
  },
  {
    title: "Minecraft",
    media: "assets/Minecraft.webm",
    text: `
      We have developed an engaging game using C++ and OpenGL, focusing on graphics and voxel world generation. 
      Inspired by Minecraft, our creation serves as a feature-less copy, specifically designed to facilitate the learning of OpenGL. 
      Our game showcases the potential of C++ and OpenGL in creating visually captivating and interactive virtual environments.
    `,
  },
  {
    title: "Through The Clouds",
    media: "assets/throughTheClouds.webm",
    text: `
      This is a third-person game designed and implemented using Unreal Engine 5 and C++. When playing this game, players will encounter 
      challenging features such as rotating and moving platforms, as well as obstacles that increase the game's difficulty and provide 
      an exciting gameplay experience.
    `,
  },
  {
    title: "Tanks",
    media: "assets/Tanks.webm",
    text: `
      A small HTML5 2D game built entirely by hand without relying on libraries, is a testament to our team's passion, craftsmanship, and innovation.
      
    `,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Games = ({ color }: { color: string }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          <div className={classes.tabs}>
            <Tabs value={value} onChange={handleChange}>
              {Content.map((c, i) => (
                <Tab key={i} label={c.title} {...a11yProps(i)} />
              ))}
            </Tabs>
          </div>
          {Content.map((c, i) => (
            <TabPanel key={i} value={value} index={i}>
              <div className={classes.panelContainer}>
                <div className={classes.left}>
                  <AnimatePresence>
                    <motion.div
                      className={classes.imageWrapper}
                      initial={{ x: -320, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
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
                      <div className={classes.image}>
                        <video src={c.media} loop autoPlay muted/>
                      </div>
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
                            ease: [0.02, 1.06, 0.76, 0.98],
                          }}
                        >
                          <span>{c.text}</span>
                          <span>&nbsp;</span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </MouseParallaxChild>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </MouseParallaxContainer>
    </Section>
  );
};
