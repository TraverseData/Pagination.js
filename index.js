
// ___JSX_IMPORT___

import { omit } from './util'

const DEFAULT_CONTEXT = 2  // number of pages to show before and after current page.

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

const Pagination = props => {
    const {
        page,
        perPage,
        count,
        context,
        previous,
        next,
        item,
        spacer,
    } = props
    const rest = omit(props, [
        'page',
        'perPage',
        'pageParamId',
        'count',
        'context',
        'previous',
        'next',
        'item',
        'spacer',
        'wrapper',
        'children',
    ])
    const last = Math.ceil(count / perPage)
    const pages = pagination(page, last, context)

    return pages.length ? (
        <props.wrapper {...rest}>
            {(page !== 1) && previous(page - 1)}
            {pages.map(_page => (
                (typeof _page === 'number') ? (
                    item(_page, _page === page)
                ) : (
                    spacer(_page)
                )
            ))}
            {(page !== last) && next(page + 1)}
        </props.wrapper>
    ) : null
}

Pagination.defaultProps = {
    context: DEFAULT_CONTEXT,
}

export default Pagination
