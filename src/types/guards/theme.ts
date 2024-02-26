import type { HasProperty } from '@/types/theme/common'

export function hasProperty<Config, KeyPath extends string>(
    configuration: Config,
    property: KeyPath
): configuration is HasProperty<Config, KeyPath> & Config {
    const parts = property.split('.')
    let currentObj: any = configuration

    for (let i = 0; i < parts.length; i += 1) {
        const part = parts[i]
        if (!(part in currentObj)) {
            return false
        }

        currentObj = currentObj[part]
    }

    return true
}
