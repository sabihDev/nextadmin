"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname();
  const page = pathname.split("/").pop();
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };


  return <>
    <div className={styles.container}>
      <div className={styles.title}>{capitalize(page)}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  </>;
};

export default Navbar;
