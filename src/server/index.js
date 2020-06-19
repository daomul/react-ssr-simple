import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from "react-router-config";
import { getStore } from "../store";
import { render } from './util'
import routes from '../Routes'

const app = express()
const port = 3000

app.use(express.static('public'))

// node 代理
app.use('/musicRankings', proxy('https://api.apiopen.top', {
    proxyReqPathResolver: function (req) {
        return '/musicRankings'
    }
}));

app.get('*', (req, res) => {

    const store = getStore()

    // 匹配多极路由，根据路由的路径、往store中加数据
    let matchedRoutes = matchRoutes(routes, req.path)
    let promises = []

    // 让 matchRoutes 里面所有的组件，对应的loadData 方法执行一次
    // 集中处理返回的 promise 
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve)
            })
            promises.push(promise)
        }
    })

    Promise.all(promises).then(() => {
        const context = {css: []}
        const html = render(store, routes, req, context)

        if(context.action === 'REPLACE') {
            // 301 重定向处理
            res.redirect(301, context.url)
        } else if (context.NOT_FOUND) {
            // 区分是不是 404 页面
            res.status(404)
            res.send(html)
        } else {
            res.send(html)
        }
    }).catch(() => {
        // res.send('数据加载错误')
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))