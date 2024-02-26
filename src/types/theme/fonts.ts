import { config } from '@/theme/_config'
import { staticFontStyles } from '@/theme/fonts'

import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common'
import type { UnionConfiguration } from './config'

type FontSizesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}`

export type FontSizes = {
    [key in FontSizesKeys]: {
        fontSize: ToNumber<RemoveBeforeSeparator<key>>
    }
}

type FontTypographiesKeys =
    `${keyof UnionConfiguration['fonts']['typographies']}`

export type FontTypographies = {
    [key in FontTypographiesKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['typographies']
        ? UnionConfiguration['fonts']['typographies'][RemoveBeforeSeparator<key>]
        : never
}

type FontColorsKeys = `${keyof UnionConfiguration['fonts']['colors']}`

export type FontColors = {
    [key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
        ? {
              color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>]
          }
        : never
}

type FontFamilyKeys = `family_${keyof UnionConfiguration['fonts']['families']}`

export type FontFamilies = {
    [key in FontFamilyKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['families']
        ? UnionConfiguration['fonts']['families'][RemoveBeforeSeparator<key>]
        : never
}

export type Fonts = FontSizes &
    FontTypographies &
    FontColors &
    FontFamilies &
    typeof staticFontStyles
