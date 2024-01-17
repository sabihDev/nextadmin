import styles from './pagination.module.css'

const Pagination = () => {

    return (
        <div className={styles.container}>
            <button disabled className={styles.btn}>Previous</button>
            <button className={styles.btn}>Next</button>
        </div>
    )
}

export default Pagination