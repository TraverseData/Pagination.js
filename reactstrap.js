
import React from 'react' // eslint-disable-line
import {
    Pagination as BootstrapPagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap' // eslint-disable-line

import BasicPagination from './index'

const SPACER = '...'
const DEFAULT_CONTEXT = 2  // number of pages to show before and after current page.

const Pagination = props => {
    const previous = page => (
        <PaginationItem key="previous">
            <PaginationLink
                role="button"
                href={props.href(page - 1)}
                onClick={props.onClick}
            >Previous</PaginationLink>
        </PaginationItem>
    )

    const next = page => (
        <PaginationItem key="next">
            <PaginationLink
                role="button"
                href={props.href(page + 1)}
                onClick={props.onClick}
            >Next</PaginationLink>
        </PaginationItem>
    )

    const spacer = page => (
        <PaginationItem key={page}>
            <PaginationLink>{SPACER}</PaginationLink>
        </PaginationItem>
    )

    const item = (page, active) => (
        <PaginationItem active={active} key={page}>
            <PaginationLink
                role="button"
                href={props.href(page)}
                onClick={props.onClick}
            >{page}</PaginationLink>
        </PaginationItem>
    )

    return (
        <BasicPagination
            page={props.page}
            count={props.count}
            perPage={props.perPage}
            context={props.context}
            previous={previous}
            wrapper={BootstrapPagination}
            item={item}
            next={next}
            spacer={spacer}
        />
    )
}

Pagination.defaultProps = {
    context: DEFAULT_CONTEXT,
}

export default Pagination
