import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import styles from "./style.css";
import WithStyle from "../../WithStyle";

class Header extends Component {

    render() {
        return (
            <div className={styles.test}>
                <Link to='/'>Header</Link>
                <br />
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default (WithStyle(Header, styles))