
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import React from 'react'
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";

// 使用renderRoutes 渲染二级路由
export const render = (store, routes, req, context) => {
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                </div>
            </StaticRouter>
        </Provider>
    ))

    // 通过 context拿到 界面中传入的参数判断是否有需要服务端渲染处理
    const cssStr = context.css.length ? context.css.join('\n') : ''

    // 服务端渲染SEO处理
    const helmet = Helmet.renderStatic();


    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <style>${cssStr}</style>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script>
                window.context = {
                    state: ${JSON.stringify(store.getState())}
                }
            </script>
            <script src='/index.js'></script>
        </html>
    `
}