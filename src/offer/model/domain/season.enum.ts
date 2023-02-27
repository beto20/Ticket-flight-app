enum Season {
    SUMMER,
    AUTUMN,
    WINTER,
    SPRING,
}

const fromString = (season: string) => {
    switch (season) {
        case 'SUMMER':
            return Season.SUMMER
        case 'AUTUMN':
            return Season.AUTUMN
        case 'WINTER':
            return Season.WINTER
        case 'SPRING':
            return Season.SPRING
        default:
            return Season.SUMMER
    }
}