import React, { Component } from 'react'

class NotFound extends Component {
    componentWillMount() {
        // 处理如果是服务端渲染时，设置 404 标志
        let { staticContext } = this.props
        staticContext && (staticContext.NOT_FOUND = true)
    }

    render() {
        return <div>
            Not found pagee - 404
        </div>
    }
}

export default NotFound