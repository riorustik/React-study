import React from "react";
import styles from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={styles.nav}>
            <div><a href="/Profile"
                    className={styles.nav__link}>Profile</a></div>
            <div><a href="Messages"
                    className={styles.nav__link}>Messages</a></div>
            <div><a href="News"
                    className={styles.nav__link}>News</a></div>
            <div><a href="Music"
                    className={styles.nav__link}>Music</a></div>
            <div><a href="Settings"
                    className={styles.nav__link}>Settings</a></div>
        </nav>
    )
}
