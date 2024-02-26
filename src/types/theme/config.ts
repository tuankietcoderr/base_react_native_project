import { config } from '@/theme/_config'
import generateConfig from '@/theme/theme-provider/generate-config'

import type { Theme as NavigationTheme } from '@react-navigation/native'
import type { AllPartial } from './common'
import { TextStyle } from 'react-native'
import { LinearGradientProps } from 'react-native-linear-gradient'

export type Variant = keyof typeof config.variants | 'default'

export type ThemeState = {
    variant: Variant
}

export type FulfilledThemeConfiguration = {
    fonts: {
        sizes: readonly number[]
        readonly colors: Record<string, string | LinearGradientProps>
        readonly families: Record<string, string>
        readonly typographies: Record<string, TextStyle>
    }
    gutters: readonly number[]
    readonly backgrounds: Record<string, string>
    borders: {
        widths: readonly number[]
        radius: readonly number[]
        readonly colors: Record<string, string>
    }
    readonly navigationColors: NavigationTheme['colors']
}

export type VariantThemeConfiguration = {
    fonts: {
        readonly colors: FulfilledThemeConfiguration['fonts']['colors']
    }
    readonly backgrounds: FulfilledThemeConfiguration['backgrounds']
    borders: {
        readonly colors: FulfilledThemeConfiguration['borders']['colors']
    }
    readonly navigationColors: Partial<NavigationTheme['colors']>
}

export type ThemeConfiguration = FulfilledThemeConfiguration & {
    variants: {
        [key: PropertyKey]: AllPartial<VariantThemeConfiguration>
    }
}

export type UnionConfiguration = ReturnType<typeof generateConfig>
