/**
 * Last modified: 2024.01.21 at 3:54 AM
 * By: Kiet Tran <kiet.tran@neoprototype.ca>
 */

import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

/**
 * The width and height of the figma design
 */
const FIGMA_WIDTH = 430
const FIGMA_HEIGHT = 932

/**
 * The width and height of the device
 */
const WIDTH = width > height ? height : width
const HEIGHT = width > height ? width : height

/**
 * Scale the size based on the figma design
 * Will scale with screen width changes, use it for horizontal spacing and icons (for both height and width)
 * @param size Size of the element
 * @returns Scaled size of the element
 */
const scale = (size: number) => {
    return (WIDTH / FIGMA_WIDTH) * size
}

/**
 * Scale the size based on the figma design
 * Will scale with screen height changes, use it for vertical spacing
 * @param size Size of the element
 * @returns Scaled size of the element
 */
const vertialScale = (size: number) => {
    return (HEIGHT / FIGMA_HEIGHT) * size
}

/**
 *  Scale the size based on the figma design
 *  Will scale with screen height changes as well, but less than s(), use it for font sizes and things you don't want to be scaled too much on very big or very small devices.
 * @param size Size of the element
 * @param factor Factor to scale the size, default is `0.5`
 * @returns Scaled size of the element
 */
const moderateScale = (size: number, factor = 0.5) => {
    return size + (scale(size) - size) * factor
}

/**
 *  Scale the size based on the figma design
 *  Will scale with screen height changes as well, but less than vs(), use it for font sizes and things you don't want to be scaled too much on very big or very small devices.
 * @param size Size of the element
 * @param factor Factor to scale the size, default is `0.5`
 * @returns Scaled size of the element
 */
const moderateVerticalScale = (size: number, factor = 0.5) => {
    return size + (vertialScale(size) - size) * factor
}

export {
    moderateScale as ms,
    moderateVerticalScale as mvs,
    scale as s,
    vertialScale as vs,
    WIDTH,
    HEIGHT
}
