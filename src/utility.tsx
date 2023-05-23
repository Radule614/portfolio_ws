import { HeaderSection, AboutUs, Development, Design, Games } from "./sections";

export const COLORS = ["#DDDDDD", "#3C89CD", "#E94F37", "#FFB400", "#00AF54"];
export const BACKGROUND_COLORS = ["#21252B", "#282C34"];

export const BOOKMARKS = [
  {
    value: "section_1",
    text: "Intro",
    element: <HeaderSection color={BACKGROUND_COLORS[0]} />,
  },
  {
    value: "section_2",
    text: "About Us",
    element: <AboutUs color={BACKGROUND_COLORS[1]} />,
  },
  {
    value: "section_3",
    text: "Development",
    element: <Development color={BACKGROUND_COLORS[0]} />,
  },
  {
    value: "section_4",
    text: "Design",
    element: <Design color={BACKGROUND_COLORS[1]} />,
  },
  {
    value: "section_5",
    text: "Games",
    element: <Games color={BACKGROUND_COLORS[0]} />,
  },
];
