import { ms, mvs } from '@/utils/responsive'
import { families } from '../font'

const heading = {
    heading1: {
        fontFamily: families.bold,
        fontSize: mvs(48),
        lineHeight: ms(76)
    },
    heading2: {
        fontFamily: families.bold,
        fontSize: mvs(40),
        lineHeight: ms(64)
    },
    heading3: {
        fontFamily: families.bold,
        fontSize: mvs(32),
        lineHeight: ms(52)
    },
    heading4: {
        fontFamily: families.bold,
        fontSize: mvs(24),
        lineHeight: ms(40)
    },
    heading5: {
        fontFamily: families.bold,
        fontSize: mvs(20),
        lineHeight: ms(32)
    },
    heading6: {
        fontFamily: families.bold,
        fontSize: mvs(18),
        lineHeight: ms(28)
    }
} as const

export { heading }
