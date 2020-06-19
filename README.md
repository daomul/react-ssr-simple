# react-ssr-simple
A native project with react、redux、webpack for ssr

## how to run ?

- install
```
yarn install
```

- run development
```
yarn run dev
```

- build server bunlde
```
yarn run dev:build:server
```

- build client index.js
```
yarn run dev:build:client
```

## Data dehydration and injection

To ensure the consistency of data rendering between the client and the server

### - injection

When rendering on the server side, the necessary Redux data on the page will be stored window.context inside


```JS
export const render = () => {
    return `
        <html>
            <head>
            </head>
            <body>
                <div id="root"></div>
            </body>
            <script>
                window.context = {
                    state: ${JSON.stringify(store.getState())}
                }
            </script>
        </html>
    `
}
```


### - dehydration

When the client renders, take out the data and use it directly

```js
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
```

## SEO optimization

Customize the title and description of each page

- sercer render

```JS
export const render = () => {
    const helmet = Helmet.renderStatic();
    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            </head>
            <body>
                <div id="root"></div>
            </body>
        </html>
    `
}
```

- each page handler

```js
render() {
        return (
            <Fragment>
                <Helmet>
                    <title>home page - just for fun</title>
                    <meta name="description" content="home page - just for fun"></meta>
                </Helmet>
            </Fragment>
        )
    }
```
