
import React from 'react' // eslint-disable-line
import {
    Pagination as BootstrapPagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap' // eslint-disable-line

import BasicPagination from './index'
import { omit } from './util'

const SPACER = '...'
const DEFAULT_CONTEXT = 2  // number of pages to show before and after current page.

const Pagination = props => {
    const previous = _page => (
        <PaginationItem key="previous">
            <PaginationLink
                role="button"
                href={props.href(_page)}
                onClick={props.onClick}
            >Previous</PaginationLink>
        </PaginationItem>
    )

    const next = _page => (
        <PaginationItem key="next">
            <PaginationLink
                role="button"
                href={props.href(_page)}
                onClick={props.onClick}
            >Next</PaginationLink>
        </PaginationItem>
    )

    const spacer = _page => (
        <PaginationItem key={_page}>
            <PaginationLink>{SPACER}</PaginationLink>
        </PaginationItem>
    )

    const item = (_page, active) => (
        <PaginationItem active={active} key={_page}>
            <PaginationLink
                role="button"
                href={props.href(_page)}
                onClick={props.onClick}
            >{_page}</PaginationLink>
        </PaginationItem>
    )

    return (
        <BasicPagination
            previous={previous}
            next={next}
            item={item}
            spacer={spacer}
            wrapper={BootstrapPagination}
            {...omit(props, ['href', 'onClick'])}
        />
    )
}

Pagination.defaultProps = {
    context: DEFAULT_CONTEXT,
}

export default Pagination
