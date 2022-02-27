import styles from './comment.module.css';

export function Comment() {
  return (
    <article className={styles.comment}>
      <header className={styles.header}>
        <img src="/avatars/image-amyrobson.png" alt="amyrobson" />
        <h4 className={styles.username}>amyrobson</h4>
        <span>1 month ago</span>
      </header>
      <div className={styles.content}>
        <p>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
      <div className={styles.votesBtn}>
        <button className={styles.btn}>+</button>
        <span className={styles.votes}>12</span>
        <button className={styles.btn}>-</button>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>Reply</button>
      </div>
    </article>
  );
}
