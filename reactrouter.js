
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
            page={props.page}
            count={props.count}
            perPage={props.perPage}
            context={props.context}
            href={page => combineQuery(query, { page })}
            onClick={onClick}
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

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    context: PropTypes.number,
}

export default Pagination
