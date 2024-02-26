import { useContext } from 'react'
import { ThemeContext } from '@/theme/theme-provider'

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}

export default useTheme
