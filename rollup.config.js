
import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'

const common = {
    moduleName: 'Pagination',
    entry: 'index.js',
    sourceMap: true,
    interop: false,
    exports: 'default',
}

export default [Object.assign({}, common, {
    targets: [
        { dest: 'react/Pagination.es.js', format: 'es' },
        { dest: 'react/Pagination.js', format: 'umd' },
    ],
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import React from 'react'" }),
        buble({
            objectAssign: 'Object.assign',
        }),
    ],
    external: ['react', 'prop-types'],
    globals: {
        'react': 'React',
        'prop-types': 'PropTypes',
    },
}), Object.assign({}, common, {
    entry: 'reactstrap.js',
    targets: [
        { dest: 'react/PaginationReactstrap.es.js', format: 'es' },
        { dest: 'react/PaginationReactstrap.js', format: 'umd' },
    ],
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import React from 'react'" }),
        buble({
            objectAssign: 'Object.assign',
        }),
    ],
    external: ['react', 'prop-types', 'reactstrap'],
    globals: {
        'react': 'React',
        'reactstrap': 'Reactstrap',
        'prop-types': 'PropTypes',
    },
}), Object.assign({}, common, {
    entry: 'reactrouter.js',
    targets: [
        { dest: 'react/PaginationReactRouter.es.js', format: 'es' },
        { dest: 'react/PaginationReactRouter.js', format: 'umd' },
    ],
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import React from 'react'" }),
        buble({
            objectAssign: 'Object.assign',
        }),
    ],
    external: ['react', 'prop-types', 'reactstrap', 'qs'],
    globals: {
        'react': 'React',
        'prop-types': 'PropTypes',
        'reactstrap': 'Reactstrap',
        'qs': 'qs',
    },
}), Object.assign({}, common, {
    targets: [
        { dest: 'preact/Pagination.es.js', format: 'es' },
        { dest: 'preact/Pagination.js', format: 'umd' },
    ],
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import { h } from 'preact'" }),
        buble({
            jsx: 'h',
            objectAssign: 'Object.assign',
        }),
    ],
    external: ['preact'],
    globals: { preact: 'preact' },
}), Object.assign({}, common, {
    targets: [
        { dest: 'vhtml/Pagination.es.js', format: 'es' },
        { dest: 'vhtml/Pagination.js', format: 'umd' },
    ],
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import h from 'vhtml'" }),
        buble({
            jsx: 'h',
            objectAssign: 'Object.assign',
        }),
    ],
    external: ['vhtml'],
    globals: { vhtml: 'h' },
})]
