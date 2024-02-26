import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { useTheme } from '@/theme'

import type { ApplicationStackParamList } from '@/types/navigation'
import { OnboardingScreen, HomeScreen } from '@/screens'
import STORAGE from '@/utils/storage'
import { APP_CONFIG } from '@/utils/app-config'

const Stack = createStackNavigator<ApplicationStackParamList>()

function ApplicationNavigator() {
    const { variant, navigationTheme } = useTheme()

    const initialRouteName =
        STORAGE.getBoolean(APP_CONFIG.STORAGE_KEY.IS_FIRST_TIME) === false
            ? 'Home'
            : 'Onboarding'

    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator
                key={variant}
                screenOptions={{
                    headerShown: false,
                    presentation: 'card'
                }}
                initialRouteName={initialRouteName}>
                <Stack.Screen name='Onboarding' component={OnboardingScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator
