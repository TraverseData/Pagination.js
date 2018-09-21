
import React from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'

import ReactstrapPagination from './reactstrap'

const NOOP = () => {}
const DEFAULT_CONTEXT = 2  // number of pages to show before and after current page.

/**
 * Returns a link combining existing query parameters `current` with new parameters
 * `replace`.
 * @param  {Object} current - Existing query parameters
 * @param  {Object} replace - New query parameters
 * @return {String} - Relative link with combined parameters
 */
const combineQuery = (current, replace) =>
    `?${qs.stringify({ ...current, ...replace })}`


const Pagination = (props, context) => {
    let pageParam = 'page'
    if (props.pageParamId) {
        pageParam = `${pageParam}${props.pageParamId}`
    }
    const query = (
        context.router &&
        context.router.history.location
    ) ? qs.parse(context.router.history.location.search.substr(1)) : {}

    const push = context.router ? context.router.history.push : NOOP

    const onClick = e => {
        e.preventDefault()
        push(e.target.getAttribute('href'))
    }

    return (
        <ReactstrapPagination
            href={page => combineQuery(query, { [pageParam]: page })}
            onClick={onClick}
            {...props}
        />
    )
}

Pagination.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.shape({
            push: PropTypes.func,
            location: PropTypes.shape({
                search: PropTypes.string,
            }),
        }),
    }),
}

Pagination.defaultProps = {
    context: DEFAULT_CONTEXT,
}

export default Pagination
