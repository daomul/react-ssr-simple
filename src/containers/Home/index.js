import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getHomeList } from "./store/actions";
import styles from "./style.css";
import WithStyle from "../../WithStyle";

class Home extends Component {

    getList() {
        return this.props.list.map(item => {
            return <div key={item.name}>{item.name}</div>
        })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>home 页面的标题---丰富标题逗你玩</title>
                    <meta name="description" content="home 页面的标题---丰富标题逗你玩"></meta>
                </Helmet>
                <div className={styles.test}>
                    <div>home {this.props.name}</div>
                    {this.getList()}
                    <button onClick={() => { alert(1) }}>
                        click
                </button>
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        // 客户端渲染处理
        if (!this.props.list.length) {
            this.props.getHomeList(false)
        }
    }
}

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        // 派发 action 获取数据
        dispatch(getHomeList())
    }
})
const ExportHome = connect(mapStateToProps, mapDispatchToProps)(WithStyle(Home, styles))

ExportHome.loadData = (store) => {
    // 这个函数，负责在服务端渲染之前，提前加载路由需要的数据
    return store.dispatch(getHomeList(true))
}

export default ExportHome