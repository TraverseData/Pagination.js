
import React from 'react'
import renderer from 'react-test-renderer'

import Pagination from '../react/PaginationReactstrap'


test('1st page, 100 total, 10 per page', () => {
    const component = renderer.create(
        <Pagination
            page={1}
            count={100}
            perPage={10}
            href={page => page}
        />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('3rd page, 45 total, 10 per page', () => {
    const component = renderer.create(
        <Pagination
            page={3}
            count={45}
            perPage={10}
            href={page => page}
        />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('10th page, 200 total, 10 per page', () => {
    const component = renderer.create(
        <Pagination
            page={10}
            count={200}
            perPage={10}
            href={page => page}
        />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('10th page, 100 total, 10 per page', () => {
    const component = renderer.create(
        <Pagination
            page={10}
            count={100}
            perPage={10}
            href={page => page}
        />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('1st page, 10 total, 10 per page', () => {
    const component = renderer.create(
        <Pagination
            page={1}
            count={10}
            perPage={10}
            href={page => page}
        />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
