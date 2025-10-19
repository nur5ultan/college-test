import styles from './Stats.module.css';

export default function Stats({ data = [] }) {
    return (
        <div className={styles.statsWrap}>
            <div className={styles.grid}>
                {data.map(item => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.iconCircle} aria-hidden>
                    {item.icon ? (
                        <img src={item.icon} alt="" className={styles.iconImg} />
                    ) : null}
                    </div>

                    <div className={styles.value}>{item.value}</div>
                    <div className={styles.label}>{item.label}</div>
                </div>
                ))}
            </div>
        </div>
    );
}
