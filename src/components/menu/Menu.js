'use client'
import React, {useState} from 'react';
import Image from "next/image";

import {menuItems} from "@/utils/menuItems";
import styles from '@/components/menu/menu.module.css'

export default function Menu({children}) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleSidebar = () => {
        setIsOpenMenu(prev => !prev)
    }

    return (
        <div className="d-flex">
            <div
                className={`${isOpenMenu ? styles.sidebarOpen : styles.sidebarClose} ${styles.sidebar}`}
                onMouseOver={toggleSidebar}
                onMouseOut={toggleSidebar}
            >
                <div>
                    <div className="d-flex gap-20 pl-23 mb-23 a-center cursor-p">
                        <Image
                            className="radius-50"
                            src='/icons/person.png'
                            width={40}
                            height={40}
                            alt="Picture of the logo"
                        />
                        <p className="fs-24 fw-500">Daniel</p>
                    </div>
                    <ul className="menu">
                        {menuItems.map((item) => (
                            <li key={item.key}>
                                <Image
                                    src={item.logo}
                                    width={18}
                                    height={18}
                                    alt="Picture of the logo"
                                />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {isOpenMenu &&
                    <div className="d-flex gap-10 direction-column ml-32">
                        <a href="#">LANGUAGE</a>
                        <a href="#">GET HELP</a>
                        <a href="#">EXIT</a>
                    </div>
                }
            </div>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    );
}
