import React from "react";
import styles from "./NavBar.module.css";
import {Link} from "react-router";

export function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link to="/Profile"
                  className={`${styles.navLink}`}><i className="fa-solid fa-house"></i></Link>
            <Link to="/Chats"
                  className={styles.navLink}><i className="fa-solid fa-comments"></i></Link>
            <Link to="News"
                  className={styles.navLink}><i className="fa-solid fa-newspaper"></i></Link>
            <Link to="Music"
                  className={styles.navLink}><i className="fa-solid fa-headphones"></i></Link>
            <Link to="Settings"
                  className={styles.navLink}><i className="fa-solid fa-gear"></i></Link>
        </nav>
    )
}