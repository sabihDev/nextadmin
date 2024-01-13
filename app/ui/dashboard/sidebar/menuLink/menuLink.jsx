"use client"

import { usePathname } from 'next/navigation'
import styles from './menuLink.module.css'
import Link from 'next/link'

const MenuLink = ({ items }) => {
    const pathname = usePathname();

    return (
        <Link href={items.path} className={`${styles.container} ${pathname === items.path && styles.active }`}>
            {items.icon}
            {items.title}
        </Link>
    )
}
export default MenuLink