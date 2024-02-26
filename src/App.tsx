import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ThemeProvider } from '@/theme'

import '@/translation'
import { Host } from 'react-native-portalize'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ApplicationNavigator from './navigatiors/application'
import layout from './theme/layout'
import STORAGE from './utils/storage'

function App() {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <ThemeProvider storage={STORAGE}>
                <GestureHandlerRootView style={layout.flex_1}>
                    <Host>
                        <ApplicationNavigator />
                    </Host>
                </GestureHandlerRootView>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App
