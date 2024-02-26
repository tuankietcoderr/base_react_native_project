import { TextStyle } from 'react-native'
import { families } from '../font'
import { mvs } from '@/utils/responsive'

const body = {
    // XLarge
    bodyXLargeBold: {
        fontFamily: families.bold,
        fontSize: mvs(18),
        lineHeight: mvs(28)
    },
    bodyXLargeSemibold: {
        fontFamily: families.semiBold,
        fontSize: mvs(18),
        lineHeight: mvs(28)
    },
    bodyXLargeMedium: {
        fontFamily: families.medium,
        fontSize: mvs(18),
        lineHeight: mvs(28)
    },
    bodyXLargeRegular: {
        fontFamily: families.regular,
        fontSize: mvs(18),
        lineHeight: mvs(28)
    },

    // Large
    bodyLargeBold: {
        fontFamily: families.bold,
        fontSize: mvs(16),
        lineHeight: mvs(22)
    },
    bodyLargeSemibold: {
        fontFamily: families.semiBold,
        fontSize: mvs(16),
        lineHeight: mvs(22)
    },
    bodyLargeMedium: {
        fontFamily: families.medium,
        fontSize: mvs(16),
        lineHeight: mvs(22)
    },
    bodyLargeRegular: {
        fontFamily: families.regular,
        fontSize: mvs(16),
        lineHeight: mvs(22)
    },

    // Medium
    bodyMediumBold: {
        fontFamily: families.bold,
        fontSize: mvs(14),
        lineHeight: mvs(20)
    },
    bodyMediumSemibold: {
        fontFamily: families.semiBold,
        fontSize: mvs(14),
        lineHeight: mvs(20)
    },
    bodyMediumMedium: {
        fontFamily: families.medium,
        fontSize: mvs(14),
        lineHeight: mvs(20)
    },
    bodyMediumRegular: {
        fontFamily: families.regular,
        fontSize: mvs(14),
        lineHeight: mvs(20)
    },

    // Small
    bodySmallBold: {
        fontFamily: families.bold,
        fontSize: mvs(12),
        lineHeight: mvs(18)
    },
    bodySmallSemibold: {
        fontFamily: families.semiBold,
        fontSize: mvs(12),
        lineHeight: mvs(18)
    },
    bodySmallMedium: {
        fontFamily: families.medium,
        fontSize: mvs(12),
        lineHeight: mvs(18)
    },
    bodySmallRegular: {
        fontFamily: families.regular,
        fontSize: mvs(12),
        lineHeight: mvs(18)
    },

    // XSmall
    bodyXSmallBold: {
        fontFamily: families.bold,
        fontSize: mvs(10),
        lineHeight: mvs(14)
    },
    bodyXSmallSemibold: {
        fontFamily: families.semiBold,
        fontSize: mvs(10),
        lineHeight: mvs(14)
    },
    bodyXSmallMedium: {
        fontFamily: families.medium,
        fontSize: mvs(10),
        lineHeight: mvs(14)
    },
    bodyXSmallRegular: {
        fontFamily: families.regular,
        fontSize: mvs(10),
        lineHeight: mvs(14)
    }
} as const

export { body }
