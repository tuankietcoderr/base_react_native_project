const sizes = [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40,
    48
] as const

const families = {
    regular: 'Nunito-Regular',
    italic: 'Nunito-Italic',
    medium: 'Nunito-Medium',
    mediumItalic: 'Nunito-MediumItalic',
    semiBold: 'Nunito-SemiBold',
    semiBoldItalic: 'Nunito-SemiBoldItalic',
    bold: 'Nunito-Bold',
    boldItalic: 'Nunito-BoldItalic'
} as const

export { sizes, families }
