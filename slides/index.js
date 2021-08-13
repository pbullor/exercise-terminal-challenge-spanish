// Import React
import React from "react";
import data from "./data.json";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Markdown,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    const additonalSlides = data.map((ex, i) => (<Slide key={i} transition={["fade"]} bgColor="primary">
        <Markdown>{ex.instructions}</Markdown>
    </Slide>));
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
            <Image margin="0 auto 100px auto" src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" />
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                La competencia de la linea de comandos
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                Conoce al mejor amigo del programador
            </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>¿Como funciona?</Heading>
          <Heading size={1} textColor="secondary">16 retos</Heading>
          <Heading size={2} textColor="secondary">12 comandos</Heading>
          <Heading size={3} textColor="secondary">1 ganador/a</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Reglas</Heading>
          <List>
            <ListItem>Cada desafío solo puede tener 1 ganadora.</ListItem>
            <ListItem>¡Quien gane más, gana el premio!</ListItem>
            <ListItem>Solo para aficionados (los experimentados pueden participar pero no ganar)</ListItem>
            <ListItem>Siga las instrucciones exactas, puede ser complicado</ListItem>
            <ListItem>¡Utilice el acceso directo de la pestaña para autocompletar!</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Antes que empecemos</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            Cada alumno debe clonar el siguiente repositorio:
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
              https://github.com/breatheco-de/excercise-terminal-challenge.git
          </Text>                    
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Están list@s??</Heading>
        </Slide>
        {additonalSlides}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <BlockQuote>
            <Quote>Vim is my favourite text editor. I've been using it for years...I can't figure out how to exit.</Quote>
            <Cite>Albert Einstain and Pitagoras</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>THE END</Heading>
        </Slide>
      </Deck>
    );
  }
}
