import { NavigationProp } from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'

export type ApplicationStackParamList = {
    Onboarding: undefined
    Home: undefined
}

export type ApplicationScreenProps<T extends keyof ApplicationStackParamList> =
    StackScreenProps<ApplicationStackParamList, T>
export type ApplicationNavigationProps =
    NavigationProp<ApplicationStackParamList>
