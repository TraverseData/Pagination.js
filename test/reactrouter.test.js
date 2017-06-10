/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

import Pagination from '../react/PaginationReactRouter'

describe('react/PaginationReactRouter', () => {
    test('Uses context functions when clicking on a page', () => {
        let spy = ''

        const context = { router: { history: { push: url => { spy = url } } } }
        const component = mount(
            <Pagination
                page={1}
                count={100}
                perPage={10}
            />, { context })

        component
            .find('a')
            .at(1)
            .simulate('click')
        expect(spy).toBe('?page=2')
    })

    test('Respects existing query parameters', () => {
        let spy = ''

        const context = { router: { history: { push: url => { spy = url }, location: { search: '?q=a' } } } }
        const component = mount(
            <Pagination
                page={1}
                count={100}
                perPage={10}
            />, { context })

        component
            .find('a')
            .at(1)
            .simulate('click')
        expect(spy).toBe('?q=a&page=2')
    })

    test('Uses context functions when clicking previous or next', () => {
        let spy = ''

        const context = { router: { history: { push: url => { spy = url } } } }
        const component = mount(
            <Pagination
                page={2}
                count={100}
                perPage={10}
            />, { context })

        component
            .find('a')
            .first()
            .simulate('click')
        expect(spy).toBe('?page=1')

        component
            .find('a')
            .last()
            .simulate('click')
        expect(spy).toBe('?page=3')
    })
})
