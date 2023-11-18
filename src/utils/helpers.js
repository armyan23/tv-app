export const getMovieTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    return `${hours ? hours + 'h' : ''} ${minutes ? minutes + 'm' : ''}`
}