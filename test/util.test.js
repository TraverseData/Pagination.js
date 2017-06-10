/* eslint-env jest */

import {
    omit,
} from '../util'

describe('omit', () => {
    test('excludes single key from an object', () => {
        expect(omit({ 'a': 1, 'b': 2 }, ['b'])).toEqual({ 'a': 1 })
    })

    test('excludes multiple keys from an object', () => {
        expect(omit({ 'a': 1, 'b': 2 }, ['a', 'b'])).toEqual({})
    })

    test('returns same object when no keys are omitted', () => {
        expect(omit({ 'a': 1, 'b': 2 }, [])).toEqual({ 'a': 1, 'b': 2 })
    })
})
