import { ViewStyle } from 'react-native'

export default {
    col: {
        flexDirection: 'column'
    },
    colReverse: {
        flexDirection: 'column-reverse'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    row: {
        flexDirection: 'row'
    },
    rowReverse: {
        flexDirection: 'row-reverse'
    },
    itemsCenter: {
        alignItems: 'center'
    },
    itemsStart: {
        alignItems: 'flex-start'
    },
    itemsStretch: {
        alignItems: 'stretch'
    },
    itemsEnd: {
        alignItems: 'flex-end'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyEvenly: {
        justifyContent: 'space-evenly'
    },
    selfCenter: {
        alignSelf: 'center'
    },
    selfStart: {
        alignSelf: 'flex-start'
    },
    selfEnd: {
        alignSelf: 'flex-end'
    },
    /* Sizes Layouts */
    flex_1: {
        flex: 1
    },
    flexGrow_1: {
        flexGrow: 1
    },
    fullWidth: {
        width: '100%'
    },
    fullHeight: {
        height: '100%'
    },
    heightFitContent: {
        height: 'auto'
    },
    /* Positions */
    relative: {
        position: 'relative'
    },
    absolute: {
        position: 'absolute'
    },
    absoluteFill: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    top0: {
        top: 0
    },
    bottom0: {
        bottom: 0
    },
    left0: {
        left: 0
    },
    right0: {
        right: 0
    },
    z1: {
        zIndex: 1
    },
    z10: {
        zIndex: 10
    },

    /* Other */
    overflowHidden: {
        overflow: 'hidden'
    }
} as const satisfies Record<string, ViewStyle>
