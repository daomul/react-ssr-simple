import React, { Component, Fragment } from 'react'
import { Helmet } from "react-helmet";

class Login extends Component {

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>login 页面的标题---丰富标题逗你玩</title>
                    <meta name="description" content="login 页面的标题---丰富标题逗你玩"></meta>
                </Helmet>
                <div>
                    Login ！！
                    <button onClick={() => { alert(1) }}>
                        click login
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default Login