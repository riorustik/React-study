import React from "react";
import styles from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={styles.nav}>
            <div><a href="#"
                    className={styles.nav__link}>Profile</a></div>
            <div><a href="#"
                    className={styles.nav__link}>Messages</a></div>
            <div><a href="#"
                    className={styles.nav__link}>News</a></div>
            <div><a href="#"
                    className={styles.nav__link}>Music</a></div>
            <div><a href="#"
                    className={styles.nav__link}>Settings</a></div>
        </nav>
    )
}
