import React from "react";
import Header from "./components/Header/";
import { renderRoutes } from "react-router-config";

// 处理公用 Header 组件
// 
// 使用renderRoutes 渲染二级路由中的内容
const App = (props) => {
    return (
        <div>
            <Header staicContext={props.staicContext}></Header>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default App