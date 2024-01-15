import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
    const change = 20;
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>John Doe</span>
                <span className={styles.number}>10.928</span>
                <span className={styles.detail}>
                    <span className={change > 0 ? styles.positive : styles.negative}>
                        {change}%
                    </span>{" "}
                    {change > 0 ? "more" : "less"} than previous week
                </span>
            </div>
        </div>
    );
};

export default Card;