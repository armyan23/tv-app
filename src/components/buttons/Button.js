import React from "react";
import Image from "next/image";

import styles from '@/components/buttons/Button.module.css'

const Button = ({name, icon, style, onClick}) => {
    return (
        <button onClick={onClick} style={{height: '50px', ...style,}} className={styles.buttonStyle}>
            {icon &&
                <Image
                    src={`/icons/${icon}`}
                    width={40}
                    height={40}
                    alt="Picture of the logo"
                />
            }
            {name}
        </button>

    )
}
export default Button