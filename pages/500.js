import styles from "../styles/error500.module.css";

export default function Custom500() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorMessage}>500 - Internal Server Error</h1>
      <p className={styles.errorDescription}>
        Oops! Something went wrong on our end. We're working on fixing it.
      </p>
      {/* You can add additional content or links here */}
    </div>
  );
}
