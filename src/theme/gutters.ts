import { config } from '@/theme/_config'

import type { Gutters } from '@/types/theme/gutters'
import { s } from '@/utils/responsive'
import type { ViewStyle } from 'react-native'

export const generateGutters = (): Gutters => {
    return config.gutters.reduce((acc, curr) => {
        const responsiveCurr = s(curr)
        return Object.assign(acc, {
            [`margin_${curr}`]: {
                margin: responsiveCurr
            },
            [`marginBottom_${curr}`]: {
                marginBottom: responsiveCurr
            },
            [`marginTop_${curr}`]: {
                marginTop: responsiveCurr
            },
            [`marginRight_${curr}`]: {
                marginRight: responsiveCurr
            },
            [`marginLeft_${curr}`]: {
                marginLeft: responsiveCurr
            },
            [`marginVertical_${curr}`]: {
                marginVertical: responsiveCurr
            },
            [`marginHorizontal_${curr}`]: {
                marginHorizontal: responsiveCurr
            },
            [`padding_${curr}`]: {
                padding: responsiveCurr
            },
            [`paddingBottom_${curr}`]: {
                paddingBottom: responsiveCurr
            },
            [`paddingTop_${curr}`]: {
                paddingTop: responsiveCurr
            },
            [`paddingRight_${curr}`]: {
                paddingRight: responsiveCurr
            },
            [`paddingLeft_${curr}`]: {
                paddingLeft: responsiveCurr
            },
            [`paddingVertical_${curr}`]: {
                paddingVertical: responsiveCurr
            },
            [`paddingHorizontal_${curr}`]: {
                paddingHorizontal: responsiveCurr
            },
            [`gap_${curr}`]: {
                gap: responsiveCurr
            }
        })
    }, {} as Gutters)
}

export const staticGutterStyles = {} as const satisfies Record<
    string,
    ViewStyle
>
