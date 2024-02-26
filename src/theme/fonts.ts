import { Platform, TextStyle } from 'react-native'
import type {
    FontColors,
    FontFamilies,
    FontSizes,
    FontTypographies
} from '@/types/theme/fonts'
import type { UnionConfiguration } from '@/types/theme/config'
import { config } from '@/theme/_config'
import { ms } from '@/utils/responsive'

export const generateFontColors = (configuration: UnionConfiguration) => {
    return Object.entries(configuration.fonts.colors ?? {}).reduce(
        (acc, [key, value]) => {
            return Object.assign(acc, {
                [`${key}`]: {
                    color: value
                }
            })
        },
        {} as FontColors
    )
}

export const generateFontTypographies = (configuration: UnionConfiguration) => {
    return Object.entries(configuration.fonts.typographies ?? {}).reduce(
        (acc, [key, value]) => {
            const platform = Platform.OS
            const { lineHeight, ...rest } = value
            return Object.assign(acc, {
                [`${key}`]: platform === 'ios' ? rest : value
            })
        },
        {} as FontTypographies
    )
}

export const generateFontSizes = () => {
    return config.fonts.sizes.reduce((acc, size) => {
        const responsiveSize = ms(size)
        return Object.assign(acc, {
            [`size_${size}`]: {
                fontSize: responsiveSize
            }
        })
    }, {} as FontSizes)
}

export const generateFontFamilies = () => {
    return Object.entries(config.fonts.families).reduce((acc, [key, value]) => {
        return Object.assign(acc, {
            [`family_${key}`]: value
        })
    }, {} as FontFamilies)
}

export const staticFontStyles = {
    bold: {
        fontWeight: 'bold'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    alignCenter: {
        textAlign: 'center'
    },
    alignLeft: {
        textAlign: 'left'
    },
    alignRight: {
        textAlign: 'right'
    },
    alignJustify: {
        textAlign: 'justify'
    }
} as const satisfies Record<string, TextStyle>
