// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import notes from "./notes";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const images = {
  blackYellow: require("../assets/blackYellow.jpg"),
  picture1: require("../assets/Picture1.png"),
  picture2: require("../assets/Picture2.png")
};

preloader(images);

const theme = createTheme({
  primary: "#1F2022",
  secondary: "#ffcb05",
  tertiary: "#e53935",
  quartenary: "#03A9FC"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    const { clicked } = this.state;

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary" bgImage={images.blackYellow} className="team" id="team" notes={notes.team}>
          <Heading size={1} fit caps lineHeight={8} textColor="secondary">
            Black & Yellow
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="world" notes={notes.world}>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            70%
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="problem" notes={notes.problem} bgImage={images.picture1}>
          <Heading size={3} textColor="secondary">
            Churn Graph
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="solution" notes={notes.solution} bgImage={images.picture2}>
          <Heading size={3} textColor="secondary">
            Happy Users
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" className="tech" id="tech" notes={notes.tech}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Tech
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" id="future" notes={notes.future}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Next steps
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" id="action" notes={notes.action}>
          <button className="send-button" type="button" onClick={::this.handleClick}>{clicked ? "Extention Sent!" : "Send Extention"}</button>
        </Slide>
      </Deck>
    );
  }
}
