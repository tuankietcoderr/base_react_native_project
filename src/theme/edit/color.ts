const colorsLight = {
    // PRIMARY
    primary500: '#6949FF',
    primary400: '#876DFF',
    primary300: '#A592FF',
    primary200: '#C3B6FF',
    primary100: '#F0EDFF',

    // SECONDARY
    secondary500: '#FFC107',
    secondary400: '#FFCD39',
    secondary300: 'FFDA6A',
    secondary200: '#FFE69C',
    secondary100: '#FFF9E6',

    // GRAYSCALE
    gray900: '#212121',
    gray800: '#424242',
    gray700: '#616161',
    gray600: '#757575',
    gray500: '#9E9E9E',
    gray400: '#BDBDBD',
    gray300: '#E0E0E0',
    gray200: '#EEEEEE',
    gray100: '#F5F5F5',
    gray50: '#FAFAFA',

    // ALERT & STATUS
    success: '#12D18E',
    info: '#6949FF',
    warning: '#FACC15',
    error: '#F75555',
    disabled: '#D8D8D8',
    buttonDisabled: '#543ACC',

    // GRADIENTS
    greenGradient0: '#12D18E',
    greenGradient1: '#71E3BB',
    yellowGradient0: '#FACC15',
    yellowGradient1: '#FFE580',
    blueGradient0: '#246BFD',
    blueGradient1: '#5089FD',
    purpleGradient0: '#6949FF',
    purpleGradient1: '#876DFF',
    tealGradient0: '#019B83',
    tealGradient1: '#18C6AB',
    redGradient0: '#FF5A5F',
    redGradient1: '#FF8A9B',
    orangeGradient0: '#FB9400',
    orangeGradient1: '#FFAB38',

    // DARKS
    dark1: '#181A20',
    dark2: '#1F222A',
    dark3: '#35383F',

    // OTHERS
    white: '#FFFFFF',
    black: '#000000',
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    blueGrey: '#607D8B',

    // BACKGROUND
    backgroundPurple: '#F9F8FF',
    backgroundYellow: '#FFFCEB',
    backgroundGreen: '#F1FDF5',
    backgroundBlue: '#F6F9FF',
    backgroundTeal: '#F2FFFD',
    backgroundRed: '#FFF7F8',
    backgroundOrange: '#FFF8ED',

    // TRANSPARENT
    transparent: 'transparent',
    transparentPurple: 'rgba(105, 73, 255, 0.08)',
    transparentYellow: 'rgba(255, 211, 0, 0.08)',
    transparentGreen: 'rgba(27, 172, 75, 0.08)',
    transparentBlue: 'rgba(36, 107, 253, 0.08)',
    transparentTeal: 'rgba(1, 155, 131, 0.08)',
    transparentRed: 'rgba(255, 90, 95, 0.08)',
    transparentOrange: 'rgba(251, 152, 0, 0.08)',
    transparentCyan: 'rgba(0, 188, 212, 0.08)'
} as const

const colorsDark = {
    // PRIMARY
    primary500: colorsLight.dark3,
    primary400: '#876DFF',
    primary300: '#A592FF',
    primary200: '#C3B6FF',
    primary100: '#F0EDFF',

    // GREYSCALE
    gray900: colorsLight.white
} as const

export { colorsLight, colorsDark }
