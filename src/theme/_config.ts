import { DarkTheme } from '@react-navigation/native'
import type { ThemeConfiguration } from '@/types/theme/config'
import { colorsDark, colorsLight } from './edit/color'
import { families, sizes } from './edit/font'
import { body, heading } from './edit/typography'
import { borderRadius, borderWidth } from './edit/border'

export const config = {
    fonts: {
        sizes,
        colors: colorsLight,
        families,
        typographies: { ...heading, ...body }
    },
    gutters: sizes,
    backgrounds: colorsLight,
    borders: {
        widths: borderWidth,
        radius: borderRadius,
        colors: colorsLight
    },
    navigationColors: {
        ...DarkTheme.colors,
        background: colorsLight.white,
        card: colorsLight.gray50,
        text: colorsLight.gray900,
        primary: colorsLight.primary500
    },
    variants: {
        dark: {
            fonts: {
                colors: colorsDark
            },
            backgrounds: colorsDark,
            navigationColors: {
                ...DarkTheme.colors
            }
        }
    }
} as const satisfies ThemeConfiguration
