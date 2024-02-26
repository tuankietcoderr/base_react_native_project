/**
 * Last modified: 2024.01.21 at 3:57 AM
 * By: Kiet Tran <kiet.tran@neoprototype.ca>
 */

import { TEST } from '@env'
import { WIDTH, HEIGHT } from './responsive'
import STORAGE from './storage'
import { Platform, StatusBar } from 'react-native'

const APP_CONFIG = {
    ENV: {
        TEST
    },
    APP_NAME: 'Naming App',
    STORAGE_KEY: {
        THEME: 'GPT THEME',
        IS_FIRST_TIME: 'GPT IS_FIRST_TIME'
    },
    SCREEN: {
        WIDTH,
        HEIGHT
    },
    PLATFORM: Platform.OS,
    STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : StatusBar?.currentHeight ?? 0
}

export { APP_CONFIG }
