import styles from "../styles/error404.module.css";

export default function Custom404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorMessage}>404 - Page Not Found</h1>
      <p className={styles.errorDescription}>
        Oops! It seems that the page you are looking for does not exist.
      </p>
      {/* You can add additional content or links here */}
    </div>
  );
}
