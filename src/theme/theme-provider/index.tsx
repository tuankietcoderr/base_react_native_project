import {
    createContext,
    PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react'

import { config } from '@/theme/_config'
import {
    generateFontSizes,
    generateFontTypographies,
    generateFontColors,
    staticFontStyles,
    generateFontFamilies
} from '@/theme/fonts'
import {
    generateBorderColors,
    generateBorderRadius,
    generateBorderWidths
} from '@/theme/borders'
import layout from '@/theme/layout'
import componentsGenerator from '@/theme/components'
import { generateBackgrounds } from '@/theme/backgrounds'
import { generateGutters } from '@/theme/gutters'
import generateConfig from '@/theme/theme-provider/generate-config'

import type { MMKV } from 'react-native-mmkv'
import type { ComponentTheme, Theme } from '@/types/theme'
import type { FulfilledThemeConfiguration, Variant } from '@/types/theme/config'
import { APP_CONFIG } from '@/utils/app-config'
import { useColorScheme } from 'react-native'

// Types

type Context = Theme & {
    changeTheme: (variant: Variant) => void
    toggleTheme: () => void
}

export const ThemeContext = createContext<Context | undefined>(undefined)

type Props = PropsWithChildren<{
    storage: MMKV
}>

function ThemeProvider({ children, storage }: Props) {
    // Current theme variant
    const [variant, setVariant] = useState(
        (storage.getString(APP_CONFIG.STORAGE_KEY.THEME) as Variant) ||
            'default'
    )

    const userTheme = useColorScheme()

    // Initialize theme at default if not defined
    useEffect(() => {
        //! Uncomment this to enable system theme
        // const appHasThemeDefined = storage.contains(
        //     APP_CONFIG.STORAGE_KEY.THEME
        // )
        // if (!appHasThemeDefined) {
        //     storage.set(
        //         APP_CONFIG.STORAGE_KEY.THEME,
        //         userTheme?.toString() ?? 'default'
        //     )
        //     setVariant((userTheme ?? 'default') as Variant)
        // }
    }, [])

    const changeTheme = useCallback(
        (nextVariant: Variant) => {
            setVariant(nextVariant)
            storage.set(APP_CONFIG.STORAGE_KEY.THEME, nextVariant)
        },
        [storage]
    )

    const toggleTheme = useCallback(() => {
        const nextVariant = variant === 'dark' ? 'default' : 'dark'
        changeTheme(nextVariant)
    }, [variant])

    // Flatten config with current variant
    const fullConfig = useMemo(() => {
        return generateConfig(variant) satisfies FulfilledThemeConfiguration
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variant, config])

    const fonts = useMemo(() => {
        return {
            ...generateFontSizes(),
            ...generateFontTypographies(fullConfig),
            ...generateFontColors(fullConfig),
            ...generateFontFamilies(),
            ...staticFontStyles
        }
    }, [fullConfig])

    const backgrounds = useMemo(() => {
        return generateBackgrounds(fullConfig)
    }, [fullConfig])

    const borders = useMemo(() => {
        return {
            ...generateBorderColors(fullConfig),
            ...generateBorderRadius(),
            ...generateBorderWidths()
        }
    }, [fullConfig])

    const navigationTheme = useMemo(() => {
        return {
            dark: variant === 'dark',
            colors: fullConfig.navigationColors
        }
    }, [variant, fullConfig.navigationColors])

    const theme = useMemo(() => {
        return {
            colors: fullConfig.colors,
            variant,
            gutters: generateGutters(),
            layout,
            fonts,
            backgrounds,
            borders
        } satisfies ComponentTheme
    }, [variant, fonts, backgrounds, borders, fullConfig.colors])

    const components = useMemo(() => {
        return componentsGenerator(theme)
    }, [theme])

    const value = useMemo(() => {
        return {
            ...theme,
            components,
            navigationTheme,
            changeTheme,
            toggleTheme
        }
    }, [theme, components, navigationTheme, changeTheme, toggleTheme])

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
