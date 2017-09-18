import { teal200, teal700, deepPurple700, grey100, grey300, grey400, grey500, grey700, white, fullBlack } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: teal700,
        primary2Color: teal200,
        primary3Color: grey400,
        accent1Color: deepPurple700,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: grey700,
        secondaryTextColor: fade(grey700, 0.9),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(grey700, 0.6),
        pickerHeaderColor: teal700,
        clockCircleColor: fade(grey700, 0.07),
        shadowColor: fullBlack,
    },
};