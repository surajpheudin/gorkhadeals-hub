import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { buttonTheme } from "./components/buttonTheme";
import formLabelTheme from "./components/formLabelTheme";
import headingTheme from "./components/headingTheme";
import textTheme from "./components/textTheme";
import breakpoints from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontSizes from "./foundations/fontSizes";
import fontWeights from "./foundations/fontWeights";
import letterSpacings from "./foundations/letterSpacings";
import lineHeights from "./foundations/lineHeights";
import semanticTokens from "./foundations/sematicTokens";
import styles from "./styles";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles,
    fonts,
    breakpoints,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    colors,
    semanticTokens,
    components: {
        Text: textTheme,
        FormLabel: formLabelTheme,
        Heading: headingTheme,
        Button: buttonTheme,
    },
});

export default theme;
