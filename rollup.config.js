
import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'

const common = {
    moduleName: 'Pagination',
    entry: 'index.js',
    sourceMap: true,
    interop: false,
    format: 'umd',
    exports: 'default',
}

export default [Object.assign({}, common, {
    dest: 'react/Pagination.js',
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import React from 'react'" }),
        buble(),
    ],
    external: ['react', 'prop-types'],
    globals: {
        'react': 'React',
        'prop-types': 'PropTypes',
    },
}), Object.assign({}, common, {
    entry: 'reactstrap.js',
    dest: 'react/PaginationReactstrap.js',
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import React from 'react'" }),
        buble(),
    ],
    external: ['react', 'prop-types', 'reactstrap'],
    globals: {
        'react': 'React',
        'reactstrap': 'Reactstrap',
        'prop-types': 'PropTypes',
    },
}), Object.assign({}, common, {
    entry: 'reactrouter.js',
    dest: 'react/PaginationReactRouter.js',
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
    dest: 'preact/Pagination.js',
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import { h } from 'preact'" }),
        buble({ jsx: 'h' }),
    ],
    external: ['preact'],
    globals: { preact: 'preact' },
}), Object.assign({}, common, {
    dest: 'vhtml/Pagination.js',
    plugins: [
        replace({ '// ___JSX_IMPORT___': "import h from 'vhtml'" }),
        buble({ jsx: 'h' }),
    ],
    external: ['vhtml'],
    globals: { vhtml: 'h' },
})]
