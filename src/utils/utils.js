export const getScreenSize = () => {
    const width = window.innerWidth
    if (width <= 767) return 'sm'
    if (width > 767 && width <= 980) return 'md'
    if (width > 980 && width <= 1440) return 'lg'
    if (width > 1440) return 'xl'
}