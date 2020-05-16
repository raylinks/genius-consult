const formatDate = (date) => {
    const newDate = new Date(date)
    return newDate
        .toString()
        .split(' ')
        .splice(0, 4)
        .join(' ')
}

export { formatDate }
