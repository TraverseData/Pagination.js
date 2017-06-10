
<p align="center">
<img alt="Pagination" title="Pagination" src="http://i.imgur.com/pGpCZTh.png">
</p>

# Pagination

> JSX component for pagination, compatible with [React], [Preact] or [vhtml].

- __Zero Deps__
- __Unopionionated:__ Each DOM element is left up to you.
- __Compatible:__ Plays nicely with [Reactstrap], [React Router v4].
- __BYOF:__ (Bring Your Own Framework) Pure JSX, not tied to React.

## Installation

Yarn:

```
$ yarn install --save @traverse-data/pagination
```

npm:

```
$ npm install --save @traverse-data/pagination
```

Determine the build to import based on which framework(s) you use:

- `@traverse-data/pagination/react/Pagination`
- `@traverse-data/pagination/react/PaginationReactstrap`
- `@traverse-data/pagination/react/PaginationReactRouter`
- `@traverse-data/pagination/preact/Pagination`
- `@traverse-data/pagination/vhtml/Pagination`

Include with a module bundler like [rollup] or [webpack]:

```js
// using ES6 modules
import Pagination from '@traverse-data/pagination/react/Pagination'

// using CommonJS modules
var Pagination = require('@traverse-data/pagination/react/Pagination')
```

## Documentation

#### React/Preact/vhtml

At the lowest level, each DOM element is specified by functions passed as props to the component. The resulting output of each element is layed out below. Most functions receive a `page` parameter, which can be used to generate URLs. Be sure to include `key` props in the returned components, since each one will be a child of `<wrapper></wrapper>`.

If the current page (`<item active />`) should be rendered differently, a second parameter `active` is passed to the `item()` function.

```js
import Pagination from '@traverse-data/pagination/react/Pagination'

<Pagination
    page={6}
    perPage={10}
    count={115}
    context={1}
    previous={page => <Component key={'previous'} />}
    next={page => <Component key={'next'} />}
    item={(page, active) => <Component key={page} />}
    spacer={key => <Component key={key} />}
    wrapper={props => <Component>{props.children}</Component>}
/>
```

```
                        context={1}
                       +-----------+ <spacer />
                       |           | |
+------------------------------------v------------------+
| Previous | 1 | 2 |...| 5 | 6 | 7 |...| 10 | 11 | Next |
+^---------------^-----------^---------------------^----+
 |               |           |                     |
 <previous />    <item />    <item active />       <next />
```

__Props:__
 - `page`: _Number_. Current page.
 - `perPage`: _Number_. How many items are paginated per page.
 - `count`: _Number_. Total count of items (determines the last page).
 - `context`: _Number_. How many pages to show on both sides of the current page.
 - `previous`: _Function_. Component for the Previous button.
 - `next`: _Function_ => Component for the Next button.
 - `item`: _Function_ => Component for each Page button.
 - `spacer`: _Function_ => Component for each contracted space.
 - `wrapper`: _Function_ => Component to wrap all children in.

#### Reactstrap

If you're using [Reactstrap], there's already a nice [Pagination] component. Pagination plays nicely with it. URLs still have to be generated though with the `href()` function, which receives a page number and returns a string.

Additional props are passed through, so `className`, `size`, `tag`, etc. are supported.

```js
import Pagination from '@traverse-data/pagination/react/PaginationReactstrap'

<Pagination
    page={6}
    perPage={10}
    count={115}
    href={page => `/my-url?page=${page}`}
/>
```

__Props:__
 - `page`: _Number_. Current page.
 - `perPage`: _Number_. How many items are paginated per page.
 - `count`: _Number_. Total count of items (determines the last page).
 - `context`: _Number_. Default: 2. How many pages to show on both sides of the current page.
 - `href`: _Function_ => String to use for the href of each element.

#### React Router v4

If you're using [Reactstrap] AND [React Router v4], Pagination also plays nicely by automatically creating `<Link />`'s, which update the `page=` URL query parameter. Existing query parameters are respected.

```js
import Pagination from '@traverse-data/pagination/react/PaginationReactRouter'

<Pagination
    page={6}
    perPage={10}
    count={115}
/>
```

__Props:__
 - `page`: _Number_. Current page.
 - `perPage`: _Number_. How many items are paginated per page.
 - `count`: _Number_. Total count of items (determines the last page).
 - `context`: _Number_. Default: 2. How many pages to show on both sides of the current page.

## License

[MIT]

[React]: https://facebook.github.io/react/
[Preact]: http://preactjs.com/
[vhtml]: https://github.com/developit/vhtml
[Reactstrap]: http://reactstrap.github.io/
[React Router v4]: https://reacttraining.com/react-router/
[rollup]: http://rollupjs.org/
[webpack]: https://webpack.github.io/
[Pagination]: https://reactstrap.github.io/components/pagination/
[MIT]: http://choosealicense.com/licenses/mit/
