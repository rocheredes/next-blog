export const truncateWords = (paragraph, noWords) => {
    return paragraph.split(' ').splice(0, noWords).join(' ')
}