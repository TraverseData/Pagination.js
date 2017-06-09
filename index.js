
// ___JSX_IMPORT___

const pagination = (page, last, context) => {
    const left = page - context
    const right = page + context + 1
    const range = [1]
    const rangeWithSpacers = []

    for (let i = page - context; i <= page + context; i += 1) {
        if (i >= left && i < right && i < last && i > 1) {
            range.push(i)
        }
    }

    range.push(last)

    if (range.length === 2 && range[0] === range[1]) {
        return []
    }

    let l

    range.forEach(i => {
        if (l) {
            if (i - l === 2) {
                rangeWithSpacers.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithSpacers.push(`_${l + 1}`)
            }
        }

        rangeWithSpacers.push(i)
        l = i
    })

    return rangeWithSpacers
}

export default props => {
    const last = Math.ceil(props.count / props.perPage)
    const pages = pagination(props.page, last, props.context)

    return pages.length ? (
        <props.wrapper>
            {(props.page !== 1) && props.previous(props.page)}
            {pages.map(page => (
                (typeof page === 'number') ? (
                    props.item(page, page === props.page)
                ) : (
                    props.spacer(page)
                )
            ))}
            {(props.page !== last) && props.next(props.page)}
        </props.wrapper>
    ) : null
}
