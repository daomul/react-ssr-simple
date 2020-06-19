import React, { Component } from "react"

// 这个一个生成高阶组件的函数-生成器
// 返回一个组件
export default (DecoratedComponent, styles) => {

    // 返回一个高阶组件
    return class NewComponent extends Component {

        componentWillMount() {
            // 区分是服务端渲染
            if(this.props.staticContext) {
                // 处理服务端 样式渲染，注入到 staticContext
                this.props.staticContext.css.push(styles._getCss())
            }
        }

        render() {
            return <DecoratedComponent {...this.props} />
        }
    }
}