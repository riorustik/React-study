import React from "react";
import styles from "./NavBar.module.css";
import {Link, NavLink} from "react-router";

export function NavBar() {
    // const links = document.querySelectorAll('.navLink'); //ИЗМЕНЕНИЕ АКТИВНОЙ ССЫЛКИ
    //
    // links.forEach(link => {
    //     link.addEventListener('click', (e) => {
    //         e.target.classList.add('.navLinkActive');
    //         console.log('11')
    //     })
    // })

    return (
        <nav className={styles.nav}>
            <div><Link to="/Profile"   //navlink obsolete
                    className={`${styles.navLink}`}>Profile</Link></div>
            <div><Link to="/Messages"
                    className={styles.navLink}>Messages</Link></div>
            <div><Link to="News"
                    className={styles.navLink}>News</Link></div>
            <div><Link to="Music"
                    className={styles.navLink}>Music</Link></div>
            <div><Link to="Settings"
                    className={styles.navLink}>Settings</Link></div>
        </nav>
    )
}
