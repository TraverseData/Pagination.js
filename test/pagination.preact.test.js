
import preact from 'preact'
import render from 'preact-render-to-json'

import Pagination from '../preact/Pagination'

/** @jsx preact.h */

const wrapper = props => <ul>{props.children}</ul>
const previous = page => <li key="previous"><a href={page - 1}>Previous</a></li>
const next = page => <li key="next"><a href={page + 1}>Next</a></li>
const spacer = page => <li key={page}>...</li>
const item = (page, active) => (
    active ?
    (<li key={page}>{page}</li>) :
    (<li key={page}><a href={page}>{page}</a></li>)
)

test('1st page, 100 total, 10 per page', () => {
    const tree = render(
        <Pagination
            page={1}
            count={100}
            perPage={10}
            context={2}
            previous={previous}
            wrapper={wrapper}
            item={item}
            next={next}
            spacer={spacer}
        />)

    expect(tree).toMatchSnapshot()
})

test('3rd page, 45 total, 10 per page', () => {
    const tree = render(
        <Pagination
            page={3}
            count={45}
            perPage={10}
            context={2}
            previous={previous}
            wrapper={wrapper}
            item={item}
            next={next}
            spacer={spacer}
        />)

    expect(tree).toMatchSnapshot()
})

test('10th page, 200 total, 10 per page', () => {
    const tree = render(
        <Pagination
            page={10}
            count={200}
            perPage={10}
            context={2}
            previous={previous}
            wrapper={wrapper}
            item={item}
            next={next}
            spacer={spacer}
        />)

    expect(tree).toMatchSnapshot()
})

test('10th page, 100 total, 10 per page', () => {
    const tree = render(
        <Pagination
            page={10}
            count={100}
            perPage={10}
            context={2}
            previous={previous}
            wrapper={wrapper}
            item={item}
            next={next}
            spacer={spacer}
        />)

    expect(tree).toMatchSnapshot()
})

test('1st page, 10 total, 10 per page', () => {
    const tree = render(
        <Pagination
            page={1}
            count={10}
            perPage={10}
            context={2}
            previous={previous}
            wrapper={wrapper}
            item={item}
            next={next}
            spacer={spacer}
        />)

    expect(tree).toMatchSnapshot()
})
