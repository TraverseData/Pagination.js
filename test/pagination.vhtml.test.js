/* eslint-env jest */

import h from 'vhtml'

import Pagination from '../vhtml/Pagination'

/** @jsx h */

const wrapper = props => <ul>{props.children}</ul>
const previous = page => <li><a href={page}>Previous</a></li>
const next = page => <li><a href={page}>Next</a></li>
const spacer = () => <li>...</li>
const item = (page, active) => (
    active ?
    (<li>{page}</li>) :
    (<li><a href={page}>{page}</a></li>)
)

describe('vhtml/Pagination', () => {
    test('1st page, 100 total, 10 per page', () => {
        const html = (
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

        expect(html).toBe('<ul><li>1</li><li><a href="2">2</a></li><li><a href="3">3</a></li><li>...</li><li><a href="10">10</a></li><li><a href="2">Next</a></li></ul>')
    })

    test('3rd page, 45 total, 10 per page', () => {
        const html = (
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

        expect(html).toBe('<ul><li><a href="2">Previous</a></li><li><a href="1">1</a></li><li><a href="2">2</a></li><li>3</li><li><a href="4">4</a></li><li><a href="5">5</a></li><li><a href="4">Next</a></li></ul>')
    })

    test('10th page, 200 total, 10 per page', () => {
        const html = (
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

        expect(html).toBe('<ul><li><a href="9">Previous</a></li><li><a href="1">1</a></li><li>...</li><li><a href="8">8</a></li><li><a href="9">9</a></li><li>10</li><li><a href="11">11</a></li><li><a href="12">12</a></li><li>...</li><li><a href="20">20</a></li><li><a href="11">Next</a></li></ul>')
    })

    test('10th page, 100 total, 10 per page', () => {
        const html = (
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

        expect(html).toBe('<ul><li><a href="9">Previous</a></li><li><a href="1">1</a></li><li>...</li><li><a href="8">8</a></li><li><a href="9">9</a></li><li>10</li></ul>')
    })

    test('1st page, 10 total, 10 per page', () => {
        const html = (
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

        expect(html).toBe(null)
    })
})
