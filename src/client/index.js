import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { getClientStore } from "../store";
import routes from "../Routes";

const store = getClientStore()

// 使用renderRoutes 渲染二级路由
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {renderRoutes(routes)}
                </div>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.render(<App />, document.getElementById('root'))