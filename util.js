
/**
 * Returns a shallow copy of the object omitting keys from an array of paths.
 * A lightweight, compatible version of _.omit.
 *
 * Useful for components that need some props to be passed to children.
 *
 * @param  {Object} object - Original object
 * @param  {Array<String>} paths - Keys to omit from the object
 * @return {Object} - Shallow copy without specified keys
 */
export const omit = (object, paths) =>
    Object.keys(object)
        .reduce((result, key) => {
            if (!paths.includes(key)) {
                result[key] = object[key] // eslint-disable-line no-param-reassign
            }

            return result
        }, {})
